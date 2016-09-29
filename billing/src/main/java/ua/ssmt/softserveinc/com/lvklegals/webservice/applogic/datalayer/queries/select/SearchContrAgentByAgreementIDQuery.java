package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AgreementCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

public class SearchContrAgentByAgreementIDQuery extends AbstractSelectQuery<ContraAgent,AgreementCondition> {

        public SearchContrAgentByAgreementIDQuery(AgreementCondition condition) {
            super(condition);
        }

        @Override
        protected ContraAgent parseResultSet(ResultSet rs) throws SQLException {
            ContraAgent contraAgent = new ContraAgent();
            contraAgent.setId(rs.getLong("contrAgentID"));
            return contraAgent;
        }

        @Override
        protected String getSQLQuery() {
            StringBuilder sb = new StringBuilder();
            sb.append(" select ");
            sb.append(" agr.ContraAgentID as contrAgentID  ");
            sb.append(" from DocAgreement as agr  ");
            sb.append(" where 1=1  ");
            if (condition.getAgreementID() != null)
                sb.append(" and agr.id = "+condition.getAgreementID());


            return sb.toString();
        }
    }


