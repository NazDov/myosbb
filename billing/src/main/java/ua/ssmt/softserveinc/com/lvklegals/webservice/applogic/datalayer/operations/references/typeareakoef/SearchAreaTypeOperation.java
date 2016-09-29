package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.typeareakoef;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.TypeAreaKoef;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.TypeAreaKoefConditions;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchAreaTypeKoefficientQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by ykhav on 09.02.15.
 */
public class SearchAreaTypeOperation extends AbstractSelectOperation<TypeAreaKoef> {
    private TypeAreaKoefConditions condition;

    public SearchAreaTypeOperation(TypeAreaKoefConditions condition) {
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<TypeAreaKoef> doOperation(Connection connection)   {
        return new SearchAreaTypeKoefficientQuery(this.condition).execute(connection);
    }
}