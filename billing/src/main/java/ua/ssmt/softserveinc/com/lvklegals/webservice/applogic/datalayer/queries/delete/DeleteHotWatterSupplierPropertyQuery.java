package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.HotWaterSupplier;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 05.09.2014.
 */
public class DeleteHotWatterSupplierPropertyQuery extends AbstractModifyQuery<HotWaterSupplier> {


    @Override
    protected String getSQLQuery() {
        return "DELETE FROM [RegInfHotWaterSupplier] \n" +
                "\t where hotWaterSupplierId = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, HotWaterSupplier value) throws SQLException {
         st.setLong(1,value.getId());
    }
}
