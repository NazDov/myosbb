
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for updateVolumeConsumption complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="updateVolumeConsumption">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="volumeConsumption" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}volumeConsumption" minOccurs="0"/>
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
@XmlType(name = "updateVolumeConsumption", propOrder = {
    "volumeConsumption",
    "user"
})
public class UpdateVolumeConsumption {

    protected VolumeConsumption volumeConsumption;
    protected User user;

    /**
     * Gets the value of the volumeConsumption property.
     * 
     * @return
     *     possible object is
     *     {@link VolumeConsumption }
     *     
     */
    public VolumeConsumption getVolumeConsumption() {
        return volumeConsumption;
    }

    /**
     * Sets the value of the volumeConsumption property.
     * 
     * @param value
     *     allowed object is
     *     {@link VolumeConsumption }
     *     
     */
    public void setVolumeConsumption(VolumeConsumption value) {
        this.volumeConsumption = value;
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
