package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 27.08.2014.
 */
public class UpdateContraAgentQuery extends AbstractModifyQuery<ContraAgent> {

    @Override
    protected String getSQLQuery() {
        return "UPDATE [RefContragents] " +
                "   SET [EDRPO] = ? " +
                "      ,[IPN] = ? " +
                "      ,[VATNum] = ? " +
                "      ,[VATDate] = ? " +
                "      ,[RegistrDate] = ? " +
                "      ,[CountryName] = ? " +
                "      ,[MailIndexClient] = ? " +
                "      ,[StreetName] = ? " +
                "      ,[NumberHouse] = ? " +
                "      ,[CityName] = ? " +
                "      ,[OblsatName] = ? " +
                "      ,[HotWatterSupplier] = ? " +
                "      ,[filija] = ? " +
                "      ,[RajonName] = ? " +

                " WHERE [ID] = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, ContraAgent contraAgent) throws SQLException {
        st.setString(1,contraAgent.getEDRPO());
        st.setString(2,contraAgent.getIPN());
        st.setString(3,contraAgent.getVATNum());
        if (contraAgent.getVatDate() == null)
            st.setNull(4, Types.DATE);
        else
           st.setDate(4, new Date(contraAgent.getVatDate().getTime()));
        if (contraAgent.getRegisterDate() ==null)
            st.setNull(5,Types.DATE);
        else
            st.setDate(5, new Date(contraAgent.getRegisterDate().getTime()));
        st.setString(6,contraAgent.getCountryName());
        st.setString(7,contraAgent.getMailIndexClient());
        st.setString(8,contraAgent.getStreetName());
        st.setString(9,contraAgent.getNumberHouse());
        st.setString(10,contraAgent.getCityName());
        st.setString(11,contraAgent.getOblsatName());
        st.setBoolean(12,contraAgent.getHotWatterSupplier());
        st.setString(13,contraAgent.getFilija());
        st.setString(14,contraAgent.getRajonName());
        st.setLong(15,contraAgent.getId());

    }


}
