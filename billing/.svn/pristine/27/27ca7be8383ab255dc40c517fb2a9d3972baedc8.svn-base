package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.AgreementPenyaProperty;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ComboBoxItem;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AgreementPropertiesPenyaCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 20.11.2014.
 */
public class SearchAgreementPropertiesPenyaQuery extends AbstractSelectQuery<AgreementPenyaProperty,AgreementPropertiesPenyaCondition> {

    public SearchAgreementPropertiesPenyaQuery(AgreementPropertiesPenyaCondition condition) {
        super(condition);
    }

    @Override
    protected AgreementPenyaProperty parseResultSet(ResultSet rs) throws SQLException {
        AgreementPenyaProperty res = new AgreementPenyaProperty();
        res.setId(rs.getLong("id"));
        res.setPeriod(rs.getDate("period"));
        res.getAgreement().setId(rs.getLong("AgreementID"));
        res.setCalcPenya(rs.getBoolean("calcPenya"));
        res.setTypesCalculatePN(new ComboBoxItem(rs.getLong("TypeCalculatePN")));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" [id]  ");
        sb.append(" ,[AgreementID]    ");
        sb.append(" ,[calcPenya]    ");
        sb.append(" ,[TypeCalculatePN]");
        sb.append(" ,[period]    ");
        sb.append(" FROM [dbo].[RegInfPenyaAgreement] where 1=1  ");
        if (condition.getId() != null)
            sb.append(" and id = "+condition.getId());
        if (condition.getAgreementId() != null)
            sb.append(" and AgreementID = "+condition.getAgreementId());
        if (condition.getPeriod() != null)
            sb.append(" and period = "+this.getDateAsString(condition.getPeriod()));
        return sb.toString();
    }


}
