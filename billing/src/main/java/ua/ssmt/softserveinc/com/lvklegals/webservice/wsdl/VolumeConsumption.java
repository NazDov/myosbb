
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for volumeConsumption complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="volumeConsumption">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="agreement" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}agreement" minOccurs="0"/>
 *         &lt;element name="agreementDep" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}agreement" minOccurs="0"/>
 *         &lt;element name="contraAgent" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}contraAgent" minOccurs="0"/>
 *         &lt;element name="date" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="department" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}department" minOccurs="0"/>
 *         &lt;element name="departmentInput" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}departmentInput" minOccurs="0"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="input" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}input" minOccurs="0"/>
 *         &lt;element name="period" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="service" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}service" minOccurs="0"/>
 *         &lt;element name="volumeVPHotWatter" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="volumeVp" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="volumeVv" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "volumeConsumption", propOrder = {
    "agreement",
    "agreementDep",
    "contraAgent",
    "date",
    "department",
    "departmentInput",
    "id",
    "input",
    "period",
    "service",
    "volumeVPHotWatter",
    "volumeVp",
    "volumeVv"
})
public class VolumeConsumption {

    protected Agreement agreement;
    protected Agreement agreementDep;
    protected ContraAgent contraAgent;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar date;
    protected Department department;
    protected DepartmentInput departmentInput;
    protected Long id;
    protected Input input;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar period;
    protected Service service;
    protected Double volumeVPHotWatter;
    protected Double volumeVp;
    protected Double volumeVv;

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
     * Gets the value of the agreementDep property.
     * 
     * @return
     *     possible object is
     *     {@link Agreement }
     *     
     */
    public Agreement getAgreementDep() {
        return agreementDep;
    }

    /**
     * Sets the value of the agreementDep property.
     * 
     * @param value
     *     allowed object is
     *     {@link Agreement }
     *     
     */
    public void setAgreementDep(Agreement value) {
        this.agreementDep = value;
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
     * Gets the value of the service property.
     * 
     * @return
     *     possible object is
     *     {@link Service }
     *     
     */
    public Service getService() {
        return service;
    }

    /**
     * Sets the value of the service property.
     * 
     * @param value
     *     allowed object is
     *     {@link Service }
     *     
     */
    public void setService(Service value) {
        this.service = value;
    }

    /**
     * Gets the value of the volumeVPHotWatter property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getVolumeVPHotWatter() {
        return volumeVPHotWatter;
    }

    /**
     * Sets the value of the volumeVPHotWatter property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setVolumeVPHotWatter(Double value) {
        this.volumeVPHotWatter = value;
    }

    /**
     * Gets the value of the volumeVp property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getVolumeVp() {
        return volumeVp;
    }

    /**
     * Sets the value of the volumeVp property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setVolumeVp(Double value) {
        this.volumeVp = value;
    }

    /**
     * Gets the value of the volumeVv property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getVolumeVv() {
        return volumeVv;
    }

    /**
     * Sets the value of the volumeVv property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setVolumeVv(Double value) {
        this.volumeVv = value;
    }

}
