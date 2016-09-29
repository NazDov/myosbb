package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 23.09.2014.
 */
public class UpdateDepartmentInputQuery extends AbstractModifyQuery<DepartmentInput> {
    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" update RegInfDepartsInputs set DateStart = ? , DateEnd = ? , hotSupplierID = ? where id = ?");
        return sb.toString();
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, DepartmentInput value) throws SQLException {
        if (value.getStartDate() == null)
            st.setNull(1, Types.DATE);
        else
            st.setDate(1,new Date(value.getStartDate().getTime()));
        if (value.getEndDate() == null)
            st.setNull(2, Types.DATE);
        else
            st.setDate(2,new Date(value.getEndDate().getTime()));
        if (value.getHotWaterSupplier().getId() == null)
            st.setNull(3, Types.BIGINT);
        else
            st.setLong(3,(value.getHotWaterSupplier().getId()));

        st.setLong(4,value.getId());

    }
}
