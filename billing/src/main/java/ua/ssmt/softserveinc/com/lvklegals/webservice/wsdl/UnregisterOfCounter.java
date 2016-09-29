
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for unregisterOfCounter complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="unregisterOfCounter">
 *   &lt;complexContent>
 *     &lt;extension base="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}counterDocuments">
 *       &lt;sequence>
 *         &lt;element name="calculateInPeriodUnregisterCounter" type="{http://www.w3.org/2001/XMLSchema}boolean" minOccurs="0"/>
 *         &lt;element name="contraAgent" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}contraAgent" minOccurs="0"/>
 *         &lt;element name="counter" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}counter" minOccurs="0"/>
 *         &lt;element name="dateAct" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="dateActToUnPlomb" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="dateToReturnCounter" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="department" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}department" minOccurs="0"/>
 *         &lt;element name="departmentInput" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}departmentInput" minOccurs="0"/>
 *         &lt;element name="factorByOnUnregister" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *         &lt;element name="input" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}input" minOccurs="0"/>
 *         &lt;element name="numberAct" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="operationType" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}operationType" minOccurs="0"/>
 *         &lt;element name="period" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="periodByMiddleCalculationOnMonth1" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="periodByMiddleCalculationOnMonth2" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="surname" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "unregisterOfCounter", propOrder = {
    "calculateInPeriodUnregisterCounter",
    "contraAgent",
    "counter",
    "dateAct",
    "dateActToUnPlomb",
    "dateToReturnCounter",
    "department",
    "departmentInput",
    "factorByOnUnregister",
    "input",
    "numberAct",
    "operationType",
    "period",
    "periodByMiddleCalculationOnMonth1",
    "periodByMiddleCalculationOnMonth2",
    "surname"
})
public class UnregisterOfCounter
    extends CounterDocuments
{

    protected Boolean calculateInPeriodUnregisterCounter;
    protected ContraAgent contraAgent;
    protected Counter counter;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar dateAct;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar dateActToUnPlomb;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar dateToReturnCounter;
    protected Department department;
    protected DepartmentInput departmentInput;
    protected Integer factorByOnUnregister;
    protected Input input;
    protected String numberAct;
    protected OperationType operationType;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar period;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar periodByMiddleCalculationOnMonth1;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar periodByMiddleCalculationOnMonth2;
    protected String surname;

    /**
     * Gets the value of the calculateInPeriodUnregisterCounter property.
     * 
     * @return
     *     possible object is
     *     {@link Boolean }
     *     
     */
    public Boolean isCalculateInPeriodUnregisterCounter() {
        return calculateInPeriodUnregisterCounter;
    }

    /**
     * Sets the value of the calculateInPeriodUnregisterCounter property.
     * 
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *     
     */
    public void setCalculateInPeriodUnregisterCounter(Boolean value) {
        this.calculateInPeriodUnregisterCounter = value;
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
     * Gets the value of the dateActToUnPlomb property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getDateActToUnPlomb() {
        return dateActToUnPlomb;
    }

    /**
     * Sets the value of the dateActToUnPlomb property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setDateActToUnPlomb(XMLGregorianCalendar value) {
        this.dateActToUnPlomb = value;
    }

    /**
     * Gets the value of the dateToReturnCounter property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getDateToReturnCounter() {
        return dateToReturnCounter;
    }

    /**
     * Sets the value of the dateToReturnCounter property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setDateToReturnCounter(XMLGregorianCalendar value) {
        this.dateToReturnCounter = value;
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
     * Gets the value of the factorByOnUnregister property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getFactorByOnUnregister() {
        return factorByOnUnregister;
    }

    /**
     * Sets the value of the factorByOnUnregister property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setFactorByOnUnregister(Integer value) {
        this.factorByOnUnregister = value;
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
     * Gets the value of the operationType property.
     * 
     * @return
     *     possible object is
     *     {@link OperationType }
     *     
     */
    public OperationType getOperationType() {
        return operationType;
    }

    /**
     * Sets the value of the operationType property.
     * 
     * @param value
     *     allowed object is
     *     {@link OperationType }
     *     
     */
    public void setOperationType(OperationType value) {
        this.operationType = value;
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
     * Gets the value of the periodByMiddleCalculationOnMonth1 property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getPeriodByMiddleCalculationOnMonth1() {
        return periodByMiddleCalculationOnMonth1;
    }

    /**
     * Sets the value of the periodByMiddleCalculationOnMonth1 property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setPeriodByMiddleCalculationOnMonth1(XMLGregorianCalendar value) {
        this.periodByMiddleCalculationOnMonth1 = value;
    }

    /**
     * Gets the value of the periodByMiddleCalculationOnMonth2 property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getPeriodByMiddleCalculationOnMonth2() {
        return periodByMiddleCalculationOnMonth2;
    }

    /**
     * Sets the value of the periodByMiddleCalculationOnMonth2 property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setPeriodByMiddleCalculationOnMonth2(XMLGregorianCalendar value) {
        this.periodByMiddleCalculationOnMonth2 = value;
    }

    /**
     * Gets the value of the surname property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSurname() {
        return surname;
    }

    /**
     * Sets the value of the surname property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSurname(String value) {
        this.surname = value;
    }

}
