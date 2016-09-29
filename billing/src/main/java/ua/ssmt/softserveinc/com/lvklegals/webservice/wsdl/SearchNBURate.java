
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for searchNBURate complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="searchNBURate">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="dicountRateNBUConditions" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}dicountRateNBUConditions" minOccurs="0"/>
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
@XmlType(name = "searchNBURate", propOrder = {
    "dicountRateNBUConditions",
    "user"
})
public class SearchNBURate {

    protected DicountRateNBUConditions dicountRateNBUConditions;
    protected User user;

    /**
     * Gets the value of the dicountRateNBUConditions property.
     * 
     * @return
     *     possible object is
     *     {@link DicountRateNBUConditions }
     *     
     */
    public DicountRateNBUConditions getDicountRateNBUConditions() {
        return dicountRateNBUConditions;
    }

    /**
     * Sets the value of the dicountRateNBUConditions property.
     * 
     * @param value
     *     allowed object is
     *     {@link DicountRateNBUConditions }
     *     
     */
    public void setDicountRateNBUConditions(DicountRateNBUConditions value) {
        this.dicountRateNBUConditions = value;
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
