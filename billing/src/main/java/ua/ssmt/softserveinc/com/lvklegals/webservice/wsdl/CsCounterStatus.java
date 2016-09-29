
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for csCounterStatus complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="csCounterStatus">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="counter" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}counter" minOccurs="0"/>
 *         &lt;element name="counterStatus" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="counterStatusID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="dateLastRegister" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "csCounterStatus", propOrder = {
    "counter",
    "counterStatus",
    "counterStatusID",
    "dateLastRegister"
})
public class CsCounterStatus {

    protected Counter counter;
    protected String counterStatus;
    protected Long counterStatusID;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar dateLastRegister;

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
     * Gets the value of the counterStatus property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCounterStatus() {
        return counterStatus;
    }

    /**
     * Sets the value of the counterStatus property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCounterStatus(String value) {
        this.counterStatus = value;
    }

    /**
     * Gets the value of the counterStatusID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getCounterStatusID() {
        return counterStatusID;
    }

    /**
     * Sets the value of the counterStatusID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setCounterStatusID(Long value) {
        this.counterStatusID = value;
    }

    /**
     * Gets the value of the dateLastRegister property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getDateLastRegister() {
        return dateLastRegister;
    }

    /**
     * Sets the value of the dateLastRegister property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setDateLastRegister(XMLGregorianCalendar value) {
        this.dateLastRegister = value;
    }

}
