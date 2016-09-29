package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.stockwithoutpermission;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.StockWithoutPermission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.StockWithoutPermissionCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchStockWithoutPermissionQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 11.11.2014.
 */
public class SearchStockWithoutPermission extends AbstractSelectOperation<StockWithoutPermission> {
    private StockWithoutPermissionCondition condition;

    public SearchStockWithoutPermission(StockWithoutPermissionCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<StockWithoutPermission> doOperation(Connection connection)   {
        List<StockWithoutPermission> list = new SearchStockWithoutPermissionQuery(condition).execute(connection);
        for (StockWithoutPermission doc:list){
           doc.setContraAgent(getFillers().getContraAgentByID(connection,doc.getContraAgent().getId()));
        }
        return list;
    }
}
