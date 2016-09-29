package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.invoices;

import java.sql.Connection;
import java.sql.SQLException;

/**
 * Created by vostap on 07.05.2015.
 */
class TransactionControl {
     void commitTransaction(Connection connection){
        try {
            connection.commit();
        } catch (SQLException e) {
            try {
                connection.rollback();
            } catch (SQLException e1) {
                throw new RuntimeException(e1);
            }
            throw new RuntimeException(e);
        }
    }

    void rollbackTransaction(Connection connection){
        try {
            connection.rollback();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }



}
