
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for departmentProperty complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="departmentProperty">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="area" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}area" minOccurs="0"/>
 *         &lt;element name="bussinessProfile" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}bussinessProfile" minOccurs="0"/>
 *         &lt;element name="categoryOfTariff" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}categoryOfTariff" minOccurs="0"/>
 *         &lt;element name="conto" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="konto" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="name" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="period" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "departmentProperty", propOrder = {
    "area",
    "bussinessProfile",
    "categoryOfTariff",
    "conto",
    "id",
    "konto",
    "name",
    "period"
})
public class DepartmentProperty {

    protected Area area;
    protected BussinessProfile bussinessProfile;
    protected CategoryOfTariff categoryOfTariff;
    protected String conto;
    protected Long id;
    protected String konto;
    protected String name;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar period;

    /**
     * Gets the value of the area property.
     * 
     * @return
     *     possible object is
     *     {@link Area }
     *     
     */
    public Area getArea() {
        return area;
    }

    /**
     * Sets the value of the area property.
     * 
     * @param value
     *     allowed object is
     *     {@link Area }
     *     
     */
    public void setArea(Area value) {
        this.area = value;
    }

    /**
     * Gets the value of the bussinessProfile property.
     * 
     * @return
     *     possible object is
     *     {@link BussinessProfile }
     *     
     */
    public BussinessProfile getBussinessProfile() {
        return bussinessProfile;
    }

    /**
     * Sets the value of the bussinessProfile property.
     * 
     * @param value
     *     allowed object is
     *     {@link BussinessProfile }
     *     
     */
    public void setBussinessProfile(BussinessProfile value) {
        this.bussinessProfile = value;
    }

    /**
     * Gets the value of the categoryOfTariff property.
     * 
     * @return
     *     possible object is
     *     {@link CategoryOfTariff }
     *     
     */
    public CategoryOfTariff getCategoryOfTariff() {
        return categoryOfTariff;
    }

    /**
     * Sets the value of the categoryOfTariff property.
     * 
     * @param value
     *     allowed object is
     *     {@link CategoryOfTariff }
     *     
     */
    public void setCategoryOfTariff(CategoryOfTariff value) {
        this.categoryOfTariff = value;
    }

    /**
     * Gets the value of the conto property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getConto() {
        return conto;
    }

    /**
     * Sets the value of the conto property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setConto(String value) {
        this.conto = value;
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
     * Gets the value of the konto property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getKonto() {
        return konto;
    }

    /**
     * Sets the value of the konto property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setKonto(String value) {
        this.konto = value;
    }

    /**
     * Gets the value of the name property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the value of the name property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setName(String value) {
        this.name = value;
    }

    /**
     * Gets the value of the period property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getPeriod() {
        return period;
    }

    /**
     * Sets the value of the period property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setPeriod(XMLGregorianCalendar value) {
        this.period = value;
    }

}
