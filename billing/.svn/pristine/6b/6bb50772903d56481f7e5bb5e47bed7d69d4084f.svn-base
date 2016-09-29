package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.HotWaterSupplier;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 27.08.2014.
 */
public class UpdateHotWatterSupplierPropertyQuery extends AbstractModifyQuery<HotWaterSupplier> {

    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[RegInfKontragentProperty]  \n" +
                "    SET  [hotWaterSupplierId] = ? \n" +
                "      ,[SourceOfFunds] = ? \n" +
                "      ,[Limit] = ? \n" +
                "      ,[Period] =  (select top 1 currentPeriod from CurrentPeriod) \n" +
                "      ,[CategoryKontragentID] =  ? \n" +
                "      ,[FullName] =  ? \n" +
                "      ,[ShortName] = ?  \n" +
                "      ,[BankID] =  ? \n" +
                "      ,[BankAccount] = ? \n" +
                " WHERE [id] = ? \n";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, HotWaterSupplier contraAgent) throws SQLException {

        st.setLong(1,contraAgent.getId());
        st.setLong(2,contraAgent.getProperty().getSourceWaterSupply().getId());
        if (contraAgent.getProperty().getLimitConsuming() == null)
            st.setNull(3, Types.DOUBLE);
        else
            st.setDouble(3,contraAgent.getProperty().getLimitConsuming());
        st.setLong(4,contraAgent.getProperty().getContraAgentCategory().getId());
        st.setString(5,contraAgent.getProperty().getFullName());
        st.setString(6,contraAgent.getProperty().getShortName());
        if (contraAgent.getProperty().getBank() == null)
            st.setNull(7, Types.BIGINT);
        else
            st.setLong(7,contraAgent.getProperty().getBank().getId());
        st.setString(8,contraAgent.getProperty().getBankAccount());


    }
}
