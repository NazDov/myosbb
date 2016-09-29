
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for searchDepartmentFreeKonto complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="searchDepartmentFreeKonto">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="districtInput" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}departamentFreeKontoCondition" minOccurs="0"/>
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
@XmlType(name = "searchDepartmentFreeKonto", propOrder = {
    "districtInput",
    "user"
})
public class SearchDepartmentFreeKonto {

    protected DepartamentFreeKontoCondition districtInput;
    protected User user;

    /**
     * Gets the value of the districtInput property.
     * 
     * @return
     *     possible object is
     *     {@link DepartamentFreeKontoCondition }
     *     
     */
    public DepartamentFreeKontoCondition getDistrictInput() {
        return districtInput;
    }

    /**
     * Sets the value of the districtInput property.
     * 
     * @param value
     *     allowed object is
     *     {@link DepartamentFreeKontoCondition }
     *     
     */
    public void setDistrictInput(DepartamentFreeKontoCondition value) {
        this.districtInput = value;
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
