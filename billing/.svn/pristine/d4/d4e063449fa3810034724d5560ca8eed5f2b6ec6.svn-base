package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.InputProperty;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputPropertyCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 13.11.2014.
 */
public class SearchInputPropertyQuery extends AbstractSelectQuery<InputProperty,InputPropertyCondition> {
    public SearchInputPropertyQuery(InputPropertyCondition condition) {
        super(condition);
    }

    @Override
    protected InputProperty parseResultSet(ResultSet rs) throws SQLException {
        InputProperty res = new InputProperty();
        res.setId(rs.getLong("id"));
        res.setNorma(rs.getDouble("Norma"));
        res.setKoefWatterSupply(rs.getDouble("KoefWatterSupply"));
        res.setKoefWatterOut(rs.getDouble("KoefWatterOut"));
        res.setPeriod(rs.getDate("Period"));
        res.setDepartmentInputID(rs.getLong("RegInfDepartmentID"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" [id]  ");
        sb.append(" ,[Norma]   ");
        sb.append(" ,[KoefWatterSupply]  ");
        sb.append(",[RegInfDepartmentID]");
        sb.append("  ,[KoefWatterOut]   ");
        sb.append("  ,[Period]   ");
        sb.append("  FROM [dbo].[RegInfInputProperties] where 1=1 ");
        if (condition.getId() != null)
            sb.append(" and id = "+condition.getId());
        return  sb.toString();
    }
}
