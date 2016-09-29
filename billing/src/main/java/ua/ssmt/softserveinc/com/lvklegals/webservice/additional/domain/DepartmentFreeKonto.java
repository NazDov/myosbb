package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

/**
 * Created by ykhav on 22.05.15.
 */
public class DepartmentFreeKonto {
    private Long id;
    private Department department;
    private Input input;
    private ContraAgent contraAgent;
    private Route routes;
    private SubRoute subRoute;




    public DepartmentFreeKonto(){
        this.department = new Department();
        this.input = new Input();

        this.contraAgent = new ContraAgent();
        this.routes = new Route();
        this.subRoute = new SubRoute();
    }

    public DepartmentFreeKonto(Long id) {
        this();
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }



    public Input getInput() {
        return input;
    }

    public void setInput(Input input) {
        this.input = input;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    @Override
    public String toString() {
        return "DepartmentFreeKonto{" +
                "id=" + id +
                ", contraAgent=" + contraAgent +
                ", department=" + department +
                ", input=" + input +
                ", routes=" + routes +
                ", subRoute=" + subRoute +
                '}';
    }


    public ContraAgent getContraAgent() {
        return contraAgent;
    }

    public void setContraAgent(ContraAgent contraAgent) {
        this.contraAgent = contraAgent;
    }

    public Route getRoutes() {
        return routes;
    }

    public void setRoutes(Route routes) {
        this.routes = routes;
    }

    public SubRoute getSubRoute() {
        return subRoute;
    }

    public void setSubRoute(SubRoute subRoute) {
        this.subRoute = subRoute;
    }
}
