package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SourceWaterSupply;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SourceWaterSupplyCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 22.12.2014.
 */
public class SearchSourceWaterSupplyCondition extends AbstractSelectQuery<SourceWaterSupply,SourceWaterSupplyCondition> {

    public SearchSourceWaterSupplyCondition(SourceWaterSupplyCondition condition) {
        super(condition);
    }

    @Override
    protected SourceWaterSupply parseResultSet(ResultSet rs) throws SQLException {
        SourceWaterSupply res = new SourceWaterSupply();
        res.setId(rs.getLong("id"));
        res.setName(rs.getString("Name"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT [id]  ");
        sb.append(",[Name]     ");
        sb.append(" FROM [dbo].[RefSourceOfFunds] where 1=1 ");
        if (condition.getId() != null)
            sb.append(" and id = "+condition.getId());
        return sb.toString();
    }
}
