package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Municipal;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.MunicipalCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 05.11.2014.
 */
public class SearchMunicipalQueryByConditionQuery extends AbstractSelectQuery<Municipal,MunicipalCondition> {
    public SearchMunicipalQueryByConditionQuery(MunicipalCondition condition) {
        super(condition);
    }

    @Override
    protected Municipal parseResultSet(ResultSet rs) throws SQLException {
        Municipal res = new Municipal();
        res.setId(rs.getLong("id"));
        res.setName(rs.getString("Name"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" [id]\n" +
                "      ,[Name]\n" +
                "  FROM [dbo].[RefMunicipals] where 1=1" );
        if (condition.getId() != null){
            sb.append(" and id = "+condition.getId());
        }
        if (condition.getName() != null){
            sb.append(" and name like '%"+condition.getName()+"%'");
        }
        return sb.toString();
    }
}
