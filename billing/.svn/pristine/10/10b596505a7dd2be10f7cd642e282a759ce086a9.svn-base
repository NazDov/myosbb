package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.AgreementPenyaProperty;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ServiceAgreementCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 05.09.2014.
 */

public class SelectAgreementPropertyQuery extends AbstractSelectQuery<Agreement,ServiceAgreementCondition> {


    public SelectAgreementPropertyQuery(ServiceAgreementCondition condition) {
        super(condition);
    }

    @Override
    protected Agreement parseResultSet(ResultSet rs) throws SQLException {
        Agreement ca = new Agreement();
        AgreementPenyaProperty property = new AgreementPenyaProperty();
        property.setId(rs.getLong("id"));
        ca.setAgreementPenyaProperty(property);
        return ca;
    }

    @Override
    protected String getSQLQuery() {
        return  "SELECT top "+ Options.getMaxCountToSelectRow()+" [id]\n" +
                "  FROM [dbo].[RegInfPenyaAgreement]\n" +
                "where period = (select top 1 currentPeriod from CurrentPeriod)\n" +
                "and AgreementID = "+condition.getAgreementId();
    }
}
