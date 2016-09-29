package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.agreementsupplier;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.HotWaterSupplier;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.HotWaterSupplyAgreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 05.01.2016.
 */
public class AgreementSupplierQuery extends AbstractSelectQuery<HotWaterSupplyAgreement,Void> {
    public AgreementSupplierQuery(Void condition) {
        super(condition);
    }

    @Override
    protected HotWaterSupplyAgreement parseResultSet(ResultSet rs) throws SQLException {
        HotWaterSupplyAgreement res = new HotWaterSupplyAgreement();
        res.setId(rs.getLong("id"));
        res.setContraAgent(new ContraAgent(rs.getLong("ContraAgentID")));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT [id],[ContraAgentID]   ");
        sb.append(" FROM [dbo].[DocAgreement]  ");
        sb.append(" where   ");
        sb.append(" ContraAgentID in   ");
        sb.append(" (select id from RefContragents where HotWatterSupplier = 1)   ");
        return sb.toString();
    }
}
