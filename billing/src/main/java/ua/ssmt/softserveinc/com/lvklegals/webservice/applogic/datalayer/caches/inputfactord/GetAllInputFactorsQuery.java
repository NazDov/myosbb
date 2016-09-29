package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.inputfactord;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 24.12.2015.
 */
public class GetAllInputFactorsQuery extends AbstractSelectQuery<InputFactor,Void> {
    public GetAllInputFactorsQuery(Void condition) {
        super(condition);
    }

    @Override
    protected InputFactor parseResultSet(ResultSet rs) throws SQLException {
        InputFactor factor = new InputFactor();
        factor.setBeginFactor(rs.getInt("BeginFactor"));
        factor.setId(rs.getLong("id"));
        factor.setCounter(new Counter(rs.getLong("CounterID")));
        factor.setDocumentID(rs.getLong("DocumentID"));
        factor.setEndFactor(rs.getInt("EndFactor"));
        factor.setWiringID(rs.getLong("RegInfDepartmentInputID"));
        factor.setFactorOnBeginMonth(rs.getInt("FactorOnBeginMonth"));
        factor.setPeriod(rs.getDate("Period"));
        return factor;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select * from DocInputFactors   ");
        sb.append("   where      ");
        sb.append(" RegInfDepartmentInputID in (select departmentInputID from dbo.getDepartmentInputByID())  ");
        sb.append(" order by OnDate desc  ");
        return  sb.toString();
    }
}
