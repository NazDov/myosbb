
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for searchAddingCalculationByP3_3 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="searchAddingCalculationByP3_3">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="addingCalculationByP3Condition" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}addingCalculationByP3Condition" minOccurs="0"/>
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
@XmlType(name = "searchAddingCalculationByP3_3", propOrder = {
    "addingCalculationByP3Condition",
    "user"
})
public class SearchAddingCalculationByP33 {

    protected AddingCalculationByP3Condition addingCalculationByP3Condition;
    protected User user;

    /**
     * Gets the value of the addingCalculationByP3Condition property.
     * 
     * @return
     *     possible object is
     *     {@link AddingCalculationByP3Condition }
     *     
     */
    public AddingCalculationByP3Condition getAddingCalculationByP3Condition() {
        return addingCalculationByP3Condition;
    }

    /**
     * Sets the value of the addingCalculationByP3Condition property.
     * 
     * @param value
     *     allowed object is
     *     {@link AddingCalculationByP3Condition }
     *     
     */
    public void setAddingCalculationByP3Condition(AddingCalculationByP3Condition value) {
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
