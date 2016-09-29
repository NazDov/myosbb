
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.*;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for taxBillHeader complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="taxBillHeader">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="_prpCustomerAddress" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_prpData_d" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="_prpFilija" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_prpFirmAddress" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_prpFirmEdrpo" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_prpFirmName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_prpFirstDateOfMonth" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="_prpIpn" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_prpLoadDate" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="_prpNind" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_prpNplat" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_prpNumberPdv" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_prpPdv" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="_prpPhone" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_prpPlat" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_prpS" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="_prpS_no_pdv" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="_prpTel" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_prpVersion" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_prpVolume" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="_prpn13" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *         &lt;element name="_prpn14" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_prpnSvid" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_prpzkpo" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "taxBillHeader", propOrder = {
    "prpCustomerAddress",
    "prpDataD",
    "prpFilija",
    "prpFirmAddress",
    "prpFirmEdrpo",
    "prpFirmName",
    "prpFirstDateOfMonth",
    "prpIpn",
    "prpLoadDate",
    "prpNind",
    "prpNplat",
    "prpNumberPdv",
    "prpPdv",
    "prpPhone",
    "prpPlat",
    "prpS",
    "prpSNoPdv",
    "prpTel",
    "prpVersion",
    "prpVolume",
    "prpn13",
    "prpn14",
    "prpnSvid",
    "prpzkpo"
})
public class TaxBillHeader {

    @XmlElement(name = "_prpCustomerAddress")
    protected String prpCustomerAddress;
    @XmlElement(name = "_prpData_d")
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar prpDataD;
    @XmlElement(name = "_prpFilija")
    protected String prpFilija;
    @XmlElement(name = "_prpFirmAddress")
    protected String prpFirmAddress;
    @XmlElement(name = "_prpFirmEdrpo")
    protected String prpFirmEdrpo;
    @XmlElement(name = "_prpFirmName")
    protected String prpFirmName;
    @XmlElement(name = "_prpFirstDateOfMonth")
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar prpFirstDateOfMonth;
    @XmlElement(name = "_prpIpn")
    protected String prpIpn;
    @XmlElement(name = "_prpLoadDate")
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar prpLoadDate;
    @XmlElement(name = "_prpNind")
    protected String prpNind;
    @XmlElement(name = "_prpNplat")
    protected String prpNplat;
    @XmlElement(name = "_prpNumberPdv")
    protected String prpNumberPdv;
    @XmlElement(name = "_prpPdv")
    protected Double prpPdv;
    @XmlElement(name = "_prpPhone")
    protected String prpPhone;
    @XmlElement(name = "_prpPlat")
    protected String prpPlat;
    @XmlElement(name = "_prpS")
    protected Double prpS;
    @XmlElement(name = "_prpS_no_pdv")
    protected Double prpSNoPdv;
    @XmlElement(name = "_prpTel")
    protected String prpTel;
    @XmlElement(name = "_prpVersion")
    protected String prpVersion;
    @XmlElement(name = "_prpVolume")
    protected Double prpVolume;
    @XmlElement(name = "_prpn13")
    protected Integer prpn13;
    @XmlElement(name = "_prpn14")
    protected String prpn14;
    @XmlElement(name = "_prpnSvid")
    protected String prpnSvid;
    @XmlElement(name = "_prpzkpo")
    protected String prpzkpo;

