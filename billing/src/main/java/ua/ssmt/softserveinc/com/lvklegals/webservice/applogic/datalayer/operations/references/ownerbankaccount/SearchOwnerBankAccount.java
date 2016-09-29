package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.ownerbankaccount;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.OwnerBankAccount;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.OwnerBankAccountCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchOwnerBankAccountQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 20.11.2014.
 */
public class SearchOwnerBankAccount extends AbstractSelectOperation<OwnerBankAccount> {
    private OwnerBankAccountCondition condition;

    public SearchOwnerBankAccount(OwnerBankAccountCondition condition){
        this.condition =condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<OwnerBankAccount> doOperation(Connection connection)   {
        List<OwnerBankAccount> list = new SearchOwnerBankAccountQuery(condition).execute(connection);
        return list;
    }
}
