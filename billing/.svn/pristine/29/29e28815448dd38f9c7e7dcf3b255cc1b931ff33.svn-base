package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.tariff;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Tariff;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchTariffQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.TariffCondition;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 21.09.2014.
 */
public class SearchTariffOperation extends AbstractSelectOperation<Tariff> {
    private TariffCondition condition;

    public SearchTariffOperation(TariffCondition condition) {
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<Tariff> doOperation(Connection connection)   {
        return new SearchTariffQuery(this.condition).execute(connection);
    }
}
