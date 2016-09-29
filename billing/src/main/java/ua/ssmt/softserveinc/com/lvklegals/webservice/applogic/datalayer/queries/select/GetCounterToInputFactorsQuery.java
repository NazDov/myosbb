package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputFactorCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 08.10.2014.
 */
public class GetCounterToInputFactorsQuery extends AbstractSelectQuery<InputFactor,InputFactorCondition> {
    public
    GetCounterToInputFactorsQuery(InputFactorCondition condition) {
        super(condition);
    }

    @Override
    protected InputFactor parseResultSet(ResultSet rs) throws SQLException {
        InputFactor res = new InputFactor();
        Counter c = new Counter();
        c.setId(rs.getLong("CounterID"));
        res.setCounter(c);
        res.setWiringID(rs.getLong("wiringID"));
        res.setCounterModel(rs.getString("ModelName"));
        //res.setOnDate(rs.getDate("OnDate"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select distinct top 2000 cs.CounterID,di.id as wiringID,e.CodeKonto,cm.Name as ModelName,rout.id as routeId  from SysCounterStatuses as cs  ");
        sb.append(" left join DocRegisterCounter as doc   ");
        sb.append(" on doc.id = cs.DocRegisterCounterID   ");
        sb.append(" left join RegInfDepartsInputs as di on   ");
        sb.append(" doc.RegInfDepartmentInputsID = di.id   ");
        sb.append(" left join RegDepartmentSubRoute as ds on    di.DepartmentID = ds.DepartmentID  ");
        sb.append(" left join RefDepartaments as d on di.DepartmentID = d.id ");
        sb.append(" left join RegInfDepartamentCharacters as e  on e.DepartmentID = d.id ");
        sb.append(" left join RefContragents as c  on c.id = d.ConraAgentID ");
        sb.append(" left join RefCounters as z on z.id=cs.CounterID ");
        sb.append(" left join RefCounterModels as cm on cm.id =z.ModelID ");
        sb.append(" left join RefSubRoutes as sr on sr.id=ds.SubRouteID ");
        sb.append(" left join RefRoutes as rout on rout.id=sr.RouteID ");
        sb.append(" where CounterStatusID = 2  ");
        sb.append(" and cs.Period <= dbo.getCurrentPeriod()  ");
        sb.append(" and doc.Period <= dbo.getCurrentPeriod() ");
        sb.append(" and di.Period <= dbo.getCurrentPeriod()  ");
        sb.append(" and ds.Period <= dbo.getCurrentPeriod()  ");
        sb.append(" and e.Period <= dbo.getCurrentPeriod()  ");
        if (condition.getSubRouteID() != null)
            sb.append(" and ds.SubRouteID =   "+condition.getSubRouteID());
        if (condition.getRouteID() != null)
            sb.append(" and rout.id =   "+condition.getRouteID());
        if (condition.getCounterID() != null)
            sb.append(" and cs.CounterID = "+condition.getCounterID());
        if (condition.getKontragentId() != null)
            sb.append(" and c.id = "+condition.getKontragentId());
        if (condition.getId() != null)
            sb.append(" and doc.id = "+condition.getId());
        sb.append(" order by e.CodeKonto asc  ");
        System.out.println(sb.toString());
        return sb.toString();
    }
}
