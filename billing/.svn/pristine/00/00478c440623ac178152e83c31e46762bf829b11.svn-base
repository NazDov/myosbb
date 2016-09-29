package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 04.09.2014.
 */
public class CreateAgreementPropertyPenyaQuery extends AbstractModifyQuery<Agreement> {
    @Override
    protected String getSQLQuery() {
        String qry =
         "INSERT INTO [dbo].[RegInfPenyaAgreement]\n" +
                "           (\n" +
                "           [AgreementID]\n" +
                "           ,[calcPenya]\n" +
                "           ,[period]\n ,[TypeCalculatePN])" +
                "     VALUES\n" +
                "           (?,?,(select top 1 currentPeriod from CurrentPeriod),?)";
        return qry;

    }
    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Agreement value) throws SQLException {
        st.setLong(1, value.getId());
        st.setBoolean(2, value.getAgreementPenyaProperty().getCalcPenya());
        st.setLong(3,value.getAgreementPenyaProperty().getTypesCalculatePN().getId());

    }
}
