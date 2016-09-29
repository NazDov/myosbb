package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import org.joda.time.DateTime;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.taxbill.TaxBillDetail;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.TaxBillCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by bmitsan on 29.03.2015.
 */
public class SearchTaxBillDetailQuery extends AbstractSelectQuery<TaxBillDetail,TaxBillCondition> {
    public SearchTaxBillDetailQuery(TaxBillCondition condition) {
        super(condition);
    }

    @Override
    protected TaxBillDetail parseResultSet(ResultSet rs) throws SQLException {
        TaxBillDetail taxBillDetail = new TaxBillDetail();

        taxBillDetail.set_dobch(rs.getTimestamp("DOBCH"));
        taxBillDetail.set_plat(rs.getString("plat"));
        taxBillDetail.set_nplat((rs.getString("nplat")));
        taxBillDetail.set_filija((rs.getString("filija")));
        taxBillDetail.set_index((rs.getString("index")));
        taxBillDetail.set_nvul(rs.getString("nvul"));
        taxBillDetail.set_nbud(rs.getString("nbud"));
        taxBillDetail.set_misto(rs.getString("misto"));
        taxBillDetail.set_rajon(rs.getString("rajon"));
        taxBillDetail.set_oblast(rs.getString("oblast"));
        taxBillDetail.set_country(rs.getString("country"));
        taxBillDetail.set_tel(rs.getString("tel"));
        taxBillDetail.set_nsvid(rs.getString("nsvid"));
        taxBillDetail.set_nind(rs.getString("nind"));
        taxBillDetail.set_krn(rs.getString("krn"));
        taxBillDetail.set_data_d(rs.getDate("data_d"));
        taxBillDetail.set_zkpo(rs.getString("zkpo"));
        taxBillDetail.set_mis(rs.getString("mis"));
        taxBillDetail.set_s(rs.getDouble("s"));
        taxBillDetail.set_pdv(rs.getDouble("pdv"));
        taxBillDetail.set_s_no_pdv(rs.getDouble("s_no_pdv"));
        taxBillDetail.set_nnak(rs.getString("nnak"));
        taxBillDetail.set_ntar(rs.getString("ntar"));
        taxBillDetail.set_unit(rs.getString("unit"));
        taxBillDetail.set_vvvk(rs.getDouble("vvvk"));
        taxBillDetail.set_svk(rs.getDouble("svk"));
        taxBillDetail.set_cena(rs.getDouble("cena"));
        taxBillDetail.set_info(rs.getString("Info"));
        taxBillDetail.set_fileType(rs.getString("Version"));

        return taxBillDetail;
    }

    @Override
    protected String getSQLQuery() {
        String query = "exec spGetPNFileData '" + new DateTime(condition.getGenerateDate()).toString("yyyy-MM-dd") + "'";

        return query;
    }
}
