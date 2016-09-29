package ua.ssmt.softserveinc.com.lvklegals.webservice.tests;

import com.linuxense.javadbf.DBFException;
import com.linuxense.javadbf.DBFReader;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.VolumeConsumption;
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
 *
 *
 * @author vstoian
 * @version 1.0.0
 * @since 1.0.0
 */
public class ImportVolumeConsumptionDbfTest {

    private static ReferencesService service = new ReferencesServiceImpl();

    private static User getUser() {
        User user = new User();
        user.setId(1L);
        user.setName("admin");
        user.setUserPassword("admin");
        return user;
    }

    /**
     * Return records of dbf-file using path to file
     *
     * @param path path to dbf-file
     * @return reader records of file
     */
    private static DBFReader readFromDbf(String path) throws FileNotFoundException, DBFException {
        InputStream inputStream = null;
        inputStream = new FileInputStream(path);
        DBFReader reader = new DBFReader(inputStream);
        reader.setCharactersetName("866");
        return reader;
    }

    /**
     * Return list of volume consumption beans format from dbf-file for next import to volume consumption
     *
     * @param reader dbf-file for import records
     * @return list of volume consumption
     */
    public static List<VolumeConsumptionFromDbf> parseVolumeConsumptionFromDbf(DBFReader reader) throws DBFException {
        List<VolumeConsumptionFromDbf> list = new ArrayList<>();
        NumberFormat formatter = new DecimalFormat("###.#####");
        Object[] rowObjects;
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
        return list;
    }

    /**
     * Prepare record for create VolumeConsumption
     *
     * @param volumeConsumptions VolumeConsumption
     * @return VolumeConsumption
     */
    public static VolumeConsumption prepareVolumeConsumption(VolumeConsumptionFromDbf volumeConsumptions) throws DBFException, ValidateException, StorageException {
        VolumeConsumption volume = new VolumeConsumption();
        Agreement agreementDep = getAgreement(volumeConsumptions);
        if (agreementDep != null) {
            Department department = agreementDep.getDepartment();
            ContraAgent payer = department.getContraAgent();
            Agreement agreement = getContragentAgreement(payer);
            Input input = getInput(volumeConsumptions);

            if (payer.getId() != null) {
                volume.setVolumeVp(volumeConsumptions.getVolumeVp());
                volume.setVolumeVv(volumeConsumptions.getVolumeVv());
                Date period = service.getCurrentPeriod(getUser()).getCurrentPeriod();
                volume.setPeriod(period);
                volume.setDate(service.getLastDayOfPeriod(period, getUser()));
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
     * Get agreement for import volume consumption
     * @param contraAgent volume consumption for import
     */
    public static Agreement getContragentAgreement (ContraAgent contraAgent)   {
        List<Agreement> agreement = new ArrayList<Agreement>();
        AgreementCondition cond = new AgreementCondition();
        cond.setContraAgentID(contraAgent.getId());
        agreement = service.searchAgreement(cond,getUser());
        if (agreement.size() > 0 ) {
            return agreement.get(0);
        } else
            return null;
    }

    /**
     * Get agreement for import volume consumption
     * @param volumeConsumptions volume consumption for import
     */
    public static Agreement getAgreement (VolumeConsumptionFromDbf volumeConsumptions) {
        List<Agreement> agreement = new ArrayList<Agreement>();
        AgreementCondition cond = new AgreementCondition();
        cond.setAgreementNumber(volumeConsumptions.getAgreementNumber());
        agreement = service.searchAgreement(cond,getUser());
        if (agreement.size() > 0 ) {
            return agreement.get(0);
        } else
            return null;
    }

    /**
     * Get input for import volume consumption
     * @param volumeConsumptions volume consumption for import
     */
    public static Input getInput (VolumeConsumptionFromDbf volumeConsumptions)   {
        List<Agreement> agreement = new ArrayList<Agreement>();
        Input input = new Input();
        AgreementCondition cond = new AgreementCondition();
        cond.setAgreementNumber(volumeConsumptions.getAgreementNumber());
        agreement = service.searchAgreement(cond,getUser());
        if (agreement.size() > 0 ) {
            InputCondition icond = new InputCondition();
            icond.setDepartment(agreement.get(0).getDepartment());
            List<Input> inputs = service.searchInput(icond, getUser());
            if (inputs.size() > 0) {
                input = inputs.get(0);
            }
        }
        return input;
    }

    public static void  main(String[] args) throws SQLException, IOException, ValidateException, StorageException {
        DBFReader reader =  readFromDbf("D:\\RACHBUD.dbf");
        List<VolumeConsumptionFromDbf> list = parseVolumeConsumptionFromDbf(reader);
        for (VolumeConsumptionFromDbf volumeConsumptions: list){
            VolumeConsumption volume = prepareVolumeConsumption(volumeConsumptions);
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
            List<VolumeConsumption> volumeConditionCreated = service.searchVolumeConsumption(volumeCondition, getUser());
            if (volumeConditionCreated.size() == 0)
                service.createVolumeConsumption(volume,getUser());
            }
    }
}
