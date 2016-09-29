package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Area;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CategoryOfTariff;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentProperty;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 23.12.2014.
 */

public class SearchDepartmentPropertyHistoryQuery extends AbstractSelectQuery<DepartmentProperty,DepartmentCondition> {
    public SearchDepartmentPropertyHistoryQuery(DepartmentCondition condition) {
        super(condition);
    }

    @Override
    protected DepartmentProperty parseResultSet(ResultSet rs) throws SQLException {
        DepartmentProperty res = new DepartmentProperty();
        res.setArea(this.fillArea(rs));
        res.setCategoryOfTariff(this.fillCategoryOfTariff(rs));
        res.setId(rs.getLong("id"));
        res.setName(rs.getString("Name"));
        res.setPeriod(rs.getDate("Period"));
        return res;
    }

    private CategoryOfTariff fillCategoryOfTariff(ResultSet rs) throws SQLException {
        CategoryOfTariff res = new CategoryOfTariff();
        res.setId(rs.getLong("CategoryID"));
        return res;
    }


    private Area fillArea(ResultSet rs) throws SQLException {
        Area res = new Area();
        res.setId(rs.getLong("AreaID"));
        return res;
    }


    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top " + Options.getMaxCountToSelectRow() + " [id]   ");
        sb.append(" ,[Period]   ");
        sb.append(" ,[DepartmentID]   ");
        sb.append(" ,[CategoryID]   ");
        sb.append(" ,[Name]   ");
        sb.append(" ,[CategoryOfRealizeID]  ");
        sb.append(" ,[AreaID]    ");
        sb.append(" FROM [dbo].[RegInfDepartamentCharacters] where 1=1 ");
        sb.append(" and DepartmentID = " + condition.getId());
        sb.append(" order by Period desc ");
        return sb.toString();
    }
}