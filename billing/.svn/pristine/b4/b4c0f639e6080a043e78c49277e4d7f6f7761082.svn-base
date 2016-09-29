package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.coeficientareatypes;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.AreaType;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vasyl on 06.01.16.
 */
public class CoeficientAreaTypesQuery extends AbstractSelectQuery<AreaType,Void> {
    public CoeficientAreaTypesQuery(Void condition) {
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
        sb.append(" order by  [Period] desc");
        return sb.toString();
    }
}
