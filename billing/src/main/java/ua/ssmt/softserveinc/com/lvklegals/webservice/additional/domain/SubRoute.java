package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

/**
 * Created by vostap on 22.09.2014.
 */
public class SubRoute {

    private Long id;
    private String name;
    private Route route;
    private Long userId;

    public SubRoute() {
        this.route = new Route();
    }

    public SubRoute(Long id) {
        this();
        this.id = id;
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


    public Route getRoute() {
        return route;
    }

    public void setRoute(Route route) {
        this.route = route;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }



    @Override
    public String toString() {
        return "SubRoute{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", route=" + route +
                '}';
    }
}
