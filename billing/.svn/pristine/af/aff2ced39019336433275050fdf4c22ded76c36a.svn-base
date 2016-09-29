package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ComboBoxItem;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Municipal;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 17.09.2014.
 */
public class GetStreetByCityQuery extends AbstractSelectQuery<ComboBoxItem,Municipal> {

    private String pattern;

    public GetStreetByCityQuery(Municipal municipal, String pattern) {
        super(municipal);
        this.pattern = pattern;
        if (pattern == null) this.pattern = "";
    }

    @Override
    protected ComboBoxItem parseResultSet(ResultSet rs) throws SQLException {
        ComboBoxItem comboBoxItem = new ComboBoxItem();
        comboBoxItem.setId(rs.getLong("ID"));
        comboBoxItem.setName(rs.getString("streetName"));
        return comboBoxItem;
    }

    @Override
    protected String getSQLQuery() {
        if (condition == null || condition.getId() == null){this.condition = new Municipal();condition.setId(-1L);}
        String qry =
        "SELECT top "+ Options.getMaxCountToSelectRow()+" s.[id]  \n" +
                "      ,s.[Name] as streetName\n" +
                "      ,[MunicipalID]\n" +
                "      ,m.[Name] as MunicipalName \n" +
                " FROM [dbo].[RefStreets] as s  "+
                " left join [RefMunicipals] as m on  "+
                " s.MunicipalID = m.id  "+
                "  where MunicipalID = " + condition.getId()+
                "  and s.[Name] like '%"+this.pattern+"%'";
        //(qry);
        return qry;
    }
}
