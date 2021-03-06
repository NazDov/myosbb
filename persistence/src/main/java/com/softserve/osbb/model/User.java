package com.softserve.osbb.model;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


/**
 * Created by cavayman on 05.07.2016.
 * @version 1.1
 * @since 25.11.2016
 */
@Entity
@Table(name = "users")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class User implements Serializable {

    private static final long serialVersionUID = 1L;
    private Integer userId;
    private String firstName;
    private String lastName;
    private Timestamp birthDate;
    private String email;
    private String phoneNumber;
    private String password;
    private String gender;
    private Boolean activated;
    private Boolean isOwner;
    private Role role;
    private Apartment apartment;
    private Osbb osbb;
    private House house;
    private Collection<Notice> notices = new ArrayList<>();
    private Collection<Vote> votes = new ArrayList<>();
    private Collection<Message> messages = new ArrayList<>();
    private Collection<Ticket> assigned = new ArrayList<>();
    private Collection<Ticket> tickets = new ArrayList<>();
    private Collection<Event> events = new ArrayList<>();
    private Collection<Option> options = new ArrayList<>();
    private Collection<Report> reports = new ArrayList<>();
    private List<ContactOsbb> contactOsbbs;

    public User() { }

    public User(Integer userId) {
        this.userId = userId;
    }

    public User(User user) {
        this.userId = user.getUserId();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.birthDate = user.getBirthDate();
        this.email = user.getEmail();
        this.phoneNumber = user.getPhoneNumber();
        this.password = user.getPassword();
        this.gender = user.getGender();
        this.role = user.getRole();
        this.apartment = user.getApartment();
        this.osbb = user.getOsbb();
        this.house = user.getHouse();
    }
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    @Basic
    @Column(name = "firstName")
    @Size(max = 35)
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Basic
    @Column(name = "lastName")
    @Size(max = 35)
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Basic
    @Column(name = "birth_date")
    public Timestamp getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Timestamp birthDate) {
        this.birthDate = birthDate;
    }

    @Basic
    @Column(name = "email")
    @Size(max = 50)
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Basic
    @Column(name = "phoneNumber")
    @Size(max = 16)
    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    
    @Basic
    @Column(name = "password")
    @Size(max = 80)
    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Basic
    @Column(name = "gender")
    @Size(max = 8)
    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    @Column(name = "activated")
    public Boolean getActivated() {
        return activated;
    }

    public void setActivated(Boolean activated) {
        this.activated = activated;
    }

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "user", cascade = CascadeType.ALL)
    public Collection<Vote> getVotes() {
        return votes;
    }

    public void setVotes(Collection<Vote> votes) {
        this.votes = votes;
    }

    @Basic
    @Column(name = "is_owner")
    public Boolean isOwner() {
        return isOwner;
    }

    public void setOwner(Boolean owner) {
        isOwner = owner;
    }

    @ManyToOne
    @JoinColumn(name = "apartment_id", referencedColumnName = "apartment_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    public Apartment getApartment() {
        return apartment;
    }

    public void setApartment(Apartment appartament) {
        this.apartment = appartament;
    }

    @ManyToOne
    @JoinColumn(name = "osbb_id")
    @JsonIgnore
    public Osbb getOsbb() {
        return osbb;
    }

    public void setOsbb(Osbb osbb) {
        this.osbb = osbb;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "user", cascade = CascadeType.REMOVE)
    @JsonIgnore
    public Collection<Message> getMessages() {
        return messages;
    }

    public void setMessages(Collection<Message> messages) {
        this.messages = messages;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnore
    public Collection<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(Collection<Ticket> tickets) {
        this.tickets = tickets;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "user")
    @JsonIgnore
    public Collection<Report> getReports() {
        return reports;
    }

    public void setReports(Collection<Report> reports) {
        this.reports = reports;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "assigned")
    @JsonIgnore
    public Collection<Ticket> getAssigned() {
        return assigned;
    }

    public void setAssigned(Collection<Ticket> assigned) {
        this.assigned = assigned;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "author")
    @JsonIgnore
    public Collection<Event> getEvents() {
        return events;
    }

    public void setEvents(Collection<Event> events) {
        this.events = events;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "user")
    @JsonIgnore
    public Collection<Notice> getNotices() {
        return notices;
    }

    public void setNotices(Collection<Notice> notices) {
        this.notices = notices;
    }

    @JsonIgnore
    @ManyToMany(mappedBy = "users")
    public Collection<Option> getOptions() {
        return options;
    }

    public void setOptions(Collection<Option> options) {
        this.options = options;
    }

    @ManyToOne
    @JoinColumn(name = "house_id")
    public House getHouse() {
		return house;
	}

	public void setHouse(House house) {
		this.house = house;
	}

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnore
    public List<ContactOsbb> getContactOsbbs() {
        return contactOsbbs;
    }

    public void setContactOsbbs(List<ContactOsbb> contactOsbbs) {
        this.contactOsbbs = contactOsbbs;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", roles='" + role + '\'' +
                ", osbb='" + osbb + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        User user = (User) o;

        if (!userId.equals(user.userId)) return false;
        if (!firstName.equals(user.firstName)) return false;
        if (!lastName.equals(user.lastName)) return false;
        if (!birthDate.equals(user.birthDate)) return false;
        if (!email.equals(user.email)) return false;
        if (!phoneNumber.equals(user.phoneNumber)) return false;
        if (!password.equals(user.password)) return false;
        if (!gender.equals(user.gender)) return false;
        if (!activated.equals(user.activated)) return false;
        if (!isOwner.equals(user.isOwner)) return false;
        if (!role.equals(user.role)) return false;
        if (!apartment.equals(user.apartment)) return false;
        if (!osbb.equals(user.osbb)) return false;
        if (!house.equals(user.house)) return false;
        if (!notices.equals(user.notices)) return false;
        if (!votes.equals(user.votes)) return false;
        if (!messages.equals(user.messages)) return false;
        if (!assigned.equals(user.assigned)) return false;
        if (!tickets.equals(user.tickets)) return false;
        if (!events.equals(user.events)) return false;
        if (!options.equals(user.options)) return false;
        if (!reports.equals(user.reports)) return false;
        return contactOsbbs.equals(user.contactOsbbs);

    }

    @Override
    public int hashCode() {
        int result = userId.hashCode();
        result = 31 * result + firstName.hashCode();
        result = 31 * result + lastName.hashCode();
        result = 31 * result + birthDate.hashCode();
        result = 31 * result + email.hashCode();
        result = 31 * result + phoneNumber.hashCode();
        result = 31 * result + password.hashCode();
        result = 31 * result + gender.hashCode();
        result = 31 * result + activated.hashCode();
        result = 31 * result + isOwner.hashCode();
        result = 31 * result + role.hashCode();
        result = 31 * result + apartment.hashCode();
        result = 31 * result + osbb.hashCode();
        result = 31 * result + house.hashCode();
        result = 31 * result + notices.hashCode();
        result = 31 * result + votes.hashCode();
        result = 31 * result + messages.hashCode();
        result = 31 * result + assigned.hashCode();
        result = 31 * result + tickets.hashCode();
        result = 31 * result + events.hashCode();
        result = 31 * result + options.hashCode();
        result = 31 * result + reports.hashCode();
        result = 31 * result + contactOsbbs.hashCode();
        return result;
    }
}
