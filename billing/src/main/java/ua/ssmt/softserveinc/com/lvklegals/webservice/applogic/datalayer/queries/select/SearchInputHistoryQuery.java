package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.InputProperty;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputPropertyCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 17.11.2014.
 */
public class SearchInputHistoryQuery extends AbstractSelectQuery<InputProperty,InputPropertyCondition> {
    public SearchInputHistoryQuery(InputPropertyCondition condition) {
        super(condition);
    }

    @Override
    protected InputProperty parseResultSet(ResultSet rs) throws SQLException {
        InputProperty res = new InputProperty();
        res.setId(rs.getLong("id"));
        res.setKoefWatterOut(rs.getDouble("KoefWatterOut"));
        res.setKoefWatterSupply(rs.getDouble("KoefWatterSupply"));
        res.setNorma(rs.getDouble("Norma"));
        res.setPeriod(rs.getDate("Period"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" [id]   ");
        sb.append(" ,[RegInfDepartmentID]  ");
        sb.append(" ,[Norma]   ");
        sb.append(" ,[KoefWatterSupply]  ");
        sb.append(" ,[KoefWatterOut]   ");
        sb.append(" ,[Period]   ");
        sb.append("  FROM [dbo].[RegInfInputProperties] where 1=1 ");
        if (condition.getRegInfDepartmentID() != null)
            sb.append(" and RegInfDepartmentID = "+condition.getRegInfDepartmentID());
        return sb.toString();
    }
}
