package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Input;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 08.10.2014.
 */
public class GetLastFactorByCounterQuery extends AbstractSelectQuery<InputFactor,Counter> {

    public GetLastFactorByCounterQuery(Counter condition) {
        super(condition);
    }

    @Override
    protected InputFactor parseResultSet(ResultSet rs) throws SQLException {
        InputFactor res = new InputFactor();
        res.setBeginFactor(rs.getInt("BeginFactor"));
        res.setEndFactor(rs.getInt("EndFactor"));
        res.setVolume(res.getEndFactor()-res.getBeginFactor());
        res.setInput(this.fillInput(rs));
        res.setFactorOnBeginMonth(rs.getInt("FactorOnBeginMonth"));
        res.setCodeConto(rs.getString("CodeKonto"));
        res.setConto(rs.getString("conto"));
        res.setAgreement(rs.getString("AgreementNumber"));
        res.setPeriod(rs.getDate("Period"));
        res.setOnDate(rs.getDate("OnDate"));
        return res;
    }

    private Input fillInput(ResultSet rs) throws SQLException {
        Input res = new Input();
        res.setId(rs.getLong("inputID"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT  top 1 ");
        sb.append(" f.[id]  ");
        sb.append(" ,f.[OnDate]  ");
        sb.append(" ,f.[CounterID]  ");
        sb.append(" ,f.[BeginFactor]  ");
        sb.append(" ,f.[FactorType]  ");
        sb.append(" ,f.[DocumentID]  ");
        sb.append(" ,f.[DocType]  ");
        sb.append(" ,f.[Period]  ");
        sb.append(" ,f.[EndFactor]  ");
        sb.append(" ,di.InputID as inputID,f.FactorOnBeginMonth   ");
        sb.append(" ,e.CodeKonto ");
        sb.append(" ,e.conto ");
        sb.append(" ,agr.AgreementNumber ");
        sb.append(" , doc.id as RegisterID ");

        sb.append(" FROM [dbo].[DocInputFactors] as f  ");
        sb.append(" left join SysCounterStatuses as ss on  ");
        sb.append(" f.CounterID = ss.CounterID  ");
        sb.append(" left join DocRegisterCounter as doc on  ");
        sb.append(" doc.id = ss.DocRegisterCounterID   ");
        sb.append(" left join RegInfDepartsInputs as di on   ");
        sb.append(" doc.RegInfDepartmentInputsID  = di.id   ");
        sb.append(" left join RefDepartaments as d ");
        sb.append(" on di.DepartmentID=d.id ");
        sb.append(" left join RegInfDepartamentCharacters as e ");
        sb.append(" on e.DepartmentID = d.id");
        sb.append(" left join RefContragents as con ");
        sb.append(" on d.ConraAgentID = con.id ");
        sb.append(" left join DocAgreement as agr ");
        sb.append(" on agr.ContraAgentID = con.id ");

        sb.append(" where f.Period <= dbo.getCurrentPeriod()  ");
        sb.append(" and ss.Period <= dbo.getCurrentPeriod()   ");
        sb.append(" and ss.CounterStatusID = 2   ");
        sb.append(" and f.CounterID = "+condition.getId());
        sb.append(" order by f.OnDate desc ");
        return sb.toString();
    }

}
