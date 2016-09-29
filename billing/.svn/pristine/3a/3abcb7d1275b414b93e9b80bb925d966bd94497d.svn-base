package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.invoices;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Saldo;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SaldoCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.invoice.SearchSaldoQuery;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 6/7/2015.
 */
public class SearchSaldoOperation extends AbstractSelectOperation<Saldo> {

    private SaldoCondition condition;

    public SearchSaldoOperation(SaldoCondition condition) {
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<Saldo> doOperation(Connection connection) {
        List<Saldo> list = new SearchSaldoQuery(condition).execute(connection);
        for (Saldo s:list){
            s.setContraAgent(getFillers().getContraAgentByID(connection, s.getContraAgent().getId()));
            s.setAgreement(getFillers().getAgreementByID(connection, s.getAgreement().getId()));
        }
        return list;

    }

    private List<Saldo> getSaldoOnNextPeriod(Connection connection, Date peroid,Long contraAgentID) {
        SaldoCondition saldoCondition = new SaldoCondition();
        Calendar cal = Calendar.getInstance();
        cal.setTime(peroid);
        cal.add(Calendar.MONTH, 1);
        saldoCondition.setPeriod(cal.getTime());
        saldoCondition.setContraAgentID(contraAgentID);
        List<Saldo> res = new SearchSaldoQuery(saldoCondition).execute(connection);
        return res;
    }
}
