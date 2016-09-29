
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.*;
import javax.xml.datatype.XMLGregorianCalendar;
import java.util.ArrayList;
import java.util.List;


/**
 * <p>Java class for departmentInput complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="departmentInput">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="activityCounter" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}sysCounterStatus" minOccurs="0"/>
 *         &lt;element name="agreement" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}agreement" minOccurs="0"/>
 *         &lt;element name="agreementNumber" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="counter" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}counter" minOccurs="0"/>
 *         &lt;element name="counterNumber" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="dateWhirring" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="department" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}department" minOccurs="0"/>
 *         &lt;element name="endDate" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="historyInputSubServiceContains" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}inputSubServiceContain" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="historyProperties" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}inputProperty" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="hotWaterSupplier" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}hotWaterSupplier" minOccurs="0"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="input" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}input" minOccurs="0"/>
 *         &lt;element name="inputProperty" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}inputProperty" minOccurs="0"/>
 *         &lt;element name="modelName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="period" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="registerOfCounter" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}registerOfCounter" minOccurs="0"/>
 *         &lt;element name="startDate" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="subServices" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}inputSubServiceContain" minOccurs="0"/>
 *         &lt;element name="typeRemove" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}typeRemove" minOccurs="0"/>
 *         &lt;element name="unregisterOfCounter" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}unregisterOfCounter" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "departmentInput", propOrder = {
    "activityCounter",
    "agreement",
    "agreementNumber",
    "counter",
    "counterNumber",
    "dateWhirring",
    "department",
    "endDate",
    "historyInputSubServiceContains",
    "historyProperties",
    "hotWaterSupplier",
    "id",
    "input",
    "inputProperty",
    "modelName",
    "period",
    "registerOfCounter",
    "startDate",
    "subServices",
    "typeRemove",
    "unregisterOfCounter"
})
public class DepartmentInput {

    protected SysCounterStatus activityCounter;
    protected Agreement agreement;
    protected String agreementNumber;
    protected Counter counter;
    protected String counterNumber;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar dateWhirring;
    protected Department department;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar endDate;
    @XmlElement(nillable = true)
    protected List<InputSubServiceContain> historyInputSubServiceContains;
    @XmlElement(nillable = true)
    protected List<InputProperty> historyProperties;
    protected HotWaterSupplier hotWaterSupplier;
    protected Long id;
    protected Input input;
    protected InputProperty inputProperty;
    protected String modelName;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar period;
    protected RegisterOfCounter registerOfCounter;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar startDate;
    protected InputSubServiceContain subServices;
    protected TypeRemove typeRemove;
    protected UnregisterOfCounter unregisterOfCounter;

    /**
     * Gets the value of the activityCounter property.
     * 
     * @return
     *     possible object is
     *     {@link SysCounterStatus }
     *     
     */
    public SysCounterStatus getActivityCounter() {
        return activityCounter;
    }

    /**
     * Sets the value of the activityCounter property.
     * 
     * @param value
     *     allowed object is
     *     {@link SysCounterStatus }
     *     
     */
    public void setActivityCounter(SysCounterStatus value) {
        this.activityCounter = value;
    }

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
     * Gets the value of the counter property.
     * 
     * @return
     *     possible object is
     *     {@link Counter }
     *     
     */
    public Counter getCounter() {
        return counter;
    }

    /**
     * Sets the value of the counter property.
     * 
     * @param value
     *     allowed object is
     *     {@link Counter }
     *     
     */
    public void setCounter(Counter value) {
        this.counter = value;
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
     * Gets the value of the dateWhirring property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getDateWhirring() {
        return dateWhirring;
    }

    /**
     * Sets the value of the dateWhirring property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setDateWhirring(XMLGregorianCalendar value) {
        this.dateWhirring = value;
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
     * Gets the value of the endDate property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getEndDate() {
        return endDate;
    }

    /**
     * Sets the value of the endDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setEndDate(XMLGregorianCalendar value) {
        this.endDate = value;
    }

    /**
     * Gets the value of the historyInputSubServiceContains property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the historyInputSubServiceContains property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getHistoryInputSubServiceContains().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link InputSubServiceContain }
     * 
     * 
     */
    public List<InputSubServiceContain> getHistoryInputSubServiceContains() {
        if (historyInputSubServiceContains == null) {
            historyInputSubServiceContains = new ArrayList<InputSubServiceContain>();
        }
        return this.historyInputSubServiceContains;
    }

    /**
     * Gets the value of the historyProperties property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the historyProperties property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getHistoryProperties().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link InputProperty }
     * 
     * 
     */
    public List<InputProperty> getHistoryProperties() {
        if (historyProperties == null) {
            historyProperties = new ArrayList<InputProperty>();
        }
        return this.historyProperties;
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
     * Gets the value of the inputProperty property.
     * 
     * @return
     *     possible object is
     *     {@link InputProperty }
     *     
     */
    public InputProperty getInputProperty() {
        return inputProperty;
    }

    /**
     * Sets the value of the inputProperty property.
     * 
     * @param value
     *     allowed object is
     *     {@link InputProperty }
     *     
     */
    public void setInputProperty(InputProperty value) {
        this.inputProperty = value;
    }

    /**
     * Gets the value of the modelName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getModelName() {
        return modelName;
    }

    /**
     * Sets the value of the modelName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setModelName(String value) {
        this.modelName = value;
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
     * Gets the value of the registerOfCounter property.
     * 
     * @return
     *     possible object is
     *     {@link RegisterOfCounter }
     *     
     */
    public RegisterOfCounter getRegisterOfCounter() {
        return registerOfCounter;
    }

    /**
     * Sets the value of the registerOfCounter property.
     * 
     * @param value
     *     allowed object is
     *     {@link RegisterOfCounter }
     *     
     */
    public void setRegisterOfCounter(RegisterOfCounter value) {
        this.registerOfCounter = value;
    }

    /**
     * Gets the value of the startDate property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getStartDate() {
        return startDate;
    }

    /**
     * Sets the value of the startDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setStartDate(XMLGregorianCalendar value) {
        this.startDate = value;
    }

    /**
     * Gets the value of the subServices property.
     * 
     * @return
     *     possible object is
     *     {@link InputSubServiceContain }
     *     
     */
    public InputSubServiceContain getSubServices() {
        return subServices;
    }

    /**
     * Sets the value of the subServices property.
     * 
     * @param value
     *     allowed object is
     *     {@link InputSubServiceContain }
     *     
     */
    public void setSubServices(InputSubServiceContain value) {
        this.subServices = value;
    }

    /**
     * Gets the value of the typeRemove property.
     * 
     * @return
     *     possible object is
     *     {@link TypeRemove }
     *     
     */
    public TypeRemove getTypeRemove() {
        return typeRemove;
    }

    /**
     * Sets the value of the typeRemove property.
     * 
     * @param value
     *     allowed object is
     *     {@link TypeRemove }
     *     
     */
    public void setTypeRemove(TypeRemove value) {
        this.typeRemove = value;
    }

    /**
     * Gets the value of the unregisterOfCounter property.
     * 
     * @return
     *     possible object is
     *     {@link UnregisterOfCounter }
     *     
     */
    public UnregisterOfCounter getUnregisterOfCounter() {
        return unregisterOfCounter;
    }

    /**
     * Sets the value of the unregisterOfCounter property.
     * 
     * @param value
     *     allowed object is
     *     {@link UnregisterOfCounter }
     *     
     */
    public void setUnregisterOfCounter(UnregisterOfCounter value) {
        this.unregisterOfCounter = value;
    }

}
