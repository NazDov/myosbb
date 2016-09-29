package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.periodmanagment;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Period;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Saldo;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.GetCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoAllContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputFactorCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateInputFactorQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateSaldoOnNextPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteSaldoOnNextPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchCountersFromInputFactors;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchInputFactorsQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdatePeriodQuery;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 19.12.2014.
 */
public class MovePeriodToForward extends AbstractModifyOperation<Period> {

    public MovePeriodToForward() {
        super(null);
    }

    @Override
    protected long _doOperation(Connection connection, Period value)   {
        //new RecalculateSaldoAllContraAgent().recalculatoSaldoAllContraAgent();

        Date currentPeriod = new GetCurrentPeriodQuery(null).execute(connection).get(0);
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(currentPeriod);
        calendar.add(Calendar.MONTH,1);
        Date newPeriod = calendar.getTime();
        Period p = new Period();
        p.setCurrentPeriod(newPeriod);

        _deleteSaldoOnNextPeriod(connection,newPeriod);
        try {
            connection.commit();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        _createSaldoOnNextPeriod(connection,currentPeriod,newPeriod);

        new UpdatePeriodQuery().execute(connection,p);
        //new RecalculateSaldoAllContraAgent().recalculatoSaldoAllContraAgent();


        return 0;
    }


    private void _createSaldoOnNextPeriod(Connection connection, Date currentPeriod, Date newPeriod) {
        Saldo s = new Saldo();
        s.setCurrentPeriod(currentPeriod);
        s.setNewPeriod(newPeriod);
        new CreateSaldoOnNextPeriodQuery().execute(connection,s);
    }

    private void _deleteSaldoOnNextPeriod(Connection connection, Date newPeriod) {
        new DeleteSaldoOnNextPeriodQuery().execute(connection,newPeriod);
    }


    @Override
    public boolean validate(Connection connection, Period value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
