package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators;


import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.messages.Messages;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchDepartmentQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 25.08.2014.
 */
public class ContraAgentValidator extends AbstractValidator<ContraAgent> {

    @Override
    public boolean validateToInsert(Connection connection,ContraAgent value)   {
        return validateContraAgent(connection,value) && validateContraAgentProperties(connection,value);
    }

    @Override
    public boolean validateToDelete(Connection connection,ContraAgent value)   {
        DepartmentCondition condition = new DepartmentCondition();
        condition.setContraAgentID(value.getId());
        List<Department> list = new SearchDepartmentQuery(condition).execute(connection);
        if (list.size()>0 )
            throw new ValidateException(messages.get("ERROR_CANNOT_DELETE_CONTRAGENT_CAUSE_DEPARTMENT"));

        return true;
    }



    @Override
    public boolean validateToUpdate(Connection connection,ContraAgent value)   {
        return validateID(connection,value) && validateContraAgent(connection,value) && validateContraAgentProperties(connection,value);
    }

    private boolean validateID(Connection connection,ContraAgent value)   {
        if (value.getId() == null){
            throw new ValidateException(Messages.getInstance().get("ERROR_CONTRA_AGENT_ID_CANNOT_BE_NULL_IN_UPDATE_OPERATON"));
        }
        if (value.getProperty().getId() == null){
            throw new ValidateException(Messages.getInstance().get("ERROR_ID_CONTRA_AGENT_PROPERTY_CANNOT_BE_NULL"));
        }
        return true;
    }

    private boolean validateContraAgent(Connection connection,ContraAgent value)   {
        if (value == null){
            throw new ValidateException(Messages.getInstance().get("ERROR_CONTRA_AGENT_CANNOT_BE_NULL"));
        }
        if (value.getProperty().getHopeless() == null){
            throw new ValidateException(Messages.getInstance().get("ERROR_HOPELESS_CANONT_BE_NULL"));
        }

        if (value.getEDRPO() == null || value.getEDRPO().isEmpty())
            throw new ValidateException(Messages.getInstance().get("ERROR_EDRPO_CANNOT_BE_EMPY_OR_NULL"));

        return true;
    }

    private boolean validateContraAgentProperties(Connection connection,ContraAgent contraAgent)   {
        if (contraAgent.getProperty().getGroupWatterSupply().getId() == null){
            throw new ValidateException(Messages.getInstance().get("ERROR_ID_PROPERTY_GROUP_WATTER_SUPLY_CANNOT_BE_NULL"));
        }
        if (contraAgent.getProperty().getSourceWaterSupply().getId() == null){
            throw new ValidateException(Messages.getInstance().get("ERROR_ID_PROPERTY_SOURCE_WATTER_SUPPLY"));
        }
        if (contraAgent.getProperty().getTypeActivity().getId() == null){
            throw new ValidateException(Messages.getInstance().get("ERROR_ID_PROPERTY_TYPE_ACTIVITY"));
        }
        if (contraAgent.getProperty().getContraAgentCategory().getId() == null){
            throw new ValidateException(Messages.getInstance().get("ERROR_ID_CATEGORY_OF_CONTRA_AGENT_CANNOT_BE_NULL"));
        }
        if (contraAgent.getProperty().getArea().getId() == null){
            throw new ValidateException(Messages.getInstance().get("ERROR_ID_AREA_CANNOT_BE_NULL"));
        }


        return true;
    }

}
