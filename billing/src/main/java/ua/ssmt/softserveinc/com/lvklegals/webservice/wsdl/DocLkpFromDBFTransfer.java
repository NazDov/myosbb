
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for docLkpFromDBFTransfer complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="docLkpFromDBFTransfer">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="m3_ZAGLVP" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="m3_ZAGLVV" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="m3_ZAGVVV" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="UGODA" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "docLkpFromDBFTransfer", propOrder = {
    "m3ZAGLVP",
    "m3ZAGLVV",
    "m3ZAGVVV",
    "ugoda"
})
public class DocLkpFromDBFTransfer {

    @XmlElement(name = "m3_ZAGLVP")
    protected Double m3ZAGLVP;
    @XmlElement(name = "m3_ZAGLVV")
    protected Double m3ZAGLVV;
    @XmlElement(name = "m3_ZAGVVV")
    protected Double m3ZAGVVV;
    @XmlElement(name = "UGODA")
    protected String ugoda;

    /**
     * Gets the value of the m3ZAGLVP property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getM3ZAGLVP() {
        return m3ZAGLVP;
    }

    /**
     * Sets the value of the m3ZAGLVP property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setM3ZAGLVP(Double value) {
        this.m3ZAGLVP = value;
    }

    /**
     * Gets the value of the m3ZAGLVV property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getM3ZAGLVV() {
        return m3ZAGLVV;
    }

    /**
     * Sets the value of the m3ZAGLVV property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setM3ZAGLVV(Double value) {
        this.m3ZAGLVV = value;
    }

    /**
     * Gets the value of the m3ZAGVVV property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getM3ZAGVVV() {
        return m3ZAGVVV;
    }

    /**
     * Sets the value of the m3ZAGVVV property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setM3ZAGVVV(Double value) {
        this.m3ZAGVVV = value;
    }

    /**
     * Gets the value of the ugoda property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUGODA() {
        return ugoda;
    }

    /**
     * Sets the value of the ugoda property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUGODA(String value) {
        this.ugoda = value;
    }

}
