package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.calcinvoice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.RegisterOfCounterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.AbstractSelectPreCompileQuery;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 16.05.2015.
 */
public class GetRegisterOfCounterDocumentByDepartmentInput extends AbstractSelectPreCompileQuery<RegisterOfCounter,RegisterOfCounterCondition> {
    public GetRegisterOfCounterDocumentByDepartmentInput(Connection connection) {
        super(connection, null);
    }

    @Override
    protected void fillStatement(PreparedStatement st) throws SQLException {
        st.setLong(1,condition.getDepartmentInputID());
    }

    @Override
    protected RegisterOfCounter parseResultSet(ResultSet rs) throws SQLException {
        RegisterOfCounter res = new RegisterOfCounter();
        res.setMetrCheckDate(rs.getDate("MetrCheckDate"));
        res.setNumber(rs.getString("Number"));
        res.setOnDate(rs.getDate("OnDate"));
        res.setPlombNumber1(rs.getString("PlombNumber1"));
        res.setPlombNumber2(rs.getString("PlombNumber2"));
        res.setMetrPlomba(rs.getString("MetrPlomba"));
        res.setRegInfDepartmentInputsID(rs.getLong("RegInfDepartmentInputsID"));
        res.setId(rs.getLong("id"));
        res.setPeriod(rs.getDate("Period"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append( " SELECT top "+ Options.getMaxCountToSelectRow()+" d.[id] ");
        sb.append(       "      ,d.[OnDate] ");
        sb.append(       "      ,d.[CounterID] ");
        sb.append(       "      ,d.[Number] ");
        sb.append(       "      ,d.[MetrCheckDate]");
        sb.append(       "      ,d.[PlombNumber1] ");
        sb.append(       "      ,d.[PlombNumber2] ");
        sb.append(       "      ,d.[RegInfDepartmentInputsID]");
        sb.append(       "      ,d.[Period] ");
        sb.append(       "      ,d.[Status] ");
        sb.append(       "      ,d.[MetrPlomba] ");
        sb.append(       "  FROM [dbo].[DocRegisterCounter] as d ");
        sb.append(       " where status = 3 and period<dbo.getCurrentPeriod() ");
        sb.append(       " and RegInfDepartmentInputsID = ? ");
        sb.append(       " order by [OnDate] desc          ");
        return sb.toString();
    }
}
