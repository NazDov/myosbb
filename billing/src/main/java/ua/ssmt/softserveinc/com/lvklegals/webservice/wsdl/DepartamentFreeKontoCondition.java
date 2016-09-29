
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for departamentFreeKontoCondition complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="departamentFreeKontoCondition">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="routeID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="subRouteID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "departamentFreeKontoCondition", propOrder = {
    "routeID",
    "subRouteID"
})
public class DepartamentFreeKontoCondition {

    protected Long routeID;
    protected Long subRouteID;

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

}
