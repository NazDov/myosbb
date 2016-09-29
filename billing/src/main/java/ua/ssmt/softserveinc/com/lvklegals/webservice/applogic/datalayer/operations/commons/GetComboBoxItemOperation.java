package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.commons;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.ComboBoxItemQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ComboBoxItem;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 04.09.2014.
 */
public class GetComboBoxItemOperation extends AbstractSelectOperation<ComboBoxItem> {
    private String tableName;
    private String qry;

    public GetComboBoxItemOperation(String tableName,String qry){
        this.tableName = tableName;
        this.qry = qry;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<ComboBoxItem> doOperation(Connection connection)   {
        return new ComboBoxItemQuery(this.qry,tableName).execute(connection);
    }
}
