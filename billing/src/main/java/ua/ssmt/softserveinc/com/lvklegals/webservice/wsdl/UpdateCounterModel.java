
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for updateCounterModel complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="updateCounterModel">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="counterModel" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}counterModel" minOccurs="0"/>
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
@XmlType(name = "updateCounterModel", propOrder = {
    "counterModel",
    "user"
})
public class UpdateCounterModel {

    protected CounterModel counterModel;
    protected User user;

    /**
     * Gets the value of the counterModel property.
     * 
     * @return
     *     possible object is
     *     {@link CounterModel }
     *     
     */
    public CounterModel getCounterModel() {
        return counterModel;
    }

    /**
     * Sets the value of the counterModel property.
     * 
     * @param value
     *     allowed object is
     *     {@link CounterModel }
     *     
     */
    public void setCounterModel(CounterModel value) {
        this.counterModel = value;
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
