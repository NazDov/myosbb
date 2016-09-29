package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.inputfactors;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.invoices.query.GetLastInputFactorQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 12.02.2015.
 */
public class GetLastInputFactorOperation extends AbstractSelectOperation<InputFactor> {



    private Counter counter;

    public GetLastInputFactorOperation(Counter counter){
        this.counter = counter;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<InputFactor> doOperation(Connection connection)   {
        List<InputFactor> list = new GetLastInputFactorQuery(counter.getId()).execute(connection);
        return list;
    }
}
