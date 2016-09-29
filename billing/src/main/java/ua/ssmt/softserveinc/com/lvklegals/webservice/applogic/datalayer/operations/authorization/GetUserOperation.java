package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.authorization;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.GetUserQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 17.09.2014.
 */
public class GetUserOperation extends AbstractSelectOperation<User> {
    private String userName;
    private String userPassword;

    public GetUserOperation(String userName, String userPassword){
        this.userName = userName;
        this.userPassword = userPassword;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<User> doOperation(Connection connection)   {
        return new GetUserQuery(this.userName,userPassword).execute(connection);
    }
}
