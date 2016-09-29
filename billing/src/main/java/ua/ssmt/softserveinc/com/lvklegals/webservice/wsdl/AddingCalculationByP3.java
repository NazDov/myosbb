
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.*;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for addingCalculationByP3 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="addingCalculationByP3">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="agreement" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}agreement" minOccurs="0"/>
 *         &lt;element name="contraAgent" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}contraAgent" minOccurs="0"/>
 *         &lt;element name="dateCalculation" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *         &lt;element name="department" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}department" minOccurs="0"/>
 *         &lt;element name="ID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="input" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}input" minOccurs="0"/>
 *         &lt;element name="label" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="numberDocumentReason" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="period" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="reason" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}reasonAddingByCapacityTube" minOccurs="0"/>
 *         &lt;element name="reasonDate" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="sumWatterOut" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="sumWatterSupply" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="volumeWatterOut" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="volumeWatterSupply" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "addingCalculationByP3", propOrder = {
    "agreement",
    "contraAgent",
    "dateCalculation",
    "department",
    "id",
    "input",
    "label",
    "numberDocumentReason",
    "period",
    "reason",
    "reasonDate",
    "sumWatterOut",
    "sumWatterSupply",
    "volumeWatterOut",
    "volumeWatterSupply"
})
public class AddingCalculationByP3 {

    protected Agreement agreement;
    protected ContraAgent contraAgent;
    protected Integer dateCalculation;
    protected Department department;
    @XmlElement(name = "ID")
    protected Long id;
    protected Input input;
    protected String label;
    protected String numberDocumentReason;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar period;
    protected ReasonAddingByCapacityTube reason;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar reasonDate;
    protected Double sumWatterOut;
    protected Double sumWatterSupply;
    protected Double volumeWatterOut;
    protected Double volumeWatterSupply;

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
     * Gets the value of the dateCalculation property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getDateCalculation() {
        return dateCalculation;
    }

    /**
     * Sets the value of the dateCalculation property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setDateCalculation(Integer value) {
        this.dateCalculation = value;
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
     * Gets the value of the id property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getID() {
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
    public void setID(Long value) {
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
     * Gets the value of the label property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLabel() {
        return label;
    }

    /**
     * Sets the value of the label property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLabel(String value) {
        this.label = value;
    }

    /**
     * Gets the value of the numberDocumentReason property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNumberDocumentReason() {
        return numberDocumentReason;
    }

    /**
     * Sets the value of the numberDocumentReason property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNumberDocumentReason(String value) {
        this.numberDocumentReason = value;
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
     * Gets the value of the reason property.
     * 
     * @return
     *     possible object is
     *     {@link ReasonAddingByCapacityTube }
     *     
     */
    public ReasonAddingByCapacityTube getReason() {
        return reason;
    }

    /**
     * Sets the value of the reason property.
     * 
     * @param value
     *     allowed object is
     *     {@link ReasonAddingByCapacityTube }
     *     
     */
    public void setReason(ReasonAddingByCapacityTube value) {
        this.reason = value;
    }

    /**
     * Gets the value of the reasonDate property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getReasonDate() {
        return reasonDate;
    }

    /**
     * Sets the value of the reasonDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setReasonDate(XMLGregorianCalendar value) {
        this.reasonDate = value;
    }

    /**
     * Gets the value of the sumWatterOut property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getSumWatterOut() {
        return sumWatterOut;
    }

    /**
     * Sets the value of the sumWatterOut property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setSumWatterOut(Double value) {
        this.sumWatterOut = value;
    }

    /**
     * Gets the value of the sumWatterSupply property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getSumWatterSupply() {
        return sumWatterSupply;
    }

    /**
     * Sets the value of the sumWatterSupply property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setSumWatterSupply(Double value) {
        this.sumWatterSupply = value;
    }

    /**
     * Gets the value of the volumeWatterOut property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getVolumeWatterOut() {
        return volumeWatterOut;
    }

    /**
     * Sets the value of the volumeWatterOut property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setVolumeWatterOut(Double value) {
        this.volumeWatterOut = value;
    }

    /**
     * Gets the value of the volumeWatterSupply property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getVolumeWatterSupply() {
        return volumeWatterSupply;
    }

    /**
     * Sets the value of the volumeWatterSupply property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setVolumeWatterSupply(Double value) {
        this.volumeWatterSupply = value;
    }

}
