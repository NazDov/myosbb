package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DiscountRateNBU;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DicountRateNBUConditions;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 22.09.2014.
 */
public class SearchDiscountRateNBUQuery extends AbstractSelectQuery<DiscountRateNBU,DicountRateNBUConditions> {
    public SearchDiscountRateNBUQuery(DicountRateNBUConditions condition) {
        super(condition);
    }

    @Override
    protected DiscountRateNBU parseResultSet(ResultSet rs) throws SQLException {
        DiscountRateNBU res = new DiscountRateNBU();
        res.setId(rs.getLong("id"));
        res.setDiscountRate(rs.getDouble("discountRate"));
        res.setPeriod(rs.getDate("period"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" [id] ");
        sb.append(" ,[period]   ");
        sb.append(" ,[discountRate]   ");
        sb.append(" FROM [dbo].[RefDiscountRateNBU]  ");
        sb.append(" where 1=1  ");
        if (condition.getId() != null)
            sb.append(" and id = "+condition.getId());
        if (condition.getPeriod() != null)
            sb.append(" and period = "+this.getDateAsString(condition.getPeriod()));
        return sb.toString();
    }
}
