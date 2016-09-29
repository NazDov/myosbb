package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.calcinvoice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoiceDetail;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.AbstractModifyPrecompileQuery;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 24.12.2015.
 */
public class PutCalcResultInvoiceDetailsPQuery extends AbstractModifyPrecompileQuery<CalcInvoiceDetail> {
    public PutCalcResultInvoiceDetailsPQuery(Connection connection) {
        super(connection);
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" INSERT INTO [dbo].[CalcInvoiceResultDetails] ");
        sb.append(" ( ");
        sb.append("  [BeginFactorIn]  ");            //1
        sb.append(" ,[EndFactorIn]    ");           //2
        sb.append(" ,[VolumeOnCounterIn]   ");      //3
        sb.append(" ,[VolumeOnNormaIn]    ");       //4
        sb.append(" ,[calcInvoiceID]     ");        //5
        sb.append(" ,[countDayByNorma]    ");       //6
        sb.append(" ,[VolumeOnChecker]    ");       //7
        sb.append(" ,[countDayByChecker]   ");      //8
        sb.append(" ,[VolumeOnRepair]     ");       //9
        sb.append(" ,[countDayByRepair]   ");       //10
        sb.append(" ,[dateBegin]         ");        //11
        sb.append(" ,[dateEnd])         ");         //12
        sb.append(" VALUES (?,?,?,?,?,?,?,?,?,?,?,?)    ");
        return sb.toString();
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, CalcInvoiceDetail value) throws SQLException {
        st.setInt(1,value.getBeginFactorIn());
        st.setInt(2,value.getEndFactorIn());
        st.setDouble(3, value.getVolumeOnCounterIn());
        st.setDouble(4, value.getVolumeOnNormaIn());
        st.setLong(5,value.getCalcInvoiceID());
        st.setInt(6, value.getCountDayByNorma());
        st.setDouble(7,value.getVolumeOnChecker());
        st.setInt(8,value.getCountDayByChecker());
        st.setDouble(9,value.getVolumeOnRepair());
        st.setInt(10,value.getCountDayByRepair());
        st.setDate(11, new Date(value.getDateBegin().getTime()));
        st.setDate(12,new Date(value.getDateEnd().getTime()));
    }
}
