package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ContraAgentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 22.12.2014.
 */
public class SearchContraAgentPropertyQuery extends AbstractSelectQuery<ContraAgentProperty,ContraAgentCondition> {
    public SearchContraAgentPropertyQuery(ContraAgentCondition condition) {
        super(condition);
    }

    @Override
    protected ContraAgentProperty parseResultSet(ResultSet rs) throws SQLException {
        ContraAgentProperty res = new ContraAgentProperty();
        res.setId(rs.getLong("ID"));
        res.setAddress(rs.getString("Address"));
        res.setArea(this.fillArea(rs));
        res.setBank(this.fillBank(rs));
        res.setBankAccount(rs.getString("BankAccount"));
        res.setContraAgentCategory(this.fillContraAgentCategory(rs));
        res.setFullName(rs.getString("FullName"));
        res.setShortName(rs.getString("ShortName"));
        res.setGroupWatterSupply(this.fillGroupWatterSupply(rs));
        res.setHopeless(rs.getBoolean("Hopeless"));
        res.setLimitConsuming(rs.getDouble("Limit"));
        res.setRespPerson(rs.getString("RespPerson"));
        res.setSourceWaterSupply(this.fillSourceWatterSupply(rs));
        res.setTel(rs.getString("Telephone"));
        res.setTypeActivity(this.fillTypeActivity(rs));
        res.setAlgorithm(this.fillAlgorithm(rs));
        res.setFlagCommiss(rs.getBoolean("FlagCommiss"));
        res.setPercentCommiss(rs.getDouble("PercentCommiss"));
        return res;
}

    private Area fillArea(ResultSet rs) throws SQLException {
        Area area = new Area();
        area.setId(rs.getLong("areaID"));
        return area;
    }

    private TypeActivity fillTypeActivity(ResultSet rs) throws SQLException {
        TypeActivity res = new TypeActivity();
        res.setId(rs.getLong("KindsOfActivityID"));
        return res;
    }

    private Algorithm fillAlgorithm(ResultSet rs) throws SQLException {
        Algorithm res = new Algorithm();
        res.setId(rs.getLong("Algorithm"));
        //res.setName(rs.getString("Name"));
        return res;
    }

    private SourceWaterSupply fillSourceWatterSupply(ResultSet rs) throws SQLException {
        SourceWaterSupply res = new SourceWaterSupply();
        res.setId(rs.getLong("SourceOfFundsID"));
        return res;
    }

    private GroupWatterSupply fillGroupWatterSupply(ResultSet rs) throws SQLException {
        GroupWatterSupply res = new GroupWatterSupply();
        res.setId(rs.getLong("WaterConsumplionGroupID"));
        return res;
    }

    private ContraAgentCategory fillContraAgentCategory(ResultSet rs) throws SQLException {
        ContraAgentCategory res = new ContraAgentCategory();
        res.setId(rs.getLong("CategoryKontragentID"));
        return res;
    }

    private Bank fillBank(ResultSet rs) throws SQLException {
        Bank bank = new Bank();
        bank.setId(rs.getLong("bankID"));
        return bank;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select top 1                            ");
        sb.append("         [id]                            ");
        sb.append(" ,[AreaID]                               ");
        sb.append(" ,[ContraAgentID]                        ");
        sb.append(" ,[WaterConsumplionGroupID]              ");
        sb.append(" ,[KindsOfActivity] as KindsOfActivityID                     ");
        sb.append(" ,[SourceOfFunds] as SourceOfFundsID                       ");
        sb.append(" ,[Limit]                                ");
        sb.append(" ,[Period]                               ");
        sb.append(" ,[CategoryKontragentID]                 ");
        sb.append(" ,[FullName]                             ");
        sb.append(" ,[ShortName]                            ");
        sb.append(" ,[Address]                              ");
        sb.append(" ,[BankID]                               ");
        sb.append(" ,[BankAccount]                          ");
        sb.append(" ,[RespPerson]                           ");
        sb.append(" ,[Telephone]                            ");
        sb.append(" ,[Hopeless]                             ");
        sb.append(" ,[FlagCommiss]                          ");
        sb.append(" ,[Algorithm]                            ");
        sb.append(" ,[PercentCommiss]                       ");
        sb.append(" from RegInfKontragentProperty           ");
        sb.append(" where ContraAgentID= "+condition.getId()+"               ");
        sb.append(" and Period <= dbo.getCurrentPeriod()    ");
        if (condition.getName() != null && condition.getName().trim().isEmpty() == false){
            sb.append(" and upper(FullName) like '%" + condition.getName().trim().toUpperCase()+"%'");
        }
        sb.append(" order by Period desc                    ");
        return sb.toString();
    }


}
