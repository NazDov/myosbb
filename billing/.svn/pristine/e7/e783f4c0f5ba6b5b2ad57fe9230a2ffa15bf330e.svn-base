package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgentProperty;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ServiceContraAgentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 05.09.2014.
 */

public class SelectContraAgentPropertyQuery extends AbstractSelectQuery<ContraAgent,ServiceContraAgentCondition> {


    public SelectContraAgentPropertyQuery(ServiceContraAgentCondition condition) {
        super(condition);
    }

    @Override
    protected ContraAgent parseResultSet(ResultSet rs) throws SQLException {
        ContraAgent ca = new ContraAgent();
        ContraAgentProperty property = new ContraAgentProperty();
        property.setId(rs.getLong("id"));
        ca.setProperty(property);
        return ca;
    }

    @Override
    protected String getSQLQuery() {
        return  "SELECT top "+ Options.getMaxCountToSelectRow()+" [id]\n" +
                "  FROM [dbo].[RegInfKontragentProperty]\n" +
                "where period = (select top 1 currentPeriod from CurrentPeriod)\n" +
                "and ContraAgentID = "+condition.getContraAgentID();
    }
}
