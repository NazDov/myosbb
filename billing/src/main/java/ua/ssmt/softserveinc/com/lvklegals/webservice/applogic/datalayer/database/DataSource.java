package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.database;

/**
 * Created by vostap on 23.08.2014.
 */
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.Properties;


import org.apache.commons.dbcp.BasicDataSource;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.datasource.DataSourceConnectionException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.datasource.DataSourceLoadingConfigurationException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.messages.Messages;

public class DataSource {

    private static final String DRIVER_CLASS_NAME_PROPERTY = "driverClassName";
    public static final String USER_NAME_PROPERTY = "username";
    public static final String USER_PASSWORD_PROPERTY = "userpassword";
    public static final String URL_PROPERTY = "url";

    private static DataSource   datasource;
    protected BasicDataSource ds;
    private BasicDataSource reportDS;
    protected Properties connectionProperties;

    protected DataSource() throws DataSourceLoadingConfigurationException {
        try {

            this.loadingPropertiesFromFile();
        }
        catch (IOException e){
            throw new DataSourceLoadingConfigurationException(Messages.getInstance().get("ERROR_CANNOT_LOADING_CONNECTION_CONFIGURATION"), e);
        }
        ds = new BasicDataSource();
        ds.setDriverClassName(this.connectionProperties.getProperty(DRIVER_CLASS_NAME_PROPERTY));
        ds.setUsername(this.connectionProperties.getProperty(USER_NAME_PROPERTY));
        ds.setPassword(this.connectionProperties.getProperty(USER_PASSWORD_PROPERTY));
        ds.setUrl(this.connectionProperties.getProperty(URL_PROPERTY));
        ds.setDefaultAutoCommit(false);
        ds.setDefaultTransactionIsolation(Connection.TRANSACTION_SERIALIZABLE);
        // the settings below are optional -- dbcp can work with defaults
        ds.setMinIdle(50);
        ds.setMaxIdle(1000000);
        ds.setMaxOpenPreparedStatements(180);
        ds.setMaxActive(50);
    }


    protected void loadingPropertiesFromFile() throws IOException {
        this.connectionProperties = new Properties();
        InputStream is = null;
        try {
            ClassLoader classloader = Thread.currentThread().getContextClassLoader();
            is = classloader.getResourceAsStream("connection.properties");
            this.connectionProperties.load(is);
        }
        finally {
           close(is);
        }

    }

    private void close(InputStream is) {
        if (is == null) return;
        try {
            is.close();
        } catch (IOException e) {
            //nothing
        }
    }

    public static synchronized DataSource getInstance() throws DataSourceLoadingConfigurationException {
        if (datasource == null) {
            datasource = new DataSource();
            return datasource;
        } else {
            return datasource;
        }
    }


    public Connection getConnection() throws DataSourceConnectionException {
        Connection connection = null;
        try {
            connection = ds.getConnection();
            //connection.setTransactionIsolation(Connection.TRANSACTION_SERIALIZABLE);
            //connection.setAutoCommit(false);
           // System.out.println("get Connection " +" "+connection);
        } catch (SQLException e) {
            throw new DataSourceConnectionException(Messages.getInstance().get("ERROR_CANNOT_GET_CONNECTION"),e);
        }

        return connection;
    }


}