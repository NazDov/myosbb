package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 05.09.2014.
 */
public class UpdateDepartmentPropertyQuery extends AbstractModifyQuery<Department> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[RegInfDepartamentCharacters]\n" +
                "   SET \n" +
                "      [DepartmentID] = ?\n" +
                "      ,[CategoryID] = ?\n" +
                "      ,[CategoryOfRealizeID] = null\n" +
                "      ,[AreaID] = ?\n" +
                "      ,[Name] = ?\n" +
                "      ,[CodeKonto] = ?\n" +
                "      ,[conto] = ?\n" +
                "      ,[BussinessProfileID] = ?\n" +
                " WHERE id = ?\n";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Department value) throws SQLException {
        st.setLong(1,value.getId());
        st.setLong(2,value.getProperty().getCategoryOfTariff().getId());
        st.setLong(3,value.getProperty().getArea().getId());
        st.setString(4,value.getProperty().getName());
        st.setString(5, value.getProperty().getKonto());
        st.setString(6, value.getProperty().getConto());
        if (value.getProperty().getBussinessProfile() == null || value.getProperty().getBussinessProfile().getId() == null)
            st.setNull(7, Types.NULL);
        else
            st.setLong(7, value.getProperty().getBussinessProfile().getId());
        st.setLong(8, value.getProperty().getId());
    }
}
