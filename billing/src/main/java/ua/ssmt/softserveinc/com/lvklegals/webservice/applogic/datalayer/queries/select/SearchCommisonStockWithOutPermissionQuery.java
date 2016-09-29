package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.DocCorrectionStockWithOutPermission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DocCommisionStockWithOutPermissionCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 6/23/2015.
 */
public class SearchCommisonStockWithOutPermissionQuery extends AbstractSelectQuery<DocCorrectionStockWithOutPermission,DocCommisionStockWithOutPermissionCondition>  {
    public SearchCommisonStockWithOutPermissionQuery(DocCommisionStockWithOutPermissionCondition condition) {
        super(condition);
    }

    @Override
    protected DocCorrectionStockWithOutPermission parseResultSet(ResultSet rs) throws SQLException {
        DocCorrectionStockWithOutPermission res = new DocCorrectionStockWithOutPermission();
        res.setId(rs.getLong("id"));
        res.setSum(rs.getDouble("suma"));
        res.setPeriod(rs.getDate("period"));
        res.setContraAgent(fillContraAgent(rs));
        res.setAgreement(fillAgreement(rs));
        res.setNote(rs.getString("note"));
        res.setNumberReason(rs.getString("numberDocumentReason"));
        res.setDateReason(rs.getDate("dateReason"));

        return res;
    }


    private ContraAgent fillContraAgent(ResultSet rs) throws SQLException {
        ContraAgent res = new ContraAgent();
        res.setId(rs.getLong("contrAgentID"));
        return res;
    }

    private Agreement fillAgreement(ResultSet rs) throws SQLException {
        Agreement res = new Agreement();
        res.setId(rs.getLong("agreementID"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT   p.id   ");
        sb.append(" ,p.contrAgentID  ");
        sb.append(" ,p.agreementID   ");
        sb.append(" ,p.dateReason  ");
        sb.append(" ,p.suma  ");
        sb.append(" ,p.note  ");
        sb.append(" ,p.numberDocumentReason");
        sb.append(" ,p.period   ");
        sb.append(" FROM DocCorrectionForStockWithOutPermission as p ");
        sb.append(" where 1=1 ");
        if (condition.getId() != null)
            sb.append(" and p.id = "+condition.getId());
        if (condition.getContraAgentID() != null)
            sb.append(" and p.contrAgentID = "+condition.getContraAgentID());
        if (condition.getPeriod() != null)
            sb.append(" and p.period = "+this.getDateAsString(condition.getPeriod()));
        return sb.toString();
    }
}