    /**
     * Gets the value of the prpCustomerAddress property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPrpCustomerAddress() {
        return prpCustomerAddress;
    }

    /**
     * Sets the value of the prpCustomerAddress property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPrpCustomerAddress(String value) {
        this.prpCustomerAddress = value;
    }

    /**
     * Gets the value of the prpDataD property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getPrpDataD() {
        return prpDataD;
    }

    /**
     * Sets the value of the prpDataD property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setPrpDataD(XMLGregorianCalendar value) {
        this.prpDataD = value;
    }

    /**
     * Gets the value of the prpFilija property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPrpFilija() {
        return prpFilija;
    }

    /**
     * Sets the value of the prpFilija property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPrpFilija(String value) {
        this.prpFilija = value;
    }

    /**
     * Gets the value of the prpFirmAddress property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPrpFirmAddress() {
        return prpFirmAddress;
    }

    /**
     * Sets the value of the prpFirmAddress property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPrpFirmAddress(String value) {
        this.prpFirmAddress = value;
    }

    /**
     * Gets the value of the prpFirmEdrpo property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPrpFirmEdrpo() {
        return prpFirmEdrpo;
    }

    /**
     * Sets the value of the prpFirmEdrpo property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPrpFirmEdrpo(String value) {
        this.prpFirmEdrpo = value;
    }

    /**
     * Gets the value of the prpFirmName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPrpFirmName() {
        return prpFirmName;
    }

    /**
     * Sets the value of the prpFirmName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPrpFirmName(String value) {
        this.prpFirmName = value;
    }

    /**
     * Gets the value of the prpFirstDateOfMonth property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getPrpFirstDateOfMonth() {
        return prpFirstDateOfMonth;
    }

    /**
     * Sets the value of the prpFirstDateOfMonth property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setPrpFirstDateOfMonth(XMLGregorianCalendar value) {
        this.prpFirstDateOfMonth = value;
    }

    /**
     * Gets the value of the prpIpn property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPrpIpn() {
        return prpIpn;
    }

    /**
     * Sets the value of the prpIpn property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPrpIpn(String value) {
        this.prpIpn = value;
    }

    /**
     * Gets the value of the prpLoadDate property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getPrpLoadDate() {
        return prpLoadDate;
    }

    /**
     * Sets the value of the prpLoadDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setPrpLoadDate(XMLGregorianCalendar value) {
        this.prpLoadDate = value;
    }

    /**
     * Gets the value of the prpNind property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPrpNind() {
        return prpNind;
    }

    /**
     * Sets the value of the prpNind property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPrpNind(String value) {
        this.prpNind = value;
    }

    /**
     * Gets the value of the prpNplat property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPrpNplat() {
        return prpNplat;
    }

    /**
     * Sets the value of the prpNplat property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPrpNplat(String value) {
        this.prpNplat = value;
    }

    /**
     * Gets the value of the prpNumberPdv property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPrpNumberPdv() {
        return prpNumberPdv;
    }

    /**
     * Sets the value of the prpNumberPdv property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPrpNumberPdv(String value) {
        this.prpNumberPdv = value;
    }

    /**
     * Gets the value of the prpPdv property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getPrpPdv() {
        return prpPdv;
    }

    /**
     * Sets the value of the prpPdv property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setPrpPdv(Double value) {
        this.prpPdv = value;
    }

    /**
     * Gets the value of the prpPhone property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPrpPhone() {
        return prpPhone;
    }

    /**
     * Sets the value of the prpPhone property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPrpPhone(String value) {
        this.prpPhone = value;
    }

    /**
     * Gets the value of the prpPlat property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPrpPlat() {
        return prpPlat;
    }

    /**
     * Sets the value of the prpPlat property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPrpPlat(String value) {
        this.prpPlat = value;
    }

    /**
     * Gets the value of the prpS property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getPrpS() {
        return prpS;
    }

    /**
     * Sets the value of the prpS property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setPrpS(Double value) {
        this.prpS = value;
    }

    /**
     * Gets the value of the prpSNoPdv property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getPrpSNoPdv() {
        return prpSNoPdv;
    }

    /**
     * Sets the value of the prpSNoPdv property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setPrpSNoPdv(Double value) {
        this.prpSNoPdv = value;
    }

    /**
     * Gets the value of the prpTel property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPrpTel() {
        return prpTel;
    }

    /**
     * Sets the value of the prpTel property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPrpTel(String value) {
        this.prpTel = value;
    }

    /**
     * Gets the value of the prpVersion property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPrpVersion() {
        return prpVersion;
    }

    /**
     * Sets the value of the prpVersion property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPrpVersion(String value) {
        this.prpVersion = value;
    }

    /**
     * Gets the value of the prpVolume property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getPrpVolume() {
        return prpVolume;
    }

    /**
     * Sets the value of the prpVolume property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setPrpVolume(Double value) {
        this.prpVolume = value;
    }

    /**
     * Gets the value of the prpn13 property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getPrpn13() {
        return prpn13;
    }

    /**
     * Sets the value of the prpn13 property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setPrpn13(Integer value) {
        this.prpn13 = value;
    }

    /**
     * Gets the value of the prpn14 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPrpn14() {
        return prpn14;
    }

    /**
     * Sets the value of the prpn14 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPrpn14(String value) {
        this.prpn14 = value;
    }

    /**
     * Gets the value of the prpnSvid property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPrpnSvid() {
        return prpnSvid;
    }

    /**
     * Sets the value of the prpnSvid property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPrpnSvid(String value) {
        this.prpnSvid = value;
    }

    /**
     * Gets the value of the prpzkpo property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPrpzkpo() {
        return prpzkpo;
    }

    /**
     * Sets the value of the prpzkpo property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPrpzkpo(String value) {
        this.prpzkpo = value;
    }

}
