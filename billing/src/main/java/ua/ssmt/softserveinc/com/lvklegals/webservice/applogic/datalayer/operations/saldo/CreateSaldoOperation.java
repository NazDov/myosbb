package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Saldo;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoDetails;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoGroup;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.Validator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AgreementCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateMainSaldoQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateSaldoDetailsQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchAgreementQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 12/3/2015.
 */
public class CreateSaldoOperation extends AbstractModifyOperation<Void> {
    public CreateSaldoOperation() {
        super(Validator.NoValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Void value) {
        List<Agreement> agreements = new SearchAgreementQuery(new AgreementCondition()).execute(connection);
        for (Agreement agreement:agreements){
            System.out.println("Create saldo = "+agreement.getId());
           createSaldo(connection,agreement);
        }
        return 0;
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
    public boolean validate(Connection connection, Void value) {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
