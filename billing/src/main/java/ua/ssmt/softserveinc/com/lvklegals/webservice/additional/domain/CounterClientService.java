package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;

/**
 * Created by ykhav on 12.06.15.
 */
public class CounterClientService {

    private Long Id;
    private Department department;
    private Input input;
    private RegisterOfCounter registerOfCounter;
    private Counter counter;
    private UnregisterOfCounter unregisterOfCounter;
    private Double startFactor;
    private Double endFactor;
    private Double beginMonth;

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }


    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public Input getInput() {
        return input;
    }

    public void setInput(Input input) {
        this.input = input;
    }

    public RegisterOfCounter getRegisterOfCounter() {
        return registerOfCounter;
    }

    public void setRegisterOfCounter(RegisterOfCounter registerOfCounter) {
        this.registerOfCounter = registerOfCounter;
    }

    public Counter getCounter() {
        return counter;
    }

    public void setCounter(Counter counter) {
        this.counter = counter;
    }

    public UnregisterOfCounter getUnregisterOfCounter() {
        return unregisterOfCounter;
    }

    public void setUnregisterOfCounter(UnregisterOfCounter unregisterOfCounter) {
        this.unregisterOfCounter = unregisterOfCounter;
    }

    public Double getStartFactor() {
        return startFactor;
    }

    public void setStartFactor(Double startFactor) {
        this.startFactor = startFactor;
    }

    public Double getEndFactor() {
        return endFactor;
    }

    public void setEndFactor(Double endFactor) {
        this.endFactor = endFactor;
    }

    public Double getBeginMonth() {
        return beginMonth;
    }

    public void setBeginMonth(Double beginMonth) {
        this.beginMonth = beginMonth;
    }
}
