package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.messages.Messages;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


/**
 * Created by vostap on 04.09.2014.
 */
public abstract class AbstractSelectQuery<T,C> {
    protected C condition;
    public AbstractSelectQuery(C condition){
        this.condition = condition;
    }
    public List<T> execute(Connection connection)   {
        PreparedStatement st = null;
        ResultSet rs = null;
        List<T> res = new ArrayList<>();
        try {
           // ApplicationLogger.getLogger().debug("Execute query = ["+getSQLQuery().replace("'","\"")+"]");
            st = connection.prepareStatement(getSQLQuery());
            rs = st.executeQuery();
            while (rs.next()){
                res.add(this.parseResultSet(rs));
            }
        } catch (SQLException e) {
            throw new StorageException(Messages.getInstance().get("ERROR_CANNOT_CREATE_STATEMENT")+"{"+this.getSQLQuery()+"}",e);
        }
        finally {
            close(rs);
            close(st);
        }
        return res;
    }
    protected abstract T parseResultSet(ResultSet rs) throws SQLException;
    private  void close(AutoCloseable closeable) {
        if (closeable == null) return;
        try {
            closeable.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    protected String getDateAsString(Date date){
        java.sql.Date d = new java.sql.Date(date.getTime());
        return "'"+d.toString()+"'";
    }
    protected abstract String getSQLQuery();


}
