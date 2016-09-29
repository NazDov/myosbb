
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for calcInvoiceTeploenergo complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="calcInvoiceTeploenergo">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="agreement" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}agreement" minOccurs="0"/>
 *         &lt;element name="contraAgent" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}contraAgent" minOccurs="0"/>
 *         &lt;element name="department" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}department" minOccurs="0"/>
 *         &lt;element name="departmentAgreement" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}agreement" minOccurs="0"/>
 *         &lt;element name="hotWaterSupplier" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}hotWaterSupplier" minOccurs="0"/>
 *         &lt;element name="hotWatterSupplierAgreement" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}hotWaterSupplyAgreement" minOccurs="0"/>
 *         &lt;element name="input" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}input" minOccurs="0"/>
 *         &lt;element name="organizationName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="period" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="subService" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}subService" minOccurs="0"/>
 *         &lt;element name="sum" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="tariff" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}categoryOfTariff" minOccurs="0"/>
 *         &lt;element name="tariffValue" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="volume" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "calcInvoiceTeploenergo", propOrder = {
    "agreement",
    "contraAgent",
    "department",
    "departmentAgreement",
    "hotWaterSupplier",
    "hotWatterSupplierAgreement",
    "input",
    "organizationName",
    "period",
    "subService",
    "sum",
    "tariff",
    "tariffValue",
    "volume"
})
public class CalcInvoiceTeploenergo {

    protected Agreement agreement;
    protected ContraAgent contraAgent;
    protected Department department;
    protected Agreement departmentAgreement;
    protected HotWaterSupplier hotWaterSupplier;
    protected HotWaterSupplyAgreement hotWatterSupplierAgreement;
    protected Input input;
    protected String organizationName;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar period;
    protected SubService subService;
    protected Double sum;
    protected CategoryOfTariff tariff;
    protected Double tariffValue;
    protected Double volume;

    /**
     * Gets the value of the agreement property.
     * 
     * @return
     *     possible object is
     *     {@link Agreement }
     *     
     */
    public Agreement getAgreement() {
        return agreement;
    }

    /**
     * Sets the value of the agreement property.
     * 
     * @param value
     *     allowed object is
     *     {@link Agreement }
     *     
     */
    public void setAgreement(Agreement value) {
        this.agreement = value;
    }

    /**
     * Gets the value of the contraAgent property.
     * 
     * @return
     *     possible object is
     *     {@link ContraAgent }
     *     
     */
    public ContraAgent getContraAgent() {
        return contraAgent;
    }

    /**
     * Sets the value of the contraAgent property.
     * 
     * @param value
     *     allowed object is
     *     {@link ContraAgent }
     *     
     */
    public void setContraAgent(ContraAgent value) {
        this.contraAgent = value;
    }

    /**
     * Gets the value of the department property.
     * 
     * @return
     *     possible object is
     *     {@link Department }
     *     
     */
    public Department getDepartment() {
        return department;
    }

    /**
     * Sets the value of the department property.
     * 
     * @param value
     *     allowed object is
     *     {@link Department }
     *     
     */
    public void setDepartment(Department value) {
        this.department = value;
    }

    /**
     * Gets the value of the departmentAgreement property.
     * 
     * @return
     *     possible object is
     *     {@link Agreement }
     *     
     */
    public Agreement getDepartmentAgreement() {
        return departmentAgreement;
    }

    /**
     * Sets the value of the departmentAgreement property.
     * 
     * @param value
     *     allowed object is
     *     {@link Agreement }
     *     
     */
    public void setDepartmentAgreement(Agreement value) {
        this.departmentAgreement = value;
    }

    /**
     * Gets the value of the hotWaterSupplier property.
     * 
     * @return
     *     possible object is
     *     {@link HotWaterSupplier }
     *     
     */
    public HotWaterSupplier getHotWaterSupplier() {
        return hotWaterSupplier;
    }

    /**
     * Sets the value of the hotWaterSupplier property.
     * 
     * @param value
     *     allowed object is
     *     {@link HotWaterSupplier }
     *     
     */
    public void setHotWaterSupplier(HotWaterSupplier value) {
        this.hotWaterSupplier = value;
    }

    /**
     * Gets the value of the hotWatterSupplierAgreement property.
     * 
     * @return
     *     possible object is
     *     {@link HotWaterSupplyAgreement }
     *     
     */
    public HotWaterSupplyAgreement getHotWatterSupplierAgreement() {
        return hotWatterSupplierAgreement;
    }

    /**
     * Sets the value of the hotWatterSupplierAgreement property.
     * 
     * @param value
     *     allowed object is
     *     {@link HotWaterSupplyAgreement }
     *     
     */
    public void setHotWatterSupplierAgreement(HotWaterSupplyAgreement value) {
        this.hotWatterSupplierAgreement = value;
    }

    /**
     * Gets the value of the input property.
     * 
     * @return
     *     possible object is
     *     {@link Input }
     *     
     */
    public Input getInput() {
        return input;
    }

    /**
     * Sets the value of the input property.
     * 
     * @param value
     *     allowed object is
     *     {@link Input }
     *     
     */
    public void setInput(Input value) {
        this.input = value;
    }

    /**
     * Gets the value of the organizationName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOrganizationName() {
        return organizationName;
    }

    /**
     * Sets the value of the organizationName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOrganizationName(String value) {
        this.organizationName = value;
    }

    /**
     * Gets the value of the period property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getPeriod() {
        return period;
    }

    /**
     * Sets the value of the period property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setPeriod(XMLGregorianCalendar value) {
        this.period = value;
    }

    /**
     * Gets the value of the subService property.
     * 
     * @return
     *     possible object is
     *     {@link SubService }
     *     
     */
    public SubService getSubService() {
        return subService;
    }

    /**
     * Sets the value of the subService property.
     * 
     * @param value
     *     allowed object is
     *     {@link SubService }
     *     
     */
    public void setSubService(SubService value) {
        this.subService = value;
    }

    /**
     * Gets the value of the sum property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getSum() {
        return sum;
    }

    /**
     * Sets the value of the sum property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setSum(Double value) {
        this.sum = value;
    }

    /**
     * Gets the value of the tariff property.
     * 
     * @return
     *     possible object is
     *     {@link CategoryOfTariff }
     *     
     */
    public CategoryOfTariff getTariff() {
        return tariff;
    }

    /**
     * Sets the value of the tariff property.
     * 
     * @param value
     *     allowed object is
     *     {@link CategoryOfTariff }
     *     
     */
    public void setTariff(CategoryOfTariff value) {
        this.tariff = value;
    }

    /**
     * Gets the value of the tariffValue property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getTariffValue() {
        return tariffValue;
    }

    /**
     * Sets the value of the tariffValue property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setTariffValue(Double value) {
        this.tariffValue = value;
    }

    /**
     * Gets the value of the volume property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getVolume() {
        return volume;
    }

    /**
     * Sets the value of the volume property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setVolume(Double value) {
        this.volume = value;
    }

}
