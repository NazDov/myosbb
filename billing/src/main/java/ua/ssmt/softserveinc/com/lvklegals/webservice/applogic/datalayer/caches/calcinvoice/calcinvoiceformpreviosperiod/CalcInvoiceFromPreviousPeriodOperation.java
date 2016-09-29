package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.calcinvoice.calcinvoiceformpreviosperiod;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.fillers.Fillers;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CalcInvoiceCondition;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 19.01.2016.
 */
public class CalcInvoiceFromPreviousPeriodOperation extends AbstractSelectOperation<CalcInvoice> {

    public CalcInvoiceFromPreviousPeriodOperation(CalcInvoiceCondition condition) {
        this.condition = condition;
    }

    private CalcInvoiceCondition condition;

    public void CalcInvoiceFromPreviousPeriodOperation(CalcInvoiceCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<CalcInvoice> doOperation(Connection connection) {
        List<CalcInvoice> list =  new CalcInvoiceFromPreviousPeriodQuery(condition).execute(connection);
        return list;
    }


}
