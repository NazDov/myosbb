package com.softserve.osbb.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

/**
 * Created by afedorak on 25.11.2016.
 */
@Entity
@Table(name = "contact_osbb")
public class ContactOsbb  implements Serializable {
    private static final long serialVersionUID = 165454L;

    private long id;
    private Osbb osbb;
    private ContactOsbbCategory contactCategory;
    private String firstName;
    private String middleName;
    private String lastName;
    private String phone;
    private String phone2;
    private User user;

    private List<Attachment> attachments;


    public ContactOsbb(Osbb osbb, String firstName) {
        this.osbb = osbb;
        this.firstName = firstName;
    }

    public ContactOsbb() {
    }

    @Id
    @Column(name = "id", nullable = false)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @ManyToOne
    @JoinColumn(name = "osbb_id")
    public Osbb getOsbb() {
        return osbb;
    }

    public void setOsbb(Osbb osbb) {
        this.osbb = osbb;
    }

    @ManyToOne
    @JoinColumn(name = "contact_category_id")
    public ContactOsbbCategory getContactCategory() {
        return contactCategory;
    }

    public void setContactCategory(ContactOsbbCategory contactCategory) {
        this.contactCategory = contactCategory;
    }

    @Column(name = "first_name", nullable = false, length = 50)
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }


    @Column(name = "middle_name", nullable = true, length = 50)
    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }


    @Column(name = "last_name", nullable = true, length = 50)
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }


    @Column(name = "phone", nullable = true, length = 50)
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }


    @Column(name = "phone2", nullable = true, length = 50)
    public String getPhone2() {
        return phone2;
    }

    public void setPhone2(String phone2) {
        this.phone2 = phone2;
    }


    @ManyToOne
    @JoinColumn(name = "user_id")
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }


    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.DETACH )
    public List<Attachment> getAttachments() {
        return attachments;
    }

    public void setAttachments(List<Attachment> attachments) {
        this.attachments = attachments;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ContactOsbb that = (ContactOsbb) o;

        if (id != that.id) return false;
        if (osbb != that.osbb) return false;
        if (contactCategory != null ? !contactCategory.equals(that.contactCategory) : that.contactCategory != null)
            return false;
        if (firstName != null ? !firstName.equals(that.firstName) : that.firstName != null) return false;
        if (middleName != null ? !middleName.equals(that.middleName) : that.middleName != null) return false;
        if (lastName != null ? !lastName.equals(that.lastName) : that.lastName != null) return false;
        if (phone != null ? !phone.equals(that.phone) : that.phone != null) return false;
        if (phone2 != null ? !phone2.equals(that.phone2) : that.phone2 != null) return false;
        return user != null ? user.equals(that.user) : that.user == null;

    }

    @Override
    public int hashCode() {
        int result = (int) (id ^ (id >>> 32));
        result = 31 * result + osbb.hashCode();
        result = 31 * result + (contactCategory != null ? contactCategory.hashCode() : 0);
        result = 31 * result + firstName.hashCode();
        result = 31 * result + (middleName != null ? middleName.hashCode() : 0);
        result = 31 * result + (lastName != null ? lastName.hashCode() : 0);
        result = 31 * result + (phone != null ? phone.hashCode() : 0);
        result = 31 * result + (phone2 != null ? phone2.hashCode() : 0);
        result = 31 * result + (user != null ? user.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "ContactOsbb{" +
                "id=" + id +
                ", osbb=" + osbb +
                ", contactCategory=" + contactCategory +
                ", firstName='" + firstName + '\'' +
                ", middleName='" + middleName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", phone='" + phone + '\'' +
                ", phone2='" + phone2 + '\'' +
                ", user=" + user +
                ", attachments=" + attachments +
                '}';
    }
}
