
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for departmentInputCondition complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="departmentInputCondition">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="contraAgentID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="counterID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="departmentID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="hotwaterSupplyID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="inputID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="withHotWatterSupply" type="{http://www.w3.org/2001/XMLSchema}boolean"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "departmentInputCondition", propOrder = {
    "contraAgentID",
    "counterID",
    "departmentID",
    "hotwaterSupplyID",
    "id",
    "inputID",
    "withHotWatterSupply"
})
public class DepartmentInputCondition {

    protected Long contraAgentID;
    protected Long counterID;
    protected Long departmentID;
    protected Long hotwaterSupplyID;
    protected Long id;
    protected Long inputID;
    protected boolean withHotWatterSupply;

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
     * Gets the value of the hotwaterSupplyID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getHotwaterSupplyID() {
        return hotwaterSupplyID;
    }

    /**
     * Sets the value of the hotwaterSupplyID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setHotwaterSupplyID(Long value) {
        this.hotwaterSupplyID = value;
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
     * Gets the value of the withHotWatterSupply property.
     * 
     */
    public boolean isWithHotWatterSupply() {
        return withHotWatterSupply;
    }

    /**
     * Sets the value of the withHotWatterSupply property.
     * 
     */
    public void setWithHotWatterSupply(boolean value) {
        this.withHotWatterSupply = value;
    }

}
