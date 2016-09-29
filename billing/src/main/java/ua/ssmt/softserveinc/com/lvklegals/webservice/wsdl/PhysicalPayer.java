
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for physicalPayer complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="physicalPayer">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="agreement" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}agreement" minOccurs="0"/>
 *         &lt;element name="contraAgent" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}contraAgent" minOccurs="0"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="period" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="pilga" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="subs" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="sumVp" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="sumVv" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="volumeVp" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="volumeVv" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "physicalPayer", propOrder = {
    "agreement",
    "contraAgent",
    "id",
    "period",
    "pilga",
    "subs",
    "sumVp",
    "sumVv",
    "volumeVp",
    "volumeVv"
})
public class PhysicalPayer {

    protected Agreement agreement;
    protected ContraAgent contraAgent;
    protected Long id;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar period;
    protected Double pilga;
    protected Double subs;
    protected Double sumVp;
    protected Double sumVv;
    protected Double volumeVp;
    protected Double volumeVv;

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

    /**
     * Gets the value of the pilga property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getPilga() {
        return pilga;
    }

    /**
     * Sets the value of the pilga property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setPilga(Double value) {
        this.pilga = value;
    }

    /**
     * Gets the value of the subs property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getSubs() {
        return subs;
    }

    /**
     * Sets the value of the subs property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setSubs(Double value) {
        this.subs = value;
    }

    /**
     * Gets the value of the sumVp property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getSumVp() {
        return sumVp;
    }

    /**
     * Sets the value of the sumVp property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setSumVp(Double value) {
        this.sumVp = value;
    }

    /**
     * Gets the value of the sumVv property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getSumVv() {
        return sumVv;
    }

    /**
     * Sets the value of the sumVv property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setSumVv(Double value) {
        this.sumVv = value;
    }

    /**
     * Gets the value of the volumeVp property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getVolumeVp() {
        return volumeVp;
    }

    /**
     * Sets the value of the volumeVp property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setVolumeVp(Double value) {
        this.volumeVp = value;
    }

    /**
     * Gets the value of the volumeVv property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getVolumeVv() {
        return volumeVv;
    }

    /**
     * Sets the value of the volumeVv property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setVolumeVv(Double value) {
        this.volumeVv = value;
    }

}
