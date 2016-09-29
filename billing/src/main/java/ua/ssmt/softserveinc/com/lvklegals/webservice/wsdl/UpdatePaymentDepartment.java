
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for updatePaymentDepartment complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="updatePaymentDepartment">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="paymentDepartment" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}paymentDepartment" minOccurs="0"/>
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
@XmlType(name = "updatePaymentDepartment", propOrder = {
    "paymentDepartment",
    "user"
})
public class UpdatePaymentDepartment {

    protected PaymentDepartment paymentDepartment;
    protected User user;

    /**
     * Gets the value of the paymentDepartment property.
     * 
     * @return
     *     possible object is
     *     {@link PaymentDepartment }
     *     
     */
    public PaymentDepartment getPaymentDepartment() {
        return paymentDepartment;
    }

    /**
     * Sets the value of the paymentDepartment property.
     * 
     * @param value
     *     allowed object is
     *     {@link PaymentDepartment }
     *     
     */
    public void setPaymentDepartment(PaymentDepartment value) {
        this.paymentDepartment = value;
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
