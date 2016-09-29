
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for searchCorrection complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="searchCorrection">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="addingCorrectionCondition" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}correctionCondition" minOccurs="0"/>
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
@XmlType(name = "searchCorrection", propOrder = {
    "addingCorrectionCondition",
    "user"
})
public class SearchCorrection {

    protected CorrectionCondition addingCorrectionCondition;
    protected User user;

    /**
     * Gets the value of the addingCorrectionCondition property.
     * 
     * @return
     *     possible object is
     *     {@link CorrectionCondition }
     *     
     */
    public CorrectionCondition getAddingCorrectionCondition() {
        return addingCorrectionCondition;
    }

    /**
     * Sets the value of the addingCorrectionCondition property.
     * 
     * @param value
     *     allowed object is
     *     {@link CorrectionCondition }
     *     
     */
    public void setAddingCorrectionCondition(CorrectionCondition value) {
        this.addingCorrectionCondition = value;
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
