package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled;

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
 * Created by vostap on 02.04.2015.
 */
public abstract class AbstractSelectPreCompileQuery<T,C> {
    protected C condition;
    private PreparedStatement st = null;
    private Connection connection = null;
    public AbstractSelectPreCompileQuery(Connection connection, C condition){
        this.condition = condition;
        this.connection = connection;
        try {
            this.st = this.connection.prepareStatement(getSQLQuery());
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public List<T> execute()   {
        long start = System.currentTimeMillis();
        ResultSet rs = null;
        List<T> res = new ArrayList<>();
        try {
            //st = connection.prepareStatement(getSQLQuery());
            fillStatement(st);
            long s = System.currentTimeMillis();
            rs = st.executeQuery();
            long e = System.currentTimeMillis();
            ////("Time execute puri query = "+this.getClass().getSimpleName()+" = "+(e-s));
            while (rs.next()){
                res.add(this.parseResultSet(rs));
            }
        } catch (SQLException e) {
            throw new StorageException(Messages.getInstance().get("ERROR_CANNOT_CREATE_STATEMENT")+"{"+this.getSQLQuery()+"}",e);
        }
        finally {
            close(rs);
        }
        long end = System.currentTimeMillis();
        ////("Time execute query " +this.getClass().getSimpleName()+" - "+(end-start)+"  {"+getSQLQuery()+"}" +"param {"+ this.condition+"}");
        return res;
    }

    private void close(ResultSet rs) {
        if (rs == null) return;
        try {
            rs.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    protected abstract void fillStatement(PreparedStatement st) throws SQLException;

    protected abstract T parseResultSet(ResultSet rs) throws SQLException;
    public  void close() {
        if (st == null) return;
        try {
            st.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    protected String getDateAsString(Date date){
        java.sql.Date d = new java.sql.Date(date.getTime());
        return "'"+d.toString()+"'";
    }
    protected abstract String getSQLQuery();

    public void setCondition(C condition) {
        this.condition = condition;
    }


}
