package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.HotWaterSupplyAgreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 20.11.2014.
 */
public class UpdateAgreementHotWatterSupplyQuery extends AbstractModifyQuery<HotWaterSupplyAgreement> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[DocAgreementSupplier]\n" +
                "   SET " +
                "       [DateAgreement] = ?\n" +
                "      ,[NumberAgreement] = ?\n" +
                " WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, HotWaterSupplyAgreement value) throws SQLException {
        st.setDate(1,new Date(value.getBeginDate().getTime()));
        st.setString(2,value.getAgreementNumber());
        st.setLong(3,value.getId());
    }
}
