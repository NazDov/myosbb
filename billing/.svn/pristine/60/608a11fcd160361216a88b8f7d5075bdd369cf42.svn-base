package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.payment;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils.DateUtils;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.GetCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SumPaymentCondition;

import java.sql.Connection;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 14.01.2016.
 */
public class AllPaymentOperation extends AbstractSelectOperation<SaldoInvoiceSum> {



    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<SaldoInvoiceSum> doOperation(Connection connection) {
        Date period = new GetCurrentPeriodQuery(null).execute(connection).get(0);
        SumPaymentCondition sumPaymentCondition = new SumPaymentCondition();
        sumPaymentCondition.setDate1(DateUtils.getFirstDayOfMonth(period));
        sumPaymentCondition.setDate2(DateUtils.getLastDayOfMonth(period));
        return new AllPaymentQuery(sumPaymentCondition).execute(connection);
    }
}
