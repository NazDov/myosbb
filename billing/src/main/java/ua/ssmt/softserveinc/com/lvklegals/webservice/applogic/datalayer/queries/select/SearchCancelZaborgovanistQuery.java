package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ServicePayment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CancelZaborgovanist;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CancelZaborgovanistCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 6/23/2015.
 */
public class SearchCancelZaborgovanistQuery extends AbstractSelectQuery<CancelZaborgovanist, CancelZaborgovanistCondition>  {
    public SearchCancelZaborgovanistQuery(CancelZaborgovanistCondition condition) {
        super(condition);
    }

    @Override
    protected CancelZaborgovanist parseResultSet(ResultSet rs) throws SQLException {
        CancelZaborgovanist res = new CancelZaborgovanist();
        res.setId(rs.getLong("id"));
        res.setSum(rs.getDouble("suma"));
        res.setPeriod(rs.getDate("period"));
        res.setContraAgent(fillContraAgent(rs));
        res.setAgreement(fillAgreement(rs));
        res.setService(fillService(rs));
        res.setNote(rs.getString("Label"));

        return res;
    }


    private ContraAgent fillContraAgent(ResultSet rs) throws SQLException {
        ContraAgent res = new ContraAgent();
        res.setId(rs.getLong("contrAgentID"));
        return res;
    }

    private Agreement fillAgreement(ResultSet rs) throws SQLException {
        Agreement res = new Agreement();
        res.setId(rs.getLong("agreementId"));
        return res;
    }

    private ServicePayment fillService(ResultSet rs) throws SQLException {
        ServicePayment res = new ServicePayment();
        res.setId(rs.getLong("serviceId"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT   p.id   ");
        sb.append(" ,p.contrAgentID  ");
        sb.append(" ,p.agreementId   ");
        sb.append(" ,p.serviceId   ");
        sb.append(" ,p.suma  ");
        sb.append(" ,p.Label  ");
        sb.append(" ,p.period   ");
        sb.append(" FROM DocCancelZaborgovanist as p ");
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
