
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.*;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for taxBillDetail complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="taxBillDetail">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="_cena" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="_country" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_data_d" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="_dobch" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="_fileType" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_filija" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_index" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_info" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_krn" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_mis" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_misto" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_nbud" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_nind" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_nnak" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_nplat" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_nsvid" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_ntar" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_nvul" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_oblast" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_pdv" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="_plat" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_rajon" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_s" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="_s_no_pdv" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="_svk" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="_tel" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_unit" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="_vvvk" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="_zkpo" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "taxBillDetail", propOrder = {
    "cena",
    "country",
    "dataD",
    "dobch",
    "fileType",
    "filija",
    "index",
    "info",
    "krn",
    "mis",
    "misto",
    "nbud",
    "nind",
    "nnak",
    "nplat",
    "nsvid",
    "ntar",
    "nvul",
    "oblast",
    "pdv",
    "plat",
    "rajon",
    "s",
    "sNoPdv",
    "svk",
    "tel",
    "unit",
    "vvvk",
    "zkpo"
})
public class TaxBillDetail {

    @XmlElement(name = "_cena")
    protected Double cena;
    @XmlElement(name = "_country")
    protected String country;
    @XmlElement(name = "_data_d")
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar dataD;
    @XmlElement(name = "_dobch")
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar dobch;
    @XmlElement(name = "_fileType")
    protected String fileType;
    @XmlElement(name = "_filija")
    protected String filija;
    @XmlElement(name = "_index")
    protected String index;
    @XmlElement(name = "_info")
    protected String info;
    @XmlElement(name = "_krn")
    protected String krn;
    @XmlElement(name = "_mis")
    protected String mis;
    @XmlElement(name = "_misto")
    protected String misto;
    @XmlElement(name = "_nbud")
    protected String nbud;
    @XmlElement(name = "_nind")
    protected String nind;
    @XmlElement(name = "_nnak")
    protected String nnak;
    @XmlElement(name = "_nplat")
    protected String nplat;
    @XmlElement(name = "_nsvid")
    protected String nsvid;
    @XmlElement(name = "_ntar")
    protected String ntar;
    @XmlElement(name = "_nvul")
    protected String nvul;
    @XmlElement(name = "_oblast")
    protected String oblast;
    @XmlElement(name = "_pdv")
    protected Double pdv;
    @XmlElement(name = "_plat")
    protected String plat;
    @XmlElement(name = "_rajon")
    protected String rajon;
    @XmlElement(name = "_s")
    protected Double s;
    @XmlElement(name = "_s_no_pdv")
    protected Double sNoPdv;
    @XmlElement(name = "_svk")
    protected Double svk;
    @XmlElement(name = "_tel")
    protected String tel;
    @XmlElement(name = "_unit")
    protected String unit;
    @XmlElement(name = "_vvvk")
    protected Double vvvk;
    @XmlElement(name = "_zkpo")
    protected String zkpo;

