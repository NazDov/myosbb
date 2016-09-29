
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.*;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for contraAgent complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="contraAgent">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="agreementNumber" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="cityName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="countryName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="EDRPO" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="filija" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="hotWatterSupplier" type="{http://www.w3.org/2001/XMLSchema}boolean"/>
 *         &lt;element name="IPN" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="mailIndexClient" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="numberHouse" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="oblsatName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="property" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}contraAgentProperty" minOccurs="0"/>
 *         &lt;element name="rajonName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="registerDate" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="streetName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="VATNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="vatDate" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "contraAgent", propOrder = {
    "agreementNumber",
    "cityName",
    "countryName",
    "edrpo",
    "filija",
    "hotWatterSupplier",
    "ipn",
    "id",
    "mailIndexClient",
    "numberHouse",
    "oblsatName",
    "property",
    "rajonName",
    "registerDate",
    "streetName",
    "vatNum",
    "vatDate"
})
public class ContraAgent {

    protected String agreementNumber;
    protected String cityName;
    protected String countryName;
    @XmlElement(name = "EDRPO")
    protected String edrpo;
    protected String filija;
    protected boolean hotWatterSupplier;
    @XmlElement(name = "IPN")
    protected String ipn;
    protected Long id;
    protected String mailIndexClient;
    protected String numberHouse;
    protected String oblsatName;
    protected ContraAgentProperty property;
    protected String rajonName;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar registerDate;
    protected String streetName;
    @XmlElement(name = "VATNum")
    protected String vatNum;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar vatDate;

    /**
     * Gets the value of the agreementNumber property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAgreementNumber() {
        return agreementNumber;
    }

    /**
     * Sets the value of the agreementNumber property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAgreementNumber(String value) {
        this.agreementNumber = value;
    }

    /**
     * Gets the value of the cityName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCityName() {
        return cityName;
    }

    /**
     * Sets the value of the cityName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCityName(String value) {
        this.cityName = value;
    }

    /**
     * Gets the value of the countryName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCountryName() {
        return countryName;
    }

    /**
     * Sets the value of the countryName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCountryName(String value) {
        this.countryName = value;
    }

    /**
     * Gets the value of the edrpo property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEDRPO() {
        return edrpo;
    }

    /**
     * Sets the value of the edrpo property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEDRPO(String value) {
        this.edrpo = value;
    }

    /**
     * Gets the value of the filija property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFilija() {
        return filija;
    }

    /**
     * Sets the value of the filija property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFilija(String value) {
        this.filija = value;
    }

    /**
     * Gets the value of the hotWatterSupplier property.
     * 
     */
    public boolean isHotWatterSupplier() {
        return hotWatterSupplier;
    }

    /**
     * Sets the value of the hotWatterSupplier property.
     * 
     */
    public void setHotWatterSupplier(boolean value) {
        this.hotWatterSupplier = value;
    }

    /**
     * Gets the value of the ipn property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIPN() {
        return ipn;
    }

    /**
     * Sets the value of the ipn property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIPN(String value) {
        this.ipn = value;
    }

    /**
     * Gets the value of the id property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getId() {
        return id;
    }

    /**
     * Sets the value of the id property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setId(Long value) {
        this.id = value;
    }

    /**
     * Gets the value of the mailIndexClient property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMailIndexClient() {
        return mailIndexClient;
    }

    /**
     * Sets the value of the mailIndexClient property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMailIndexClient(String value) {
        this.mailIndexClient = value;
    }

    /**
     * Gets the value of the numberHouse property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNumberHouse() {
        return numberHouse;
    }

    /**
     * Sets the value of the numberHouse property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNumberHouse(String value) {
        this.numberHouse = value;
    }

    /**
     * Gets the value of the oblsatName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOblsatName() {
        return oblsatName;
    }

    /**
     * Sets the value of the oblsatName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOblsatName(String value) {
        this.oblsatName = value;
    }

    /**
     * Gets the value of the property property.
     * 
     * @return
     *     possible object is
     *     {@link ContraAgentProperty }
     *     
     */
    public ContraAgentProperty getProperty() {
        return property;
    }

    /**
     * Sets the value of the property property.
     * 
     * @param value
     *     allowed object is
     *     {@link ContraAgentProperty }
     *     
     */
    public void setProperty(ContraAgentProperty value) {
        this.property = value;
    }

    /**
     * Gets the value of the rajonName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRajonName() {
        return rajonName;
    }

    /**
     * Sets the value of the rajonName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRajonName(String value) {
        this.rajonName = value;
    }

    /**
     * Gets the value of the registerDate property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getRegisterDate() {
        return registerDate;
    }

    /**
     * Sets the value of the registerDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setRegisterDate(XMLGregorianCalendar value) {
        this.registerDate = value;
    }

    /**
     * Gets the value of the streetName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getStreetName() {
        return streetName;
    }

    /**
     * Sets the value of the streetName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setStreetName(String value) {
        this.streetName = value;
    }

    /**
     * Gets the value of the vatNum property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getVATNum() {
        return vatNum;
    }

    /**
     * Sets the value of the vatNum property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setVATNum(String value) {
        this.vatNum = value;
    }

    /**
     * Gets the value of the vatDate property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getVatDate() {
        return vatDate;
    }

    /**
     * Sets the value of the vatDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setVatDate(XMLGregorianCalendar value) {
        this.vatDate = value;
    }

}
