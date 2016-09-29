package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.invoice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 11/23/2015.
 */
public class CheckRegisterAndReturnLastFactorV2 extends AbstractSelectQuery<InputFactor,DepartmentInput> {
    public CheckRegisterAndReturnLastFactorV2(DepartmentInput condition) {
        super(condition);
    }

    @Override
    protected InputFactor parseResultSet(ResultSet rs) throws SQLException {
        InputFactor res = new InputFactor();
        res.setBeginFactor(rs.getInt("BeginFactor"));
        res.setEndFactor(rs.getInt("EndFactor"));
        res.setVolume(res.getEndFactor()-res.getBeginFactor());
        res.setFactorOnBeginMonth(rs.getInt("FactorOnBeginMonth"));
        res.setDocumentID(rs.getLong("DocumentID"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" declare @departmetnInputID bigint =  "+condition.getId());
        sb.append(" SELECT f.CounterID,       ");
        sb.append("         DocumentID,         ");
        sb.append("         max(OnDate) as onDate,              ");
        sb.append("   max(BeginFactor)as beginFactor              ");
        sb.append("   ,max(EndFactor) as endFactor,               ");
        sb.append("     max(FactorOnBeginMonth) as FactorOnBeginMonth    ");
        sb.append("     FROM [dbo].[DocInputFactors] as f               ");
        sb.append("  where f.Period <= dbo.getCurrentPeriod()            ");
        sb.append("  and f.CounterID = dbo.checkIsRegisteredCounter(@departmetnInputID)   ");
        sb.append("  group by f.CounterID,DocumentID  order by OnDate asc    ");

        return sb.toString();
    }
}
