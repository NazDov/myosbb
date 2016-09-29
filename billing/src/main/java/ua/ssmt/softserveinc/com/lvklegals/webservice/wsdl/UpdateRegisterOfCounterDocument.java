
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for updateRegisterOfCounterDocument complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="updateRegisterOfCounterDocument">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="registerOfCounter" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}registerOfCounter" minOccurs="0"/>
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
@XmlType(name = "updateRegisterOfCounterDocument", propOrder = {
    "registerOfCounter",
    "user"
})
public class UpdateRegisterOfCounterDocument {

    protected RegisterOfCounter registerOfCounter;
    protected User user;

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
