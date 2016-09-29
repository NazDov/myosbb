package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Area;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CategoryOfTariff;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.HotWaterSupplierProperty;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.HotWaterSupplierCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 05.09.2014.
 */
public class SearchHotWaterPropertiesQuery extends AbstractSelectQuery<HotWaterSupplierProperty,HotWaterSupplierCondition> {

    public SearchHotWaterPropertiesQuery(HotWaterSupplierCondition condition) {
        super(condition);
    }

    @Override
    protected HotWaterSupplierProperty parseResultSet(ResultSet rs) throws SQLException {
        HotWaterSupplierProperty res = new HotWaterSupplierProperty();

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

        sb.append(" order by Period desc");
        return sb.toString();
    }
}
