package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.InputDiameter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputDiameterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 17.09.2014.
 */
public class SearchInputDiameterQuery extends AbstractSelectQuery<InputDiameter,InputDiameterCondition> {

    public SearchInputDiameterQuery(InputDiameterCondition condition) {
        super(condition);
    }

    @Override
    protected InputDiameter parseResultSet(ResultSet rs) throws SQLException {
        InputDiameter res = new InputDiameter();
        res.setId(rs.getLong("ID"));
        res.setDiameter(rs.getDouble("Name"));
        res.setCapacity(rs.getDouble("Capacity"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" [id]   ");
        sb.append("     ,[Name]\n ");
        sb.append("     ,[Capacity]\n ");
        sb.append("           FROM [dbo].[RefInputDiameters]\n ");
        sb.append("     where 1=1   ");
        if (condition.getCapacity() != null)
            sb.append(" and Capacity = "+condition.getCapacity());
        if (condition.getDiameter() != null)
            sb.append(" and Name = "+condition.getDiameter());
        if (condition.getId() != null)
            sb.append(" and id = "+condition.getId());
        return sb.toString();

    }
}
