package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.messages.Messages;

import java.sql.*;

/**
 * Created by vostap on 27.08.2014.
 */
public abstract class AbstractModifyQuery<T> {

    public long execute(Connection connection,T value)   {
        PreparedStatement st = null;
        try {
            st = connection.prepareStatement(getSQLQuery(), Statement.RETURN_GENERATED_KEYS);
            fillPreparedStatement(st,value);
        } catch (SQLException e) {
            close(st);
            throw new StorageException(Messages.getInstance().get("ERROR_CANNOT_CREATE_STATEMENT"),e);
        }
        try {
            st.executeUpdate();
        } catch (SQLException e) {
            close(st);
            throw new StorageException(Messages.getInstance().get("ERROR_CANNOT_EXECUTE_QUERY")+"{"+this.getSQLQuery()+"} " +e.getMessage(),e);
        }
        long res = 0;
        try {
            res = getResultModifyQuery(st);
        } catch (SQLException e) {
            //todo
            throw new StorageException("Not implemented error",e);
        }
        finally {
            close(st);
        }
        return res;
    }

    protected abstract String getSQLQuery();

    protected long getInsertedID(PreparedStatement st) throws SQLException {
        try (ResultSet generatedKeys = st.getGeneratedKeys()) {
            if (generatedKeys.next()) {
                return generatedKeys.getLong(1);
            } else {
                throw new SQLException("Creating  failed, no ID obtained.");
            }
        }
    }

    protected abstract long getResultModifyQuery(PreparedStatement st) throws SQLException;

    protected abstract void fillPreparedStatement(PreparedStatement st, T value) throws SQLException;

    private  void close(AutoCloseable closeable) {
        if (closeable == null) return;
        try {
            closeable.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
