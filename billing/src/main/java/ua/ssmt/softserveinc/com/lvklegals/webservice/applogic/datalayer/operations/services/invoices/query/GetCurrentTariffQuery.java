package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.invoices.query;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CategoryOfTariff;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SubService;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Tariff;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 29.09.2014.
 */
public class GetCurrentTariffQuery extends AbstractSelectQuery<Tariff,Long> {

    public GetCurrentTariffQuery(Long condition) {
        super(condition);
    }

    @Override
    protected Tariff parseResultSet(ResultSet rs) throws SQLException {
        Tariff res = new Tariff();
        res.setId(rs.getLong("id"));
        res.setDateInAction(rs.getDate("dateInAction"));
        res.setCategory(this.fillCategory(rs));
        res.setSubService(this.fillSubService(rs));
        res.setTariff(rs.getDouble("tarrif"));
        return res;
    }

    private SubService fillSubService(ResultSet rs) throws SQLException {
        SubService res = new SubService();
        res.setId(rs.getLong("SubServiceID"));
        res.setName(rs.getString("subServiceName"));
        return res;
    }

    private CategoryOfTariff fillCategory(ResultSet rs) throws SQLException {
        CategoryOfTariff res = new CategoryOfTariff();
        res.setId(rs.getLong("CategoryID"));
        res.setName(rs.getString("categoryName"));
        return res;
    }


    @Override
    protected String getSQLQuery() {
        return "SELECT [id]\n" +
                "      ,[SubServiceID]\n" +
                "      ,[CategoryID]\n" +
                "      ,[tarrif]\n" +
                "      ,[dateInAction]\n" +
                "      ,[Period]\n" +
                "\t\t,tc.Name as categoryName\n" +
                "\t\t,ss.name as subServiceName"+
                "  FROM [dbo].[RegTariff]\n" +
                "left join [RefTariffCategory] as tc on\n" +
                "\t t.CategoryID = tc.id\n" +
                "\t left join [RefSubServices] as ss on\n" +
                "\t ss.id = t.SubServiceID"+
                "  where Period = dbo.getCurrentPeriod() and CategoryID =  "+condition;
    }
}
