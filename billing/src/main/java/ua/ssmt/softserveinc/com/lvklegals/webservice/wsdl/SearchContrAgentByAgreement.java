
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for searchContrAgentByAgreement complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="searchContrAgentByAgreement">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="agreementCondition" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}agreementCondition" minOccurs="0"/>
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
@XmlType(name = "searchContrAgentByAgreement", propOrder = {
    "agreementCondition",
    "user"
})
public class SearchContrAgentByAgreement {

    protected AgreementCondition agreementCondition;
    protected User user;

    /**
     * Gets the value of the agreementCondition property.
     * 
     * @return
     *     possible object is
     *     {@link AgreementCondition }
     *     
     */
    public AgreementCondition getAgreementCondition() {
        return agreementCondition;
    }

    /**
     * Sets the value of the agreementCondition property.
     * 
     * @param value
     *     allowed object is
     *     {@link AgreementCondition }
     *     
     */
    public void setAgreementCondition(AgreementCondition value) {
        this.agreementCondition = value;
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
