package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.movenextperiod;



import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Period;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 09.09.2014.
 */
public class MoveDepartmentToNextPeriodQuery extends AbstractModifyQuery<Period> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[RegInfDepartamentCharacters]\n" +
                "           ([Period]\n" +
                "           ,[DepartmentID]\n" +
                "           ,[CategoryID]\n" +
                "           ,[Name]\n" +
                "           ,[CategoryOfRealizeID]\n" +
                "           ,[AreaID])\n" +
                "    \n" +
                "SELECT \n" +
                "       (select DATEADD(MONTH,1,(select top 1 CurrentPeriod from CurrentPeriod)) as newPeriod)\n" +
                "      ,[DepartmentID]\n" +
                "      ,[CategoryID]\n" +
                "      ,[Name]\n" +
                "      ,[CategoryOfRealizeID]\n" +
                "      ,[AreaID]\n" +
                "  FROM [dbo].[RegInfDepartamentCharacters]\n" +
                "  where Period = (select top 1 CurrentPeriod from CurrentPeriod)\n";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Period value) throws SQLException {

    }
}
