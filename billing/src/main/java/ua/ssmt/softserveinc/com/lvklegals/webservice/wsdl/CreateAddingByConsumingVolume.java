
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for createAddingByConsumingVolume complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="createAddingByConsumingVolume">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="addingConsumingVolume" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}addingByConsumingVolume" minOccurs="0"/>
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
@XmlType(name = "createAddingByConsumingVolume", propOrder = {
    "addingConsumingVolume",
    "user"
})
public class CreateAddingByConsumingVolume {

    protected AddingByConsumingVolume addingConsumingVolume;
    protected User user;

    /**
     * Gets the value of the addingConsumingVolume property.
     * 
     * @return
     *     possible object is
     *     {@link AddingByConsumingVolume }
     *     
     */
    public AddingByConsumingVolume getAddingConsumingVolume() {
        return addingConsumingVolume;
    }

    /**
     * Sets the value of the addingConsumingVolume property.
     * 
     * @param value
     *     allowed object is
     *     {@link AddingByConsumingVolume }
     *     
     */
    public void setAddingConsumingVolume(AddingByConsumingVolume value) {
        this.addingConsumingVolume = value;
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
