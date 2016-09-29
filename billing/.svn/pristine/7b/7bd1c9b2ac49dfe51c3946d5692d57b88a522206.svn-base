package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 04.09.2014.
 */
public class CreateDepartmentPropertyQuery extends AbstractModifyQuery<Department> {
    @Override
    protected String getSQLQuery() {
        String qry =
         "INSERT INTO [dbo].[RegInfDepartamentCharacters]\n" +
                "           ([Period]\n" +
                "           ,[DepartmentID]\n" +
                "           ,[CategoryID]\n" +
                "           ,[AreaID]\n" +
                "           ,[Name]\n" +
                 "          ,[CodeKonto]\n" +
                 "          ,[conto]\n" +
                 "          ,[BussinessProfileID])\n" +
                "     VALUES\n" +
                "           ((select top 1 currentPeriod from CurrentPeriod),?,?,?,?,?,?,?)";
        return qry;

    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Department value) throws SQLException {
        st.setLong(1, value.getId());
        st.setLong(2, value.getProperty().getCategoryOfTariff().getId());
        st.setLong(3, value.getProperty().getArea().getId());
        st.setString(4, value.getProperty().getName());
        st.setString(5, value.getProperty().getKonto());
        st.setString(6,value.getProperty().getConto());
        if (value.getProperty().getBussinessProfile() == null || value.getProperty().getBussinessProfile().getId() == null)
            st.setNull(7, Types.NULL);
        else
            st.setLong(7,value.getProperty().getBussinessProfile().getId());
    }
}
