package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Bank;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.BankCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 22.12.2014.
 */
public class SearchBankQueryF extends AbstractSelectQuery<Bank,BankCondition> {

    public SearchBankQueryF(BankCondition condition) {
        super(condition);
    }

    @Override
    protected Bank parseResultSet(ResultSet rs) throws SQLException {
        Bank bank = new Bank();
        bank.setId(rs.getLong("id"));
        bank.setName(rs.getString("BankName"));
        return bank;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT [id]  ");
        sb.append(" ,[MFO]       ");
        sb.append(" ,[EDRPO]     ");
        sb.append(" ,[BankName]     ");
        sb.append(" ,[Address]    ");
        sb.append(" FROM [dbo].[RefBanks]  where 1=1   ");
        if (condition.getId() != null)
            sb.append(" and id  = "+condition.getId());
        return sb.toString();
    }
}
