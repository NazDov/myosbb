package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentInputCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 30.04.2015.
 */
public class SearchDepartmentInputForValidateQuery extends AbstractSelectQuery<DepartmentInput,DepartmentInputCondition> {

    public SearchDepartmentInputForValidateQuery(DepartmentInputCondition condition) {
        super(condition);
    }

    @Override
    protected DepartmentInput parseResultSet(ResultSet rs) throws SQLException {
        DepartmentInput res = new DepartmentInput();
        res.setId(rs.getLong("id"));
        res.setDepartment(this.fillDepartment(rs));
        res.setInput(this.fillInput(rs));
//        res.setSubServices(this.fillSubServices(rs));
//        res.setInputProperty(this.fillInputProperty(rs));
        res.setDateWhirring(rs.getDate("DateWirring"));
        res.setStartDate(rs.getDate("DateStart"));
        res.setEndDate(rs.getDate("DateEnd"));
        res.setPeriod(rs.getDate("Period"));
//        res.setCounterNumber(rs.getString("Number"));
//        res.setModelName(rs.getString("ModelName"));
//        res.setTypeRemove(rs.getString("TypeName"));
        return res;
    }

    private InputProperty fillInputProperty(ResultSet rs) throws SQLException {
        InputProperty res = new InputProperty();
        res.setId(rs.getLong("propertyID"));
        return res;
    }

    private InputSubServiceContain fillSubServices(ResultSet rs) throws SQLException {
        InputSubServiceContain res = new InputSubServiceContain();
        res.setId(rs.getLong("subServicesID"));
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
        sb.append(" SELECT distinct top "+ Options.getMaxCountToSelectRow()+" di.[id]\n ");
        sb.append(        "      ,di.[Period] \n ");
        sb.append(        "      ,di.[DateWirring] \n ");
        sb.append(        "      ,di.[DepartmentID] \n ");
        sb.append(        "      ,di.[InputID] \n ");
        sb.append(        "      ,di.[DateStart]  ");
        sb.append(        "      ,di.[DateEnd]  ");
        sb.append(        "  FROM [dbo].[RegInfDepartsInputs] as di \n where 1=1 ");
        if (condition.getDepartmentID() != null)
        sb.append(        "  and  di.DepartmentID = "+condition.getDepartmentID());
               if (this.condition.getInputID() != null)
            sb.append("          and di.[InputID] = "+condition.getInputID());
        if (this.condition.getId() != null)
            sb.append("          and di.id = "+this.condition.getId());
        sb.append(" order by di.[DateStart] desc");
        return sb.toString();
    }
}
