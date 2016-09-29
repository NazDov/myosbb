package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.tariffcategoryforcalculateteplo;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CategoryOfTariff;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 19.01.2016.
 */
public class TariffCategoryForCalculateTeploOperation extends AbstractSelectOperation<CategoryOfTariff> {
    private Long id;

    public TariffCategoryForCalculateTeploOperation(Long id) {
        this.id = id;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<CategoryOfTariff> doOperation(Connection connection) {
        return new TariffCategoryForCalculateTeploQuery(id).execute(connection);
    }
}
