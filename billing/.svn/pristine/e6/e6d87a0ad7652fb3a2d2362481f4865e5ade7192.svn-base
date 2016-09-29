package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CancelZaborgovanist;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vstoian on 27.01.2015.
 */
public class CreateCancelZaborgovanistQuery extends AbstractModifyQuery<CancelZaborgovanist> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[DocCancelZaborgovanist]\n" +
                "           ([period]\n" +
                "           ,[contrAgentID]\n" +
                "           ,[agreementId]\n" +
                "           ,[serviceId]\n" +
                "           ,[suma]\n" +
                "           ,[Label])\n" +
                "     VALUES\n" +
                "           (dbo.getCurrentPeriod(),?,?,?,?,?)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, CancelZaborgovanist value) throws SQLException {
        st.setLong(1, value.getContraAgent().getId());
        st.setLong(2, value.getAgreement().getId());
        st.setLong(3, value.getService().getId());
        st.setDouble(4, value.getSum());
        st.setString(5, value.getNote());
      
    }
}
