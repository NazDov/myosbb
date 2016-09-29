package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.inputdiameters;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.InputDiameter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputDiameterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchInputDiameterQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 17.09.2014.
 */
public class SearchInputDiametersOperation extends AbstractSelectOperation<InputDiameter> {
    private InputDiameterCondition condition;

    public SearchInputDiametersOperation(InputDiameterCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<InputDiameter> doOperation(Connection connection)   {
        return new SearchInputDiameterQuery(this.condition).execute(connection);
    }
}
