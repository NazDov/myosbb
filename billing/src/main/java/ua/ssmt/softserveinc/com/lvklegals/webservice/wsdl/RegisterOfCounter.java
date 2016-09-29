
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for registerOfCounter complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="registerOfCounter">
 *   &lt;complexContent>
 *     &lt;extension base="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}counterDocuments">
 *       &lt;sequence>
 *         &lt;element name="beginFactor" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *         &lt;element name="contraAgent" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}contraAgent" minOccurs="0"/>
 *         &lt;element name="counter" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}counter" minOccurs="0"/>
 *         &lt;element name="department" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}department" minOccurs="0"/>
 *         &lt;element name="input" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}input" minOccurs="0"/>
 *         &lt;element name="metrCheckDate" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="metrPlomba" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="number" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="onDate" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="period" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="plombNumber1" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="plombNumber2" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="regInfDepartmentInputsID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="returned" type="{http://www.w3.org/2001/XMLSchema}boolean"/>
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
@XmlType(name = "registerOfCounter", propOrder = {
    "beginFactor",
    "contraAgent",
    "counter",
    "department",
    "input",
    "metrCheckDate",
    "metrPlomba",
    "number",
    "onDate",
    "period",
    "plombNumber1",
    "plombNumber2",
    "regInfDepartmentInputsID",
    "returned",
    "surname"
})
public class RegisterOfCounter
    extends CounterDocuments
{

    protected Integer beginFactor;
    protected ContraAgent contraAgent;
    protected Counter counter;
    protected Department department;
    protected Input input;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar metrCheckDate;
    protected String metrPlomba;
    protected String number;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar onDate;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar period;
    protected String plombNumber1;
    protected String plombNumber2;
    protected Long regInfDepartmentInputsID;
    protected boolean returned;
    protected String surname;

    /**
     * Gets the value of the beginFactor property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getBeginFactor() {
        return beginFactor;
    }

    /**
     * Sets the value of the beginFactor property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setBeginFactor(Integer value) {
        this.beginFactor = value;
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
     * Gets the value of the metrCheckDate property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getMetrCheckDate() {
        return metrCheckDate;
    }

    /**
     * Sets the value of the metrCheckDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setMetrCheckDate(XMLGregorianCalendar value) {
        this.metrCheckDate = value;
    }

    /**
     * Gets the value of the metrPlomba property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMetrPlomba() {
        return metrPlomba;
    }

    /**
     * Sets the value of the metrPlomba property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMetrPlomba(String value) {
        this.metrPlomba = value;
    }

    /**
     * Gets the value of the number property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNumber() {
        return number;
    }

    /**
     * Sets the value of the number property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNumber(String value) {
        this.number = value;
    }

    /**
     * Gets the value of the onDate property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getOnDate() {
        return onDate;
    }

    /**
     * Sets the value of the onDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setOnDate(XMLGregorianCalendar value) {
        this.onDate = value;
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
     * Gets the value of the plombNumber1 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPlombNumber1() {
        return plombNumber1;
    }

    /**
     * Sets the value of the plombNumber1 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPlombNumber1(String value) {
        this.plombNumber1 = value;
    }

    /**
     * Gets the value of the plombNumber2 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPlombNumber2() {
        return plombNumber2;
    }

    /**
     * Sets the value of the plombNumber2 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPlombNumber2(String value) {
        this.plombNumber2 = value;
    }

    /**
     * Gets the value of the regInfDepartmentInputsID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getRegInfDepartmentInputsID() {
        return regInfDepartmentInputsID;
    }

    /**
     * Sets the value of the regInfDepartmentInputsID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setRegInfDepartmentInputsID(Long value) {
        this.regInfDepartmentInputsID = value;
    }

    /**
     * Gets the value of the returned property.
     * 
     */
    public boolean isReturned() {
        return returned;
    }

    /**
     * Sets the value of the returned property.
     * 
     */
    public void setReturned(boolean value) {
        this.returned = value;
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
