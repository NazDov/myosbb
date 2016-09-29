
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for updateInputProperty complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="updateInputProperty">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="inputProperty" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}inputProperty" minOccurs="0"/>
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
@XmlType(name = "updateInputProperty", propOrder = {
    "inputProperty",
    "user"
})
public class UpdateInputProperty {

    protected InputProperty inputProperty;
    protected User user;

    /**
     * Gets the value of the inputProperty property.
     * 
     * @return
     *     possible object is
     *     {@link InputProperty }
     *     
     */
    public InputProperty getInputProperty() {
        return inputProperty;
    }

    /**
     * Sets the value of the inputProperty property.
     * 
     * @param value
     *     allowed object is
     *     {@link InputProperty }
     *     
     */
    public void setInputProperty(InputProperty value) {
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
