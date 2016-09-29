
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for createCommisionStockWithOutPermission complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="createCommisionStockWithOutPermission">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="docCorrectionStockWithOutPermission" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}docCorrectionStockWithOutPermission" minOccurs="0"/>
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
@XmlType(name = "createCommisionStockWithOutPermission", propOrder = {
    "docCorrectionStockWithOutPermission",
    "user"
})
public class CreateCommisionStockWithOutPermission {

    protected DocCorrectionStockWithOutPermission docCorrectionStockWithOutPermission;
    protected User user;

    /**
     * Gets the value of the docCorrectionStockWithOutPermission property.
     * 
     * @return
     *     possible object is
     *     {@link DocCorrectionStockWithOutPermission }
     *     
     */
    public DocCorrectionStockWithOutPermission getDocCorrectionStockWithOutPermission() {
        return docCorrectionStockWithOutPermission;
    }

    /**
     * Sets the value of the docCorrectionStockWithOutPermission property.
     * 
     * @param value
     *     allowed object is
     *     {@link DocCorrectionStockWithOutPermission }
     *     
     */
    public void setDocCorrectionStockWithOutPermission(DocCorrectionStockWithOutPermission value) {
        this.docCorrectionStockWithOutPermission = value;
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
