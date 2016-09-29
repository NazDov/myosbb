
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for createPhysicalPayer complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="createPhysicalPayer">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="physicalPayer" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}physicalPayer" minOccurs="0"/>
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
@XmlType(name = "createPhysicalPayer", propOrder = {
    "physicalPayer",
    "user"
})
public class CreatePhysicalPayer {

    protected PhysicalPayer physicalPayer;
    protected User user;

    /**
     * Gets the value of the physicalPayer property.
     * 
     * @return
     *     possible object is
     *     {@link PhysicalPayer }
     *     
     */
    public PhysicalPayer getPhysicalPayer() {
        return physicalPayer;
    }

    /**
     * Sets the value of the physicalPayer property.
     * 
     * @param value
     *     allowed object is
     *     {@link PhysicalPayer }
     *     
     */
    public void setPhysicalPayer(PhysicalPayer value) {
        this.physicalPayer = value;
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
