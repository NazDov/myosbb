package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.imports;

import com.linuxense.javadbf.DBFException;
import com.linuxense.javadbf.DBFReader;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.PaymentFromParus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.VolumeConsumptionFromDbf;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.ReferencesServiceImpl;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.inerfc.ReferencesService;

import java.io.*;
import java.sql.SQLException;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.*;

/**
 * @author vstoian
 * @version 1.0.0
 * @since 1.0.0
 */
public class ImportVolumeConsumptionFromDbf {
    private static ReferencesService service = new ReferencesServiceImpl();

    /**
     * Return records of dbf-file using path to file
     * @param path path to dbf-file
     * @return reader records of file
     */
    private static DBFReader readFromDbf(String path) {
        InputStream inputStream = null;
        try {
            inputStream = new FileInputStream(path);
        } catch (FileNotFoundException e) {
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

    /**
     * Return list of volume consumption beans format from dbf-file for next import to volume consumption
     * @param reader dbf-file for import records
     * @return list of volume consumption
     */
    public static List<VolumeConsumptionFromDbf> parseVolumeConsumptionFromDbf (DBFReader reader) {
        List<VolumeConsumptionFromDbf> list = new ArrayList<>();
        NumberFormat formatter = new DecimalFormat("###.#####");
        Object[] rowObjects;
        try {
            while ((rowObjects = reader.nextRecord()) != null) {
                VolumeConsumptionFromDbf volumeConsumptionFromDbf = new VolumeConsumptionFromDbf();
                String agreementNumber = String.valueOf(rowObjects[0]);
                volumeConsumptionFromDbf.setAgreementNumber(agreementNumber);
                Double volumeVv = Double.valueOf(String.valueOf(rowObjects[7]));
                volumeConsumptionFromDbf.setVolumeVv(volumeVv);
                Double volumeVp = Double.valueOf(String.valueOf(rowObjects[8]));
                volumeConsumptionFromDbf.setVolumeVp(volumeVp);
                list.add(volumeConsumptionFromDbf);
            }
        } catch (DBFException e) {
            throw new RuntimeException(e);
        }
        return list;
    }

    /**
     * Prepare record for create VolumeConsumption
     * @param volumeConsumptions    VolumeConsumption
     * @return VolumeConsumption
     */
    public static VolumeConsumption prepareVolumeConsumption (VolumeConsumptionFromDbf volumeConsumptions, User user) {
        VolumeConsumption volume = new VolumeConsumption();
        Agreement agreementDep = getAgreement(volumeConsumptions, user);
        if (agreementDep != null) {
            Department department = agreementDep.getDepartment();
            ContraAgent payer = department.getContraAgent();
            Agreement agreement = getContragentAgreement(payer, user);
            Input input = getInput(volumeConsumptions, user);

            if (payer.getId() != null) {
                volume.setVolumeVp(volumeConsumptions.getVolumeVp());
                volume.setVolumeVv(volumeConsumptions.getVolumeVv());
                Date period = service.getCurrentPeriod(user).getCurrentPeriod();
                volume.setPeriod(period);
                volume.setDate(service.getLastDayOfPeriod(period, user));
                volume.setContraAgent(payer);
                volume.setAgreement(agreement);
                volume.setDepartment(department);
                volume.setAgreementDep(agreementDep);
                volume.setInput(input);
                return volume;
            }
        }
        return volume;
    }

    /**
     * Get contragent for import volume consumption
     * @param volumeConsumptions volume consumption for import
     */
    public static ContraAgent getContragent (VolumeConsumptionFromDbf volumeConsumptions, User user)  {
        List<Agreement> agreement = new ArrayList<Agreement>();
        AgreementCondition cond = new AgreementCondition();
        cond.setAgreementNumber(volumeConsumptions.getAgreementNumber());
        agreement = service.searchAgreement(cond,user);
        //contragent = service.searchContraAgent(cond, user);
        if (agreement.size() > 0 ) {
            return agreement.get(0).getContraAgent();
        } else
            return null;
    }

    /**
     * Get department for import payment
     * @param volumeConsumptions Payment for import
     */
    public static Department getDepartment (VolumeConsumptionFromDbf volumeConsumptions, User user)   {
        List<Agreement> agreement = new ArrayList<Agreement>();
        AgreementCondition cond = new AgreementCondition();
        cond.setAgreementNumber(volumeConsumptions.getAgreementNumber());
        agreement = service.searchAgreement(cond,user);
        //contragent = service.searchContraAgent(cond, user);
        if (agreement.size() > 0 ) {
            return agreement.get(0).getDepartment();
        } else
            return null;
    }

    /**
     * Get agreement for import volume consumption
     * @param volumeConsumptions volume consumption for import
     */
    public static Agreement getAgreement (VolumeConsumptionFromDbf volumeConsumptions, User user)  {
        List<Agreement> agreement = new ArrayList<Agreement>();
        AgreementCondition cond = new AgreementCondition();
        cond.setAgreementNumber(volumeConsumptions.getAgreementNumber());
        agreement = service.searchAgreement(cond,user);
        if (agreement.size() > 0 ) {
            return agreement.get(0);
        } else
            return null;
    }

    /**
     * Get agreement for import volume consumption
     * @param contraAgent volume consumption for import
     */
    public static Agreement getContragentAgreement (ContraAgent contraAgent, User user)   {
        List<Agreement> agreement = new ArrayList<Agreement>();
        AgreementCondition cond = new AgreementCondition();
        cond.setContraAgentID(contraAgent.getId());
        agreement = service.searchAgreement(cond,user );
        if (agreement.size() > 0 ) {
            return agreement.get(0);
        } else
            return null;
    }
    /**
     * Get input for import volume consumption
     * @param volumeConsumptions volume consumption for import
     */
    public static Input getInput (VolumeConsumptionFromDbf volumeConsumptions, User user)   {
        List<Agreement> agreement = new ArrayList<Agreement>();
        Input input = new Input();
        AgreementCondition cond = new AgreementCondition();
        cond.setAgreementNumber(volumeConsumptions.getAgreementNumber());
        agreement = service.searchAgreement(cond, user);
        if (agreement.size() > 0 ) {
            InputCondition icond = new InputCondition();
            icond.setDepartment(agreement.get(0).getDepartment());
            List<Input> inputs = service.searchInput(icond, user);
            if (inputs.size() > 0) {
                input = inputs.get(0);
            }
        }
        return input;
    }

    /**
     * Prepare records for insert to table payments that not parsed (payer is absent in database)
     * @param paymentFromParus payments from DBF
     */
    public static UnparsedPayment prepareUnparsedPayment (PaymentFromParus paymentFromParus) throws DBFException, ValidateException, StorageException {
        UnparsedPayment unparsedPayment = new UnparsedPayment();
        unparsedPayment.setMfo(paymentFromParus.getMfo());
        unparsedPayment.setReason(paymentFromParus.getReason());
        unparsedPayment.setOwnerBankAccount(paymentFromParus.getOwnerBankAccount());
        unparsedPayment.setPayerBankAccount(paymentFromParus.getPayerBankAccount());
        unparsedPayment.setDatePayment(paymentFromParus.getDatePayment());
        unparsedPayment.setNumberDocPayment(paymentFromParus.getNumberDoc());
        unparsedPayment.setSumPayment(paymentFromParus.getSumPayment());
        unparsedPayment.setPayer(paymentFromParus.getEdrpo());
        return unparsedPayment;
    }


    public static boolean  importFromDbf(String pathToFile, User user)  {
        DBFReader reader =  readFromDbf(pathToFile);
        List<VolumeConsumptionFromDbf> list = parseVolumeConsumptionFromDbf(reader);
        //service.deleteUnparsedVolumeConsumption(null,user);
        for (VolumeConsumptionFromDbf volumeConsumptions: list){
            VolumeConsumption volume = prepareVolumeConsumption(volumeConsumptions, user);
            VolumeConsumptionCondition volumeCondition = new VolumeConsumptionCondition();
            volumeCondition.setPeriod(volume.getPeriod());
            volumeCondition.setDate(volume.getDate());
            volumeCondition.setDepartmentID(volume.getDepartment().getId());
            volumeCondition.setAgreement(volume.getAgreement());
            volumeCondition.setContraAgentID(volume.getContraAgent().getId());
            volumeCondition.setAgreementDep(volume.getAgreementDep());
            volumeCondition.setInputID(volume.getInput().getId());
            volumeCondition.setVolumeVv(volume.getVolumeVv());
            volumeCondition.setVolumeVp(volume.getVolumeVp());
            List<VolumeConsumption> volumeConditionCreated = service.searchVolumeConsumption(volumeCondition, user);
            if (volumeConditionCreated.size() == 0)
                service.createVolumeConsumption(volume,user);
        }
        return true;
    }

}
