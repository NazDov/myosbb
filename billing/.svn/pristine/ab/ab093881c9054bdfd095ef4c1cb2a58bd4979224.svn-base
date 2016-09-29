package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.TypeAgreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.TypeAgreementCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 20.11.2014.
 */
public class SearchTypeAgreementQuery extends AbstractSelectQuery<TypeAgreement,TypeAgreementCondition> {
    public SearchTypeAgreementQuery(TypeAgreementCondition condition) {
        super(condition);
    }

    @Override
    protected TypeAgreement parseResultSet(ResultSet rs) throws SQLException {
        TypeAgreement res = new TypeAgreement();
        res.setId(rs.getLong("id"));
        res.setName(rs.getString("Name"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" [id]   ");
        sb.append(" ,[Name]   ");
        sb.append(" FROM [dbo].[RefTypeAgreement] where 1=1 ");
        sb.append(" and id = "+condition.getId());
        return sb.toString();
    }
}
