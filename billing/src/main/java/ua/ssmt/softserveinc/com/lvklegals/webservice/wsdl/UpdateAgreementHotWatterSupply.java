
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for updateAgreementHotWatterSupply complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="updateAgreementHotWatterSupply">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="agreement" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}hotWaterSupplyAgreement" minOccurs="0"/>
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
@XmlType(name = "updateAgreementHotWatterSupply", propOrder = {
    "agreement",
    "user"
})
public class UpdateAgreementHotWatterSupply {

    protected HotWaterSupplyAgreement agreement;
    protected User user;

    /**
     * Gets the value of the agreement property.
     * 
     * @return
     *     possible object is
     *     {@link HotWaterSupplyAgreement }
     *     
     */
    public HotWaterSupplyAgreement getAgreement() {
        return agreement;
    }

    /**
     * Sets the value of the agreement property.
     * 
     * @param value
     *     allowed object is
     *     {@link HotWaterSupplyAgreement }
     *     
     */
    public void setAgreement(HotWaterSupplyAgreement value) {
        this.agreement = value;
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
