package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.invoice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 28.04.2015.
 */
public class CheckRegisterAndReturnLastFactor extends AbstractSelectQuery<InputFactor,DepartmentInput> {
    public CheckRegisterAndReturnLastFactor(DepartmentInput condition) {
        super(condition);
    }

    @Override
    protected InputFactor parseResultSet(ResultSet rs) throws SQLException {
        InputFactor res = new InputFactor();
        res.setBeginFactor(rs.getInt("BeginFactor"));
        res.setEndFactor(rs.getInt("EndFactor"));
        res.setVolume(res.getEndFactor()-res.getBeginFactor());
        //res.setInput(this.fillInput(rs));
        res.setFactorOnBeginMonth(rs.getInt("FactorOnBeginMonth"));

        return res;
    }

    @Override
    protected String getSQLQuery() {
        //System.out.println("SELECT * from dbo.[getLastFactorIfCounterRegistered] ("+condition.getId()+")");
        return "SELECT * from dbo.[getLastFactorIfCounterRegistered] ("+condition.getId()+")";
    }
}
