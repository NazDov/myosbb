
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for deleteUnregisterOfCounterDocument complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="deleteUnregisterOfCounterDocument">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="unregisterOfCounter" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}unregisterOfCounter" minOccurs="0"/>
 *         &lt;element name="user" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}user" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "deleteUnregisterOfCounterDocument", propOrder = {
    "unregisterOfCounter",
    "user"
})
public class DeleteUnregisterOfCounterDocument {

    protected UnregisterOfCounter unregisterOfCounter;
    protected User user;

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

    /**
     * Gets the value of the user property.
     * 
     * @return
     *     possible object is
     *     {@link User }
     *     
     */
    public User getUser() {
        return user;
    }

    /**
     * Sets the value of the user property.
     * 
     * @param value
     *     allowed object is
     *     {@link User }
     *     
     */
    public void setUser(User value) {
        this.user = value;
    }

}
