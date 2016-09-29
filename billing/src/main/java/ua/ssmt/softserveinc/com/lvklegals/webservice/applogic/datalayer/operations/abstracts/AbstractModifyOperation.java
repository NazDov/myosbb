package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.messages.Messages;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.Validator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.system.CheckForLockQuery;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

/**
 * Created by vostap on 25.08.2014.
 */
public abstract class AbstractModifyOperation<T> {

    protected Validator<T> validator;

    public AbstractModifyOperation(Validator<T> validator){
         this.validator = validator;
    }



    public final long doOperation(Connection connection, T value)  {
        this.validate(connection,value);
        boolean isLock = this.checkToLock(connection);
        if (isLock)
            throw new RuntimeException(Messages.getInstance().get("ERROR_DATABASE_IS_LOCK_DOING_INVOICES"));
        long res = this._doOperation(connection,value);
        return res;
    }

    private boolean checkToLock(Connection connection) {
        List<Boolean> list = new CheckForLockQuery(null).execute(connection);
        return list.get(0);
    }

    protected abstract long _doOperation(Connection connection, T value)  ;
    public abstract boolean validate(Connection connection,T value)  ;
    public abstract void checkPermission(Connection connection,User user) throws SecurityException;

    protected long getInsertedID(PreparedStatement st) throws SQLException {
        try (ResultSet generatedKeys = st.getGeneratedKeys()) {
            if (generatedKeys.next()) {
                return generatedKeys.getLong(1);
            } else {
                throw new SQLException("Creating  failed, no ID obtained.");
            }
        }
    }
    protected void commitOperation(Connection connection){
        try {
            connection.commit();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

}
