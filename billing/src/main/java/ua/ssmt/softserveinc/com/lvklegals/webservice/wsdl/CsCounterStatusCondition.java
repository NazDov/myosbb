
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for csCounterStatusCondition complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="csCounterStatusCondition">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="counterID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="departmentInput" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}departmentInput" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "csCounterStatusCondition", propOrder = {
    "counterID",
    "departmentInput"
})
public class CsCounterStatusCondition {

    protected Long counterID;
    protected DepartmentInput departmentInput;

    /**
     * Gets the value of the counterID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getCounterID() {
        return counterID;
    }

    /**
     * Sets the value of the counterID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setCounterID(Long value) {
        this.counterID = value;
    }

    /**
     * Gets the value of the departmentInput property.
     * 
     * @return
     *     possible object is
     *     {@link DepartmentInput }
     *     
     */
    public DepartmentInput getDepartmentInput() {
        return departmentInput;
    }

    /**
     * Sets the value of the departmentInput property.
     * 
     * @param value
     *     allowed object is
     *     {@link DepartmentInput }
     *     
     */
    public void setDepartmentInput(DepartmentInput value) {
        this.departmentInput = value;
    }

}
