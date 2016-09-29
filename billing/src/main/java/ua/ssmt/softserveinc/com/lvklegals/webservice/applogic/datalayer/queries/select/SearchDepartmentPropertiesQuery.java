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
 * Created by vostap on 16.11.2014.
 */
public class SearchDepartmentPropertiesQuery extends AbstractSelectQuery<DepartmentProperty,DepartmentCondition> {

    public SearchDepartmentPropertiesQuery(DepartmentCondition condition) {
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
        res.setKonto(rs.getString("CodeKonto"));
        res.setConto(rs.getString("conto"));
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
        res.setName(rs.getString("areaname"));
        return res;
    }


    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" a.id   ");
        sb.append(" ,a.Period   ");
        sb.append(" ,a.DepartmentID   ");
        sb.append(" ,a.CategoryID   ");
        sb.append(" ,a.Name  as name  ");
        sb.append(" ,a.CategoryOfRealizeID  ");
        sb.append(" ,a.AreaID   ");
        sb.append(" ,a.CodeKonto    ");
        sb.append(" ,a.conto    ");
        sb.append(" ,b.name  as areaname ");
        sb.append(" FROM dbo.RegInfDepartamentCharacters as a ");
        sb.append(" inner join RefAreas as b            ");
        sb.append("     on a.AreaID=b.id      ");
        sb.append(" where 1=1 ");
        sb.append(" and DepartmentID = "+condition.getId());
        sb.append(" and Period <= dbo.getCurrentPeriod() ");
        if (condition.getPeriod() != null)
            sb.append(" and Period = "+this.getDateAsString(condition.getPeriod()));
        sb.append(" order by Period desc");
        return sb.toString();
    }
}
