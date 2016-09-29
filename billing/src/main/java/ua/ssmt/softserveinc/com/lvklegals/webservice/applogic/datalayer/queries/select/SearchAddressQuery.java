package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Municipal;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Street;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AddressCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Address;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 09.09.2014.
 */
public class SearchAddressQuery extends AbstractSelectQuery<Address,AddressCondition> {

    public SearchAddressQuery(AddressCondition condition) {
        super(condition);
    }

    @Override
    protected Address parseResultSet(ResultSet rs) throws SQLException {
        Address res = new Address();
        res.setLetter(rs.getString("Letter"));
        res.setId(rs.getLong("ID"));
        res.setNumber(rs.getString("number"));
        res.setStreet(this.fillStreet(rs));
        return res;
    }

    private Street fillStreet(ResultSet rs) throws SQLException {
        Street res = new Street();
        res.setId(rs.getLong("streetID"));
        res.setName(rs.getString("streetName"));
        res.setMunicipal(this.fillMunicipal(rs));
        return res;
    }

    private Municipal fillMunicipal(ResultSet rs) throws SQLException {
        Municipal res = new Municipal();
        res.setId(rs.getLong("municipalID"));
        res.setName(rs.getString("municipalName"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();

        sb.append("  SELECT top "+ Options.getMaxCountToSelectRow()+" a.[id] as id   ");
        sb.append(" ,[StreetID]  as streetID   ");
        sb.append(" ,[Number]  as number ");
        sb.append(" ,[Letter] as Letter   ");
        sb.append(" ,m.[ID] as municipalID   ");
        sb.append(" ,m.[Name] as municipalName   ");
        sb.append(" ,s.[Name] as streetName   ");
        sb.append(" FROM [dbo].[RefAddresses]  a   ");
        sb.append(" left join [RefStreets] s on  ");
        sb.append(" a.StreetID = s.id   ");
        sb.append(" left join [RefMunicipals] m on   ");
        sb.append(" s.MunicipalID = m.id   ");
        sb.append(" where 1=1 ");
        if (condition.getLetter() !=null && condition.getLetter().isEmpty() == false)
            sb.append(" and Letter like '%"+condition.getLetter().trim()+"%'");

        if (condition.getMunicipalID() !=null)
            sb.append(" and m.id  = "+condition.getMunicipalID());

        if (condition.getNumber() !=null && condition.getNumber().isEmpty() == false)
            sb.append(" and [Number] like '%"+condition.getNumber().trim()+"%'");

        if (condition.getStreetID() !=null )
            sb.append(" and [StreetID]  = "+condition.getStreetID());
        if (condition.getId() != null)
            sb.append(" and a.[ID]  = "+condition.getId());
        return sb.toString();

    }
}
