
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for counter complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="counter">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="contraAgent" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}contraAgent" minOccurs="0"/>
 *         &lt;element name="counterHistory" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}counterHistory" minOccurs="0"/>
 *         &lt;element name="department" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}department" minOccurs="0"/>
 *         &lt;element name="diameter" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}counterDiametr" minOccurs="0"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="model" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}model" minOccurs="0"/>
 *         &lt;element name="number" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="typeCounter" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}typeCounter" minOccurs="0"/>
 *         &lt;element name="unitOfMeasurement" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}unitOfMeasurement" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "counter", propOrder = {
    "contraAgent",
    "counterHistory",
    "department",
    "diameter",
    "id",
    "model",
    "number",
    "typeCounter",
    "unitOfMeasurement"
})
public class Counter {

    protected ContraAgent contraAgent;
    protected CounterHistory counterHistory;
    protected Department department;
    protected CounterDiametr diameter;
    protected Long id;
    protected Model model;
    protected String number;
    protected TypeCounter typeCounter;
    protected UnitOfMeasurement unitOfMeasurement;

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
     * Gets the value of the counterHistory property.
     * 
     * @return
     *     possible object is
     *     {@link CounterHistory }
     *     
     */
    public CounterHistory getCounterHistory() {
        return counterHistory;
    }

    /**
     * Sets the value of the counterHistory property.
     * 
     * @param value
     *     allowed object is
     *     {@link CounterHistory }
     *     
     */
    public void setCounterHistory(CounterHistory value) {
        this.counterHistory = value;
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
     * Gets the value of the diameter property.
     * 
     * @return
     *     possible object is
     *     {@link CounterDiametr }
     *     
     */
    public CounterDiametr getDiameter() {
        return diameter;
    }

    /**
     * Sets the value of the diameter property.
     * 
     * @param value
     *     allowed object is
     *     {@link CounterDiametr }
     *     
     */
    public void setDiameter(CounterDiametr value) {
        this.diameter = value;
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
     * Gets the value of the model property.
     * 
     * @return
     *     possible object is
     *     {@link Model }
     *     
     */
    public Model getModel() {
        return model;
    }

    /**
     * Sets the value of the model property.
     * 
     * @param value
     *     allowed object is
     *     {@link Model }
     *     
     */
    public void setModel(Model value) {
        this.model = value;
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
     * Gets the value of the typeCounter property.
     * 
     * @return
     *     possible object is
     *     {@link TypeCounter }
     *     
     */
    public TypeCounter getTypeCounter() {
        return typeCounter;
    }

    /**
     * Sets the value of the typeCounter property.
     * 
     * @param value
     *     allowed object is
     *     {@link TypeCounter }
     *     
     */
    public void setTypeCounter(TypeCounter value) {
        this.typeCounter = value;
    }

    /**
     * Gets the value of the unitOfMeasurement property.
     * 
     * @return
     *     possible object is
     *     {@link UnitOfMeasurement }
     *     
     */
    public UnitOfMeasurement getUnitOfMeasurement() {
        return unitOfMeasurement;
    }

    /**
     * Sets the value of the unitOfMeasurement property.
     * 
     * @param value
     *     allowed object is
     *     {@link UnitOfMeasurement }
     *     
     */
    public void setUnitOfMeasurement(UnitOfMeasurement value) {
        this.unitOfMeasurement = value;
    }

}
