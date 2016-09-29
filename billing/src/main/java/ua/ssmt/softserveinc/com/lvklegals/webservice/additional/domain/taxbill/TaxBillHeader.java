package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.taxbill;

import java.io.Serializable;
import java.util.Date;

/**
 * Created by bmitsan on 29.03.2016.
 */
public class TaxBillHeader implements Serializable {
    public static int DbPrpLoadDate = 0;
    public static int DbPrpPlat = 1;
    public static int DbPrpS = 2;
    public static int DbPrpPdv = 3;
    public static int DbPrpS_no_pdv = 4;
    public static int DbPrpzkpo = 5;
    public static int DbPrpFirstDateOfMonth = 6;
    public static int DbPrpn13 = 7;
    public static int DbPrpn14 = 8;
    public static int DbPrpVolume = 9;
    public static int DbPrpVersion = 10;
    public static int DbPrpFirmName = 11;
    public static int DbPrpFirmEdrpo = 12;
    public static int DbPrpFirmAddress = 13;
    public static int DbPrpIpn = 14;
    public static int DbPrpNumberPdv = 15;
    public static int DbPrpPhone = 16;
    public static int DbPrpData_d = 17;
    public static int DbPrpFilija = 18;
    public static int DbPrpNplat = 19;
    public static int DbPrpNind = 20;
    public static int DbPrpTel = 21;
    public static int DbPrpnSvid = 22;
    public static int DbPrpCustomerAddress = 23;

    private Date _prpLoadDate;
    private String _prpPlat;
    private Double _prpS;
    private Double _prpPdv;
    private Double _prpS_no_pdv;
    private String _prpzkpo;
    private Date _prpFirstDateOfMonth;
    private Integer _prpn13;
    private String _prpn14;
    private Double _prpVolume;
    private String _prpVersion;
    private String _prpFirmName;
    private String _prpFirmEdrpo;
    private String _prpFirmAddress;
    private String _prpIpn;
    private String _prpNumberPdv;
    private String _prpPhone;
    private Date _prpData_d;
    private String _prpFilija;
    private String _prpNplat;
    private String _prpNind;
    private String _prpTel;
    private String _prpnSvid;
    private String _prpCustomerAddress;

    public Date get_prpLoadDate() {
        return _prpLoadDate;
    }

    public void set_prpLoadDate(Date _prpLoadDate) {
        this._prpLoadDate = _prpLoadDate;
    }

    public String get_prpPlat() {
        return _prpPlat;
    }

    public void set_prpPlat(String _prpPlat) {
        this._prpPlat = _prpPlat;
    }

    public Double get_prpS() {
        return _prpS;
    }

    public void set_prpS(Double _prpS) {
        this._prpS = _prpS;
    }

    public Double get_prpPdv() {
        return _prpPdv;
    }

    public void set_prpPdv(Double _prpPdv) {
        this._prpPdv = _prpPdv;
    }

    public Double get_prpS_no_pdv() {
        return _prpS_no_pdv;
    }

    public void set_prpS_no_pdv(Double _prpS_no_pdv) {
        this._prpS_no_pdv = _prpS_no_pdv;
    }

    public String get_prpzkpo() {
        return _prpzkpo;
    }

    public void set_prpzkpo(String _prpzkpo) {
        this._prpzkpo = _prpzkpo;
    }

    public Date get_prpFirstDateOfMonth() {
        return _prpFirstDateOfMonth;
    }

    public void set_prpFirstDateOfMonth(Date _prpFirstDateOfMonth) {
        this._prpFirstDateOfMonth = _prpFirstDateOfMonth;
    }

    public Integer get_prpn13() {
        return _prpn13;
    }

    public void set_prpn13(Integer _prpn13) {
        this._prpn13 = _prpn13;
    }

    public String get_prpn14() {
        return _prpn14;
    }

    public void set_prpn14(String _prpn14) {
        this._prpn14 = _prpn14;
    }

    public Double get_prpVolume() {
        return _prpVolume;
    }

    public void set_prpVolume(Double _prpVolume) {
        this._prpVolume = _prpVolume;
    }

    public String get_prpVersion() {
        return _prpVersion;
    }

    public void set_prpVersion(String _prpVersion) {
        this._prpVersion = _prpVersion;
    }

    public String get_prpFirmName() {
        return _prpFirmName;
    }

    public void set_prpFirmName(String _prpFirmName) {
        this._prpFirmName = _prpFirmName;
    }

    public String get_prpFirmEdrpo() {
        return _prpFirmEdrpo;
    }

    public void set_prpFirmEdrpo(String _prpFirmEdrpo) {
        this._prpFirmEdrpo = _prpFirmEdrpo;
    }

    public String get_prpFirmAddress() {
        return _prpFirmAddress;
    }

    public void set_prpFirmAddress(String _prpFirmAddress) {
        this._prpFirmAddress = _prpFirmAddress;
    }

    public String get_prpIpn() {
        return _prpIpn;
    }

    public void set_prpIpn(String _prpIpn) {
        this._prpIpn = _prpIpn;
    }

    public String get_prpNumberPdv() {
        return _prpNumberPdv;
    }

    public void set_prpNumberPdv(String _prpNumberPdv) {
        this._prpNumberPdv = _prpNumberPdv;
    }

    public String get_prpPhone() {
        return _prpPhone;
    }

    public void set_prpPhone(String _prpPhone) {
        this._prpPhone = _prpPhone;
    }

    public Date get_prpData_d() {
        return _prpData_d;
    }

    public void set_prpData_d(Date _prpData_d) {
        this._prpData_d = _prpData_d;
    }

    public String get_prpFilija() {
        return _prpFilija;
    }

    public void set_prpFilija(String _prpFilija) {
        this._prpFilija = _prpFilija;
    }

    public String get_prpNplat() {
        return _prpNplat;
    }

    public void set_prpNplat(String _prpNplat) {
        this._prpNplat = _prpNplat;
    }

    public String get_prpNind() {
        return _prpNind;
    }

    public void set_prpNind(String _prpNind) {
        this._prpNind = _prpNind;
    }

    public String get_prpTel() {
        return _prpTel;
    }

    public void set_prpTel(String _prpTel) {
        this._prpTel = _prpTel;
    }

    public String get_prpnSvid() {
        return _prpnSvid;
    }

    public void set_prpnSvid(String _prpnSvid) {
        this._prpnSvid = _prpnSvid;
    }

    public String get_prpCustomerAddress() {
        return _prpCustomerAddress;
    }

    public void set_prpCustomerAddress(String _prpCustomerAddress) {
        this._prpCustomerAddress = _prpCustomerAddress;
    }
}
