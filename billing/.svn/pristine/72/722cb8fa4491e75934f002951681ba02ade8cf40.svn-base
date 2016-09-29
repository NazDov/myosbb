package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.HotWaterSupplier;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 27.08.2014.
 */
public class CreateHotWatterSupplyPropQuery extends AbstractModifyQuery<HotWaterSupplier> {

    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[RegInfHotWaterSupplier]\n" +
                "           ([hotWaterSupplierId]\n" +
                "           ,[Period]\n" +
                "           ,[BankID]\n" +
                "           ,[BankAccount]\n" +
                "           ,[FullName]\n" +
                "           ,[ShortName]\n" +
                "           ,[SourceOfFunds]\n" +
                "           ,[CategoryKontragentID]\n" +
                "           ,[Limit])\n" +
                "     VALUES (?,(select top 1 currentPeriod from CurrentPeriod),?,?,?,?,?,?,?) ";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, HotWaterSupplier hotWaterSupplier) throws SQLException {
        st.setLong(1,hotWaterSupplier.getId());
        if (hotWaterSupplier.getProperty().getBank() == null)
            st.setNull(2, Types.BIGINT);
        else
            st.setLong(2,hotWaterSupplier.getProperty().getBank().getId());
        st.setString(3,hotWaterSupplier.getProperty().getBankAccount());
        st.setString(4,hotWaterSupplier.getProperty().getFullName());
        st.setString(5,hotWaterSupplier.getProperty().getShortName());
        st.setLong(6,hotWaterSupplier.getProperty().getGroupWatterSupply().getId());
        st.setLong(7,hotWaterSupplier.getProperty().getContraAgentCategory().getId());
        if (hotWaterSupplier.getProperty().getLimitConsuming() == null)
            st.setNull(8, Types.DOUBLE);
        else
            st.setDouble(8,hotWaterSupplier.getProperty().getLimitConsuming());

    }
}
