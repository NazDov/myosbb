package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.input;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Address;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Input;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 01.02.2016.
 */
public class GetAllInputsQuery extends AbstractSelectQuery<Input,Void> {
    public GetAllInputsQuery(Void condition) {
        super(condition);
    }

    @Override
    protected Input parseResultSet(ResultSet rs) throws SQLException {
        Input res = new Input();
        res.setId(rs.getLong("inputID"));
        res.setAddress(new Address(rs.getLong("addressID")));
        res.setParent(new Input(rs.getLong("parentID")));
        return res;
    }

    @Override
    protected String getSQLQuery() {

        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT  i.[id] as inputID ");
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
        return sb.toString();

    }
}
