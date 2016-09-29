package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ComboBoxItem;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 04.09.2014.
 */
public class ComboBoxItemQuery extends AbstractSelectQuery<ComboBoxItem,String> {
    private String tableName;

    public ComboBoxItemQuery(String condition, String tableName) {
        super(condition);
        this.tableName = tableName;
    }

    @Override
    protected ComboBoxItem parseResultSet(ResultSet rs) throws SQLException {
        ComboBoxItem res = new ComboBoxItem();
        res.setId(rs.getLong("ID"));
        res.setName(rs.getString("Name"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        String qry = " SELECT  [id],[Name] " +
                       " FROM "+this.tableName+" where 1=1 ";
        if (condition != null && condition.isEmpty() ==false)
            qry += " and name like '%"+condition.trim()+"%'";
        qry += " order by id";
        return qry;
    }





}
