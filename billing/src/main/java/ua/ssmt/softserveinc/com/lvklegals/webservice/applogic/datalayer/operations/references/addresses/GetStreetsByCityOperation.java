package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.addresses;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ComboBoxItem;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Municipal;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.GetStreetByCityQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 17.09.2014.
 */
public class GetStreetsByCityOperation extends AbstractSelectOperation<ComboBoxItem> {
    private Municipal municipal;
    private String pattern;

    public GetStreetsByCityOperation(Municipal municipal,String pattern){
        this.municipal = municipal;
        this.pattern = pattern;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<ComboBoxItem> doOperation(Connection connection)   {
        return new GetStreetByCityQuery(this.municipal,pattern).execute(connection);
    }
}
