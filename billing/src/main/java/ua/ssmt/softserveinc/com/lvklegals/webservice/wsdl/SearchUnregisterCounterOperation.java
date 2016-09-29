
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for searchUnregisterCounterOperation complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="searchUnregisterCounterOperation">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="unregisterOfCounterCondition" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}unregisterOfCounterCondition" minOccurs="0"/>
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
@XmlType(name = "searchUnregisterCounterOperation", propOrder = {
    "unregisterOfCounterCondition",
    "user"
})
public class SearchUnregisterCounterOperation {

    protected UnregisterOfCounterCondition unregisterOfCounterCondition;
    protected User user;

    /**
     * Gets the value of the unregisterOfCounterCondition property.
     * 
     * @return
     *     possible object is
     *     {@link UnregisterOfCounterCondition }
     *     
     */
    public UnregisterOfCounterCondition getUnregisterOfCounterCondition() {
        return unregisterOfCounterCondition;
    }

    /**
     * Sets the value of the unregisterOfCounterCondition property.
     * 
     * @param value
     *     allowed object is
     *     {@link UnregisterOfCounterCondition }
     *     
     */
    public void setUnregisterOfCounterCondition(UnregisterOfCounterCondition value) {
        this.unregisterOfCounterCondition = value;
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
