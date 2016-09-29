package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ComboBoxItem;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by ykhav on 28.05.15.
 */

public class GetKontrAgentByDepQuery extends AbstractSelectQuery<ComboBoxItem,Department> {


    public GetKontrAgentByDepQuery(Department department) {
        super(department);
    }

    @Override
    protected ComboBoxItem parseResultSet(ResultSet rs) throws SQLException {
        ComboBoxItem comboBoxItem = new ComboBoxItem();
        comboBoxItem.setId(rs.getLong("ContrAgentID"));
        comboBoxItem.setName(rs.getString("Name"));
        return comboBoxItem;
    }

    @Override
    protected String getSQLQuery() {
        if (condition == null || condition.getId() == null){this.condition = new Department();
            condition.setId(-1L);}
        String qry =
                "Select distinct top "+ Options.getMaxCountToSelectRow()+" a.[id] as DepID \n" +
                        " ,a.ConraAgentID as ContrAgentID " +
                        " ,b.ShortName as Name " +
                        "  from RefDepartaments as a " +
                        "  left join RegInfKontragentProperty as b " +
                        "  on a.ConraAgentID = b.ContraAgentID " +
                        "  where a.[id] = " + condition.getId();

        return qry;
    }
}


