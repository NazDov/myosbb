package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CounterModel;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CounterModelCondition;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 09.09.2014.
 */
public class SelectCounterModelQuery extends AbstractSelectQuery<CounterModel,CounterModelCondition> {
    public SelectCounterModelQuery(CounterModelCondition condition) {
        super(condition);
    }

    @Override
    protected CounterModel parseResultSet(ResultSet rs) throws SQLException {
        CounterModel counterModel = new CounterModel();
        counterModel.setId(rs.getLong("ID"));
        counterModel.setName(rs.getString("Name"));
        counterModel.setMaxLength(rs.getInt("MaxLength"));
        return counterModel;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
                sb.append("SELECT top "+ Options.getMaxCountToSelectRow()+" [id]\n ");
                sb.append("      ,[Name]  ");
                sb.append("      ,[MaxLength]  ");
                sb.append("  FROM [RefCounterModels] ");
                sb.append(" where 1=1 ");
                if (condition.getName() != null && condition.getName().isEmpty() == false)
                    sb.append(" and [Name] like '%"+condition.getName()+"%'");
                return sb.toString();
        }
}
