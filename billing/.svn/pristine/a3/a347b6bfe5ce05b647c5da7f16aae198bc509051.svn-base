package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.KindAgreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.KindAgreementCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 20.11.2014.
 */
public class SearchKindAgreementQuery extends AbstractSelectQuery<KindAgreement,KindAgreementCondition> {

    public SearchKindAgreementQuery(KindAgreementCondition condition) {
        super(condition);
    }

    @Override
    protected KindAgreement parseResultSet(ResultSet rs) throws SQLException {
        KindAgreement res = new KindAgreement();
        res.setId(rs.getLong("id"));
        res.setName(rs.getString("Name"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" [id]  ");
        sb.append(" ,[Name]    ");
        sb.append(" FROM [dbo].[RefKindAgreement] where 1=1  ");
        if (condition.getId() != null)
            sb.append(" and id = "+condition.getId());
        return sb.toString();
    }


}
