
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import java.util.ArrayList;
import java.util.List;


/**
 * <p>Java class for department complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="department">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="agreement" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}agreement" minOccurs="0"/>
 *         &lt;element name="contraAgent" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}contraAgent" minOccurs="0"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="property" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}departmentProperty" minOccurs="0"/>
 *         &lt;element name="propertyHistory" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}departmentProperty" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="rainHistory" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}rains" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="rains" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}rains" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="routename" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "department", propOrder = {
    "agreement",
    "contraAgent",
    "id",
    "property",
    "propertyHistory",
    "rainHistory",
    "rains",
    "routename"
})
public class Department {

    protected Agreement agreement;
    protected ContraAgent contraAgent;
    protected Long id;
    protected DepartmentProperty property;
    @XmlElement(nillable = true)
    protected List<DepartmentProperty> propertyHistory;
    @XmlElement(nillable = true)
    protected List<Rains> rainHistory;
    @XmlElement(nillable = true)
    protected List<Rains> rains;
    protected String routename;

    /**
     * Gets the value of the agreement property.
     * 
     * @return
     *     possible object is
     *     {@link Agreement }
     *     
     */
    public Agreement getAgreement() {
        return agreement;
    }

    /**
     * Sets the value of the agreement property.
     * 
     * @param value
     *     allowed object is
     *     {@link Agreement }
     *     
     */
    public void setAgreement(Agreement value) {
        this.agreement = value;
    }

    /**
     * Gets the value of the contraAgent property.
     * 
     * @return
     *     possible object is
     *     {@link ContraAgent }
     *     
     */
    public ContraAgent getContraAgent() {
        return contraAgent;
    }

    /**
     * Sets the value of the contraAgent property.
     * 
     * @param value
     *     allowed object is
     *     {@link ContraAgent }
     *     
     */
    public void setContraAgent(ContraAgent value) {
        this.contraAgent = value;
    }

    /**
     * Gets the value of the id property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getId() {
        return id;
    }

    /**
     * Sets the value of the id property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setId(Long value) {
        this.id = value;
    }

    /**
     * Gets the value of the property property.
     * 
     * @return
     *     possible object is
     *     {@link DepartmentProperty }
     *     
     */
    public DepartmentProperty getProperty() {
        return property;
    }

    /**
     * Sets the value of the property property.
     * 
     * @param value
     *     allowed object is
     *     {@link DepartmentProperty }
     *     
     */
    public void setProperty(DepartmentProperty value) {
        this.property = value;
    }

    /**
     * Gets the value of the propertyHistory property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the propertyHistory property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getPropertyHistory().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link DepartmentProperty }
     * 
     * 
     */
    public List<DepartmentProperty> getPropertyHistory() {
        if (propertyHistory == null) {
            propertyHistory = new ArrayList<DepartmentProperty>();
        }
        return this.propertyHistory;
    }

    /**
     * Gets the value of the rainHistory property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the rainHistory property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getRainHistory().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Rains }
     * 
     * 
     */
    public List<Rains> getRainHistory() {
        if (rainHistory == null) {
            rainHistory = new ArrayList<Rains>();
        }
        return this.rainHistory;
    }

    /**
     * Gets the value of the rains property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the rains property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getRains().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Rains }
     * 
     * 
     */
    public List<Rains> getRains() {
        if (rains == null) {
            rains = new ArrayList<Rains>();
        }
        return this.rains;
    }

    /**
     * Gets the value of the routename property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRoutename() {
        return routename;
    }

    /**
     * Sets the value of the routename property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRoutename(String value) {
        this.routename = value;
    }

}
