package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.invoices;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CalcInvoiceCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchInvoiceQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 11.12.2014.
 */
public class GetCurrentInvoiceOperation extends AbstractSelectOperation<CalcInvoice> {

    private CalcInvoiceCondition condition;

    public GetCurrentInvoiceOperation(CalcInvoiceCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<CalcInvoice> doOperation(Connection connection)   {
        List<CalcInvoice> list = new SearchInvoiceQuery(this.condition).execute(connection);
        for (CalcInvoice c:list){
            c.setContraAgent(this.getFillers().getContraAgentByID(connection,c.getContraAgent().getId()));
            c.setDepartmentInput(this.getFillers().getClearDepartmentInput(connection,c.getDepartmentInput().getId()));
            c.setSubService(this.getFillers().getSubServiceByID(connection,c.getSubService().getId()));
        }
        return list;
    }
}
