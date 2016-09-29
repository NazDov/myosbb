package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 17.09.2014.
 */
public class GetUserQuery extends AbstractSelectQuery<User,String> {

    public String userPassword;
    public String userName;

    public GetUserQuery(String userName, String userPassword) {
        super(userName);
        this.userName = userName;
        this.userPassword = userPassword;
        if (userPassword == null) this.userPassword = "";
    }

    @Override
    protected User parseResultSet(ResultSet rs) throws SQLException {
        User user = new User();
        user.setName(rs.getString("userLogin"));
        user.setUserPassword(rs.getString("userPassword"));
        user.setId(rs.getLong("id"));
        return user;
    }

    @Override
    protected String getSQLQuery() {
        String qry =
        "SELECT top "+ Options.getMaxCountToSelectRow()+" [id]  \n" +
                "      ,[userLogin]\n" +
                "      ,[userPassword]\n" +
                "  FROM [dbo].[RefUsers]\n" +
                "  where userLogin = '" + this.userName+"'"+
                "  and userPassword ='"+this.userPassword+"'";

        return qry;
    }
}
