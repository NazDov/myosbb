package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

/**
 * Created by vostap on 18.09.2014.
 */
public class InputDiameter {
    private Long id;
    private Double diameter;
    private Double capacity;
    private Long userID;




    public InputDiameter() {

    }

    public InputDiameter(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getDiameter() {
        return diameter;
    }

    public void setDiameter(Double diameter) {
        this.diameter = diameter;
    }

    public Double getCapacity() {
        return capacity;
    }

    public void setCapacity(Double capacity) {
        this.capacity = capacity;
    }

    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    @Override
    public String toString() {
        return ""+getDiameter();
    }
}
