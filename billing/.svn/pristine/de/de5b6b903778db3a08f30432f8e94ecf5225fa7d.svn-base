package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.agreements;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.AgreementValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.*;

import java.sql.Connection;

/**
 * Created by vostap on 20.11.2014.
 */
public class CreateAgreementOperation extends AbstractModifyOperation<Agreement> {
    public CreateAgreementOperation() {
        super(new AgreementValidator());

    }

    @Override
    protected long _doOperation(Connection connection, Agreement value)   {
        Long agreementID = new CreateAgreementQuery().execute(connection,value);
        value.setId(agreementID);
        if (value.getDepartment() != null && value.getDepartment().getId() != null){
            createSaldoOnDepartment(connection,value);
        }else{
            createSaldo(connection,value);
        }
        return new CreateAgreementPropertyPenyaQuery().execute(connection,value);
    }

    private void createSaldoOnDepartment(Connection connection, Agreement value) {
        SaldoOnDepartment saldoOnDepartment = new SaldoOnDepartment();
        saldoOnDepartment.setContraAgent(value.getContraAgent());
        saldoOnDepartment.setDepartment(value.getDepartment());
        saldoOnDepartment.setAgreement(value);
        new CreateMainSaldoOnDepartmentQuery().execute(connection,saldoOnDepartment);
    }

    private void createSaldo(Connection connection, Agreement value) {
        _createSaldo(connection, value,new SaldoGroup(1L));
        _createSaldo(connection, value,new SaldoGroup(2L));
        _createSaldo(connection, value,new SaldoGroup(3L));
    }

    private void _createSaldo(Connection connection, Agreement value,SaldoGroup saldoGroup) {
        Saldo saldo = new Saldo();
        saldo.setContraAgent(value.getContraAgent());
        saldo.setAgreement(value);
        saldo.setSaldoGroup(saldoGroup);
        saldo.setSaldoOnBegin(0.0);
        saldo.setSaldoOnEnd(0.0);
        saldo.setSumPayment(0.0);
        saldo.setInvoice(0.0);
        long saldoID = new CreateMainSaldoQuery().execute(connection,saldo);
        SaldoDetails sd = new SaldoDetails();
        sd.setSaldoID(saldoID);
        sd.setSumCorrectionOfRealization(0.0);
        sd.setSumInputByPhysicalPerson(0.0);
        sd.setSumInvoiceByLkp(0.0);
        sd.setSumInvoiceByPenya(0.0);
        sd.setSumInvoiceByStockWithoutPermission(0.0);
        sd.setSumInvoiceRains(0.0);
        sd.setSumInvoiceWatterSupplyAndWatterOut(0.0);
        sd.setSumPaymentCommis(0.0);
        sd.setSumPaymentVVVPP33AndInnerProvod(0.0);
        sd.setSumPenyaVVVPAndInnerProvod(0.0);
        new CreateSaldoDetailsQuery().execute(connection,sd);
    }


    @Override
    public boolean validate(Connection connection, Agreement value)   {
       return validator.validateToInsert(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
