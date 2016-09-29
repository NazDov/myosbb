package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnparsedPayment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 20.11.2014.
 */
public class DeleteUnParsedPaymentQuery extends AbstractModifyQuery<UnparsedPayment> {
    @Override
    protected String getSQLQuery() {
        return "DELETE FROM [dbo].[RefUnparsedPayment]";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, UnparsedPayment value) throws SQLException {
    }
}
