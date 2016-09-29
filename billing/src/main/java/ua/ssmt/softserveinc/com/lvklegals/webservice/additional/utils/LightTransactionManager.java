package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.ApplicationException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.database.DataSource;

import java.sql.Connection;
import java.sql.SQLException;


/**
 * Created by vostap on 19.01.2016.
 */
public abstract class LightTransactionManager {


    public LightTransactionManager(){
        _doOperation();
    }

    private void _doOperation()   {
        Connection connection = DataSource.getInstance().getConnection();
        try {
            doOperation(connection);
            connection.commit();
        }
        catch (Exception e){
            try {
                connection.rollback();
            } catch (SQLException e1) {
                throw new RuntimeException(e1);
            }
            e.printStackTrace();
            throw new ApplicationException(e.getMessage(),e);
        }
        finally{
            close(connection);
        }

    }

    protected abstract void doOperation(Connection connection);

    public void close(AutoCloseable closeable){
        if (closeable == null) return;
        try {
            closeable.close();
        } catch (Exception e) {

        }
    }




}










