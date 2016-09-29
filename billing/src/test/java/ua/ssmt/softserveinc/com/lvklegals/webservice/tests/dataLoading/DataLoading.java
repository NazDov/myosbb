package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.dataLoading;

import org.junit.Ignore;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.OperationType;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.ReferencesServiceImpl;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.database.DataSource;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.UnregisterOfCounterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.inerfc.ReferencesService;

import java.sql.*;
import java.util.List;

/**
 * Created by vostap on 19.05.2015.
 */

public class DataLoading {

    private ReferencesService referencesService = new ReferencesServiceImpl();
    private Connection connection = DataSource.getInstance().getConnection();
    {
        try {
            connection.setTransactionIsolation(Connection.TRANSACTION_SERIALIZABLE);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @Test
    @Ignore
    public void deleteUnregisterOfCounter(){
        /*List<UnregisterOfCounter> list = referencesService.searchUnregisterCounterOperation(new UnregisterOfCounterCondition(),new User());
        for (UnregisterOfCounter doc:list){
            referencesService.deleteUnregisterOfCounterDocument(doc,new User());
        }*/
    }


    @Test
    @Ignore
    public void _dataLoading() throws SQLException {
        /*connection.setTransactionIsolation(Connection.TRANSACTION_SERIALIZABLE);
        String sql = "SELECT [IDDEPARTAM] " +
                "      ,[ONDATE] " +
                "      ,[IDCOUNTERS] " +
                "      ,[POKAZ] " +
                "      ,[REASONID] " +
                "      ,[INPUTID] " +
                "      ,[MARSH] " +
                "      ,[KONTO] " +
                "      ,[MARSHKO] " +
                "  FROM [tmpUnregisterCounter]";
        PreparedStatement st = connection.prepareStatement(sql);
        ResultSet rs = st.executeQuery();
        int k=1;
        while (rs.next()){
            //(k);
            UnregisterOfCounter unregisterOfCounter = new UnregisterOfCounter();
            unregisterOfCounter.setCounter(new Counter(rs.getLong("IDCOUNTERS")));
            unregisterOfCounter.setDepartment(new Department(rs.getLong("IDDEPARTAM")));
            unregisterOfCounter.setCalculateInPeriodUnregisterCounter(false);
            unregisterOfCounter.setDateActToUnPlomb(rs.getDate("OnDate"));
            unregisterOfCounter.setContraAgent(this.getContraAgentByCounter(rs));
            unregisterOfCounter.setDateToReturnCounter(null);
            unregisterOfCounter.setFactorByOnUnregister(rs.getInt("POKAZ"));
            unregisterOfCounter.setNumberAct("-1");
            unregisterOfCounter.setOperationType(new OperationType(3L));
            unregisterOfCounter.setPeriodByMiddleCalculationOnMonth1(null);
            unregisterOfCounter.setPeriodByMiddleCalculationOnMonth2(null);
            unregisterOfCounter.setDepartmentInput(this.getWirringFromResultSet(rs));
            unregisterOfCounter.setInput(new Input(rs.getLong("INPUTID")));
            try {
                referencesService.createUnregisterOfCounterDocument(unregisterOfCounter, new User());
            }catch(Exception e){
                e.printStackTrace();
                //("CounterID = "+rs.getLong("IDCOUNTERS"));
            }
            k++;
        }
        rs.close();*/
    }

    private DepartmentInput getWirringFromResultSet(ResultSet rs) throws SQLException {

        DepartmentInput res  = new DepartmentInput();
        String sql = "SELECT  *  from [RegInfDepartsInputs] where DepartmentID =  "+rs.getLong("IDDEPARTAM") +" and InputID = "+rs.getLong("INPUTID")+" order by dateStart desc";
        PreparedStatement st = connection.prepareStatement(sql);
        ResultSet _rs = st.executeQuery();
        while (_rs.next()){
            res.setId(_rs.getLong("ID"));
             break;
        }
        _rs.close();
        st.close();
        return res;

    }

    private ContraAgent getContraAgentByCounter(ResultSet rs) throws SQLException {
        ContraAgent contraAgent = new ContraAgent();
        String sql = "SELECT  *  from RefDepartaments where id = "+rs.getLong("IDDEPARTAM");
        PreparedStatement st = connection.prepareStatement(sql);
        ResultSet _rs = st.executeQuery();
        while (_rs.next()){
            contraAgent.setId(_rs.getLong("ConraAgentID"));
            break;
        }
        _rs.close();
        st.close();
        return contraAgent;
    }

}
