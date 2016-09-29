package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.invoices;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CalcInvoiceStockWithoutPermissionCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CalcInvoiceTeploenergoCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CalcInvoiceVolumeLKPCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.GetCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.system.LockServiceToInvoiceQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.system.UnLockServiceToInvoiceQuery;

import java.sql.Connection;
import java.sql.SQLException;

/**
 * Created by vostap on 07.05.2015.
 */
class DataBaseManagement {
    private TransactionControl transactionControl;

    public DataBaseManagement(){
        transactionControl = new TransactionControl();
    }

     void unlockDB(Connection connection) {
        new UnLockServiceToInvoiceQuery().execute(connection,null);
        try {
            connection.commit();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    void lockBD(Connection connection) {
        new LockServiceToInvoiceQuery().execute(connection,null);
        try {
            connection.commit();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    void clearInvoice(Connection connection)  {
        CalcInvoiceVolumeLKP calcInvoiceVolumeLKP = new CalcInvoiceVolumeLKP();
        calcInvoiceVolumeLKP.setDate(new GetCurrentPeriodQuery(null).execute(connection).get(0).getCurrentPeriod());
        new DeleteCalcInvoiceVolumeLKPQuery().execute(connection, calcInvoiceVolumeLKP);
        transactionControl.commitTransaction(connection);

        CalcInvoiceStockWithoutPermission calcInvoiceStockWithoutPermission = new CalcInvoiceStockWithoutPermission();
        calcInvoiceStockWithoutPermission.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0).getCurrentPeriod());
        new DeleteCalcInvoiceStockWithoutPermission().execute(connection,calcInvoiceStockWithoutPermission);
        transactionControl.commitTransaction(connection);

        CalcInvoice calcInvoice = new CalcInvoice();
        calcInvoice.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0).getCurrentPeriod());
        new DeleteCalcInvoiceInPeriodQuery().execute(connection,calcInvoice);
        transactionControl.commitTransaction(connection);

        CalcInvoiceRainsInvoice calcInvoiceRainsInvoice = new CalcInvoiceRainsInvoice();
        calcInvoiceRainsInvoice.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0).getCurrentPeriod());
        new DeleteCalcRainsInvoiceInPeriodQuery().execute(connection,calcInvoiceRainsInvoice);

        transactionControl.commitTransaction(connection);

        CalcInvoicePDV calcInvoicePDV = new CalcInvoicePDV();
        calcInvoicePDV.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0).getCurrentPeriod());
        new DeleteCalcInvoicePDVQuery();
        transactionControl.commitTransaction(connection);

        CalcInvoiceTeploenergo calcInvoiceTeploenergo = new CalcInvoiceTeploenergo();
        calcInvoiceTeploenergo.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0).getCurrentPeriod());
        new DeleteCalcInvoiceTeploQuery().execute(connection,calcInvoiceTeploenergo);
        transactionControl.commitTransaction(connection);

    }
}
