package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CalcInvoiceVolumeLKP;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CalcInvoiceVolumeLKPCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 6/2/2015.
 */
public class SearchInvoiceVolumeByLKPQuery extends AbstractSelectQuery<CalcInvoiceVolumeLKP,CalcInvoiceVolumeLKPCondition> {
    public SearchInvoiceVolumeByLKPQuery(CalcInvoiceVolumeLKPCondition condition) {
        super(condition);
    }

    @Override
    protected CalcInvoiceVolumeLKP parseResultSet(ResultSet rs) throws SQLException {
        CalcInvoiceVolumeLKP res = new CalcInvoiceVolumeLKP();
        res.setDepartmentInput(new DepartmentInput(rs.getLong("RegInfDepartmentID")));
        res.setId(rs.getLong("Id"));
        res.setSum(rs.getDouble("Sum"));
        res.setVolume(rs.getDouble("CalcVolume"));
        res.setTarrif(rs.getDouble("Tariff"));
        res.setPeriod(rs.getDate("Period"));
        res.setSumWithPdv(rs.getDouble("sumWithpdv"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT  doc.RegInfDepartmentID,Tariff,SubServiceID,CalcVolume,doc.id as id, doc.sum,doc.Period,doc.sumWithpdv ");
        sb.append(" FROM [dbo].[calculateVolumeLKP] as doc   ");
        sb.append(" left join RegInfDepartsInputs as di on   ");
        sb.append(" doc.RegInfDepartmentID = di.id    ");
        sb.append(" left join RefDepartaments as dep on   ");
        sb.append(" dep.id = di.DepartmentID    ");
        sb.append(" where 1=1    ");
        if (condition.getContraAgentID() != null)
            sb.append(" and dep.ConraAgentID = "+condition.getContraAgentID());
        if (condition.getPeriod() != null)
            sb.append(" and doc.Period = "+getDateAsString(condition.getPeriod()));
        if (condition.getDepartmentID() != null)
            sb.append("and DepartmentID = "+condition.getDepartmentID());
        if (condition.getDepartmentAgreementID() != null)
            sb.append("and DepartmentAgreementID = "+condition.getDepartmentAgreementID());
        return sb.toString();
    }
}
