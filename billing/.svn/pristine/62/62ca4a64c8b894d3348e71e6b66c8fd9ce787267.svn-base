package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.ContinueRepairOrCheck;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 06.11.2014.
 */
public class CreateContinueRepairOrCheckQuery extends AbstractModifyQuery<ContinueRepairOrCheck> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[DocContinueRepairOrCheck]\n" +
                "           ([ContraAgentID]\n" +
                "           ,[DepartmentID]\n" +
                "           ,[InputID]\n" +
                "           ,[CounterID]\n" +
                "           ,[NumberAct]\n" +
                "           ,[DateToReturnCounter]\n" +
                "           ,[ScepificDate]\n" +
                "           ,[Period],[UnregisterDocID])\n" +
                "     VALUES\n" +
                "           (?,?,?,?,?,?,?,dbo.getCurrentPeriod(),?)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, ContinueRepairOrCheck value) throws SQLException {
        st.setLong(1,value.getContraAgent().getId());
        st.setLong(2,value.getDepartment().getId());
        st.setLong(3,value.getInput().getId());
        st.setLong(4,value.getCounter().getId());
        st.setString(5,value.getNumberAct());
        st.setDate(6,new Date(value.getDateToReturn().getTime()));
        st.setDate(7,new Date(value.getSpecefiedDate().getTime()));
        st.setLong(8,value.getUnregisterOfCounter().getId());
    }
}
