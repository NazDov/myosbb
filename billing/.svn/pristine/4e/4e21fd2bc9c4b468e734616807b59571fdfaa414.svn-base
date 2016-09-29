package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 27.08.2014.
 */
public class CreateContraAgentPropertyQuery extends AbstractModifyQuery<ContraAgent> {

    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[RegInfKontragentProperty]\n" +
                "           ([AreaID]\n" +
                "           ,[ContraAgentID]\n" +
                "           ,[WaterConsumplionGroupID]\n" +
                "           ,[KindsOfActivity]\n" +
                "           ,[SourceOfFunds]\n" +
                "           ,[Limit]\n" +
                "           ,[Period]\n" +
                "           ,[CategoryKontragentID]\n" +
                "           ,[FullName]\n" +
                "           ,[ShortName]\n" +
                "           ,[Address]\n" +
                "           ,[BankID]\n" +
                "           ,[BankAccount]\n" +
                "           ,[RespPerson]\n" +
                "           ,[Telephone]\n" +
                "           ,[Hopeless]\n"+
                "           ,[FlagCommiss]\n"+
                "           ,[Algorithm]\n"+
                "           ,[PercentCommiss]"+
                "           ,[Limit_VK]"+
                "           ,[payerID])"+
                "     VALUES (?,?,?,?,?,?,(select top 1 currentPeriod from CurrentPeriod),?,?,?,?,?,?,?,?,?,?,?,?,?,?) ";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, ContraAgent contraAgent) throws SQLException {
        st.setLong(1,contraAgent.getProperty().getArea().getId());
        st.setLong(2,contraAgent.getId());
        st.setLong(3,contraAgent.getProperty().getGroupWatterSupply().getId());
        st.setLong(4,contraAgent.getProperty().getTypeActivity().getId());
        st.setLong(5,contraAgent.getProperty().getSourceWaterSupply().getId());
        if (contraAgent.getProperty().getLimitConsuming() == null)
            st.setNull(6, Types.DOUBLE);
        else
            st.setDouble(6,contraAgent.getProperty().getLimitConsuming());
        st.setLong(7,contraAgent.getProperty().getContraAgentCategory().getId());
        st.setString(8,contraAgent.getProperty().getFullName());
        st.setString(9,contraAgent.getProperty().getShortName());
        st.setString(10,contraAgent.getProperty().getAddress());
        if (contraAgent.getProperty().getBank() == null)
            st.setNull(11, Types.BIGINT);
        else
            st.setLong(11,contraAgent.getProperty().getBank().getId());
        st.setString(12,contraAgent.getProperty().getBankAccount());
        st.setString(13,contraAgent.getProperty().getRespPerson());
        st.setString(14,contraAgent.getProperty().getTel());
        st.setBoolean(15,contraAgent.getProperty().getHopeless());
        st.setBoolean(16,contraAgent.getProperty().getFlagCommiss());
        st.setLong(17,contraAgent.getProperty().getAlgorithm().getId());
        if (contraAgent.getProperty().getPercentCommiss() == null)
            st.setNull(18, Types.FLOAT);
        else
            st.setDouble(18,contraAgent.getProperty().getPercentCommiss());

        if (contraAgent.getProperty().getLimitVK() == null)
            st.setNull(19,Types.BIGINT);
        else
            st.setFloat(19,contraAgent.getProperty().getLimitVK());
        if (contraAgent.getProperty().getPayer() == null)
            st.setNull(20, Types.BIGINT);
        else
            st.setLong(20,contraAgent.getProperty().getPayer().getId());

    }
}
