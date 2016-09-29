package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.messages.Messages;

import java.sql.*;

/**
 * Created by vostap on 02.04.2015.
 */
public abstract class AbstractModifyPrecompileQuery<T> {

    PreparedStatement st = null;

    public AbstractModifyPrecompileQuery(Connection connection){
        try {
            st = connection.prepareStatement(getSQLQuery());
        } catch (SQLException e) {
            close(st);
            throw new RuntimeException(e);
        }
    }

    public long execute()   {
         try {
            st.executeBatch();
        } catch (SQLException e) {
            close(st);
            throw new StorageException(Messages.getInstance().get("ERROR_CANNOT_EXECUTE_QUERY")+"{"+this.getSQLQuery()+"} " +e.getMessage(),e);
        }
       return 0;
    }

    protected abstract String getSQLQuery();

    public  void close() {
        if (st == null) return;
        try {
            st.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void addToBatch(T value) {
        try {
            this.fillPreparedStatement(st,value);
            st.addBatch();
        } catch (SQLException e) {
           throw new RuntimeException(e);
        }

    }

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


