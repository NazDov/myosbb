package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;

/**
 * Created by vostap on 17.09.2014.
 */
public class Input {
    private Long id;
    private Input parent;
    private Address address;
    private Service service;
    private Counter counter;
    private InputDiameter diameter;
    private Department department;
    private ContraAgent contraAgent;
    private Agreement agreement;

    public Input() {

        this.address = new Address();
        this.service = new Service();
        this.diameter = new InputDiameter();
        this.counter = new Counter();
        this.department = new Department();
        this.contraAgent = new ContraAgent();
        this.agreement = new Agreement();
    }

    public Input(Long id) {
        this();
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Input getParent() {
        return parent;
    }

    public void setParent(Input parent) {
        this.parent = parent;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        this.service = service;
    }

    public InputDiameter getDiameter() {
        return diameter;
    }

    public void setDiameter(InputDiameter diameter) {
        this.diameter = diameter;
    }

    public Counter getCounter() {
        return counter;
    }

    public void setCounter(Counter counter) {
        this.counter = counter;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public ContraAgent getContraAgent() {
        return contraAgent;
    }

    public void setContraAgent(ContraAgent contraAgent) {
        this.contraAgent = contraAgent;
    }

    public Agreement getAgreement() {
        return agreement;
    }

    public void setAgreement(Agreement agreement) {
        this.agreement = agreement;
    }

    @Override
    public String toString() {
        return "Input{" +
                "id=" + id +
                ", address=" + address +
                ", service=" + service +
                ", diameter=" + diameter +
                ", counter=" + counter +
                ", agreement=" + agreement +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Input input = (Input) o;

        return id != null ? id.equals(input.id) : input.id == null;

    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
