package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.saldo;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 12/3/2015.
 */
public class SearchAllContraAgentQuery extends AbstractSelectQuery<ContraAgent,Void> {
    public SearchAllContraAgentQuery(Void condition) {
        super(condition);
    }

    @Override
    protected ContraAgent parseResultSet(ResultSet rs) throws SQLException {
        ContraAgent contraAgent = new ContraAgent();
        contraAgent.setId(rs.getLong("id"));
        return contraAgent;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT [id]                         ");
        sb.append(" ,[EDRPO]                            ");
        sb.append(" ,[IPN]                              ");
        sb.append(" ,[VATNum]                           ");
        sb.append(" ,[VATDate]                          ");
        sb.append(" ,[RegistrDate]                      ");
        sb.append(" ,[CountryName]                      ");
        sb.append(" ,[MailIndexClient]                  ");
        sb.append(" ,[StreetName]                       ");
        sb.append(" ,[NumberHouse]                      ");
        sb.append(" ,[CityName]                         ");
        sb.append(" ,[RajonName]                        ");
        sb.append(" ,[OblsatName]                       ");
        sb.append(" FROM [dbo].[RefContragents]         ");
        return sb.toString();
    }
}
