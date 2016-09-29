package ua.ssmt.softserveinc.com.lvklegals.webservice.dataLoader;

import com.linuxense.javadbf.DBFException;
import com.linuxense.javadbf.DBFReader;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.Validator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.InputFactorValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyListOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.GetCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.invoices.query.GetLastInputFactorQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentInputCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchDepartmentInputQuery;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 19.04.2016.
 */
public class DataLoader {

    private List<DepartmentInput> departmentInputs;
    private Date currentPeriod;

    public static void main(String[] args) {
        DataLoader d = new DataLoader();
        d.insertFactors();
    }

    public DataLoader() {
        TransactionManager<DepartmentInput> tm = TransactionManager.getInstance();
        this.departmentInputs = tm.doSelectOperation(new AbstractSelectOperation<DepartmentInput>() {
            @Override
            public void checkPermission(Connection connection, User user) throws SecurityException {

            }

            @Override
            public List<DepartmentInput> doOperation(Connection connection) {
                return new SearchDepartmentInputQuery(new DepartmentInputCondition()).execute(connection);
            }
        });
        int i=0;


    }

    public void insertFactors(){
        System.out.println("Start loading factor");
        List<TmpFactors> factorses = parseDBF("C:\\tmp\\POKAZ01_16.dbf");
        TransactionManager<InputFactor> tm = TransactionManager.getInstance();
        List<InputFactor> inputFactors = tm.doSelectOperation(new AbstractSelectOperation<InputFactor>() {
            @Override
            public void checkPermission(Connection connection, User user) throws SecurityException {

            }

            @Override
            public List<InputFactor> doOperation(Connection connection) {
                List<InputFactor> res = new ArrayList<>();
                currentPeriod = new GetCurrentPeriodQuery(null).execute(connection).get(0);
                int cnt = 0;
                for (TmpFactors f:factorses){
                    try {
                        cnt++;
                       // System.out.println("parse "+cnt+" / "+factorses.size());
                        //if (f.getIdcounter().equals(1488L))
                            res.add(convert(f, connection));
                    }catch(Exception e){
                        System.out.println("cannot inset factor on counter "+f.getIdcounter());
                        e.printStackTrace();
                    }
                }
                return res;
            }
        });

        TransactionManager<List<InputFactor>> transactionManager = TransactionManager.getInstance();
        transactionManager.doModifyOperation(new AbstractModifyOperation<List<InputFactor>>(Validator.NoValidator()) {
            @Override
            protected long _doOperation(Connection connection, List<InputFactor> value) {
                CreateInputFactorPQuery query = new CreateInputFactorPQuery(connection);
                Date period = new GetCurrentPeriodQuery(null).execute(connection).get(0);

                for (InputFactor inputFactor:value){
                    inputFactor.setPeriod(period);
                    query.addToBatch(inputFactor);
                }
                return query.execute();
            }

            @Override
            public boolean validate(Connection connection, List<InputFactor> value) {
                return false;
            }

            @Override
            public void checkPermission(Connection connection, User user) throws SecurityException {

            }
        },inputFactors,new User(1));

        System.out.println("End loading factors");
    }


    private  InputFactor convert(TmpFactors f,Connection connection) {
        InputFactor inputFactor = new InputFactor();
        inputFactor.setCounter(new Counter(f.getIdcounter()));
        inputFactor.setOnDate(f.getOnDate());
        inputFactor.setEndFactor(f.getPokaz());
        inputFactor.setDoctype(-999);
        inputFactor.setWiringID(getWirringID(f));
        inputFactor.setFactorTypeID(3L);
        InputFactor lastInputFactor = getLastInputFactor(f,connection);
        inputFactor.setBeginFactor(lastInputFactor.getEndFactor());
        if (lastInputFactor.getPeriod().getTime() !=  currentPeriod.getTime())
            inputFactor.setFactorOnBeginMonth(lastInputFactor.getEndFactor());
        else

            inputFactor.setFactorOnBeginMonth(lastInputFactor.getFactorOnBeginMonth());
        new InputFactorValidator().validateToInsert(connection,inputFactor);
        return inputFactor;
    }

    private InputFactor getLastInputFactor(TmpFactors f,Connection connection) {
        Counter condition  = new Counter(f.getIdcounter());
        List<InputFactor> inputFactor = new GetLastInputFactorQuery(condition.getId()).execute(connection);
        if (inputFactor.isEmpty())
            throw new RuntimeException("cannot find factor on counter id "+condition.getId());
        return inputFactor.get(0);
    }

    private  Long getWirringID(TmpFactors f) {
        List<DepartmentInput> ds = new ArrayList<>();
        for (DepartmentInput di:this.departmentInputs){
            if (di.getCounter().getId().equals(f.getIdcounter()))
                ds.add(di);
        }
        if (ds.isEmpty()) throw new RuntimeException("Not exist departmentInput");
        return ds.get(0).getId();
    }


    private static DBFReader readFromDbf(String fileName)  {
        InputStream inputStream = null;
        try {
            inputStream = new FileInputStream(fileName);
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        DBFReader reader = null;
        try {
            reader = new DBFReader(inputStream);
        } catch (DBFException e) {
            throw new RuntimeException(e);
        }
        reader.setCharactersetName("866");
        return reader;
    }

    public List<TmpFactors> parseDBF(String fileName){
        DBFReader reader =  readFromDbf(fileName);
        List<TmpFactors> list = new ArrayList<>();
        Object [] rowObjects =null;
        try {

            while ((rowObjects = reader.nextRecord()) != null) {

                TmpFactors f = new TmpFactors();
                f.setIdcounter((((Double)rowObjects[0]).longValue()));
                f.setPokaz((((Double)rowObjects[1]).intValue()));
                f.setOnDate((Date)rowObjects[2]);
                list.add(f);

            }
        } catch (DBFException e) {
            throw new RuntimeException(e);
        }
        return list;
    }

}

class TmpFactors{
    private Long idcounter;
    private int pokaz;
    private Date onDate;

    public Long getIdcounter() {
        return idcounter;
    }

    public void setIdcounter(Long idcounter) {
        this.idcounter = idcounter;
    }

    public int getPokaz() {
        return pokaz;
    }

    public void setPokaz(int pokaz) {
        this.pokaz = pokaz;
    }

    public Date getOnDate() {
        return onDate;
    }

    public void setOnDate(Date onDate) {
        this.onDate = onDate;
    }

    @Override
    public String toString() {
        return "TmpFactors{" +
                "idcounter=" + idcounter +
                ", pokaz=" + pokaz +
                ", onDate=" + onDate +
                '}';
    }
}
