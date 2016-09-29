package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CorrectionOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 23.09.2014.
 */
public class CreateCorrectionOfCounterQuery extends AbstractModifyQuery<CorrectionOfCounter> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[DocCorrectionCounters]\n" +
                "           ([ContraAgentID]\n" +
                "           ,[DepartmentID]\n" +
                "           ,[CounterID]\n" +
                "           ,[InputID]\n" +
                "           ,[Label]\n" +
                "           ,[ReasonID] "+
                "           ,[ReasonNumber] "+
                "           ,[ReasonDate],[Period])  "+
                "     VALUES\n" +
                "           (?,?,?,?,?,?,?,?,dbo.getCurrentPeriod())";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return this.getInsertedID(st);
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, CorrectionOfCounter value) throws SQLException {
        st.setLong(1,value.getContraAgent().getId());
        st.setLong(2,value.getDepartment().getId());
        st.setLong(3,value.getCounter().getId());
        st.setLong(4,value.getInput().getId());
        st.setString(5,value.getLabel());
        st.setLong(6,value.getReason().getId());
        st.setString(7,value.getReasonNumber());
        st.setDate(8,new Date(value.getReasonDate().getTime()));

    }
}
