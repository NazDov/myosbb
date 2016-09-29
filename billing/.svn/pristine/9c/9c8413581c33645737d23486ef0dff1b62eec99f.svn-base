package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ControllersReferense;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ControllerReferenseCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by ykhav on 13.05.15.
 */
    public class SearchControllerReferenceQuery extends AbstractSelectQuery<ControllersReferense,ControllerReferenseCondition> {
        public SearchControllerReferenceQuery(ControllerReferenseCondition condition) {
            super(condition);
        }

        @Override
        protected ControllersReferense parseResultSet(ResultSet rs) throws SQLException {
            ControllersReferense res = new ControllersReferense();
            res.setId(rs.getLong("id"));
            res.setName(rs.getString("name"));
            return res;
        }


        @Override
        protected String getSQLQuery() {
            StringBuilder sb = new StringBuilder();
            sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" id,name from RefControllers  ");
            sb.append(" where 1=1   ");

            if (condition.getName() != null)
                sb.append(" and name like '%"+condition.getName().trim().toUpperCase()+"%'");
            if (condition.getId() != null)
                sb.append(" and id ="+condition.getId());
            return sb.toString();
        }
}
