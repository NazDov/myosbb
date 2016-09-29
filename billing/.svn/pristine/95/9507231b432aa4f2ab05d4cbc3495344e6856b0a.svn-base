package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Municipal;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Street;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.StreetCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 15.10.2014.
 */
public class SearchStreetQuery extends AbstractSelectQuery<Street,StreetCondition> {
    public SearchStreetQuery(StreetCondition condition) {
        super(condition);
    }

    @Override
    protected Street parseResultSet(ResultSet rs) throws SQLException {
        Street s = new Street();
        s.setId(rs.getLong("StreetID"));
        s.setName(rs.getString("StreetName"));
        s.setMunicipal(this.fillMunicipal(rs));
        return s;
    }

    private Municipal fillMunicipal(ResultSet rs) throws SQLException {
        Municipal res = new Municipal();
        res.setId(rs.getLong("Municipal"));
        res.setName(rs.getString("MunicipalName"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" a.[id] as StreetID  ");
        sb.append(" ,a.[Name] as StreetName   ");
        sb.append(" ,m.[id] as Municipal  ");
        sb.append(" ,m.[Name] as MunicipalName  ");
        sb.append(" FROM [dbo].[RefStreets] as a   ");
        sb.append(" left join [RefMunicipals] m on   ");
        sb.append(" a.MunicipalID = m.id  where 1=1   ");
        if (condition.getId() != null)
            sb.append(" and a.[id] = "+condition.getId());
        if (condition.getName() != null)
            sb.append(" and Name  like '%"+condition.getName()+"%'");
        if (condition.getMunicipalID() != null)
            sb.append(" and m.[id] = "+condition.getMunicipalID());
        return sb.toString();
    }
}
