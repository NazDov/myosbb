
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for searchCounterByDepartmentAndInput complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="searchCounterByDepartmentAndInput">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="departmentInputCondition" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}departmentInputCondition" minOccurs="0"/>
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
@XmlType(name = "searchCounterByDepartmentAndInput", propOrder = {
    "departmentInputCondition",
    "user"
})
public class SearchCounterByDepartmentAndInput {

    protected DepartmentInputCondition departmentInputCondition;
    protected User user;

    /**
     * Gets the value of the departmentInputCondition property.
     * 
     * @return
     *     possible object is
     *     {@link DepartmentInputCondition }
     *     
     */
    public DepartmentInputCondition getDepartmentInputCondition() {
        return departmentInputCondition;
    }

    /**
     * Sets the value of the departmentInputCondition property.
     * 
     * @param value
     *     allowed object is
     *     {@link DepartmentInputCondition }
     *     
     */
    public void setDepartmentInputCondition(DepartmentInputCondition value) {
        this.departmentInputCondition = value;
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
