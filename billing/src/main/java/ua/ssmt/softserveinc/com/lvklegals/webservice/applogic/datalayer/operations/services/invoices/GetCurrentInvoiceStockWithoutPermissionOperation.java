package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.invoices;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CalcInvoiceStockWithoutPermission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CalcInvoiceCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CalcInvoiceStockWithoutPermissionCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchInvoiceStockWithOutPermissionQuery;

import java.sql.Connection;
import java.util.List;


/**
 * Created by vostap on 05.02.2015.
 */
public class GetCurrentInvoiceStockWithoutPermissionOperation extends AbstractSelectOperation<CalcInvoiceStockWithoutPermission> {

    private CalcInvoiceStockWithoutPermissionCondition condition;

    public GetCurrentInvoiceStockWithoutPermissionOperation(CalcInvoiceStockWithoutPermissionCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<CalcInvoiceStockWithoutPermission> doOperation(Connection connection)   {
        List<CalcInvoiceStockWithoutPermission> list = new SearchInvoiceStockWithOutPermissionQuery(this.condition).execute(connection);
        for (CalcInvoiceStockWithoutPermission c:list){
            c.setContraAgent(this.getFillers().getContraAgentByID(connection,c.getContraAgent().getId()));
        }
        return list;
    }
}
