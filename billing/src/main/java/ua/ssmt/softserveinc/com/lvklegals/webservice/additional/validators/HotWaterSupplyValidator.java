package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators;


import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.HotWaterSupplier;

import java.sql.Connection;

/**
 * Created by vostap on 25.08.2014.
 */
public class HotWaterSupplyValidator extends AbstractValidator<HotWaterSupplier> {

    @Override
    public boolean validateToInsert(Connection connection,HotWaterSupplier value)   {
        return validateContraAgent(connection,value) && validateContraAgentProperties(connection,value);
    }

    @Override
    public boolean validateToDelete(Connection connection,HotWaterSupplier value)   {
        return validateID(connection,value);
    }

    @Override
    public boolean validateToUpdate(Connection connection,HotWaterSupplier value)   {
        return validateID(connection,value) && validateContraAgent(connection,value) && validateContraAgentProperties(connection,value);
    }

    private boolean validateID(Connection connection,HotWaterSupplier value)   {

        return true;
    }

    private boolean validateContraAgent(Connection connection,HotWaterSupplier value)   {


        return true;
    }

    private boolean validateContraAgentProperties(Connection connection,HotWaterSupplier contraAgent)   {


        return true;
    }

}
