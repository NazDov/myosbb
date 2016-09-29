
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for createDocLkp complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="createDocLkp">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="counter" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}docLkpFromDBFTransfer" minOccurs="0"/>
 *         &lt;element name="User" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}user" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "createDocLkp", propOrder = {
    "counter",
    "user"
})
public class CreateDocLkp {

    protected DocLkpFromDBFTransfer counter;
    @XmlElement(name = "User")
    protected User user;

    /**
     * Gets the value of the counter property.
     * 
     * @return
     *     possible object is
     *     {@link DocLkpFromDBFTransfer }
     *     
     */
    public DocLkpFromDBFTransfer getCounter() {
        return counter;
    }

    /**
     * Sets the value of the counter property.
     * 
     * @param value
     *     allowed object is
     *     {@link DocLkpFromDBFTransfer }
     *     
     */
    public void setCounter(DocLkpFromDBFTransfer value) {
        this.counter = value;
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
