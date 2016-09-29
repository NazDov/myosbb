package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgentProperty;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CorrectionOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.fillers.Fillers;

import java.sql.Connection;

/**
 * Created by vostap on 04.09.2014.
 */
public abstract class AbstractSelectOperation<T> implements SelectOperation<T> {
    private Fillers fillers;
    public AbstractSelectOperation(){
        fillers = new Fillers();
    }
    public Fillers getFillers() {
        return fillers;
    }

}
