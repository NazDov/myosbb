package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.addresses;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ComboBoxItem;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.GetAllStreetsByPatternQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 22.01.2015.
 */
public class GetAllStreetsByPatternOperation  extends AbstractSelectOperation<ComboBoxItem> {

    private String pattern;

    public GetAllStreetsByPatternOperation(String pattern){
        this.pattern = pattern;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<ComboBoxItem> doOperation(Connection connection)   {
        return new GetAllStreetsByPatternQuery(pattern).execute(connection);
    }
}
