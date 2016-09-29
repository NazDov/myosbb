package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.HotWaterSupplier;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 27.08.2014.
 */
public class CreateHotWaterSupplyQuery extends AbstractModifyQuery<HotWaterSupplier> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [RefHotWaterSupplier] " +
                "         ([EDRPO] " +
                "         ,[IPN] " +
                "         ,[CountryName]" +
                "         ,[MailIndexClient]" +
                "         ,[StreetName]"  +
                "         ,[NumberHouse]"  +
                "         ,[CityName]" +
                "         ,[OblsatName])" +
                "          VALUES (?,?,?,?,?,?,?,?)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return this.getInsertedID(st);
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, HotWaterSupplier hotWaterSupplier) throws SQLException {
        st.setString(1,hotWaterSupplier.getEDRPO());
        st.setString(2,hotWaterSupplier.getIPN());
        st.setString(3,hotWaterSupplier.getCountryName());
        st.setString(4,hotWaterSupplier.getMailIndexClient());
        st.setString(5,hotWaterSupplier.getStreetName());
        st.setString(6,hotWaterSupplier.getNumberHouse());
        st.setString(7,hotWaterSupplier.getCityName());
        st.setString(8,hotWaterSupplier.getOblsatName());

    }
}