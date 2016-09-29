
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for inputProperty complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="inputProperty">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="departmentInputID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="koefWatterOut" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="koefWatterSupply" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="norma" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
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
@XmlType(name = "inputProperty", propOrder = {
    "departmentInputID",
    "id",
    "koefWatterOut",
    "koefWatterSupply",
    "norma",
    "period"
})
public class InputProperty {

    protected Long departmentInputID;
    protected Long id;
    protected Double koefWatterOut;
    protected Double koefWatterSupply;
    protected Double norma;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar period;

    /**
     * Gets the value of the departmentInputID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getDepartmentInputID() {
        return departmentInputID;
    }

    /**
     * Sets the value of the departmentInputID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setDepartmentInputID(Long value) {
        this.departmentInputID = value;
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
     * Gets the value of the koefWatterOut property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getKoefWatterOut() {
        return koefWatterOut;
    }

    /**
     * Sets the value of the koefWatterOut property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setKoefWatterOut(Double value) {
        this.koefWatterOut = value;
    }

    /**
     * Gets the value of the koefWatterSupply property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getKoefWatterSupply() {
        return koefWatterSupply;
    }

    /**
     * Sets the value of the koefWatterSupply property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setKoefWatterSupply(Double value) {
        this.koefWatterSupply = value;
    }

    /**
     * Gets the value of the norma property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getNorma() {
        return norma;
    }

    /**
     * Sets the value of the norma property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setNorma(Double value) {
        this.norma = value;
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
