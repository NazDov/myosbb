
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for deleteCancelZaborgovanist complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="deleteCancelZaborgovanist">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="cancelZaborgovanist" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}cancelZaborgovanist" minOccurs="0"/>
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
@XmlType(name = "deleteCancelZaborgovanist", propOrder = {
    "cancelZaborgovanist",
    "user"
})
public class DeleteCancelZaborgovanist {

    protected CancelZaborgovanist cancelZaborgovanist;
    protected User user;

    /**
     * Gets the value of the cancelZaborgovanist property.
     * 
     * @return
     *     possible object is
     *     {@link CancelZaborgovanist }
     *     
     */
    public CancelZaborgovanist getCancelZaborgovanist() {
        return cancelZaborgovanist;
    }

    /**
     * Sets the value of the cancelZaborgovanist property.
     * 
     * @param value
     *     allowed object is
     *     {@link CancelZaborgovanist }
     *     
     */
    public void setCancelZaborgovanist(CancelZaborgovanist value) {
        this.cancelZaborgovanist = value;
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
