package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.AreaType;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AreaTypeCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 06.02.2015.
 */
public class SearchCoeficientAreaType extends AbstractSelectQuery<AreaType,AreaTypeCondition> {
    public SearchCoeficientAreaType(AreaTypeCondition condition) {
        super(condition);
    }

    @Override
    protected AreaType parseResultSet(ResultSet rs) throws SQLException {
        AreaType res = new AreaType();
        res.setCoefficient(rs.getDouble("koef"));
        res.setId(rs.getLong("AreaTypeID"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT [id]  ");
        sb.append(" ,[AreaTypeID] ");
        sb.append(" ,[Period] ");
        sb.append(" ,[koef] ");
        sb.append(" FROM [dbo].[RegInfCoeficientAreaType] where period <= dbo.getCurrentPeriod() ");
        if (condition.getId() != null)
            sb.append(" and AreaTypeID = "+condition.getId());
        sb.append(" order by  [Period] desc");
        return sb.toString();
    }
}
