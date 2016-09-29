package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 05.09.2014.
 */
public class DeleteAgreementPropertyQuery extends AbstractModifyQuery<Agreement> {


    @Override
    protected String getSQLQuery() {
        return "DELETE FROM [RegInfPenyaAgreement] \n" +
                "\t where AgreementID = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Agreement value) throws SQLException {
         st.setLong(1,value.getId());
    }
}
