package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.invoices.query;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 26.09.2014.
 */
public class GetAllParentInputQuery extends AbstractSelectQuery<Input,Void> {

    public GetAllParentInputQuery(Void condition) {
        super(condition);
    }


    @Override
    protected Input parseResultSet(ResultSet rs) throws SQLException {
        Input res = new Input();
        res.setAddress(this.fillAddress(rs));
        res.setId(rs.getLong("ID"));
        res.setService(this.fillService(rs));
        res.setDiameter(this.fillDiameter(rs));

        return res;
    }

    private InputDiameter fillDiameter(ResultSet rs) throws SQLException {
        InputDiameter res = new InputDiameter();
        res.setId(rs.getLong("InputDiameterID"));
        return res;
    }

    private Service fillService(ResultSet rs) throws SQLException {
        Service res = new Service();
        res.setId(rs.getLong("ServiceID"));
        return res;
    }

    private Address fillAddress(ResultSet rs) throws SQLException {
        Address res = new Address();
        res.setId(rs.getLong("AddrID"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        return "SELECT [id]\n" +
                "      ,[ParentID]\n" +
                "      ,[AddrID]\n" +
                "      ,[ServiceID]\n" +
                "      ,[InputDiameterID]\n" +
                "  FROM [dbo].[RefInputs] where ParentID = 0";
    }


}
