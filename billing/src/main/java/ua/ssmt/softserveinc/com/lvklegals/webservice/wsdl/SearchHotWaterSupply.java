
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for searchHotWaterSupply complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="searchHotWaterSupply">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="hotWaterSupplierCondition" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}hotWaterSupplierCondition" minOccurs="0"/>
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
@XmlType(name = "searchHotWaterSupply", propOrder = {
    "hotWaterSupplierCondition",
    "user"
})
public class SearchHotWaterSupply {

    protected HotWaterSupplierCondition hotWaterSupplierCondition;
    protected User user;

    /**
     * Gets the value of the hotWaterSupplierCondition property.
     * 
     * @return
     *     possible object is
     *     {@link HotWaterSupplierCondition }
     *     
     */
    public HotWaterSupplierCondition getHotWaterSupplierCondition() {
        return hotWaterSupplierCondition;
    }

    /**
     * Sets the value of the hotWaterSupplierCondition property.
     * 
     * @param value
     *     allowed object is
     *     {@link HotWaterSupplierCondition }
     *     
     */
    public void setHotWaterSupplierCondition(HotWaterSupplierCondition value) {
        this.hotWaterSupplierCondition = value;
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
