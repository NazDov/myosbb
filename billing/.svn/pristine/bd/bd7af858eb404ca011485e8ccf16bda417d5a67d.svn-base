package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.movenextperiod;


import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import javax.lang.model.type.NullType;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 09.09.2014.
 */
public class MoveContraAgentToNextPeriodQuery extends AbstractModifyQuery<NullType> {
    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" INSERT INTO [RegInfKontragentProperty]   ");
        sb.append(" ([AreaID]   ");
        sb.append(" ,[ContraAgentID]   ");
        sb.append(" ,[WaterConsumplionGroupID]  ");
        sb.append(" ,[KindsOfActivity]   ");
        sb.append(" ,[SourceOfFunds]   ");
        sb.append(" ,[Limit]   ");
        sb.append(" ,[Period]  ");
        sb.append(" ,[CategoryKontragentID]  ");
        sb.append(" ,[FullName]   ");
        sb.append(" ,[ShortName]   ");
        sb.append(" ,[Address]   ");
        sb.append(" ,[BankID]   ");
        sb.append(" ,[BankAccount]   ");
        sb.append(" ,[RespPerson]   ");
        sb.append(" ,[Telephone]    ");
        sb.append(" ,[Hopeless])    ");
        sb.append(" SELECT    ");
        sb.append("        [AreaID]    ");
        sb.append(" ,[ContraAgentID]    ");
        sb.append(" ,[WaterConsumplionGroupID]   ");
        sb.append(" ,[KindsOfActivity]   ");
        sb.append(" ,[SourceOfFunds]    ");
        sb.append(" ,[Limit]   ");
        sb.append(" ,(select DATEADD(MONTH,1,(select top 1 CurrentPeriod from CurrentPeriod)) as newPeriod)    ");
        sb.append(" ,[CategoryKontragentID]   ");
        sb.append(" ,[FullName]   ");
        sb.append(" ,[ShortName]   ");
        sb.append(" ,[Address]   ");
        sb.append(" ,[BankID]   ");
        sb.append(" ,[BankAccount]  ");
        sb.append("  ,[RespPerson]   ");
        sb.append(" ,[Telephone]   ");
        sb.append(" ,[Hopeless]   ");
        sb.append("  FROM [RegInfKontragentProperty]   ");
        sb.append("  where Period = (select top 1 CurrentPeriod from CurrentPeriod) ");
        return sb.toString();
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, NullType value) throws SQLException {

    }
}
