package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.volumeconsumption;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.DocLkpFromDBFTransfer;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.VolumeConsumption;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.Validator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.GetCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AgreementCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentInputCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateVolumeConsumptionQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.*;

import java.sql.Connection;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 28.05.2015.
 */
public class CreateDocLKPOperation extends AbstractModifyOperation<DocLkpFromDBFTransfer> {

    public CreateDocLKPOperation() {
        super(Validator.NoValidator());
    }

    /*private void fillDepartmentInput(Connection connection, DocLkpFromDBFTransfer value) {
        DepartmentInputCondition condition = new DepartmentInputCondition();
        condition.setDepartmentID(value..getId());
        condition.setInputID((value.getInput().getId()));
        DepartmentInput di = new SearchDepartmentInputQuery(condition).execute(connection).get(0);
        value.setDepartmentInput(di);

    }*/


    @Override
    protected long _doOperation(Connection connection, DocLkpFromDBFTransfer value) {
        //fillDepartmentInput(connection,value);
        AgreementCondition condition = new AgreementCondition();
        condition.setAgreementNumber(value.getUGODA());
        List<Agreement> agreements = new SearchAgreementQuery(condition).execute(connection);
        if (agreements.isEmpty()) throw new RuntimeException("Agreemnt not found. Agreement = "+value.getUGODA());
        Agreement agreement = agreements.get(0);
        if (agreement.getDepartment().getId() == null) throw new RuntimeException("DepartmentID in agreemnt is null ");
        //service.createVolumeConsumption
        VolumeConsumption volumeConsumption = new VolumeConsumption();
        volumeConsumption.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0));
        // volumeConsumption.setAgreement(agreement);
        volumeConsumption.setContraAgent(agreement.getContraAgent());
        volumeConsumption.setDepartment(agreement.getDepartment());

        DepartmentInputCondition departmentInputCondition = new DepartmentInputCondition();
        departmentInputCondition.setDepartmentID(agreement.getDepartment().getId());
        List<DepartmentInput> di = new SearchClearDepartmentInputQuery(departmentInputCondition).execute(connection);
        if (di.size()>1) {
            putDocColdInput(connection, value);
            putDocHotInput(connection, value);
            return 1;
        }else{
            VolumeConsumption volumeConsumption1 = prepareVolumeConsumplionColdWatterInput(value, connection);
            new CreateVolumeConsumptionQuery().execute(connection,volumeConsumption1);
        }
            return 0;

        }




    @Override
    public boolean validate(Connection connection, DocLkpFromDBFTransfer value) {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    private VolumeConsumption prepareVolumeConsumplionHotWatterInput(DocLkpFromDBFTransfer value,Connection connection) {
        AgreementCondition condition = new AgreementCondition();
        condition.setAgreementNumber(value.getUGODA());
        List<Agreement> agreements = new SearchAgreementQuery(condition).execute(connection);
        if (agreements.isEmpty()) throw new RuntimeException("Agreemnt not found. Agreement = "+value.getUGODA());
        Agreement agreement = agreements.get(0);
        if (agreement.getDepartment().getId() == null) throw new RuntimeException("DepartmentID in agreemnt is null ");
        //service.createVolumeConsumption
        VolumeConsumption volumeConsumption = new VolumeConsumption();
        volumeConsumption.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0));
        // volumeConsumption.setAgreement(agreement);
        volumeConsumption.setContraAgent(agreement.getContraAgent());
        volumeConsumption.setDepartment(agreement.getDepartment());

        DepartmentInputCondition departmentInputCondition = new DepartmentInputCondition();
        departmentInputCondition.setDepartmentID(agreement.getDepartment().getId());
        DepartmentInput di = new SearchClearDepartmentInputHotWatterInputQuery(departmentInputCondition).execute(connection).get(0);
        volumeConsumption.setInput(di.getInput());
        volumeConsumption.setAgreementDep(agreement);
        volumeConsumption.setVolumeVp(0.00);
        volumeConsumption.setVolumeVv(0.00);
        volumeConsumption.setVolumeVPHotWatter(value.getM3_ZAGVVV() );
        volumeConsumption.setDate(new Date());
        AgreementCondition agreementCondition = new AgreementCondition();
        agreementCondition.setContraAgentID(agreement.getContraAgent().getId());
        agreementCondition.setStatus(true);
        List<Agreement> contraAgentAgreements = new SearchAgreementQuery(agreementCondition).execute(connection);
        if (contraAgentAgreements.isEmpty())
            throw new RuntimeException("cannot find active agreement with contraagent = ");
        volumeConsumption.setAgreement(contraAgentAgreements.get(0));
        return  volumeConsumption;
    }

    private VolumeConsumption prepareVolumeConsumplionColdWatterInput(DocLkpFromDBFTransfer value,Connection connection) {
        AgreementCondition condition = new AgreementCondition();
        condition.setAgreementNumber(value.getUGODA());
        List<Agreement> agreements = new SearchAgreementQuery(condition).execute(connection);
        if (agreements.isEmpty()) throw new RuntimeException("Agreemnt not found. Agreement = "+value.getUGODA());
        Agreement agreement = agreements.get(0);
        if (agreement.getDepartment().getId() == null) throw new RuntimeException("DepartmentID in agreemnt is null ");
        //service.createVolumeConsumption
        VolumeConsumption volumeConsumption = new VolumeConsumption();
        volumeConsumption.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0));
        // volumeConsumption.setAgreement(agreement);
        volumeConsumption.setContraAgent(agreement.getContraAgent());
        volumeConsumption.setDepartment(agreement.getDepartment());

        DepartmentInputCondition departmentInputCondition = new DepartmentInputCondition();
        departmentInputCondition.setDepartmentID(agreement.getDepartment().getId());
        DepartmentInput di = new SearchClearDepartmentInputColdWatterInputQuery(departmentInputCondition).execute(connection).get(0);

        volumeConsumption.setInput(di.getInput());
        volumeConsumption.setAgreementDep(agreement);
        volumeConsumption.setVolumeVp(value.getM3_ZAGLVP());
        volumeConsumption.setVolumeVv(value.getM3_ZAGLVV());
        volumeConsumption.setVolumeVPHotWatter(0.00 );
        volumeConsumption.setDate(new Date());
        AgreementCondition agreementCondition = new AgreementCondition();
        agreementCondition.setContraAgentID(agreement.getContraAgent().getId());
        agreementCondition.setStatus(true);
        List<Agreement> contraAgentAgreements = new SearchAgreementQuery(agreementCondition).execute(connection);
        if (contraAgentAgreements.isEmpty())
            throw new RuntimeException("cannot find active agreement with contraagent = ");
        volumeConsumption.setAgreement(contraAgentAgreements.get(0));
        return  volumeConsumption;
    }

    private void putDocHotInput(Connection connection, DocLkpFromDBFTransfer docLkpFromDBFTransfer) {
        VolumeConsumption p = this.prepareVolumeConsumplionHotWatterInput(docLkpFromDBFTransfer, connection);
        new CreateVolumeConsumptionQuery().execute(connection,p);
    }

    private void putDocColdInput(Connection connection, DocLkpFromDBFTransfer docLkpFromDBFTransfer) {
        VolumeConsumption p = this.prepareVolumeConsumplionColdWatterInput(docLkpFromDBFTransfer, connection);
        new CreateVolumeConsumptionQuery().execute(connection,p);
        }
    }


