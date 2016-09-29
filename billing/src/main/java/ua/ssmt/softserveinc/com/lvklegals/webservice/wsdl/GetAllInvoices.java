
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for getAllInvoices complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="getAllInvoices">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="arg0" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}calcInvoiceCondition" minOccurs="0"/>
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
@XmlType(name = "getAllInvoices", propOrder = {
    "arg0",
    "user"
})
public class GetAllInvoices {

    protected CalcInvoiceCondition arg0;
    protected User user;

    /**
     * Gets the value of the arg0 property.
     * 
     * @return
     *     possible object is
     *     {@link CalcInvoiceCondition }
     *     
     */
    public CalcInvoiceCondition getArg0() {
        return arg0;
    }

    /**
     * Sets the value of the arg0 property.
     * 
     * @param value
     *     allowed object is
     *     {@link CalcInvoiceCondition }
     *     
     */
    public void setArg0(CalcInvoiceCondition value) {
        this.arg0 = value;
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
