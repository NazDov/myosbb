package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.HotWaterSupplier;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.HotWaterSupplierProperty;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ServiceContraAgentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 05.09.2014.
 */

public class SelectHotWaterSupplyPropertyQuery extends AbstractSelectQuery<HotWaterSupplier,ServiceContraAgentCondition> {


    public SelectHotWaterSupplyPropertyQuery(ServiceContraAgentCondition condition) {
        super(condition);
    }

    @Override
    protected HotWaterSupplier parseResultSet(ResultSet rs) throws SQLException {
        HotWaterSupplier ca = new HotWaterSupplier();
        HotWaterSupplierProperty property = new HotWaterSupplierProperty();
        property.setId(rs.getLong("id"));
        ca.setProperty(property);
        return ca;
    }

    @Override
    protected String getSQLQuery() {
        return  "SELECT top "+ Options.getMaxCountToSelectRow()+" [id]\n" +
                "  FROM [dbo].[RegInfHotWaterSupplier]\n" +
                "where period = (select top 1 currentPeriod from CurrentPeriod)\n" +
                "and hotWaterSupplierId = "+condition.getContraAgentID();
    }
}
