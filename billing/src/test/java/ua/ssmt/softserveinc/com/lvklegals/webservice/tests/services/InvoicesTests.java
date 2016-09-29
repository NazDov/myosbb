package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.services;

import org.junit.Ignore;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CalcInvoiceStockWithoutPermission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CalcInvoiceVolumeLKP;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Saldo;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CalcInvoiceCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CalcInvoiceStockWithoutPermissionCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CalcInvoiceVolumeLKPCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SaldoCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.tests.AbstractTest;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 29.09.2014.
 */
public class InvoicesTests extends AbstractTest {

    @Test
    @Ignore
    public void testCalculationInvoices() {
        long start = System.currentTimeMillis();
        //("*************Start invoice **************************");
        this.service.doInvoice(user);
        long end = System.currentTimeMillis();
        //("*************End invoice **************************");
        System.out.println("Time in minutes = " + (end - start) / (1000 * 60));
    }

    @Test
    @Ignore
    public void testGetAllInvoices() {
        CalcInvoiceCondition condition = new CalcInvoiceCondition();
        condition.setContraAgentID(515000L);
        condition.setPeriod(getCurrentPeriod());
        List<CalcInvoice> list = service.getAllInvoices(condition, this.user);
    }

    @Test
    @Ignore
    public void testGetAllInvoicesByLKP() {
        CalcInvoiceVolumeLKPCondition condition = new CalcInvoiceVolumeLKPCondition();
        condition.setContraAgentID(300211L);
        condition.setPeriod(getCurrentPeriod());
        List<CalcInvoiceVolumeLKP> list = service.getCalcInvoiceVolumeLKP(condition, this.user);
    }

    @Test
    @Ignore
    public void testGettAllInvoiceStockWithoutPermission() {
        CalcInvoiceStockWithoutPermissionCondition calcInvoiceStockWithoutPermissionCondition = new CalcInvoiceStockWithoutPermissionCondition();
        List<CalcInvoiceStockWithoutPermission> list = service.getAllStockWithoutPermissionInvoice(calcInvoiceStockWithoutPermissionCondition, user);
    }

    @Test
    @Ignore
    public void testSearchSaldo() {
        SaldoCondition condition = new SaldoCondition();
        condition.setContraAgentID(307096L);
        condition.setPeriod(getCurrentPeriod());
        List<Saldo> saldos = service.searchSaldo(condition, user);
    }

    private Date getCurrentPeriod() {
        Calendar c = Calendar.getInstance();
        c.set(Calendar.DAY_OF_MONTH, 1);
        c.set(Calendar.MONTH, 4);
        c.set(Calendar.YEAR, 2015);
        return c.getTime();
    }

}
