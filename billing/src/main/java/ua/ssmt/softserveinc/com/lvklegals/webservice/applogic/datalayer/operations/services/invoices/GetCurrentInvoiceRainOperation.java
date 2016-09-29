package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.invoices;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CalcInvoiceRainsInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CalcInvoiceCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchInvoiceRainsQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 04.02.2015.
 */
public class GetCurrentInvoiceRainOperation extends AbstractSelectOperation<CalcInvoiceRainsInvoice> {

    private CalcInvoiceCondition condition;

    public  GetCurrentInvoiceRainOperation(CalcInvoiceCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<CalcInvoiceRainsInvoice> doOperation(Connection connection)   {
        List<CalcInvoiceRainsInvoice> list = new SearchInvoiceRainsQuery(this.condition).execute(connection);
        /*for (CalcInvoiceRainsInvoice c:list){
            c.setContraAgent(this.getFillers().getContraAgentByID(connection,c.getContraAgent().getId()));
            c.setDepartment(this.getFillers().getDepartmentByID(connection,c.getDepartment().getId()));
        }*/
        return list;
    }
}
