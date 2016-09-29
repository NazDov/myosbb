
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for updateRains complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="updateRains">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="inputProperty" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}rains" minOccurs="0"/>
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
@XmlType(name = "updateRains", propOrder = {
    "inputProperty",
    "user"
})
public class UpdateRains {

    protected Rains inputProperty;
    protected User user;

    /**
     * Gets the value of the inputProperty property.
     * 
     * @return
     *     possible object is
     *     {@link Rains }
     *     
     */
    public Rains getInputProperty() {
        return inputProperty;
    }

    /**
     * Sets the value of the inputProperty property.
     * 
     * @param value
     *     allowed object is
     *     {@link Rains }
     *     
     */
    public void setInputProperty(Rains value) {
        this.inputProperty = value;
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
