
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for searchAddingByConsumingVolume complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="searchAddingByConsumingVolume">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="addingByConsumingVolumeCondition" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}addingByConsumingVolumeCondition" minOccurs="0"/>
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
@XmlType(name = "searchAddingByConsumingVolume", propOrder = {
    "addingByConsumingVolumeCondition",
    "user"
})
public class SearchAddingByConsumingVolume {

    protected AddingByConsumingVolumeCondition addingByConsumingVolumeCondition;
    protected User user;

    /**
     * Gets the value of the addingByConsumingVolumeCondition property.
     * 
     * @return
     *     possible object is
     *     {@link AddingByConsumingVolumeCondition }
     *     
     */
    public AddingByConsumingVolumeCondition getAddingByConsumingVolumeCondition() {
        return addingByConsumingVolumeCondition;
    }

    /**
     * Sets the value of the addingByConsumingVolumeCondition property.
     * 
     * @param value
     *     allowed object is
     *     {@link AddingByConsumingVolumeCondition }
     *     
     */
    public void setAddingByConsumingVolumeCondition(AddingByConsumingVolumeCondition value) {
        this.addingByConsumingVolumeCondition = value;
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
