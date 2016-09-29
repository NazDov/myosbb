package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period;


import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Period;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.GetCurrentPeriodQuery;


import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 08.09.2014.
 */
public class CurrentPeriodOperation extends AbstractSelectOperation<Period> {
    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<Period> doOperation(Connection connection)   {
        return new GetCurrentPeriodQuery(null).execute(connection);
    }
}
