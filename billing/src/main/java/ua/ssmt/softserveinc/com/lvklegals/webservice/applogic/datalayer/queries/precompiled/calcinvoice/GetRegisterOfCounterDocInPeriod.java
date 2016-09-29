package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.calcinvoice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils.DateUtils;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.RegisterOfCounterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.AbstractSelectPreCompileQuery;

import java.sql.*;

/**
 * Created by vostap on 14.05.2015.
 */
public class GetRegisterOfCounterDocInPeriod extends AbstractSelectPreCompileQuery<RegisterOfCounter,RegisterOfCounterCondition> {
    public GetRegisterOfCounterDocInPeriod(Connection connection) {
        super(connection,null);
    }

    @Override
    protected void fillStatement(PreparedStatement st) throws SQLException {
        Date d1 = new Date(DateUtils.getFirstDayOfMonth(condition.getPeriod()).getTime());
        Date d2 = new Date(DateUtils.getLastDayOfMonth(condition.getPeriod()).getTime());
        st.setDate(1, d1);
        st.setDate(2, d2);
        st.setLong(3,condition.getDepartmentInputID());
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
        sb.append(" SELECT [id]    ");
        sb.append(" ,[OnDate]    ");
        sb.append(" ,[CounterID]   ");
        sb.append(" ,[Number]    ");
        sb.append(" ,[MetrCheckDate]   ");
        sb.append(" ,[PlombNumber1]   ");
        sb.append(" ,[PlombNumber2]   ");
        sb.append(" ,[RegInfDepartmentInputsID]   ");
        sb.append(" ,[Period]   ");
        sb.append(" ,[Status]   ");
        sb.append(" ,[MetrPlomba]   ");
        sb.append(" FROM [dbo].[DocRegisterCounter]   ");
        sb.append(" where onDate > ? and onDate <= ?   ");
        sb.append(" and RegInfDepartmentInputsID = ?   ");
        sb.append(" order by [OnDate]  desc");
        return sb.toString();
    }
}
