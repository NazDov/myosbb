
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for searchServicePayment complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="searchServicePayment">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="addingServicePaymentCondition" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}servicePaymentCondition" minOccurs="0"/>
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
@XmlType(name = "searchServicePayment", propOrder = {
    "addingServicePaymentCondition",
    "user"
})
public class SearchServicePayment {

    protected ServicePaymentCondition addingServicePaymentCondition;
    protected User user;

    /**
     * Gets the value of the addingServicePaymentCondition property.
     * 
     * @return
     *     possible object is
     *     {@link ServicePaymentCondition }
     *     
     */
    public ServicePaymentCondition getAddingServicePaymentCondition() {
        return addingServicePaymentCondition;
    }

    /**
     * Sets the value of the addingServicePaymentCondition property.
     * 
     * @param value
     *     allowed object is
     *     {@link ServicePaymentCondition }
     *     
     */
    public void setAddingServicePaymentCondition(ServicePaymentCondition value) {
        this.addingServicePaymentCondition = value;
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
