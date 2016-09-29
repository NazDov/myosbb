package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.elements;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ComboBoxItem;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchAgreementAutoCompleteQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by ykhav on 27.05.15.
 */
public class SearchDepAgreementOperation extends AbstractSelectOperation<ComboBoxItem> {
    private String query;

    public SearchDepAgreementOperation(String query){
        this.query = query;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<ComboBoxItem> doOperation(Connection connection)   {
        return new SearchAgreementAutoCompleteQuery(this.query).execute(connection);
    }
}

