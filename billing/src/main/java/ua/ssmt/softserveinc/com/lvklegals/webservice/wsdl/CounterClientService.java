
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for counterClientService complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="counterClientService">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="beginMonth" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="counter" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}counter" minOccurs="0"/>
 *         &lt;element name="department" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}department" minOccurs="0"/>
 *         &lt;element name="endFactor" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="input" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}input" minOccurs="0"/>
 *         &lt;element name="registerOfCounter" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}registerOfCounter" minOccurs="0"/>
 *         &lt;element name="startFactor" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
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
@XmlType(name = "counterClientService", propOrder = {
    "beginMonth",
    "counter",
    "department",
    "endFactor",
    "id",
    "input",
    "registerOfCounter",
    "startFactor",
    "unregisterOfCounter"
})
public class CounterClientService {

    protected Double beginMonth;
    protected Counter counter;
    protected Department department;
    protected Double endFactor;
    protected Long id;
    protected Input input;
    protected RegisterOfCounter registerOfCounter;
    protected Double startFactor;
    protected UnregisterOfCounter unregisterOfCounter;

    /**
     * Gets the value of the beginMonth property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getBeginMonth() {
        return beginMonth;
    }

    /**
     * Sets the value of the beginMonth property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setBeginMonth(Double value) {
        this.beginMonth = value;
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
     * Gets the value of the endFactor property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getEndFactor() {
        return endFactor;
    }

    /**
     * Sets the value of the endFactor property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setEndFactor(Double value) {
        this.endFactor = value;
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
     * Gets the value of the startFactor property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getStartFactor() {
        return startFactor;
    }

    /**
     * Sets the value of the startFactor property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setStartFactor(Double value) {
        this.startFactor = value;
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
