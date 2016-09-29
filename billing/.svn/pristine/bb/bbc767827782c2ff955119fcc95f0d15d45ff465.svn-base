package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.addingconsumingvolume;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.AddingByConsumingVolume;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 30.12.2015.
 */
public class GetAllConsumeVolumeOperation extends AbstractSelectOperation<AddingByConsumingVolume> {
    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<AddingByConsumingVolume> doOperation(Connection connection) {
        return new GetAllConsumerVolumeQuery(null).execute(connection);
    }
}
