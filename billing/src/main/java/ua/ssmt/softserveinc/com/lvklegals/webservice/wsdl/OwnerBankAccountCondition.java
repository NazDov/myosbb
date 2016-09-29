
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ownerBankAccountCondition complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ownerBankAccountCondition">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="bank" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}bank" minOccurs="0"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="ownerAccount" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}ownerAccount" minOccurs="0"/>
 *         &lt;element name="ownerBankAccount" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ownerBankAccountCondition", propOrder = {
    "bank",
    "id",
    "ownerAccount",
    "ownerBankAccount"
})
public class OwnerBankAccountCondition {

    protected Bank bank;
    protected Long id;
    protected OwnerAccount ownerAccount;
    protected String ownerBankAccount;

    /**
     * Gets the value of the bank property.
     * 
     * @return
     *     possible object is
     *     {@link Bank }
     *     
     */
    public Bank getBank() {
        return bank;
    }

    /**
     * Sets the value of the bank property.
     * 
     * @param value
     *     allowed object is
     *     {@link Bank }
     *     
     */
    public void setBank(Bank value) {
        this.bank = value;
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
     * Gets the value of the ownerAccount property.
     * 
     * @return
     *     possible object is
     *     {@link OwnerAccount }
     *     
     */
    public OwnerAccount getOwnerAccount() {
        return ownerAccount;
    }

    /**
     * Sets the value of the ownerAccount property.
     * 
     * @param value
     *     allowed object is
     *     {@link OwnerAccount }
     *     
     */
    public void setOwnerAccount(OwnerAccount value) {
        this.ownerAccount = value;
    }

    /**
     * Gets the value of the ownerBankAccount property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOwnerBankAccount() {
        return ownerBankAccount;
    }

    /**
     * Sets the value of the ownerBankAccount property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOwnerBankAccount(String value) {
        this.ownerBankAccount = value;
    }

}
