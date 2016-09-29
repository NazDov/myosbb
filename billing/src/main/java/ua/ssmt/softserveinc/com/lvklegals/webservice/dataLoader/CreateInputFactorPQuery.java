package ua.ssmt.softserveinc.com.lvklegals.webservice.dataLoader;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.AbstractModifyPrecompileQuery;

import java.sql.*;

/**
 * Created by vostap on 19.04.2016.
 */
public class CreateInputFactorPQuery extends AbstractModifyPrecompileQuery<InputFactor> {
    public CreateInputFactorPQuery(Connection connection) {
        super(connection);
    }

    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[DocInputFactors]\n" +
                "           ([CounterID]\n" +
                "           ,[BeginFactor]\n" +
                "           ,[FactorType]\n" +
                "           ,[DocumentID]\n" +
                "           ,[DocType]\n" +
                "           ,[Period]\n" +
                "           ,[EndFactor]\n" +
                "           ,[RegInfDepartmentInputID]\n" +
                "           ,[UnregisterDocumentID], [CorrectionDocumentID],[FactorOnBeginMonth] \n" +
                "           ,[OnDate])\n" +
                "     VALUES\n" +
                "           (\n" +
                "           ?\n" +
                "           ,?\n" +
                "           ,?\n" +
                "           ,?\n" +
                "           ,?\n" +
                "           ,?\n" +
                "           ,?\n" +
                "           ,?,?,?,?,?)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, InputFactor value) throws SQLException {
        st.setLong(1,value.getCounter().getId());
        st.setInt(2,value.getBeginFactor());
        st.setLong(3,value.getFactorTypeID());
        if (value.getDocumentID() == null || value.getDocumentID() == 0)
            st.setNull(4, Types.BIGINT);
        else
            st.setLong(4,value.getDocumentID());
        st.setInt(5,value.getDoctype());
        st.setDate(6, new Date(value.getPeriod().getTime()));
        st.setInt(7, value.getEndFactor());
        st.setLong(8,value.getWiringID());
        if (value.getUnregisterDocumentID() == null || value.getUnregisterDocumentID() == 0)
            st.setNull(9,Types.BIGINT);
        else
            st.setLong(9,value.getUnregisterDocumentID());
        if (value.getCorrectionDocumentID() == null|| value.getCorrectionDocumentID() ==0)
            st.setNull(10,Types.BIGINT);
        else
            st.setLong(10,value.getCorrectionDocumentID());
        st.setInt(11,value.getFactorOnBeginMonth());
        /*if (value.getDateFactorRemove() == null)
            st.setNull(12, Types.DATE);
        else
            st.setDate(12, new Date(value.getDateFactorRemove().getTime()));
        st.setDate(13,new Date(value.getOnDate().getTime()));*/
    }
}
