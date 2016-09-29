package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.docvolumeconsumption;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.VolumeConsumption;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 19.01.2016.
 */
public class AllDocVolumeConsumptionOperation extends AbstractSelectOperation<VolumeConsumption> {
    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<VolumeConsumption> doOperation(Connection connection) {
        return new AllDocVolumeConsumptionQuery(null).execute(connection);
    }
}
