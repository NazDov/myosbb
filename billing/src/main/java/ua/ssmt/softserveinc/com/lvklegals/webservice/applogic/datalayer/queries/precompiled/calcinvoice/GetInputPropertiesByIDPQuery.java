package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.calcinvoice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.InputProperty;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.AbstractSelectPreCompileQuery;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 02.04.2015.
 */
public class GetInputPropertiesByIDPQuery extends AbstractSelectPreCompileQuery<InputProperty,Long> {

    public GetInputPropertiesByIDPQuery(Connection connection,Long condition) {
        super(connection,condition);
    }

    public GetInputPropertiesByIDPQuery(Connection connection){
        super(connection,-1L);
    }



    @Override
    protected void fillStatement(PreparedStatement st) throws SQLException {
         st.setLong(1,condition);
    }

    @Override
    protected InputProperty parseResultSet(ResultSet rs) throws SQLException {
        InputProperty res = new InputProperty();
        res.setId(rs.getLong("id"));
        res.setNorma(rs.getDouble("Norma"));
        res.setKoefWatterSupply(rs.getDouble("KoefWatterSupply"));
        res.setKoefWatterOut(rs.getDouble("KoefWatterOut"));
        res.setPeriod(rs.getDate("Period"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" [id]  ");
        sb.append(" ,[Norma]   ");
        sb.append(" ,[KoefWatterSupply]  ");
        sb.append("  ,[KoefWatterOut]   ");
        sb.append("  ,[Period]   ");
        sb.append("  FROM [dbo].[RegInfInputProperties] where 1=1 ");
        sb.append(" and id = ?");
        return  sb.toString();
    }
}
