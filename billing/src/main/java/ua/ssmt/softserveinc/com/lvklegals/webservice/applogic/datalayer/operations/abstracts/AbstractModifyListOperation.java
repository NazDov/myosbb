package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.messages.Messages;

import java.sql.*;
import java.util.List;

/**
 * Created by vostap on 12/4/2015.
 */
public abstract class AbstractModifyListOperation<T> {
    private List<AbstractModifyOperation<T>> list;

    public AbstractModifyListOperation(){

    }


}
