package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

import java.util.Date;

/**
 * Created by vostap on 28.08.2014.
 */
public class ContraAgent {

    private Long id;
    private String IPN;
    private String VATNum;
    private Date registerDate;
    private Date vatDate;
    private String EDRPO;
    private String countryName;
    private String mailIndexClient;
    private String streetName;
    private String numberHouse;
    private String cityName;
    private String oblsatName;
    private ContraAgentProperty property;
    private String RajonName;
    private String agreementNumber;
    private boolean hotWatterSupplier;
    private String filija;

    public  ContraAgent(){
        this.property = new ContraAgentProperty();
    }

    public ContraAgent(Long id) {
        this();
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIPN() {
        return IPN;
    }

    public void setIPN(String IPN) {
        this.IPN = IPN;
    }

    public String getVATNum() {
        return VATNum;
    }

    public void setVATNum(String VATNum) {
        this.VATNum = VATNum;
    }

    public Date getRegisterDate() {
        return registerDate;
    }

    public void setRegisterDate(Date registerDate) {
        this.registerDate = registerDate;
    }

    public Date getVatDate() {
        return vatDate;
    }

    public void setVatDate(Date vatDate) {
        this.vatDate = vatDate;
    }

    public ContraAgentProperty getProperty() {
        return property;
    }

    public void setProperty(ContraAgentProperty property) {
        this.property = property;
    }

    public String getEDRPO() {
        return EDRPO;
    }

    public void setEDRPO(String EDRPO) {
        this.EDRPO = EDRPO;
    }

    public String getOblsatName() {
        return oblsatName;
    }

    public void setOblsatName(String oblsatName) {
        this.oblsatName = oblsatName;
    }


    public String getNumberHouse() {
        return numberHouse;
    }

    public void setNumberHouse(String numberHouse) {
        this.numberHouse = numberHouse;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public String getStreetName() {
        return streetName;
    }

    public void setStreetName(String streetName) {
        this.streetName = streetName;
    }

    public String getMailIndexClient() {
        return mailIndexClient;
    }

    public void setMailIndexClient(String mailIndexClient) {
        this.mailIndexClient = mailIndexClient;
    }

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    public String getRajonName() {
        return RajonName;
    }

    public void setRajonName(String rajonName) {
        RajonName = rajonName;
    }

    public String getAgreementNumber() {
        return agreementNumber;
    }

    public void setAgreementNumber(String agreementNumber) {
        this.agreementNumber = agreementNumber;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ContraAgent that = (ContraAgent) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (IPN != null ? !IPN.equals(that.IPN) : that.IPN != null) return false;
        if (VATNum != null ? !VATNum.equals(that.VATNum) : that.VATNum != null) return false;
        return EDRPO != null ? EDRPO.equals(that.EDRPO) : that.EDRPO == null;

    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (IPN != null ? IPN.hashCode() : 0);
        result = 31 * result + (VATNum != null ? VATNum.hashCode() : 0);
        result = 31 * result + (EDRPO != null ? EDRPO.hashCode() : 0);
        return result;
    }

    public boolean getHotWatterSupplier() {
        return hotWatterSupplier;
    }

    public void setHotWatterSupplier(boolean hotWatterSupplier) {
        this.hotWatterSupplier = hotWatterSupplier;
    }

    public String getFilija() {
        return filija;
    }

    public void setFilija(String filija) {
        this.filija = filija;
    }
}
