package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Koef;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.KoefConditions;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

public class SearchKoefficientQuery extends AbstractSelectQuery<Koef,KoefConditions> {
    public SearchKoefficientQuery(KoefConditions condition) {
        super(condition);
    }

    @Override
    protected Koef parseResultSet(ResultSet rs) throws SQLException {
        Koef res = new Koef();
        res.setId(rs.getLong("id"));
        res.setPeriod(rs.getDate("period"));
        res.setKofficient(rs.getDouble("kofficient"));
        return res;
    }



    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT  max(id) as id   ");
        sb.append(" ,max(period) as period   ");
        sb.append(" ,max(kofficient) as kofficient ");
        sb.append("  FROM [RefCoficient]     ");
        sb.append(" where 1=1   ");
        return sb.toString();
    }
}
