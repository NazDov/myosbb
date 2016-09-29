package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartamentFreeKontoCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by ykhav on 22.05.15.
 */
public class SearchDepartmentFreeKontoQuery extends AbstractSelectQuery<DepartmentFreeKonto,DepartamentFreeKontoCondition> {
    public SearchDepartmentFreeKontoQuery(DepartamentFreeKontoCondition condition) {
        super(condition);
    }

    @Override
    protected DepartmentFreeKonto parseResultSet(ResultSet rs) throws SQLException {
        DepartmentFreeKonto res = new DepartmentFreeKonto();
        res.setId(rs.getLong("id"));
        res.setInput(this.fillInput(rs));
        res.setDepartment(this.fillDepartment(rs));
        res.setContraAgent(this.fillcontrAgent(rs));
        res.setSubRoute(this.fillSubRoute(rs));
        res.setRoutes(this.fillRoute(rs));


        return res;
    }

    private ContraAgent fillcontrAgent (ResultSet rs) throws  SQLException{
        ContraAgent res = new ContraAgent();
        res.setId(rs.getLong("KontrAgentID"));

        return res;
    }

    private SubRoute fillSubRoute (ResultSet rs) throws SQLException{
        SubRoute res = new SubRoute();
        res.setId(rs.getLong("SubRouteId"));
        return res;
    }



    private Route fillRoute (ResultSet rs )throws SQLException{
        Route res = new Route();
        res.setId(rs.getLong("RouteID"));
        res.setName(rs.getString("RouteName"));
        return res;
    }


    private Input fillInput(ResultSet rs) throws SQLException {
        Input res = new Input();
        res.setId(rs.getLong("InputID"));
        return res;
    }

    private Department fillDepartment(ResultSet rs) throws SQLException {
        Department res = new Department();
        res.setId(rs.getLong("DepartmentID"));
        return res;
    }

    @Override
    protected String getSQLQuery() {

        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT distinct top 1000 di.[id]\n ");
        sb.append(        "      ,di.[Period] \n ");
        sb.append(        "      ,di.[DepartmentID] \n ");
        sb.append(        "      ,input.[id] as InputID \n ");
        sb.append(        "      ,ca.ID as KontrAgentID ");
        sb.append(        "      ,sr.ID as SubRouteId ");
        sb.append(        "      ,r.ID as RouteID   ");
        sb.append(        "      ,r.name as RouteName   ");
        sb.append(        "       ,dc.conto  ");
        sb.append(        "       ,sr.Name  ");
        sb.append(        "  FROM [dbo].[RegInfDepartsInputs] as di \n ");
        sb.append(        "  left join RefInputs as input on \n ");
        sb.append(        "  di.InputId = input.id \n ");
        sb.append(        "  left join RefDepartaments as d on \n ");
        sb.append(        "  di.DepartmentID = d.id \n ");
        sb.append(        "  left join RefContragents as ca on ");
        sb.append(        "  d.ConraAgentID = ca.id ");
        sb.append(        " left join RegDepartmentSubRoute as ds ");
        sb.append(        " on ds.DepartmentID = di.DepartmentID ");
        sb.append(        " left join RefSubRoutes as sr ");
        sb.append(        " on sr.id = ds.SubRouteID ");
        sb.append(        " inner join RefRoutes as r ");
        sb.append(        " on r.id = sr.RouteID ");
        sb.append(        " left join RegInfDepartamentCharacters as dc ");
        sb.append(        " on di.DepartmentID = dc.DepartmentID ");
        sb.append(        " where di.Period <= dbo.getCurrentPeriod()\n ");

        if (condition.getRouteID() != null)
            sb.append("          and  r.[id] = "+condition.getRouteID());
        if (condition.getSubRouteID() != null)
            sb.append("          and  sr.[id] = "+condition.getSubRouteID());
        sb.append(        " order by dc.conto asc ");



        ////(sb.toString());
        return sb.toString();
    }
}
