
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for registerOfCounterCondition complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="registerOfCounterCondition">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="contraAgentID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="counterID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="counterNumber" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="dateAct" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="departmentID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="departmentInputID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="inputID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="lessDate" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="moreDate" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="numberAct" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="period" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="registerOfCounterID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "registerOfCounterCondition", propOrder = {
    "contraAgentID",
    "counterID",
    "counterNumber",
    "dateAct",
    "departmentID",
    "departmentInputID",
    "id",
    "inputID",
    "lessDate",
    "moreDate",
    "numberAct",
    "period",
    "registerOfCounterID"
})
public class RegisterOfCounterCondition {

    protected Long contraAgentID;
    protected Long counterID;
    protected String counterNumber;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar dateAct;
    protected Long departmentID;
    protected Long departmentInputID;
    protected Long id;
    protected Long inputID;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar lessDate;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar moreDate;
    protected String numberAct;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar period;
    protected Long registerOfCounterID;

    /**
     * Gets the value of the contraAgentID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getContraAgentID() {
        return contraAgentID;
    }

    /**
     * Sets the value of the contraAgentID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setContraAgentID(Long value) {
        this.contraAgentID = value;
    }

    /**
     * Gets the value of the counterID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getCounterID() {
        return counterID;
    }

    /**
     * Sets the value of the counterID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setCounterID(Long value) {
        this.counterID = value;
    }

    /**
     * Gets the value of the counterNumber property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCounterNumber() {
        return counterNumber;
    }

    /**
     * Sets the value of the counterNumber property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCounterNumber(String value) {
        this.counterNumber = value;
    }

    /**
     * Gets the value of the dateAct property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getDateAct() {
        return dateAct;
    }

    /**
     * Sets the value of the dateAct property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setDateAct(XMLGregorianCalendar value) {
        this.dateAct = value;
    }

    /**
     * Gets the value of the departmentID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getDepartmentID() {
        return departmentID;
    }

    /**
     * Sets the value of the departmentID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setDepartmentID(Long value) {
        this.departmentID = value;
    }

    /**
     * Gets the value of the departmentInputID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getDepartmentInputID() {
        return departmentInputID;
    }

    /**
     * Sets the value of the departmentInputID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setDepartmentInputID(Long value) {
        this.departmentInputID = value;
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
     * Gets the value of the inputID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getInputID() {
        return inputID;
    }

    /**
     * Sets the value of the inputID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setInputID(Long value) {
        this.inputID = value;
    }

    /**
     * Gets the value of the lessDate property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getLessDate() {
        return lessDate;
    }

    /**
     * Sets the value of the lessDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setLessDate(XMLGregorianCalendar value) {
        this.lessDate = value;
    }

    /**
     * Gets the value of the moreDate property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getMoreDate() {
        return moreDate;
    }

    /**
     * Sets the value of the moreDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setMoreDate(XMLGregorianCalendar value) {
        this.moreDate = value;
    }

    /**
     * Gets the value of the numberAct property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNumberAct() {
        return numberAct;
    }

    /**
     * Sets the value of the numberAct property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNumberAct(String value) {
        this.numberAct = value;
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
     * Gets the value of the registerOfCounterID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getRegisterOfCounterID() {
        return registerOfCounterID;
    }

    /**
     * Sets the value of the registerOfCounterID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setRegisterOfCounterID(Long value) {
        this.registerOfCounterID = value;
    }

}
