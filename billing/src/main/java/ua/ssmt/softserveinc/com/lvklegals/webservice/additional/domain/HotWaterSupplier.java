package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

/**
 * Created by vostap on 28.08.2014.
 */
public class HotWaterSupplier {

    private Long id;
    private String IPN;
    private String EDRPO;
    private String countryName;
    private String mailIndexClient;
    private String streetName;
    private String numberHouse;
    private String cityName;
    private String rajonName;
    private String oblsatName;
    private HotWaterSupplierProperty property;

    public HotWaterSupplier(){
        this.property = new HotWaterSupplierProperty();
    }

    public HotWaterSupplier(Long id) {
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


    public HotWaterSupplierProperty getProperty() {
        return property;
    }

    public void setProperty(HotWaterSupplierProperty property) {
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
        return rajonName;
    }

    public void setRajonName(String rajonName) {
        this.rajonName = rajonName;
    }
}
