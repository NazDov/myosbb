package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.reports;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.Validator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.reports.ReportPromuvkaCondition;

import java.sql.Connection;

/**
 * Created by ykhav on 31.03.15.
 */
public class ReportPromuvkaValidator implements Validator<ReportPromuvkaCondition> {

@Override
public boolean validateToInsert(Connection connection, ReportPromuvkaCondition value) throws ValidateException {
        return false;
        }

@Override
public boolean validateToDelete(Connection connection, ReportPromuvkaCondition value) throws ValidateException {
        return false;
        }

@Override
public boolean validateToUpdate(Connection connection, ReportPromuvkaCondition value) throws ValidateException {
        return false;
        }
        }