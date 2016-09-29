package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.messages.Messages;

import java.sql.*;
import java.util.List;

/**
 * Created by vostap on 12/4/2015.
 */
public abstract class AbstractModifyListQuery<T> {


    public long execute(Connection connection,List<T> list)   {
        if (list ==null || list.isEmpty()) return 0;
        PreparedStatement st = null;
        try {
            st = connection.prepareStatement(getSQLQuery(), Statement.RETURN_GENERATED_KEYS);
            for (T value:list) {
                fillPreparedStatement(st, value);
                st.addBatch();
            }
        } catch (SQLException e) {
            close(st);
            throw new StorageException(Messages.getInstance().get("ERROR_CANNOT_CREATE_STATEMENT"),e);
        }
        try {
            st.executeBatch();
        } catch (SQLException e) {
            close(st);
            throw new StorageException(Messages.getInstance().get("ERROR_CANNOT_EXECUTE_QUERY")+"{"+this.getSQLQuery()+"} " +e.getMessage(),e);
        }
        long res = 0;
        /*try {
            res = getResultModifyQuery(st);
        } catch (SQLException e) {
            //todo
            throw new StorageException("Not implemented error",e);
        }
        finally {
            close(st);
        }*/
        return res;
    }

    protected abstract String getSQLQuery();

    /*protected long getInsertedID(PreparedStatement st) throws SQLException {
        try (ResultSet generatedKeys = st.getGeneratedKeys()) {
            if (generatedKeys.next()) {
                return generatedKeys.getLong(1);
            } else {
                throw new SQLException("Creating  failed, no ID obtained.");
            }
        }
    }

    protected abstract long getResultModifyQuery(PreparedStatement st) throws SQLException;  */

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
