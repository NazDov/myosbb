
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for inputFactorCondition complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="inputFactorCondition">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="correctionCounterID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="counterID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="kontragentId" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="period" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="registerCounterID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="routeID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="subRouteID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="unregisterCounterID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "inputFactorCondition", propOrder = {
    "correctionCounterID",
    "counterID",
    "id",
    "kontragentId",
    "period",
    "registerCounterID",
    "routeID",
    "subRouteID",
    "unregisterCounterID"
})
public class InputFactorCondition {

    protected Long correctionCounterID;
    protected Long counterID;
    protected Long id;
    protected Long kontragentId;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar period;
    protected Long registerCounterID;
    protected Long routeID;
    protected Long subRouteID;
    protected Long unregisterCounterID;

    /**
     * Gets the value of the correctionCounterID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getCorrectionCounterID() {
        return correctionCounterID;
    }

    /**
     * Sets the value of the correctionCounterID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setCorrectionCounterID(Long value) {
        this.correctionCounterID = value;
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
     * Gets the value of the kontragentId property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getKontragentId() {
        return kontragentId;
    }

    /**
     * Sets the value of the kontragentId property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setKontragentId(Long value) {
        this.kontragentId = value;
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
     * Gets the value of the registerCounterID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getRegisterCounterID() {
        return registerCounterID;
    }

    /**
     * Sets the value of the registerCounterID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setRegisterCounterID(Long value) {
        this.registerCounterID = value;
    }

    /**
     * Gets the value of the routeID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getRouteID() {
        return routeID;
    }

    /**
     * Sets the value of the routeID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setRouteID(Long value) {
        this.routeID = value;
    }

    /**
     * Gets the value of the subRouteID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getSubRouteID() {
        return subRouteID;
    }

    /**
     * Sets the value of the subRouteID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setSubRouteID(Long value) {
        this.subRouteID = value;
    }

    /**
     * Gets the value of the unregisterCounterID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getUnregisterCounterID() {
        return unregisterCounterID;
    }

    /**
     * Sets the value of the unregisterCounterID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setUnregisterCounterID(Long value) {
        this.unregisterCounterID = value;
    }

}
