package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.TypeArea;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.TypeAreaKoef;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.TypeAreaKoefConditions;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

public class SearchAreaTypeKoefficientQuery extends AbstractSelectQuery<TypeAreaKoef,TypeAreaKoefConditions> {
    public SearchAreaTypeKoefficientQuery(TypeAreaKoefConditions condition) {
        super(condition);
    }

    @Override
    protected TypeAreaKoef parseResultSet(ResultSet rs) throws SQLException {
        TypeAreaKoef res = new TypeAreaKoef();
        res.setId(rs.getLong("id"));
        res.setPeriod(rs.getDate("period"));
        res.setKofficient(rs.getBigDecimal("koef"));
        res.setTypeArea(this.fillTypeArea(rs));
        return res;
    }

    private TypeArea fillTypeArea(ResultSet rs) throws SQLException {
        TypeArea res = new TypeArea();
        res.setId(rs.getLong("AreaTypeID"));
        res.setName(rs.getString("AreaTypeName"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" s.[id]   ");
        sb.append(" ,s.[AreaTypeID]");
        sb.append(" ,s.[period]   ");
        sb.append(" ,s.[koef]");
        sb.append(" ,r.[Name] as AreaTypeName");
        sb.append("  FROM [RegInfCoeficientAreaType] as s left join [RefAreaType] as r on  s.AreaTypeID= r.ID     ");
        sb.append(" where 1=1 and [period] <= dbo.getCurrentPeriod()   ");
        if (condition.getAreaType() != null) sb.append(" and AreaTypeID = "+condition.getAreaType());
        return sb.toString();
    }
}
