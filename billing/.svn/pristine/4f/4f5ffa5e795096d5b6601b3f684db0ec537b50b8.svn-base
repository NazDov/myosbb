package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer;

/*import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;*/
//import org.slf4j.Logger;
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
 * Created by vostap on 23.08.2014.
 */
public class TransactionManager<T> {
    private TransactionManager(){}

    public static TransactionManager getInstance(){
        return new TransactionManager<>();
    }

        public List<T> doSelectOperation(SelectOperation<T> operation)   {
            //ApplicationLogger.getLogger().debug("Try to autorizate user");
            Connection connection = this.getConnectionFromDataSource();
            connection = this.setTransactionIsolationLevel(connection);
            connection = this.setAutoCommit(connection);
            List<T>  result = null;
            long start = System.currentTimeMillis();
            try {
                result = operation.doOperation(connection);
                connection.commit();
            } catch (SQLException | StorageException e) {
                connection = rollbackTransaction(connection);
                e.printStackTrace();
                throw new StorageException(e);
            }
            catch (Exception e){
                throw new ApplicationException(e.getMessage(),e);
            }
            finally{
                close(connection);
                long end = System.currentTimeMillis();
                //System.out.println("Time execute operation = "+operation.getClass().getSimpleName()+" is = "+(end-start));
            }
            return result;
        }

        public List<T> doSelectOperation(SelectOperation<T> operation,User user)   {
            //ApplicationLogger.getLogger().debug("Select operation = "+operation.getClass().getSimpleName());
            Connection connection = this.getConnectionFromDataSource();
            connection = this.setTransactionIsolationLevel(connection);
            connection = this.setAutoCommit(connection);
            long start = System.currentTimeMillis();
            List<T>  result = null;
            try {
                if (user == null) throw new SecurityException("USER IS NULL");
                operation.checkPermission(connection,user);
                result = operation.doOperation(connection);
                connection.commit();
            } catch (SQLException | StorageException e) {
                //ApplicationLogger.getLogger().error("cannot complete operation = " + operation.getClass().getSimpleName(), e);
                connection = rollbackTransaction(connection);
                e.printStackTrace();
                throw new StorageException(e);
            }
            catch (Exception e){
                //ApplicationLogger.getLogger().error("cannot complete operation = "+operation.getClass().getSimpleName(),e);
                throw new ApplicationException(e.getMessage(),e);
            }
            finally{
                close(connection);
                long end = System.currentTimeMillis();
            }
            return result;
        }

        public long doModifyOperation(AbstractModifyOperation operation,T value,User user)   {
            Connection connection = this.getConnectionFromDataSource();
            connection = this.setTransactionIsolationLevel(connection);
            connection = this.setAutoCommit(connection);
            long  result = -1;
            long start = System.currentTimeMillis();
            try {
                if (user == null) throw new SecurityException("USER IS NULL");
                operation.checkPermission(connection,user);
                result = operation.doOperation(connection, value);
                connection.commit();
                return result;
            } catch (SQLException | StorageException e ) {
                e.printStackTrace();
                connection = rollbackTransaction(connection);
                throw new StorageException(e);
            } catch (Exception e){
                connection = rollbackTransaction(connection);
                throw new ApplicationException(e);
            }
            finally{
                close(connection);
                long end = System.currentTimeMillis();
                //System.out.println("Time execute operation = "+operation.getClass().getSimpleName()+" is = "+(end-start));
            }

        }

        public void doModifyListOperation(AbstractModifyListOperation list){

        }

        private Connection rollbackTransaction(Connection connection){
            try {
                connection.rollback();
            } catch (SQLException e1) {

            }
            return connection;
        }

        private Connection getConnectionFromDataSource() throws DataSourceLoadingConfigurationException, DataSourceConnectionException {
            Connection connection = DataSource.getInstance().getConnection();
            return connection;
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
