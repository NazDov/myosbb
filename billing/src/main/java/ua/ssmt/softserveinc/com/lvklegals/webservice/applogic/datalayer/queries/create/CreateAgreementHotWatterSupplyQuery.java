package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.HotWaterSupplyAgreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 20.11.2014.
 */
public class CreateAgreementHotWatterSupplyQuery extends AbstractModifyQuery<HotWaterSupplyAgreement> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[DocAgreementSupplier]\n" +
                "           ([HotWaterSupplierId]\n" +
                "           ,[DateAgreement]\n" +
                "           ,[NumberAgreement]\n" +
                "           ,[period])\n" +
                "     VALUES\n" +
                "           (?,?,?,dbo.getCurrentPeriod())";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, HotWaterSupplyAgreement value) throws SQLException {
        if (value.getHotWaterSupplier() == null)
            st.setNull(1, Types.BIGINT);
        else
            st.setLong(1,value.getHotWaterSupplier().getId());

        st.setDate(2, new Date(value.getBeginDate().getTime())); 
        st.setString(3,value.getAgreementNumber());
    }
}
