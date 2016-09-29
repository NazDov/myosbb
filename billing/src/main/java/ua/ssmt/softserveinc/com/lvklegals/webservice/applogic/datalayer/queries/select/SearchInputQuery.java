package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

public class SearchInputQuery extends AbstractSelectQuery<Input,InputCondition> {
    public SearchInputQuery(InputCondition condition) {
        super(condition);
    }

    @Override
    protected Input parseResultSet(ResultSet rs) throws SQLException {
        Input res = new Input();
        res.setId(rs.getLong("inputID"));
        res.setAddress(new Address(rs.getLong("addressID")));
        res.setParent(new Input(rs.getLong("parentID")));
        res.setDiameter(this.fillDiamenter(rs));
        res.setService(this.fillService(rs));
        res.setCounter(this.fillCounter(rs));
        return res;
    }
    private Service fillService(ResultSet rs) throws SQLException {
        Service res = new Service();
        res.setId(rs.getLong("serviceID"));
        res.setName(rs.getString("serviceName"));
        return res;
    }

    private InputDiameter fillDiamenter(ResultSet rs) throws SQLException {
        InputDiameter res = new InputDiameter();
        res.setId(rs.getLong("inputDiameter"));
        res.setDiameter(rs.getDouble("diameter"));
        return res;
    }

    private Counter fillCounter(ResultSet rs) throws SQLException {
        Counter res = new Counter();
        res.setId(rs.getLong("counter"));
        res.setNumber(rs.getString("number"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" i.[id] as inputID ");
        sb.append(" ,i.[ParentID] as parentID  ");
        sb.append(" ,i.[AddrID]  as addressID ");
        sb.append(" ,i.[ServiceID] as serviceID  ");
        sb.append(" ,i.[InputDiameterID] as inputDiameter  ");
        sb.append(" ,i.[CounterID] as counter  ");
        sb.append(" ,m.[ID] as municipalID  ");
        sb.append(" ,s.[ID] as streetID  ");
        sb.append(" ,a.Letter as letter  ");
        sb.append(" ,a.Number as number ");
        sb.append(" ,s.Name as streetName ");
        sb.append(" ,m.Name as municipalName ");
        sb.append(" ,diam.Name as diameter ");
        sb.append(" ,ser.Name as serviceName ");
        sb.append(" FROM [dbo].[RefInputs] as i  ");
        sb.append(" left join [dbo].[RefAddresses]  a on ");
        sb.append(" i.AddrID = a.id  ");
        sb.append(" left join [RefStreets] s on  ");
        sb.append(" a.StreetID = s.id   ");
        sb.append(" left join [RefMunicipals] m on   ");
        sb.append(" s.MunicipalID = m.id   ");
        sb.append(" left join [RefInputDiameters] as diam on  ");
        sb.append(" diam.id = i.InputDiameterID  ");
        sb.append(" left join [RefServices] as ser on  ");
        sb.append(" i.ServiceID = ser.id  ");
        sb.append(" where 1=1  ");
        if (condition.getLetter() !=null && condition.getLetter().isEmpty() == false)
            sb.append(" and Letter like '%"+condition.getLetter().trim()+"%'");

        if (condition.getMunicipalID() !=null)
            sb.append(" and m.id  = "+condition.getMunicipalID());

        if (condition.getNumber() !=null && condition.getNumber().isEmpty() == false)
            sb.append(" and a.Number like '"+condition.getNumber().trim()+"'");

        if (condition.getStreetID() !=null )
            sb.append(" and [StreetID]  = "+condition.getStreetID());

        if (condition.getId() != null)
            sb.append(" and i.[id] = "+condition.getId());
        if (condition.getParentID() != null)
            sb.append(" and i.[parentID] = "+condition.getParentID());

        if (condition.getDepartment() !=null )
            sb.append(" and [DepartmentID]  = "+condition.getDepartment().getId());
        sb.append(" order by s.Name asc,a.Number asc");

        return sb.toString();
    }
}
