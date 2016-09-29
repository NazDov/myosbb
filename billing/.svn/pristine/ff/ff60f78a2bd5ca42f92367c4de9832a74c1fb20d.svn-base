package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by vostap on 04.09.2014.
 */
public class Department {
    private Long id;
    private ContraAgent contraAgent;
    private DepartmentProperty property;
    private List<DepartmentProperty> propertyHistory;
    private List<Rains> rains;
    private List<Rains> rainHistory;
    private String routename;
    private Agreement agreement;

    public Department() {
        this.contraAgent = new ContraAgent();
        this.agreement = new Agreement();
        this.property = new DepartmentProperty();
        this.rains = new ArrayList<>();
        this.rainHistory = new ArrayList<>();
    }

    public Department(Long id) {
        this();
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ContraAgent getContraAgent() {
        return contraAgent;
    }

    public void setContraAgent(ContraAgent contraAgent) {
        this.contraAgent = contraAgent;
    }

    public DepartmentProperty getProperty() {
        return property;
    }

    public void setProperty(DepartmentProperty property) {
        this.property = property;
    }

    public List<DepartmentProperty> getPropertyHistory() {
        return propertyHistory;
    }

    public void setPropertyHistory(List<DepartmentProperty> propertyHistory) {
        this.propertyHistory = propertyHistory;
    }

    public List<Rains> getRains() {
        return rains;
    }

    public void setRains(List<Rains> rains) {
        this.rains = rains;
    }

    public List<Rains> getRainHistory() {
        return rainHistory;
    }

    public void setRainHistory(List<Rains> rainHistory) {
        this.rainHistory = rainHistory;
    }

    public String getRoutename() {
        return routename;
    }

    public void setRoutename(String routename) {
        this.routename = routename;
    }

    public Agreement getAgreement() {
        return agreement;
    }

    public void setAgreement(Agreement agreement) {
        this.agreement = agreement;
    }


}
