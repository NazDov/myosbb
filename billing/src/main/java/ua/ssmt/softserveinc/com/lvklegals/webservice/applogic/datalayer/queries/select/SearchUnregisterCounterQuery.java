package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.UnregisterOfCounterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 23.09.2014.
 */
public class SearchUnregisterCounterQuery extends AbstractSelectQuery<UnregisterOfCounter,UnregisterOfCounterCondition> {

    public SearchUnregisterCounterQuery(UnregisterOfCounterCondition condition) {
        super(condition);
    }

    @Override
    protected UnregisterOfCounter parseResultSet(ResultSet rs) throws SQLException {
        UnregisterOfCounter res = new UnregisterOfCounter();
        res.setId(rs.getLong("id"));
        res.getCounter().setId(rs.getLong("CounterID"));
        res.setCalculateInPeriodUnregisterCounter(rs.getBoolean("NachOrNot"));
        res.getContraAgent().setId(rs.getLong("contraAgentID"));
        res.getDepartment().setId(rs.getLong("DepartmentID"));
        res.getInput().setId(rs.getLong("InputID"));
   //     res.setDateAct(rs.getDate("OnDate"));
        res.setDateActToUnPlomb(rs.getDate("OnDate"));
        res.setNumberAct(rs.getString("Number"));
        res.setPeriodByMiddleCalculationOnMonth1(rs.getDate("FirstMonthForCalc"));
        res.setPeriodByMiddleCalculationOnMonth2(rs.getDate("SecondMonthForCalc"));
        res.getOperationType().setId(rs.getLong("ReasonTypeID"));
        res.setDateToReturnCounter(rs.getDate("DateTo"));
        res.setDepartmentInput(new DepartmentInput(rs.getLong("regInfDepartmentInputID")));
        res.setPeriod(rs.getDate("Period"));
        res.setSurname(rs.getString("Surname"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT distinct top 200 doc.[id]\n" + " ");
        sb.append(        "      ,doc.[OnDate]\n" +  " ");
        sb.append(        "      ,doc.[CounterID]\n" +  " ");
        sb.append(        "      ,doc.[Number]\n" +  " ");
        sb.append(        "      ,doc.[ReasonTypeID]\n" + " ");
        sb.append(        "      ,doc.[FirstMonthForCalc]\n" +  " ");
        sb.append(        "      ,doc.[SecondMonthForCalc]\n" +  " ");
        sb.append(        "      ,doc.[DateTo]\n" +  " ");
        sb.append(        "      ,doc.[NachOrNot]\n" +  " ");
        sb.append(        "      ,doc.[Period]\n" +  " ");
        sb.append(        "      ,doc.[contraAgentID]\n" +  " ");
        sb.append(        "      ,doc.[DepartmentID]\n" +  " ");
        sb.append(        "      ,doc.[InputID]\n" +  " ");
        sb.append(        "      ,doc.[Surname]\n" +  " ");
        sb.append(        "      ,cntr.[Number]\n" +  " ");
        sb.append(        " ,factor.regInfDepartmentInputID  ");
        sb.append(        "  FROM [dbo].[DocUnregisterCounter] as doc \n" + " ");
        sb.append(        " left join DocInputFactors as factor on  ");
        sb.append(        " doc.id = factor.UnregisterDocumentID  ");
        sb.append(       "  left join RefCounters as cntr on   ");
        sb.append(       " doc.CounterID = cntr.id    ");
        sb.append(        " where 1=1 ");

        if ( condition.getContraAgentID() != null)
            sb.append(" and contraAgentID = "+condition.getContraAgentID());
        if (condition.getDepartmentID() != null )
            sb.append(" and DepartmentID = "+condition.getDepartmentID());
        if (condition.getId() != null)
            sb.append(" and doc.id = "+condition.getId());
        if (condition.getInputID() != null)
            sb.append("and InputID = "+condition.getInputID());
        if (condition.getCounterID() != null)
            sb.append("and doc.CounterID = "+condition.getCounterID());
        if (condition.getNumberAct() != null && condition.getNumberAct().isEmpty() == false)
            sb.append(" and doc.Number = '"+condition.getNumberAct().trim()+"'");
        if (condition.getDateAct() != null)
            sb.append(" and OnDate = "+this.getDateAsString(condition.getDateAct()));
        if (condition.getCounterNumber() != null && condition.getCounterNumber().isEmpty() == false)
            sb.append(" and cntr.Number = '"+condition.getCounterNumber().trim()+"'");
        sb.append(" order by doc.[OnDate] desc");
        ////(sb.toString());
        return sb.toString();
    }
}
