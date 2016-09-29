package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldodepartments.correctionofrealize;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CorrectionOfRealizeSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils.DateUtils;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.GetCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SumPaymentCondition;

import java.sql.Connection;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 10.03.2016.
 */
public class AllCorrectionOfRealizeSaldoDepartmentOperation extends AbstractSelectOperation<CorrectionOfRealizeSum> {
    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<CorrectionOfRealizeSum> doOperation(Connection connection) {
        Date period = new GetCurrentPeriodQuery(null).execute(connection).get(0);
        SumPaymentCondition sumPaymentCondition = new SumPaymentCondition();
        sumPaymentCondition.setDate1(DateUtils.getFirstDayOfMonth(period));
        sumPaymentCondition.setDate2(DateUtils.getLastDayOfMonth(period));
        return  new AllCorrectionOfRealizeSaldoDepartmentQuery(sumPaymentCondition).execute(connection);
    }
}
