package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.ContinueRepairOrCheck;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 06.11.2014.
 */
public class UpdateContinueRepairOrCheckQuery extends AbstractModifyQuery<ContinueRepairOrCheck> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[DocContinueRepairOrCheck]\n" +
                "   SET [DateToReturnCounter] = ?\n" +
                "      ,[ScepificDate] = ?\n" +
                "WHERE Id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, ContinueRepairOrCheck value) throws SQLException {
        st.setDate(1,new Date(value.getSpecefiedDate().getTime()));
        st.setDate(2,new Date(value.getSpecefiedDate().getTime()));
        st.setLong(3,value.getId());
    }
}
