package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 27.08.2014.
 */
public class UpdateContraAgentPropertyQuery extends AbstractModifyQuery<ContraAgent> {

    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[RegInfKontragentProperty]  \n" +
                "   SET [AreaID] = ? \n" + //1
                "      ,[ContraAgentID] = ? \n" +//2
                "      ,[WaterConsumplionGroupID] =  ? \n" + //3
                "      ,[KindsOfActivity] = ? \n" +  //4
                "      ,[SourceOfFunds] = ? \n" +  //5
                "      ,[Limit] = ? \n" +  //6
                "      ,[Period] =  (select top 1 currentPeriod from CurrentPeriod) \n" +
                "      ,[CategoryKontragentID] =  ? \n" + //7
                "      ,[FullName] =  ? \n" + //8
                "      ,[ShortName] = ?  \n" +  //9
                "      ,[Address] =  ? \n" +  //10
                "      ,[BankID] =  ? \n" +//11
                "      ,[BankAccount] = ? \n" +//12
                "      ,[RespPerson] =  ? \n" +//13
                "      ,[Telephone] = ? \n" +//14
                "      ,[FlagCommiss] = ? \n" +//15
                "      ,[Algorithm] = ? \n" +//16
                "      ,[PercentCommiss] = ? \n" +//17
                "      ,[payerID] = ? \n" +//18
                "      ,[Hopeless] = ? \n" +//18
                "      ,[Limit_VK] = ? \n" +//19
                " WHERE [id] = ? \n";//19
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

        st.setBoolean(15,contraAgent.getProperty().getFlagCommiss());
        st.setLong(16,contraAgent.getProperty().getAlgorithm().getId());
        if (contraAgent.getProperty().getPercentCommiss() == null)
            st.setNull(17, Types.FLOAT);
        else
            st.setDouble(17,contraAgent.getProperty().getPercentCommiss());
        if (contraAgent.getProperty().getPayer() == null)
            st.setNull(18, Types.BIGINT);
        else
            st.setLong(18,contraAgent.getProperty().getPayer().getId());
        st.setBoolean(19,contraAgent.getProperty().getHopeless());
        st.setFloat(20,contraAgent.getProperty().getLimitVK());
        st.setLong(21,contraAgent.getProperty().getId());

    }
}
