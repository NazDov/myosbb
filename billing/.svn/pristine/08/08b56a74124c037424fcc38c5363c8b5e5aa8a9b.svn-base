package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 27.08.2014.
 */
public class UpdateAgreementPropertyQuery extends AbstractModifyQuery<Agreement> {

    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[RegInfPenyaAgreement]  \n" +
                "   SET [AgreementID] = ? \n" +
                "      ,[calcPenya] = ? \n" +
                "      ,[period] =  (select top 1 currentPeriod from CurrentPeriod) \n" +
                " ,[TypeCalculatePN] = ? "+
                " WHERE [id] = ? \n";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Agreement agreement) throws SQLException {

        st.setLong(1,agreement.getId());
        st.setBoolean(2,agreement.getAgreementPenyaProperty().getCalcPenya());
        st.setLong(3,agreement.getAgreementPenyaProperty().getTypesCalculatePN().getId());
        st.setLong(4,agreement.getAgreementPenyaProperty().getId());
    }
}
