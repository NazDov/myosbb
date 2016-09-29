package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.inputs;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ComboBoxItem;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Input;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchInputQuery;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by ykhav on 16.03.15.
 */
public class SearchInputToComboBoxOperation extends AbstractSelectOperation<ComboBoxItem> {
    private InputCondition condition;

    public SearchInputToComboBoxOperation(InputCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<ComboBoxItem> doOperation(Connection connection)   {
        List<Input> inputs = new SearchInputQuery(condition).execute(connection);
        List<ComboBoxItem> res = new ArrayList<>();
        for (Input input:inputs){
            ComboBoxItem item = new ComboBoxItem();
            item.setId(input.getId());
            item.setName(input.getAddress().getStreet().getName());

            res.add(item);
        }
        return res;
    }

}
