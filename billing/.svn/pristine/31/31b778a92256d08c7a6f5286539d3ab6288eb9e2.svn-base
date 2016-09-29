package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ContraAgentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 8/18/2015.
 */
public class SearchContraAgentWithoutLimits extends AbstractSelectQuery<ContraAgent,ContraAgentCondition> {

    public SearchContraAgentWithoutLimits(ContraAgentCondition condition) {
        super(condition);
    }

    @Override
    protected ContraAgent parseResultSet(ResultSet rs) throws SQLException {
        ContraAgent res = new ContraAgent();
        res.setId(rs.getLong("contraAgentID"));
        res.setEDRPO(rs.getString("edrpo"));
        res.setIPN(rs.getString("IPN"));
        res.setVATNum(rs.getString("VatNum"));
        res.setRegisterDate(rs.getDate("RegistrDate"));
        res.setVatDate((rs.getDate("VatDate")));
        res.setCountryName(rs.getString("CountryName"));
        res.setMailIndexClient(rs.getString("MailIndexClient"));
        res.setStreetName(rs.getString("StreetName"));
        res.setNumberHouse(rs.getString("NumberHouse"));
        res.setCityName(rs.getString("CityName"));
        res.setOblsatName(rs.getString("OblsatName"));
        res.setRajonName(rs.getString("RajonName"));
        res.setProperty(this.fillProperties(rs));
        return res;
    }

    private ContraAgentProperty fillProperties(ResultSet rs) throws SQLException {
        ContraAgentProperty res = new ContraAgentProperty();
        res.setId(rs.getLong("propID"));
        res.setArea(new Area(rs.getLong("areaID")));
        res.setBank(new Bank(rs.getLong("bankID")));
        res.setBankAccount(rs.getString("BankAccount"));
        res.setContraAgentCategory(new ContraAgentCategory(rs.getLong("CategoryKontragentID")));
        res.setFullName(rs.getString("FullName"));
        res.setShortName(rs.getString("ShortName"));
        res.setGroupWatterSupply(new GroupWatterSupply(rs.getLong("WaterConsumplionGroupID")));
        res.setHopeless(rs.getBoolean("Hopeless"));
        res.setLimitConsuming(rs.getDouble("Limit"));
        res.setRespPerson(rs.getString("RespPerson"));
        res.setSourceWaterSupply(new SourceWaterSupply(rs.getLong("SourceOfFunds")));
        res.setTel(rs.getString("Telephone"));
        res.setTypeActivity(new TypeActivity(rs.getLong("KindsOfActivity")));
        res.setAlgorithm(new Algorithm(rs.getLong("Algorithm")));
        res.setFlagCommiss(rs.getBoolean("FlagCommiss"));
        res.setPercentCommiss(rs.getDouble("PercentCommiss"));
        res.setPayer(new Payer(rs.getLong("payerID")));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select  ca.[id]  as contraAgentID                        ");
        sb.append(" ,ca.[EDRPO]                                             ");
        sb.append(" ,ca.[IPN]                                               ");
        sb.append(" ,ca.[VATNum]                                            ");
        sb.append(" ,ca.[VATDate]                                           ");
        sb.append(" ,ca.[RegistrDate]                                       ");
        sb.append(" ,ca.[CountryName]                                       ");
        sb.append(" ,ca.[MailIndexClient]                                   ");
        sb.append(" ,ca.[StreetName]                                        ");
        sb.append(" ,ca.[NumberHouse]                                       ");
        sb.append(" ,ca.[CityName]                                          ");
        sb.append(" ,ca.[RajonName]                                         ");
        sb.append(" ,ca.[OblsatName]                                        ");
        sb.append(" ,p.[id]  as propID                                      ");
        sb.append(" ,p.[AreaID]                                             ");
        sb.append(" ,p.[ContraAgentID]                                      ");
        sb.append(" ,p.[WaterConsumplionGroupID]                            ");
        sb.append(" ,p.[KindsOfActivity]                                    ");
        sb.append(" ,p.[SourceOfFunds]                                      ");
        sb.append(" ,p.[Limit]                                              ");
        sb.append(" ,p.[Period]                                             ");
        sb.append(" ,p.[CategoryKontragentID]                               ");
        sb.append(" ,p.[FullName]                                           ");
        sb.append(" ,p.[ShortName]                                          ");
        sb.append(" ,p.[BankID]                                             ");
        sb.append(" ,p.[BankAccount]                                        ");
        sb.append(" ,p.[RespPerson]                                         ");
        sb.append(" ,p.[Telephone]                                          ");
        sb.append(" ,p.[Hopeless]                                           ");
        sb.append(" ,p.[FlagCommiss]                                        ");
        sb.append(" ,p.[Algorithm]                                          ");
        sb.append(" ,p.[payerID]                                            ");
        sb.append(" ,p.[PercentCommiss] from RegInfKontragentProperty as p  ");
        sb.append(" right join (                                            ");
        sb.append("         select max(id) as id, ContraAgentID,Max(Period) ");
        sb.append("         as period from RegInfKontragentProperty         ");
        sb.append(" where Period <= dbo.getCurrentPeriod()                  ");
        sb.append(" group by ContraAgentID                                  ");
        sb.append(" ) as currP on                                           ");
        sb.append(" p.id = currP.id                                         ");
        sb.append(" right join RefContragents as ca on                      ");
        sb.append(" currP.ContraAgentID = ca.id                             ");
        sb.append(" where 1=1                                               ");
        if (condition.getName() != null && condition.getName().trim().isEmpty() == false){
            sb.append(" and upper(p.[ShortName]) like '%"+condition.getName().trim().toUpperCase()+"%'");
        }
        if (condition.getEdrpo() != null && condition.getEdrpo().trim().isEmpty() == false){
            sb.append(" and ca.[EDRPO] like '%"+condition.getEdrpo().trim()+"%'");
        }
        if (condition.getId() != null){
            sb.append(" and ca.id = "+ condition.getId());
        }
        if (condition.getAlgorithm().getId() != null){
            sb.append(" and p.Algorithm  = "+ condition.getAlgorithm().getId());
        }
        if (condition.getComissionAllow() != null){
            sb.append(" and p.FlagCommiss    = "+ condition.getComissionAllow());
        }
        if (condition.getBankAccount() != null && condition.getBankAccount().trim().isEmpty() == false){
            sb.append(" and p.BankAccount = '"+ condition.getBankAccount()+"'");
        }
        if (condition.getMfo() != null){
            sb.append(" p.MFO = '"+condition.getMfo()+"'");
        }
        return sb.toString();
    }
}
