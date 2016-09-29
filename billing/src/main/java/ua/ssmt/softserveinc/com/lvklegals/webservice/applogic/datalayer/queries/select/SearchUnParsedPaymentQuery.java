package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnparsedPayment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.UnparsedPaymentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vstoian on 16.11.2014.
 */
public class SearchUnParsedPaymentQuery extends AbstractSelectQuery<UnparsedPayment,UnparsedPaymentCondition> {
    public SearchUnParsedPaymentQuery(UnparsedPaymentCondition condition) {
        super(condition);
    }

    @Override
    protected UnparsedPayment parseResultSet(ResultSet rs) throws SQLException {
        UnparsedPayment res = new UnparsedPayment();
        res.setId(rs.getLong("id"));
        res.setMfo(rs.getString("Mfo"));
        res.setNumberDocPayment(rs.getString("NumberDocPayment"));
        res.setOwnerBankAccount(rs.getString("OwnerBankAccount"));
        res.setPayerBankAccount(rs.getString("PayerBankAccount"));
        res.setSumPayment(rs.getDouble("SumPayment"));
        res.setPayer(rs.getString("Payer"));
        res.setReason(rs.getString("Reason"));
        res.setDatePayment(rs.getDate("DatePayment"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" p.id   ");
        sb.append(" ,p.mfo  ");
        sb.append(" ,p.NumberDocPayment  ");
        sb.append(" ,p.OwnerBankAccount   ");
        sb.append(" ,p.PayerBankAccount   ");
        sb.append(" ,p.SumPayment   ");
        sb.append(" ,p.Payer  ");
        sb.append(" ,p.Reason  ");
        sb.append(" ,p.DatePayment   ");
        sb.append(" FROM UnparsedPayment as p WHERE 1=1 ");

        if (condition.getPayer() != null)
            sb.append(" and p.Payer = "+condition.getPayer());
        return sb.toString();
    }
}