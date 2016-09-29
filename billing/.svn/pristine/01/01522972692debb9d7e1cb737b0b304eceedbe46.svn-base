package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.agreements;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 25.12.2015.
 */
public class AllAgreementOperartion extends AbstractSelectOperation<Agreement> {

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<Agreement> doOperation(Connection connection) {
        return new GetAllAgreementQuery(null).execute(connection);
    }
}
