package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Authorization;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AuthorizationCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 05.09.2014.
 */
public class SearchUserQuery extends AbstractSelectQuery<Authorization,AuthorizationCondition> {

    public SearchUserQuery(AuthorizationCondition condition) {
        super(condition);
    }

    @Override
    protected Authorization parseResultSet(ResultSet rs) throws SQLException {
        Authorization auth = new Authorization();
        auth.setUserName(rs.getString("userLogin"));
        auth.setUserName(rs.getString("userPassword"));
        return auth;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select userLogin,  ");
        sb.append("        userPassword");
        sb.append(" from  [RefUsers]");
        sb.append(" where 1 = 1  ");

        if (condition.getUserName() != null && condition.getUserName().isEmpty() == false){
            sb.append(" and userLogin = '"+condition.getUserName()+"'");
        }

        if (condition.getUserPassword() != null && condition.getUserPassword().isEmpty() == false){
            sb.append(" and userPassword = '"+condition.getUserPassword()+"'");
        }
        return sb.toString();

    }
}
