package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.addresses;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Address;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchAddressQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AddressCondition;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 15.09.2014.
 */
public class SearchAddressOperation extends AbstractSelectOperation<Address>{
    private AddressCondition condition;

    public SearchAddressOperation(AddressCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<Address> doOperation(Connection connection)   {
        return new SearchAddressQuery(this.condition).execute(connection);
    }
}
