package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 23.09.2014.
 */
public class CreateUnregisterCounterQuery extends AbstractModifyQuery<UnregisterOfCounter> {

    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[DocUnregisterCounter]\n" +
                "           ([OnDate]\n" +
                "           ,[CounterID]\n" +
                "           ,[Number]\n" +
                "           ,[ReasonTypeID]\n" +
                "           ,[FirstMonthForCalc]\n" +
                "           ,[SecondMonthForCalc]\n" +
                "           ,[DateTo]\n" +
                "           ,[NachOrNot]\n" +
                "           ,[Period]" +
                "           ,[contraAgentID]\n" +
                "           ,[DepartmentID]\n" +
                "           ,[InputID]\n" +
                "           ,[Surname],[DepartmentInputID])\n" +
                "     VALUES\n" +
                "           (?\n" +
                "           ,?\n" +
                "           ,?\n" +
                "           ,?\n" +
                "           ,?\n" +
                "           ,?\n" +
                "           ,?\n" +
                "           ,?\n" +
                "           ,dbo.getCurrentPeriod()"+
                "           ,?,?,?,?,?) ";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return getInsertedID(st);
        /*
        USE [LVKLegals_prod]
GO

SELECT [id]
      ,[OnDate]
      ,[CounterID]
      ,[Number]
      ,[ReasonTypeID]
      ,[FirstMonthForCalc]
      ,[SecondMonthForCalc]
      ,[DateTo]
      ,[NachOrNot]
      ,[Period]
      ,[contraAgentID]
      ,[DepartmentID]
      ,[InputID]
      ,[Surname]
      ,[DepartmentInputID]
  FROM [dbo].[DocUnregisterCounter]
GO


         */
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, UnregisterOfCounter value) throws SQLException {
        if (value.getDateActToUnPlomb() == null)
            st.setNull(1, Types.DATE);
        else
            st.setDate(1, new Date(value.getDateActToUnPlomb().getTime()));
        st.setLong(2,value.getCounter().getId());
        st.setString(3, value.getNumberAct());
        st.setLong(4, value.getOperationType().getId());
        if (value.getPeriodByMiddleCalculationOnMonth1() == null)
            st.setNull(5, Types.DATE);
        else
            st.setDate(5, new Date(value.getPeriodByMiddleCalculationOnMonth1().getTime()));
        if (value.getPeriodByMiddleCalculationOnMonth2() == null)
            st.setNull(6,Types.DATE);
        else
            st.setDate(6, new Date(value.getPeriodByMiddleCalculationOnMonth2().getTime()));
        if (value.getDateToReturnCounter() == null)
            st.setNull(7,Types.DATE);
        else
            st.setDate(7,new Date(value.getDateToReturnCounter().getTime()));
        st.setBoolean(8,value.getCalculateInPeriodUnregisterCounter());
        st.setLong(9,value.getContraAgent().getId());
        st.setLong(10,value.getDepartment().getId());
        st.setLong(11,value.getInput().getId());
        st.setString(12,value.getSurname());
        st.setLong(13,value.getDepartmentInput().getId());
    }
}