    /**
     * Gets the value of the cena property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getCena() {
        return cena;
    }

    /**
     * Sets the value of the cena property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setCena(Double value) {
        this.cena = value;
    }

    /**
     * Gets the value of the country property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCountry() {
        return country;
    }

    /**
     * Sets the value of the country property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCountry(String value) {
        this.country = value;
    }

    /**
     * Gets the value of the dataD property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getDataD() {
        return dataD;
    }

    /**
     * Sets the value of the dataD property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setDataD(XMLGregorianCalendar value) {
        this.dataD = value;
    }

    /**
     * Gets the value of the dobch property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getDobch() {
        return dobch;
    }

    /**
     * Sets the value of the dobch property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setDobch(XMLGregorianCalendar value) {
        this.dobch = value;
    }

    /**
     * Gets the value of the fileType property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFileType() {
        return fileType;
    }

    /**
     * Sets the value of the fileType property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFileType(String value) {
        this.fileType = value;
    }

    /**
     * Gets the value of the filija property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFilija() {
        return filija;
    }

    /**
     * Sets the value of the filija property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFilija(String value) {
        this.filija = value;
    }

    /**
     * Gets the value of the index property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIndex() {
        return index;
    }

    /**
     * Sets the value of the index property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIndex(String value) {
        this.index = value;
    }

    /**
     * Gets the value of the info property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInfo() {
        return info;
    }

    /**
     * Sets the value of the info property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInfo(String value) {
        this.info = value;
    }

    /**
     * Gets the value of the krn property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getKrn() {
        return krn;
    }

    /**
     * Sets the value of the krn property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setKrn(String value) {
        this.krn = value;
    }

    /**
     * Gets the value of the mis property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMis() {
        return mis;
    }

    /**
     * Sets the value of the mis property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMis(String value) {
        this.mis = value;
    }

    /**
     * Gets the value of the misto property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMisto() {
        return misto;
    }

    /**
     * Sets the value of the misto property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMisto(String value) {
        this.misto = value;
    }

    /**
     * Gets the value of the nbud property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNbud() {
        return nbud;
    }

    /**
     * Sets the value of the nbud property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNbud(String value) {
        this.nbud = value;
    }

    /**
     * Gets the value of the nind property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNind() {
        return nind;
    }

    /**
     * Sets the value of the nind property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNind(String value) {
        this.nind = value;
    }

    /**
     * Gets the value of the nnak property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNnak() {
        return nnak;
    }

    /**
     * Sets the value of the nnak property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNnak(String value) {
        this.nnak = value;
    }

    /**
     * Gets the value of the nplat property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNplat() {
        return nplat;
    }

    /**
     * Sets the value of the nplat property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNplat(String value) {
        this.nplat = value;
    }

    /**
     * Gets the value of the nsvid property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNsvid() {
        return nsvid;
    }

    /**
     * Sets the value of the nsvid property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNsvid(String value) {
        this.nsvid = value;
    }

    /**
     * Gets the value of the ntar property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNtar() {
        return ntar;
    }

    /**
     * Sets the value of the ntar property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNtar(String value) {
        this.ntar = value;
    }

    /**
     * Gets the value of the nvul property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNvul() {
        return nvul;
    }

    /**
     * Sets the value of the nvul property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNvul(String value) {
        this.nvul = value;
    }

    /**
     * Gets the value of the oblast property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOblast() {
        return oblast;
    }

    /**
     * Sets the value of the oblast property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOblast(String value) {
        this.oblast = value;
    }

    /**
     * Gets the value of the pdv property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getPdv() {
        return pdv;
    }

    /**
     * Sets the value of the pdv property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setPdv(Double value) {
        this.pdv = value;
    }

    /**
     * Gets the value of the plat property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPlat() {
        return plat;
    }

    /**
     * Sets the value of the plat property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPlat(String value) {
        this.plat = value;
    }

    /**
     * Gets the value of the rajon property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRajon() {
        return rajon;
    }

    /**
     * Sets the value of the rajon property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRajon(String value) {
        this.rajon = value;
    }

    /**
     * Gets the value of the s property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getS() {
        return s;
    }

    /**
     * Sets the value of the s property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setS(Double value) {
        this.s = value;
    }

    /**
     * Gets the value of the sNoPdv property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getSNoPdv() {
        return sNoPdv;
    }

    /**
     * Sets the value of the sNoPdv property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setSNoPdv(Double value) {
        this.sNoPdv = value;
    }

    /**
     * Gets the value of the svk property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getSvk() {
        return svk;
    }

    /**
     * Sets the value of the svk property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setSvk(Double value) {
        this.svk = value;
    }

    /**
     * Gets the value of the tel property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTel() {
        return tel;
    }

    /**
     * Sets the value of the tel property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTel(String value) {
        this.tel = value;
    }

    /**
     * Gets the value of the unit property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUnit() {
        return unit;
    }

    /**
     * Sets the value of the unit property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUnit(String value) {
        this.unit = value;
    }

    /**
     * Gets the value of the vvvk property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getVvvk() {
        return vvvk;
    }

    /**
     * Sets the value of the vvvk property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setVvvk(Double value) {
        this.vvvk = value;
    }

    /**
     * Gets the value of the zkpo property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getZkpo() {
        return zkpo;
    }

    /**
     * Sets the value of the zkpo property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setZkpo(String value) {
        this.zkpo = value;
    }

}
