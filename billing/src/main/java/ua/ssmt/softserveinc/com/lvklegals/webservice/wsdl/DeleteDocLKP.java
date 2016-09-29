
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import java.util.ArrayList;
import java.util.List;


/**
 * <p>Java class for deleteDocLKP complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="deleteDocLKP">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="listDocLKP" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}docLkpFromDBFTransfer" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="User" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}user" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "deleteDocLKP", propOrder = {
    "listDocLKP",
    "user"
})
public class DeleteDocLKP {

    protected List<DocLkpFromDBFTransfer> listDocLKP;
    @XmlElement(name = "User")
    protected User user;

    /**
     * Gets the value of the listDocLKP property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the listDocLKP property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getListDocLKP().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link DocLkpFromDBFTransfer }
     * 
     * 
     */
    public List<DocLkpFromDBFTransfer> getListDocLKP() {
        if (listDocLKP == null) {
            listDocLKP = new ArrayList<DocLkpFromDBFTransfer>();
        }
        return this.listDocLKP;
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
