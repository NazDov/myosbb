package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.HotWaterSupplier;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.HotWaterSupplyAgreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AgreementHotWatterSupplyCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 19.11.2014.
 */
public class SearchAgreementHotWatterSupplyQuery extends AbstractSelectQuery<HotWaterSupplyAgreement,AgreementHotWatterSupplyCondition> {
    public SearchAgreementHotWatterSupplyQuery(AgreementHotWatterSupplyCondition condition) {
        super(condition);
    }

    @Override
    protected HotWaterSupplyAgreement parseResultSet(ResultSet rs) throws SQLException {
        HotWaterSupplyAgreement res = new HotWaterSupplyAgreement();
        res.setId(rs.getLong("id"));
        res.setBeginDate(rs.getDate("DateAgreement"));
        res.setHotWaterSupplier(this.fillHotWaterSupplier(rs));
        res.setAgreementNumber(rs.getString("NumberAgreement"));

        return res;
    }


    private HotWaterSupplier fillHotWaterSupplier(ResultSet rs) throws SQLException {
        HotWaterSupplier res = new HotWaterSupplier();
        res.setId(rs.getLong("HotWaterSupplierId"));
        return res;
    }



    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" [id]   ");
        sb.append(" ,[HotWaterSupplierId]  ");
        sb.append(" ,[DateAgreement]   ");
        sb.append(" ,[NumberAgreement]   ");
        sb.append(" FROM [dbo].[DocAgreementSupplier] where 1=1 ");
        if (condition.getAgreementNumber() != null)
            sb.append(" and NumberAgreement = '"+condition.getAgreementNumber()+"'");
        if (condition.getHotwaterSupplierId() != null)
            sb.append(" and HotWaterSupplierId = "+condition.getHotwaterSupplierId());

        return sb.toString();
    }
}
