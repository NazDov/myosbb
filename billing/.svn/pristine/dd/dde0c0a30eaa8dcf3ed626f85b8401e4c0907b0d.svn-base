package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 20.11.2014.
 */
public class CreateAgreementQuery extends AbstractModifyQuery<Agreement> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[DocAgreement]\n" +
                "           ([ContraAgentID]\n" +
                "           ,[DateBegin]\n" +
                "           ,[DateEnd]\n" +
                "           ,[TypeAgreementID]\n" +
                "           ,[KindAgreementID]\n" +
                "           ,[Period]" +
                "           ,[AgreementNumber]\n" +
                "           ,[DepartmentID]\n" +
                "           ,[IsActive])\n" +
                "     VALUES\n" +
                "           (?,?,?,?,?,dbo.getCurrentPeriod(),?,?,?)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return this.getInsertedID(st);
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Agreement value) throws SQLException {
        if (value.getContraAgent() == null)
            st.setNull(1, Types.BIGINT);
        else
            st.setLong(1,value.getContraAgent().getId());

        st.setDate(2,new Date(value.getBeginDate().getTime()));
        if (value.getEndDate() == null)
            st.setNull(3, Types.DATE);
        else
            st.setDate(3,new Date(value.getEndDate().getTime()));

        st.setLong(4,value.getTypeAgreement().getId());
        st.setLong(5,value.getKindAgreement().getId());
        st.setString(6,value.getAgreementNumber());
        if (value.getDepartment() == null)
            st.setNull(7, Types.BIGINT);
        else
            st.setLong(7,value.getDepartment().getId());

        st.setBoolean(8,value.isActive());
    }
}
