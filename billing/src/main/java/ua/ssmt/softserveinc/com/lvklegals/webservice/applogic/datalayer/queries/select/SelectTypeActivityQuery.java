package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;


import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl.TypeActivity;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 22.12.2014.
 */
public class SelectTypeActivityQuery extends AbstractSelectQuery<TypeActivity,String> {
    public SelectTypeActivityQuery(String condition) {
        super(condition);
    }

    @Override
    protected TypeActivity parseResultSet(ResultSet rs) throws SQLException {
        TypeActivity res = new TypeActivity();
        res.setId(rs.getLong("id"));
        res.setName(rs.getString("Name"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        return
        " SELECT [id]     " +
       " ,[Name]         " +
        " FROM [dbo].[RefKindsOfActivity] where " +
        " Name =  '"+condition + "'";
    }
}
