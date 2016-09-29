
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for deleteCorrectionOfRealize complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="deleteCorrectionOfRealize">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="correctionOfRealize" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}correctionOfRealize" minOccurs="0"/>
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
@XmlType(name = "deleteCorrectionOfRealize", propOrder = {
    "correctionOfRealize",
    "user"
})
public class DeleteCorrectionOfRealize {

    protected CorrectionOfRealize correctionOfRealize;
    protected User user;

    /**
     * Gets the value of the correctionOfRealize property.
     * 
     * @return
     *     possible object is
     *     {@link CorrectionOfRealize }
     *     
     */
    public CorrectionOfRealize getCorrectionOfRealize() {
        return correctionOfRealize;
    }

    /**
     * Sets the value of the correctionOfRealize property.
     * 
     * @param value
     *     allowed object is
     *     {@link CorrectionOfRealize }
     *     
     */
    public void setCorrectionOfRealize(CorrectionOfRealize value) {
        this.correctionOfRealize = value;
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
