package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ComboBoxItem;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 10/27/2015.
 */
public class GetKontraAgentByDepartmentQuery extends AbstractSelectQuery<ComboBoxItem,Department> {
    public GetKontraAgentByDepartmentQuery(Department department) {
        super(department);
    }

    @Override
    protected ComboBoxItem parseResultSet(ResultSet rs) throws SQLException {
        ComboBoxItem comboBoxItem = new ComboBoxItem();
        comboBoxItem.setId(rs.getLong("ConraAgentID"));
       // comboBoxItem.setName(rs.getString("Name"));
        return comboBoxItem;
    }

    @Override
    protected String getSQLQuery() {
        if (condition == null || condition.getId() == null){this.condition = new Department();condition.setId(-1L);}
        String qry =
                "select ConraAgentID,id from RefDepartaments as dep\n" +
                        "where\n" +
                        "\tid = " + condition.getId();

        return qry;
    }
}
