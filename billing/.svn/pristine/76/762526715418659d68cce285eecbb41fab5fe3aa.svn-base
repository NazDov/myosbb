package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.HotWaterSupplier;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 27.08.2014.
 */
public class UpdateHotWatterSupplierQuery extends AbstractModifyQuery<HotWaterSupplier> {

    @Override
    protected String getSQLQuery() {
        return "UPDATE [RefContragents] " +
                "   SET [EDRPO] = ? " +
                "      ,[IPN] = ? " +
                "      ,[CountryName] = ? " +
                "      ,[MailIndexClient] = ? " +
                "      ,[StreetName] = ? " +
                "      ,[NumberHouse] = ? " +
                "      ,[CityName] = ? " +
                "      ,[OblsatName] = ? " +
                " WHERE [ID] = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, HotWaterSupplier contraAgent) throws SQLException {
        st.setString(1,contraAgent.getEDRPO());
        st.setString(2,contraAgent.getIPN());
        st.setString(3,contraAgent.getCountryName());
        st.setString(4,contraAgent.getMailIndexClient());
        st.setString(5,contraAgent.getStreetName());
        st.setString(6,contraAgent.getNumberHouse());
        st.setString(7,contraAgent.getCityName());
        st.setString(8,contraAgent.getOblsatName());
        st.setLong(9, contraAgent.getId());

    }


}
