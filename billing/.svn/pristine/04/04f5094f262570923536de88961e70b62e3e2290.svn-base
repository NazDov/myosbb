package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;

import java.sql.Connection;

/**
 * Created by vostap on 25.08.2014.
 */
public interface Validator<T> {
    public boolean validateToInsert(Connection connection,T value)  ;
    public boolean validateToDelete(Connection connection,T value)  ;
    public boolean validateToUpdate(Connection connection,T value)  ;

    public static Validator NoValidator(){
        return new Validator() {
            @Override
            public boolean validateToInsert(Connection connection, Object value) {
                return false;
            }

            @Override
            public boolean validateToDelete(Connection connection, Object value) {
                return false;
            }

            @Override
            public boolean validateToUpdate(Connection connection, Object value) {
                return false;
            }
        };
    }


}
