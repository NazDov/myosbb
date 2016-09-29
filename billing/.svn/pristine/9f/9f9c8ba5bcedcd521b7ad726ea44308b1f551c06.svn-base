package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ComboBoxItem;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by ykhav on 28.05.15.
 */
public class GetDepByAgreementQuery extends AbstractSelectQuery<ComboBoxItem,Agreement> {


    public GetDepByAgreementQuery(Agreement agreement) {
        super(agreement);
    }

    @Override
    protected ComboBoxItem parseResultSet(ResultSet rs) throws SQLException {
        ComboBoxItem comboBoxItem = new ComboBoxItem();
        comboBoxItem.setId(rs.getLong("DepID"));
        comboBoxItem.setName(rs.getString("Name"));
        return comboBoxItem;
    }

    @Override
    protected String getSQLQuery() {
        if (condition == null || condition.getId() == null){this.condition = new Agreement();condition.setId(-1L);}
        String qry =
                "Select distinct top "+ Options.getMaxCountToSelectRow()+" a.[id] as AgreementID \n" +
                        ", a.AgreementNumber " +
                        ", b.DepartmentID as DepID " +
                        ", b.Name as Name from DocAgreement as a " +
                        "      left join RegInfDepartamentCharacters as b " +
                        "       on b.DepartmentID = a.DepartmentID " +
                        "  where  b.Period <= dbo.getCurrentPeriod()  and  a.[id] = " + condition.getId()+
                        " and a.DepartmentID not in (select g.id from DocAgreement as g \n" +
                        "left join RefDepartaments as d on\n" +
                        "g.DepartmentID = d.id\n" +
                        "where\n" +
                        "d.id is not null)";
        return qry;
    }
}

