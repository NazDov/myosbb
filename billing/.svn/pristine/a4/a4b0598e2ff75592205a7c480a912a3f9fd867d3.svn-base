package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.saldodetails;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoDetails;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 18.01.2016.
 */
public class AllSaldoDetaillsesOperation extends AbstractSelectOperation<SaldoDetails>{
    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<SaldoDetails> doOperation(Connection connection) {
        return new GetAllSaldoDetailsQuery(null).execute(connection);
    }
}
