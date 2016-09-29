package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.coeficientareatypes;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.AreaType;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vasyl on 06.01.16.
 */
public class CoeficientAreaTypesOperation extends AbstractSelectOperation<AreaType> {
    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<AreaType> doOperation(Connection connection) {
        return new CoeficientAreaTypesQuery(null).execute(connection);
    }
}
