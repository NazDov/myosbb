package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions;

/**
 * Created by vostap on 15.10.2014.
 */
public class StreetCondition{
    private Long id;
    private String name;
    private Long municipalID;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getMunicipalID() {
        return municipalID;
    }

    public void setMunicipalID(Long municipalID) {
        this.municipalID = municipalID;
    }
}
