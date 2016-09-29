
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for searchAgreementHotWatter complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="searchAgreementHotWatter">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="addingCalculationByP3Condition" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}agreementHotWatterSupplyCondition" minOccurs="0"/>
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
@XmlType(name = "searchAgreementHotWatter", propOrder = {
    "addingCalculationByP3Condition",
    "user"
})
public class SearchAgreementHotWatter {

    protected AgreementHotWatterSupplyCondition addingCalculationByP3Condition;
    protected User user;

    /**
     * Gets the value of the addingCalculationByP3Condition property.
     * 
     * @return
     *     possible object is
     *     {@link AgreementHotWatterSupplyCondition }
     *     
     */
    public AgreementHotWatterSupplyCondition getAddingCalculationByP3Condition() {
        return addingCalculationByP3Condition;
    }

    /**
     * Sets the value of the addingCalculationByP3Condition property.
     * 
     * @param value
     *     allowed object is
     *     {@link AgreementHotWatterSupplyCondition }
     *     
     */
    public void setAddingCalculationByP3Condition(AgreementHotWatterSupplyCondition value) {
        this.addingCalculationByP3Condition = value;
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
