package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.BussinessProfile;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.BuissnessCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by ykhav on 22.05.15.
 */
public class SearchBuissnessQuery extends AbstractSelectQuery<BussinessProfile,BuissnessCondition> {
    public SearchBuissnessQuery(BuissnessCondition condition) {
        super(condition);
    }

    @Override
    protected BussinessProfile parseResultSet(ResultSet rs) throws SQLException {
        BussinessProfile res = new BussinessProfile();
        res.setId(rs.getLong("id"));
        res.setName(rs.getString("Name"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" [id]  ");
        sb.append(" ,[Name]   ");
        sb.append(" FROM [dbo].[RefBussinessProfile] where 1=1 ");
        if (condition.getId() != null)
            sb.append(" and id = "+condition.getId());
        return sb.toString();
    }
}
