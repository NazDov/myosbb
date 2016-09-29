package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.saldo;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SumCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 12/3/2015.
 */
public class GetSumDocumentStockWithoutPermissionQuery extends AbstractSelectQuery<Double,SumCondition> {
    public GetSumDocumentStockWithoutPermissionQuery(SumCondition condition) {
        super(condition);
    }

    @Override
    protected Double parseResultSet(ResultSet rs) throws SQLException {
        return rs.getDouble("suma");
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT                                                  ");
        sb.append("         [contrAgentID]                                  ");
        sb.append(" ,[agreementID]                                          ");
        sb.append(" ,sum([suma]) as suma                                    ");

        sb.append(" FROM [dbo].[DocCorrectionForStockWithOutPermission]     ");
        sb.append(" where                                                   ");
        sb.append("         period = dbo.getCurrentPeriod()                 ");
        sb.append(" and                                                     ");
        sb.append("         contrAgentID = "+condition.getContraAgentID()+"                                ");
        sb.append(" and                                                     ");
        sb.append("         agreementID = "+condition.getAgreementID()+"                                 ");

        sb.append(" group by contrAgentID,agreementID                       ");
        return sb.toString();
    }
}
