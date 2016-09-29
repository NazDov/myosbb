package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 23.09.2014.
 */
public class CreateRegisterOfCounterQuery extends AbstractModifyQuery<RegisterOfCounter> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[DocRegisterCounter]\n" +
                "           ([OnDate]\n" +
                "           ,[CounterID]\n" +
                "           ,[Number]\n" +
                "           ,[MetrCheckDate]\n" +
                "           ,[PlombNumber1]\n" +
                "           ,[PlombNumber2]\n" +
                "           ,[MetrPlomba]\n" +
                "           ,[RegInfDepartmentInputsID]\n" +
                "           ,[Period] \n" +
                "           ,[Status],[Returned],[Surname])\n" +
                "     VALUES\n" +
                "           (?,?,?,?,?,?,?,?,(select top 1 CurrentPeriod from CurrentPeriod),3,?,?)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return this.getInsertedID(st);
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, RegisterOfCounter value) throws SQLException {
        st.setDate(1,new Date(value.getOnDate().getTime()));
        st.setLong(2,value.getCounter().getId());
        st.setString(3,value.getNumber());
        st.setDate(4,new Date(value.getMetrCheckDate().getTime()));
        st.setString(5,value.getPlombNumber1());
        st.setString(6,value.getPlombNumber2());
        st.setString(7,value.getMetrPlomba());
        st.setLong(8,value.getRegInfDepartmentInputsID());
        st.setBoolean(9,value.isReturned());
        st.setString(10,value.getSurname());
    }
}
