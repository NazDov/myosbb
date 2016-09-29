
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for createNBURate complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="createNBURate">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="discountRateNBU" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}discountRateNBU" minOccurs="0"/>
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
@XmlType(name = "createNBURate", propOrder = {
    "discountRateNBU",
    "user"
})
public class CreateNBURate {

    protected DiscountRateNBU discountRateNBU;
    protected User user;

    /**
     * Gets the value of the discountRateNBU property.
     * 
     * @return
     *     possible object is
     *     {@link DiscountRateNBU }
     *     
     */
    public DiscountRateNBU getDiscountRateNBU() {
        return discountRateNBU;
    }

    /**
     * Sets the value of the discountRateNBU property.
     * 
     * @param value
     *     allowed object is
     *     {@link DiscountRateNBU }
     *     
     */
    public void setDiscountRateNBU(DiscountRateNBU value) {
        this.discountRateNBU = value;
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
