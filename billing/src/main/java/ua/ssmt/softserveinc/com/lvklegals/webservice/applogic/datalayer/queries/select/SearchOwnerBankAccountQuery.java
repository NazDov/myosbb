package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.OwnerBankAccount;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.OwnerBankAccountCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 19.11.2014.
 */
public class SearchOwnerBankAccountQuery extends AbstractSelectQuery<OwnerBankAccount,OwnerBankAccountCondition> {
    public SearchOwnerBankAccountQuery(OwnerBankAccountCondition condition) {
        super(condition);
    }

    @Override
    protected OwnerBankAccount parseResultSet(ResultSet rs) throws SQLException {
        OwnerBankAccount res = new OwnerBankAccount();
        res.setId(rs.getLong("id"));
        res.setOwnerBankAccount(rs.getString("Name"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" [id]   ");
        sb.append(" ,[OwnerID]  ");
        sb.append(" ,[BankID]   ");
        sb.append(" ,[Name]   ");
        sb.append(" FROM [dbo].[RefOwnerBankAccount] where 1=1 ");
        if (condition.getOwnerBankAccount() != null)
            sb.append(" and Name = '"+condition.getOwnerBankAccount()+"'");
        if (condition.getId() != null)
            sb.append(" and id = "+condition.getId());
        return sb.toString();
    }
}
