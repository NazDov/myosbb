package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 23.09.2014.
 */
public class CreateDepartmentInputQuery extends AbstractModifyQuery<DepartmentInput> {

    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[RegInfDepartsInputs]\n" +
                "           ([Period]\n" +
                "           ,[DateWirring]\n" +
                "           ,[DepartmentID]\n" +
                "           ,[InputID],[DateStart],[DateEnd],[hotSupplierID])\n" +
                "     VALUES\n" +
                "           ((select top 1 currentPeriod from CurrentPeriod),(GETDATE()),?,?,?,?,?)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return this.getInsertedID(st);
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, DepartmentInput value) throws SQLException {
        st.setLong(1,value.getDepartment().getId());
        st.setLong(2,value.getInput().getId());
        if (value.getStartDate() == null){
            st.setNull(3, Types.DATE);
        }else{
            st.setDate(3,new Date(value.getStartDate().getTime()));
        }
        if (value.getEndDate() == null){
            st.setNull(4, Types.DATE);
        }else{
            st.setDate(4,new Date(value.getEndDate().getTime()));
        }
        if (value.getHotWaterSupplier().getId() == null){
            st.setNull(5, Types.BIGINT);
        }else{
            st.setLong(5,(value.getHotWaterSupplier().getId()));
        }

    }
}
