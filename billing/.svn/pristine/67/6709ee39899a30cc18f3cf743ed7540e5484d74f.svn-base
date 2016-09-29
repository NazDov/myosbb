package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CounterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 18.09.2014.
 */
public class SearchCounterQuery extends AbstractSelectQuery<Counter,CounterCondition> {

    public SearchCounterQuery(CounterCondition condition) {
        super(condition);
    }

    @Override
    protected Counter parseResultSet(ResultSet rs) throws SQLException {
        Counter res = new Counter();
        res.setId(rs.getLong("id"));
        res.setNumber(rs.getString("number"));
        res.setDiameter(this.fillDiameter(rs));
        res.setUnitOfMeasurement(this.fillUnitOfMeasurement(rs));
        res.setModel(this.fillModel(rs));

        res.setContraAgent(this.fillContraAgent(rs));
        res.setDepartment(this.fillDepartment(rs));
        res.setTypeCounter(this.fillTypeCounter(rs));
        return res;
    }

     private Department fillDepartment(ResultSet rs) throws SQLException {
        Department res = new Department();
        res.setId(rs.getLong("DepartmentID"));
        return res;

    }
 private TypeCounter fillTypeCounter (ResultSet rs) throws  SQLException {
     TypeCounter res = new TypeCounter();
     res.setId(rs.getLong("typeCounterID"));
     res.setName(rs.getString("typeCounterName"));
     return  res;
 }
    private ContraAgent fillContraAgent(ResultSet rs) throws SQLException {
        ContraAgent res = new ContraAgent();
        res.setId(rs.getLong("ContraAgentID"));
        return res;
    }

    private Model fillModel(ResultSet rs) throws SQLException {
        Model res = new Model();
        res.setId(rs.getLong("modelID"));
        res.setName(rs.getString("CounterModel"));
        return res;
    }

    private UnitOfMeasurement fillUnitOfMeasurement(ResultSet rs) throws SQLException {
        UnitOfMeasurement res = new UnitOfMeasurement();
        res.setId(rs.getLong("unitOfMeasurement"));
        res.setName(rs.getString("UnitOfMeasurementName"));
        return res;
    }

    private CounterDiametr fillDiameter(ResultSet rs) throws SQLException {
        CounterDiametr res = new CounterDiametr();
        res.setId(rs.getLong("diameterID"));
        res.setDiameter(rs.getDouble("diamName"));
        return res;
    }


    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT distinct top 100 c.[id] as id  ");
        sb.append(" ,c.[Number] as number    ");
        sb.append(" ,c.[DiameterID] as diameterID    ");
        sb.append(" ,c.[UnitOfMeasurementID] as unitOfMeasurement   ");
        sb.append(" ,c.[ModelID] as modelID   ");
        sb.append(" ,c.[typeCounterID] as typeCounterID  ");
        sb.append(" ,typeCounter.name as typeCounterName  ");
        sb.append(" ,s.Name as CounterTypeName ");
        sb.append(" ,u.Name as UnitOfMeasurementName   ");
        sb.append(" ,s.Name as ServiceName   ");
        sb.append(" ,cm.Name as CounterModel   ");
        sb.append(" ,dep.id as DepartmentID    ");
        sb.append(",ca.id as ContraAgentID   ");
        sb.append(" ,diam.name as diamName  ");
        sb.append(" ,input.AddrID as addressID  ");
        sb.append(" FROM [dbo].[RefCounters] as c   ");
        sb.append(" left join [RefCounterDiametr] as diam on   ");
        sb.append(" c.DiameterID = diam.id   ");
        sb.append(" left join [RefUnitOfMeasures] as u on    ");
        sb.append(" c.UnitOfMeasurementID = u.id   ");

        sb.append(" left join [RefCounterModels] as cm on   ");
        sb.append(" c.ModelID = cm.id   ");
        sb.append(" left join [SysCounterStatuses] as sys on   ");
        sb.append(" sys.CounterID = c.id   ");
        sb.append(" left join [DocRegisterCounter] as d on   ");
        sb.append(" sys.DocRegisterCounterID = d.id   ");
        sb.append(" left join [RegInfDepartsInputs] as di on   ");
        sb.append(" d.RegInfDepartmentInputsID = di.id   ");
        sb.append(" left join [RefDepartaments] as dep on   ");
        sb.append(" dep.id = di.DepartmentID   ");
        sb.append(" left join [RefContragents] as ca on   ");
        sb.append(" ca.id = dep.ConraAgentID  ");

        sb.append(" left join RegInfKontragentProperty as caprop ");
        sb.append(" on ca.id = caprop.ContraAgentID ");
        sb.append(" left join RegInfDepartamentCharacters as depProp ");
        sb.append(" on dep.id = depProp.DepartmentID ");

        sb.append(" left join RefInputs as input on ");
        sb.append(" di.inputID = input.ID");

        sb.append(" left join [RefServices] as s on   ");
        sb.append(" input.ServiceID = s.id   ");

        sb.append(" left join RefTypeCounter as typeCounter ");
        sb.append( "on c.typeCounterID = typeCounter.id ");

       /* sb.append(" where ((caprop.Period <= dbo.getCurrentPeriod() and depProp.Period <= dbo.getCurrentPeriod() ) ");
        sb.append(" or (caprop.ContraAgentID is null and depProp.DepartmentID is null))  ");*/
        sb.append(" where 1=1 ");

        if (condition.getNumber() !=null && condition.getNumber().isEmpty() == false)
            sb.append(" and c.Number like '%"+condition.getNumber().trim()+"%'");
        if (condition.getId() != null)
            sb.append(" and c.id = "+condition.getId());

        if (condition.getContraAgent() != null && condition.getContraAgent().isEmpty() == false)
            sb.append(" and caprop.FullName like '%"+condition.getContraAgent()+"%' ");
        if (condition.getDepartment() != null && condition.getDepartment().isEmpty() == false)

            sb.append(" and depProp.Name like '%"+condition.getDepartment()+"%'");
        if (condition.getStreet() != null && condition.getStreet().isEmpty() == false)
            sb.append(" and street.Name like '%"+condition.getStreet()+"%'  ");

        if (condition.getHouseNumber() != null && condition.getHouseNumber().isEmpty() ==false)
            sb.append(" and addr.Number like '%"+condition.getHouseNumber()+"%' ");

        if (condition.getHouseLetter() != null && condition.getHouseLetter().isEmpty() ==false)
           sb.append(" and addr.Letter like '%"+condition.getHouseLetter()+"%' ");
        return sb.toString();
    }
}
