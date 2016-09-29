package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.HotWaterSupplierCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 04.09.2014.
 */
public class SearchHotWaterQuery extends AbstractSelectQuery<HotWaterSupplier,HotWaterSupplierCondition> {

    public SearchHotWaterQuery(HotWaterSupplierCondition condition) {
        super(condition);
    }

    @Override
    protected HotWaterSupplier parseResultSet(ResultSet rs) throws SQLException {
        HotWaterSupplier res = new HotWaterSupplier();
        res.setId(rs.getLong("HotWaterSupplierID"));
        res.setEDRPO(rs.getString("EDRPO"));
        res.setIPN(rs.getString("IPN"));
        res.setCountryName(rs.getString("CountryName"));
        res.setMailIndexClient(rs.getString("MailIndexClient"));
        res.setStreetName(rs.getString("StreetName"));
        res.setNumberHouse(rs.getString("NumberHouse"));
        res.setCityName(rs.getString("CityName"));
        res.setOblsatName(rs.getString("OblsatName"));
        res.setProperty(this.fillProperties(rs));
        return res;
    }

    private HotWaterSupplierProperty fillProperties(ResultSet rs) throws SQLException {
        HotWaterSupplierProperty res = new HotWaterSupplierProperty();
        res.setId(rs.getLong("propID"));
        res.setBank(new Bank(rs.getLong("BankID")));
        res.setBankAccount(rs.getString("BankAccount"));
        res.setContraAgentCategory(new ContraAgentCategory(rs.getLong("CategoryKontragentID")));
        res.setFullName(rs.getString("FullName"));
        res.setShortName(rs.getString("ShortName"));
        res.setLimitConsuming(rs.getDouble("Limit"));
        res.setSourceWaterSupply(new SourceWaterSupply(rs.getLong("SourceOfFunds")));
        return res;
    }


    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select top "+Options.getMaxCountToSelectRow()+" a.[id]  as HotWaterSupplierID                        ");
        sb.append(" ,a.[EDRPO]  ");
        sb.append(" ,a.[IPN]  ");
        sb.append(" ,a.[CountryName]  ");
        sb.append(" ,a.[MailIndexClient]  ");
        sb.append(" ,a.[StreetName]  ");
        sb.append(" ,a.[NumberHouse]  ");
        sb.append(" ,a.[CityName]  ");
        sb.append(" ,a.[OblsatName]  ");
        sb.append(" ,b.[id]  as propID  ");
        sb.append(" ,b.[hotWaterSupplierId]  ");
        sb.append(" ,b.[SourceOfFunds]  ");
        sb.append(" ,b.[Limit]   ");
        sb.append(" ,b.[Period]  ");
        sb.append(" ,b.[CategoryKontragentID]  ");
        sb.append(" ,b.[FullName]  ");
        sb.append(" ,b.[ShortName]  ");
        sb.append(" ,b.[BankID]  ");
        sb.append(" ,b.[BankAccount]   from RegInfHotWaterSupplier as b  ");
        sb.append(" right join (  ");
        sb.append("        select max(id) as id, hotWaterSupplierId,Max(Period)  ");
        sb.append("        as period from RegInfHotWaterSupplier  ");
        sb.append(" where Period <= dbo.getCurrentPeriod()  ");
        sb.append(" group by hotWaterSupplierId  ");
        sb.append(" ) as currP on  ");
        sb.append("  b.id = currP.id  ");
        sb.append(" right join RefHotWaterSupplier as a on  ");
        sb.append(" currP.hotWaterSupplierId = a.id  ");
        sb.append(" where 1=1  ");
        if (condition.getName() != null && condition.getName().trim().isEmpty() == false){
            sb.append(" and upper(b.[ShortName]) like '%"+condition.getName().trim().toUpperCase()+"%'");
        }
        if (condition.getEdrpo() != null && condition.getEdrpo().trim().isEmpty() == false){
            sb.append(" and a.[EDRPO] like '%"+condition.getEdrpo().trim()+"%'");
        }
        if (condition.getId() != null){
            sb.append(" and a.id = "+ condition.getId());
        }
        if (condition.getBankAccount() != null && condition.getBankAccount().trim().isEmpty() == false){
            sb.append(" and b.BankAccount = '"+ condition.getBankAccount()+"'");
        }
        return sb.toString();
    }
}
