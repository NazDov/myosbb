
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for calcInvoiceVolumeLKP complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="calcInvoiceVolumeLKP">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="agreement" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}agreement" minOccurs="0"/>
 *         &lt;element name="categoryOfTariff" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}categoryOfTariff" minOccurs="0"/>
 *         &lt;element name="contraAgent" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}contraAgent" minOccurs="0"/>
 *         &lt;element name="date" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="departmentAgreement" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}agreement" minOccurs="0"/>
 *         &lt;element name="departmentInput" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}departmentInput" minOccurs="0"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="pdv" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="period" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="subService" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}subService" minOccurs="0"/>
 *         &lt;element name="sum" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="sumWithPdv" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="tarrif" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
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
@XmlType(name = "calcInvoiceVolumeLKP", propOrder = {
    "agreement",
    "categoryOfTariff",
    "contraAgent",
    "date",
    "departmentAgreement",
    "departmentInput",
    "id",
    "pdv",
    "period",
    "subService",
    "sum",
    "sumWithPdv",
    "tarrif",
    "volume"
})
public class CalcInvoiceVolumeLKP {

    protected Agreement agreement;
    protected CategoryOfTariff categoryOfTariff;
    protected ContraAgent contraAgent;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar date;
    protected Agreement departmentAgreement;
    protected DepartmentInput departmentInput;
    protected Long id;
    protected Double pdv;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar period;
    protected SubService subService;
    protected Double sum;
    protected Double sumWithPdv;
    protected Double tarrif;
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
     * Gets the value of the categoryOfTariff property.
     * 
     * @return
     *     possible object is
     *     {@link CategoryOfTariff }
     *     
     */
    public CategoryOfTariff getCategoryOfTariff() {
        return categoryOfTariff;
    }

    /**
     * Sets the value of the categoryOfTariff property.
     * 
     * @param value
     *     allowed object is
     *     {@link CategoryOfTariff }
     *     
     */
    public void setCategoryOfTariff(CategoryOfTariff value) {
        this.categoryOfTariff = value;
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
     * Gets the value of the date property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getDate() {
        return date;
    }

    /**
     * Sets the value of the date property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setDate(XMLGregorianCalendar value) {
        this.date = value;
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
     * Gets the value of the departmentInput property.
     * 
     * @return
     *     possible object is
     *     {@link DepartmentInput }
     *     
     */
    public DepartmentInput getDepartmentInput() {
        return departmentInput;
    }

    /**
     * Sets the value of the departmentInput property.
     * 
     * @param value
     *     allowed object is
     *     {@link DepartmentInput }
     *     
     */
    public void setDepartmentInput(DepartmentInput value) {
        this.departmentInput = value;
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
     * Gets the value of the pdv property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getPdv() {
        return pdv;
    }

    /**
     * Sets the value of the pdv property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setPdv(Double value) {
        this.pdv = value;
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
     * Gets the value of the sumWithPdv property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getSumWithPdv() {
        return sumWithPdv;
    }

    /**
     * Sets the value of the sumWithPdv property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setSumWithPdv(Double value) {
        this.sumWithPdv = value;
    }

    /**
     * Gets the value of the tarrif property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getTarrif() {
        return tarrif;
    }

    /**
     * Sets the value of the tarrif property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setTarrif(Double value) {
        this.tarrif = value;
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
