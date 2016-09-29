package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ContraAgentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 03.03.2015.
 */
public class SearchContraAgentWithAgreementQuery extends AbstractSelectQuery<ContraAgent,ContraAgentCondition> {
    public SearchContraAgentWithAgreementQuery(ContraAgentCondition condition) {
        super(condition);
    }

    @Override
    protected ContraAgent parseResultSet(ResultSet rs) throws SQLException {
        ContraAgent res = new ContraAgent();
        res.setId(rs.getLong("id"));
        return res;
    }


    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();

        sb.append(" select distinct  top 100 prop.ContraAgentID as id  from   ");
        sb.append(" (select max(id) as id, max(period) as period, max(ShortName) ShortName, ContraAgentID from RegInfKontragentProperty   ");
        sb.append(" where Period<=dbo.getCurrentPeriod()   ");
        sb.append(" group by ContraAgentID) as prop    ");
        sb.append(" left join DocAgreement as a on   prop.ContraAgentID = a.ContraAgentID    ");
        sb.append(" left join RefContragents as c on c.id = prop.ContraAgentID    ");
        sb.append(" left join RefDepartaments as d on d.ConraAgentID = c.id ");
        sb.append(" left join RegInfDepartamentCharacters as e on e.DepartmentID = d.id ");
        sb.append(" left join RegDepartmentSubRoute as f on f.DepartmentID = d.id  ");
        sb.append(" left join RefSubRoutes as g on g.id = f.SubRouteID ");
        sb.append(" left join RefRoutes as h on h.id = g.RouteID where 1=1  ");


        if (condition.getName() != null && condition.getName().trim().isEmpty() == false){
            sb.append(" and upper(shortname) like '%"+condition.getName().trim().toUpperCase()+"%'");
        }
        if (condition.getEdrpo() != null && condition.getEdrpo().trim().isEmpty() == false){
            sb.append(" and c.EDRPO like '%"+condition.getEdrpo().trim()+"%'");
        }
        if (condition.getAgreementNumber() != null && condition.getAgreementNumber().trim().isEmpty() == false){
            sb.append(" and  a.AgreementNumber like '%"+condition.getAgreementNumber().trim()+"%'");
        }
        if (condition.getCodeConto() != null && condition.getCodeConto().trim().isEmpty() == false){
            sb.append(" and  e.conto like '%"+condition.getCodeConto().trim()+"%'");
        }
        if (condition.getRoutename() != null && condition.getRoutename().trim().isEmpty() == false){
            sb.append(" and  h.Name like '%"+condition.getRoutename().trim()+"%'");
        }

        if (condition.getIsHotWatterSupplier() != null) {
            if (condition.getIsHotWatterSupplier() == true)
                sb.append(" and c.HotWatterSupplier = 1");
            if (condition.getIsHotWatterSupplier() == false)
                sb.append(" and c.HotWatterSupplier = 0");
        }


        //(sb.toString());
        return sb.toString();
    }
}
