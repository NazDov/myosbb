package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 23.08.2014.
 */
public interface SelectOperation<T> {
    public void checkPermission(Connection connection,User user) throws SecurityException;
    public List<T> doOperation(Connection connection)  ;
}
