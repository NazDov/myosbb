
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for deleteContinueRepairOrCheck complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="deleteContinueRepairOrCheck">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="continueRepairOrCheck" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}continueRepairOrCheck" minOccurs="0"/>
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
@XmlType(name = "deleteContinueRepairOrCheck", propOrder = {
    "continueRepairOrCheck",
    "user"
})
public class DeleteContinueRepairOrCheck {

    protected ContinueRepairOrCheck continueRepairOrCheck;
    protected User user;

    /**
     * Gets the value of the continueRepairOrCheck property.
     * 
     * @return
     *     possible object is
     *     {@link ContinueRepairOrCheck }
     *     
     */
    public ContinueRepairOrCheck getContinueRepairOrCheck() {
        return continueRepairOrCheck;
    }

    /**
     * Sets the value of the continueRepairOrCheck property.
     * 
     * @param value
     *     allowed object is
     *     {@link ContinueRepairOrCheck }
     *     
     */
    public void setContinueRepairOrCheck(ContinueRepairOrCheck value) {
        this.continueRepairOrCheck = value;
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
