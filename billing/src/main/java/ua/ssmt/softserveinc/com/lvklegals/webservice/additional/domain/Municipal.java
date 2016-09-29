package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

/**
 * Created by vostap on 03.10.2014.
 */
public class Municipal {
    private Long id;
    private String name;

    public Municipal(Long id) {
        this.id = id;
    }

    public Municipal() {
    }

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

    @Override
    public String toString() {
        return "Municipal{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
