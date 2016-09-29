
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for updateAddingByCapacityTube complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="updateAddingByCapacityTube">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="addingByCapacityTube" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}addingByCapacityTube" minOccurs="0"/>
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
@XmlType(name = "updateAddingByCapacityTube", propOrder = {
    "addingByCapacityTube",
    "user"
})
public class UpdateAddingByCapacityTube {

    protected AddingByCapacityTube addingByCapacityTube;
    protected User user;

    /**
     * Gets the value of the addingByCapacityTube property.
     * 
     * @return
     *     possible object is
     *     {@link AddingByCapacityTube }
     *     
     */
    public AddingByCapacityTube getAddingByCapacityTube() {
        return addingByCapacityTube;
    }

    /**
     * Sets the value of the addingByCapacityTube property.
     * 
     * @param value
     *     allowed object is
     *     {@link AddingByCapacityTube }
     *     
     */
    public void setAddingByCapacityTube(AddingByCapacityTube value) {
        this.addingByCapacityTube = value;
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
