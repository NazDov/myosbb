package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ComboBoxItem;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 22.01.2015.
 */
public class GetAllStreetsByPatternQuery extends AbstractSelectQuery<ComboBoxItem,String> {
    public GetAllStreetsByPatternQuery(String condition) {
        super(condition);
    }

    @Override
    protected ComboBoxItem parseResultSet(ResultSet rs) throws SQLException {
        ComboBoxItem res = new ComboBoxItem();
        res.setId(rs.getLong("id"));
        res.setName(rs.getString("numicipalName")+", "+rs.getString("name"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRowForItemList()+" s.[id] as id  ");
        sb.append(" ,s.[Name] as name  ");
        sb.append(" ,m.Name as numicipalName  ");
        sb.append(" FROM [dbo].[RefStreets] as s  ");
        sb.append(" left join [RefMunicipals] as m on  ");
        sb.append(" s.MunicipalID = m.id  ");
        sb.append(" where s.Name like '%"+condition+"%'");
        sb.append(" order by s.[Name]");
        return sb.toString();
    }
}
