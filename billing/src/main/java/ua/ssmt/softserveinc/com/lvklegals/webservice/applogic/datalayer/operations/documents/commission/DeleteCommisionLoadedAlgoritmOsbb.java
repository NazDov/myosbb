package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.commission;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Commission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.Validator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteUploadedCommisionQueryAlgoritmOSBB;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.GetCurrentPeriodQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 10/5/2015.
 */
public class DeleteCommisionLoadedAlgoritmOsbb extends AbstractModifyOperation<Void> {
    private List<Commission> condionToDelete;


    public DeleteCommisionLoadedAlgoritmOsbb(List<Commission> condionToDelete) {
        super(Validator.NoValidator());
        this.condionToDelete = condionToDelete;
    }

    @Override
    protected long _doOperation(Connection connection, Void value) {

        for (Commission p:condionToDelete) {

            Commission commission = new Commission();
            commission.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0).getCurrentPeriod());
        /*    AlgoritmCondition algoritmCondition = new AlgoritmCondition();
            algoritmCondition.setId(p.getAlgorithm().getId());
            Algorithm algorithm = new SearchAlgoritmQuery(algoritmCondition).execute(connection).get(0);
            p.getAlgorithm().setId(algorithm.getId());*/
            new DeleteUploadedCommisionQueryAlgoritmOSBB().execute(connection,p);
        }
        return 0;

    }

    @Override
    public boolean validate(Connection connection, Void value) {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
