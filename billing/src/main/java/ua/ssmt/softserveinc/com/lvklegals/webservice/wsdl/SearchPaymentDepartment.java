
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for searchPaymentDepartment complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="searchPaymentDepartment">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="addingPaymentDepartmentCondition" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}paymentDepartmentCondition" minOccurs="0"/>
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
@XmlType(name = "searchPaymentDepartment", propOrder = {
    "addingPaymentDepartmentCondition",
    "user"
})
public class SearchPaymentDepartment {

    protected PaymentDepartmentCondition addingPaymentDepartmentCondition;
    protected User user;

    /**
     * Gets the value of the addingPaymentDepartmentCondition property.
     * 
     * @return
     *     possible object is
     *     {@link PaymentDepartmentCondition }
     *     
     */
    public PaymentDepartmentCondition getAddingPaymentDepartmentCondition() {
        return addingPaymentDepartmentCondition;
    }

    /**
     * Sets the value of the addingPaymentDepartmentCondition property.
     * 
     * @param value
     *     allowed object is
     *     {@link PaymentDepartmentCondition }
     *     
     */
    public void setAddingPaymentDepartmentCondition(PaymentDepartmentCondition value) {
        this.addingPaymentDepartmentCondition = value;
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
