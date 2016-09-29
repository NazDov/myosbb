
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for deleteDepartmentSubRoute complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="deleteDepartmentSubRoute">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="departmentSubRoute" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}departmentSubRoute" minOccurs="0"/>
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
@XmlType(name = "deleteDepartmentSubRoute", propOrder = {
    "departmentSubRoute",
    "user"
})
public class DeleteDepartmentSubRoute {

    protected DepartmentSubRoute departmentSubRoute;
    protected User user;

    /**
     * Gets the value of the departmentSubRoute property.
     * 
     * @return
     *     possible object is
     *     {@link DepartmentSubRoute }
     *     
     */
    public DepartmentSubRoute getDepartmentSubRoute() {
        return departmentSubRoute;
    }

    /**
     * Sets the value of the departmentSubRoute property.
     * 
     * @param value
     *     allowed object is
     *     {@link DepartmentSubRoute }
     *     
     */
    public void setDepartmentSubRoute(DepartmentSubRoute value) {
        this.departmentSubRoute = value;
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
