package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.ApplicationException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.TransactionException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.datasource.DataSourceConnectionException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.datasource.DataSourceLoadingConfigurationException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.messages.Messages;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.database.DataSource;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyListOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.SelectOperation;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

/**
 * Created by vostap on 28.01.2016.
 */
public class FakeTransactionManager<T> {
    private Connection connection;
    /*public FakeTransactionManager(){
        connection = DataSource.getInstance().getConnection();
        connection = this.setTransactionIsolationLevel(connection);
        connection = this.setAutoCommit(connection);
    }*/

    public FakeTransactionManager(Connection connection){
        this.connection = DataSource.getInstance().getConnection();
        this.connection = this.setTransactionIsolationLevel(connection);
        this.connection = this.setAutoCommit(connection);
    }


    public List<T> doSelectOperation(SelectOperation<T> operation)   {
        List<T>  result = operation.doOperation(connection);
        return result;
    }



    public void doModifyOperation(AbstractModifyOperation operation, T value)   {
        operation.doOperation(connection, value);
    }

    public void runAndRollback(){
        try {
            this.connection.rollback();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }







    private Connection setAutoCommit(Connection connection) throws TransactionException {
        try {
            connection.setAutoCommit(false);
        } catch (SQLException e) {
            throw new TransactionException(Messages.getInstance().get("ERROR_SET_AUTOCOMMIT_TRANSACTION"),e);
        }
        return connection;
    }

    private Connection setTransactionIsolationLevel(Connection connection) throws TransactionException {
        try {
            connection.setTransactionIsolation(Connection.TRANSACTION_SERIALIZABLE);
            return connection;
        } catch (SQLException e) {
            throw new TransactionException(Messages.getInstance().get("ERROR_SET_ISOLATION_LEVEL_TRANSACTION"),e);
        }

    }

    public void close(AutoCloseable closeable){
        if (closeable == null) return;
        try {
            closeable.close();
        } catch (Exception e) {

        }
    }
}
