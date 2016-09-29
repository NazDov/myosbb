
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for updateInputSubDepartmentContains complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="updateInputSubDepartmentContains">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="inputSubServiceContain" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}inputSubServiceContain" minOccurs="0"/>
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
@XmlType(name = "updateInputSubDepartmentContains", propOrder = {
    "inputSubServiceContain",
    "user"
})
public class UpdateInputSubDepartmentContains {

    protected InputSubServiceContain inputSubServiceContain;
    protected User user;

    /**
     * Gets the value of the inputSubServiceContain property.
     * 
     * @return
     *     possible object is
     *     {@link InputSubServiceContain }
     *     
     */
    public InputSubServiceContain getInputSubServiceContain() {
        return inputSubServiceContain;
    }

    /**
     * Sets the value of the inputSubServiceContain property.
     * 
     * @param value
     *     allowed object is
     *     {@link InputSubServiceContain }
     *     
     */
    public void setInputSubServiceContain(InputSubServiceContain value) {
        this.inputSubServiceContain = value;
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
