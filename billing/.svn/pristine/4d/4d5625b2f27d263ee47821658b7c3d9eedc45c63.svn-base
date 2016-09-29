package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 20.11.2014.
 */
public class UpdateAgreementQuery extends AbstractModifyQuery<Agreement> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[DocAgreement]\n" +
                "   SET " +
                "       [DateBegin] = ?\n" +
                "      ,[DateEnd] = ?\n" +
                "      ,[TypeAgreementID] = ?\n" +
                "      ,[KindAgreementID] = ?\n" +
                "      ,[AgreementNumber] = ?\n" +
                "      ,[DepartmentID] = ?\n" +
                "      ,[IsActive] = ?\n" +
                " WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Agreement value) throws SQLException {
        st.setDate(1,new Date(value.getBeginDate().getTime()));
        if (value.getEndDate() == null)
            st.setNull(2, Types.DATE);
        else
            st.setDate(2,new Date(value.getEndDate().getTime()));
        st.setLong(3,value.getTypeAgreement().getId());
        st.setLong(4,value.getKindAgreement().getId());
        st.setString(5,value.getAgreementNumber());
        if (value.getDepartment() == null)
            st.setNull(6, Types.BIGINT);
        else
            st.setLong(6,value.getDepartment().getId());
        st.setBoolean(7,value.isActive());
        st.setLong(8,value.getId());
    }
}
