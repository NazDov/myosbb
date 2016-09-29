package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Saldo;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoDetails;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by vostap on 13.01.2016.
 */
public class GetAllSaldoOperation extends AbstractSelectOperation<Saldo> {
    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<Saldo> doOperation(Connection connection) {
        List<Saldo> list = new GetAllSaldoQuery(null).execute(connection);

        return list;
    }


}
