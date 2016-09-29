package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.elements;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchBankQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ComboBoxItem;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 04.09.2014.
 */
public class SearchBankOperation extends AbstractSelectOperation<ComboBoxItem> {
    private String query;

    public SearchBankOperation(String query){
        this.query = query;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<ComboBoxItem> doOperation(Connection connection)   {
        return new SearchBankQuery(this.query).execute(connection);
    }
}
