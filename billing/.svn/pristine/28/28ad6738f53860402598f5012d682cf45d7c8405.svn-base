package ua.ssmt.softserveinc.com.lvklegals.webservice.tests;

import org.junit.Ignore;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Saldo;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoDepartment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.invoices.ResultCollector;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.database.DataSource;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.CreateSaldoOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateAllSaldoByDepartment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoAllContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoByContraAgent;


import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

/**
 * Created by vostap on 11/28/2015.
 */
public class SaldoTest extends AbstractTest {
    @Test
    @Ignore
    public void testUpdateSaldoOnContraAgent() throws SQLException {
        ContraAgent contraAgent = new ContraAgent();
        contraAgent.setId(100337L);
        /*
        732504
732505
         */
        Connection connection = DataSource.getInstance().getConnection();
        new RecalculateSaldoByContraAgent().recalculateSaldo(connection, contraAgent);
        connection.commit();
    }

    @Test
    @Ignore
    public void testRecalculateSaldoAllContraAgent() {
        //service.doInvoice(getUser());
    }

    @Test
    @Ignore
    public void testCreateSaldo() {
        TransactionManager<Void> transactionManager = TransactionManager.getInstance();
        transactionManager.doModifyOperation(new CreateSaldoOperation(), null, user);
    }

    @Test
    @Ignore
    public void testAllContraAgentSaldo() {
        List<Saldo> list = new RecalculateSaldoAllContraAgent().recalculatoSaldoAllContraAgent();
        new ResultCollector().updateSaldo(list);
    }

    @Test
    @Ignore
    public void testAllContraAgentSaldoByDepartment() {
        List<SaldoDepartment> list = new RecalculateAllSaldoByDepartment().recalculateAllSaldoOnDepartment();
        System.out.println("end calculate saldo department");
        new ResultCollector().updateSaldoByDepartment(list);
    }
}
