
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for deleteHotWatterSupplier complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="deleteHotWatterSupplier">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="hotWaterSupplier" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}hotWaterSupplier" minOccurs="0"/>
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
@XmlType(name = "deleteHotWatterSupplier", propOrder = {
    "hotWaterSupplier",
    "user"
})
public class DeleteHotWatterSupplier {

    protected HotWaterSupplier hotWaterSupplier;
    protected User user;

    /**
     * Gets the value of the hotWaterSupplier property.
     * 
     * @return
     *     possible object is
     *     {@link HotWaterSupplier }
     *     
     */
    public HotWaterSupplier getHotWaterSupplier() {
        return hotWaterSupplier;
    }

    /**
     * Sets the value of the hotWaterSupplier property.
     * 
     * @param value
     *     allowed object is
     *     {@link HotWaterSupplier }
     *     
     */
    public void setHotWaterSupplier(HotWaterSupplier value) {
        this.hotWaterSupplier = value;
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
