package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 05.09.2014.
 */
public class SearchDepartmentQuery extends AbstractSelectQuery<Department,DepartmentCondition> {

    public SearchDepartmentQuery(DepartmentCondition condition) {
        super(condition);
    }

    @Override
    protected Department parseResultSet(ResultSet rs) throws SQLException {
        Department dep = new Department();
        dep.setId(rs.getLong("departmentID"));
        dep.setContraAgent(this.fillContraAgent(rs));
        dep.setProperty(this.fillProperty(rs));
        dep.setRoutename(rs.getString("RouteName"));
        dep.setAgreement(this.fillAgreement(rs));

        return dep;
    }

    private ContraAgent fillContraAgent(ResultSet rs) throws SQLException {
        ContraAgent ca = new ContraAgent();
        ca.setId(rs.getLong("ConraAgentID"));
        return ca;
    }
    private Agreement fillAgreement(ResultSet rs) throws SQLException {
        Agreement ca = new Agreement();
        ca.setId(rs.getLong("AgreementID"));
        return ca;
    }



    private BussinessProfile fillBussinessProfile (ResultSet rs)throws SQLException{
        BussinessProfile res = new BussinessProfile();
        res.setId(rs.getLong("bussinessProfileID"));
        return res;
    }

    private DepartmentProperty fillProperty(ResultSet rs) throws SQLException {
        DepartmentProperty res = new DepartmentProperty();
        res.setName(rs.getString("departmentName"));
        res.setArea(this.fillArea(rs));
        res.setCategoryOfTariff(this.fillCategoryOfTariff(rs));
        res.setId(rs.getLong("depPropID"));
        res.setKonto(rs.getString("Code"));
        res.setPeriod(rs.getDate("Period"));
        res.setConto(rs.getString("Conto"));
        res.setBussinessProfile(this.fillBussinessProfile(rs));
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
        sb.append(" select ");
        sb.append(" dep.[id] as departmentID  ");
        sb.append(" ,dep.[ConraAgentID]  ");
        sb.append(" ,prop.[id]  as depPropID  ");
        sb.append(" ,prop.[Period] as period  ");
        sb.append(" ,prop.[CategoryID] as categoryID  ");
        sb.append(" ,prop.[Name] as departmentName  ");
        sb.append(" ,prop.[CategoryOfRealizeID] as CategoryOfRealizeID  ");
        sb.append(" ,prop.[AreaID] as areaID  ");
        sb.append(" ,prop.[BussinessProfileID] as bussinessProfileID  ");
        sb.append(" ,prop.[CodeKonto] as Code  ");
        sb.append(" ,prop.[conto] as Conto  ");
        sb.append(" ,h.[Name] as RouteName ");
        sb.append(" ,a.[id] as AgreementID ");
        sb.append(" ,a.[AgreementNumber] as AgreementNumber ");

        sb.append(" from  ");
        sb.append("         (select max(id) as id, DepartmentID,max(Period) as period from RegInfDepartamentCharacters  ");
        sb.append("                 where Period <= dbo.getCurrentPeriod()  ");
        sb.append("                 group by DepartmentID) as currProp   ");
        sb.append(" left join RegInfDepartamentCharacters as prop on   ");
        sb.append(" currProp.id = prop.id   ");
        sb.append(" left join RefDepartaments as dep on   ");
        sb.append(" currProp.DepartmentID = dep.id   ");
        sb.append(" left join  ");
        sb.append(" (    ");
        sb.append("         select max(id) as id, ContraAgentID,Max(Period)   ");
        sb.append("         as period from RegInfKontragentProperty    ");
        sb.append(" where Period <= dbo.getCurrentPeriod()    ");
        sb.append(" group by ContraAgentID   ");
        sb.append(" ) as currContraProp on  dep.ConraAgentID = currContraProp.ContraAgentID   ");
        sb.append(" left join RegInfKontragentProperty as caProp on   ");
        sb.append(" currContraProp.id = caProp.id   ");
        sb.append(" left join (select max(id) as id, DepartmentID,Max(Period)  as period ,max(SubRouteID) as SubRouteID    from RegDepartmentSubRoute  where Period <= dbo.getCurrentPeriod()    group by DepartmentID )as f ");
        sb.append("     on f.DepartmentID = prop.DepartmentID ");
        sb.append(" left join RefSubRoutes as g on g.id = f.SubRouteID ");
        sb.append(" left join RefRoutes as h on h.id = g.RouteID ");
        sb.append(" left join  ");
        sb.append(" (    ");
        sb.append("         select max(id) as id, DepartmentID,Max(Period)   ");
        sb.append("         as period from RegInfDepartsInputs    ");
        sb.append(" where Period <= dbo.getCurrentPeriod()    ");
        sb.append(" group by DepartmentID   ");
        sb.append(" ) as rdi on  rdi.DepartmentID = dep.id   ");
        sb.append(" left join DocAgreement as a ");
        sb.append(" on a.DepartmentID = prop.DepartmentID ");
        sb.append(" where 1=1 ");
        if (condition.getDepartmentInputCondition() != null)
            sb.append(" and rdi.[id] = "+condition.getDepartmentInputCondition());
        if (condition.getId() != null)
            sb.append(" and dep.[id] = "+condition.getId());
        if (condition.getContraAgentID() != null)
            sb.append(" and caProp.[ContraAgentID] = "+condition.getContraAgentID());
        if (condition.getContraAgentName() != null && condition.getContraAgentName().trim().isEmpty() == false){
            sb.append(" and upper(caProp.FullName) like '%"+condition.getContraAgentName().trim().toUpperCase()+"%'");
        }
        if (condition.getDepartmentName() != null && condition.getDepartmentName().trim().isEmpty() == false){
            sb.append(" and upper(prop.[Name]) like '%"+condition.getDepartmentName().trim().toUpperCase()+"%'");
        }
        if (condition.getCodeKonto() != null && condition.getCodeKonto().trim().isEmpty() == false){
            sb.append(" and upper(prop.[conto]) like '%"+condition.getCodeKonto().trim().toUpperCase()+"%'");
        }
        if (condition.getRouteName() != null && condition.getRouteName().trim().isEmpty() == false){
            sb.append(" and upper(h.[Name]) like '%"+condition.getRouteName().trim().toUpperCase()+"%'");
        }
        if (condition.getAgreementNumber() != null && condition.getAgreementNumber().trim().isEmpty() == false){
            sb.append(" and a.[AgreementNumber] like '%"+condition.getAgreementNumber().trim()+"%'");
        }
        sb.append(" order by prop.Period desc  ");
        return sb.toString();

    }
}
