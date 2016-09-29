
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for updateStockWithoutPermission complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="updateStockWithoutPermission">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="stockWithoutPermission" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}stockWithoutPermission" minOccurs="0"/>
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
@XmlType(name = "updateStockWithoutPermission", propOrder = {
    "stockWithoutPermission",
    "user"
})
public class UpdateStockWithoutPermission {

    protected StockWithoutPermission stockWithoutPermission;
    protected User user;

    /**
     * Gets the value of the stockWithoutPermission property.
     * 
     * @return
     *     possible object is
     *     {@link StockWithoutPermission }
     *     
     */
    public StockWithoutPermission getStockWithoutPermission() {
        return stockWithoutPermission;
    }

    /**
     * Sets the value of the stockWithoutPermission property.
     * 
     * @param value
     *     allowed object is
     *     {@link StockWithoutPermission }
     *     
     */
    public void setStockWithoutPermission(StockWithoutPermission value) {
        this.stockWithoutPermission = value;
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
