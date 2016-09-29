package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import org.joda.time.DateTime;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.taxbill.TaxBillHeader;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.TaxBillCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by bmitsan on 29.03.2015.
 */
public class SearchTaxBillHeaderQuery extends AbstractSelectQuery<TaxBillHeader,TaxBillCondition> {
    public SearchTaxBillHeaderQuery(TaxBillCondition condition) {
        super(condition);
    }

    @Override
    protected TaxBillHeader parseResultSet(ResultSet rs) throws SQLException {
        TaxBillHeader taxBillHeader = new TaxBillHeader();

        taxBillHeader.set_prpLoadDate(rs.getDate("LoadDate"));
        taxBillHeader.set_prpPlat(rs.getString("Plat"));
        taxBillHeader.set_prpS(rs.getDouble("S"));
        taxBillHeader.set_prpPdv(rs.getDouble("Pdv"));
        taxBillHeader.set_prpS_no_pdv(rs.getDouble("S_no_pdv"));
        taxBillHeader.set_prpzkpo(rs.getString("zkpo"));
        taxBillHeader.set_prpFirstDateOfMonth(rs.getDate("FirstDateOfMonth"));
        taxBillHeader.set_prpn13(rs.getInt("n13"));
        taxBillHeader.set_prpn14(rs.getString("n14"));
        taxBillHeader.set_prpVolume(rs.getDouble("Volume"));
        taxBillHeader.set_prpVersion(rs.getString("Version"));
        taxBillHeader.set_prpFirmName(rs.getString("FirmName"));
        taxBillHeader.set_prpFirmEdrpo(rs.getString("FirmEdrpo"));
        taxBillHeader.set_prpFirmAddress(rs.getString("FirmAddress"));
        taxBillHeader.set_prpIpn(rs.getString("Ipn"));
        taxBillHeader.set_prpNumberPdv(rs.getString("NumberPdv"));
        taxBillHeader.set_prpPhone(rs.getString("Phone"));
        taxBillHeader.set_prpData_d(rs.getDate("Data_d"));
        taxBillHeader.set_prpFilija(rs.getString("Filija"));
        taxBillHeader.set_prpNplat(rs.getString("Nplat"));
        taxBillHeader.set_prpNind(rs.getString("Nind"));
        taxBillHeader.set_prpTel(rs.getString("Tel"));
        taxBillHeader.set_prpnSvid(rs.getString("nsvid"));
        taxBillHeader.set_prpCustomerAddress(rs.getString("CustomerAddress"));

        return taxBillHeader;
    }

    @Override
    protected String getSQLQuery() {
        String query = "exec spGetPJFileData '" + new DateTime(condition.getGenerateDate()).toString("yyyy-MM-dd") + "'";

        return query;
    }
}
