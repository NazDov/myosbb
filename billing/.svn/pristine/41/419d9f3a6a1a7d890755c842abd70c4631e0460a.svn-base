package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.invoices;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.InvoiceTransfer;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.enums.InvoiceEnum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils.DateUtils;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AgreementCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.RegisterOfCounterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.UnregisterOfCounterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchAgreementQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchRegisterOfCounterQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchUnregisterCounterQuery;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 12.05.2015.
 */
class CalculationVariant {

    private Connection connection;
    private Transformer transformer;
    private InvoiceUtils invoiceUtils;
    private ResultCollector resultCollector;
    private TypeCalculations typeCalculations;

    public CalculationVariant(Connection connection, Transformer transformer, InvoiceUtils invoiceUtils, TypeCalculations typeCalculations) {
        this.connection = connection;
        this.transformer = transformer;
        this.invoiceUtils = invoiceUtils;
        this.typeCalculations = typeCalculations;
    }




    /*
    private boolean checkIsRegisterCounterInPeriod(DepartmentInputInvoice departmentInputInvoice) {
        return false;
    }

    private boolean checkIsUnregisterOfCounterInPeriod(DepartmentInputInvoice departmentInputInvoice) {
        return invoiceUtils.isUnregisterCounterInPeriod(connection, departmentInputInvoice);
    }

    private boolean checkIsRegisterCounter(DepartmentInputInvoice departmentInputInvoice) {
        return invoiceUtils.isRegisterCounter(connection, departmentInputInvoice);
    }*/





    /*void calculationByNormaFullInvoice(DepartmentInputInvoice departmentInput) {
        typeCalculations.calculationByNormaInvoice(connection, departmentInput);
    }

     void calculationFullPeriodByCounterInvoice(DepartmentInputInvoice departmentInput, InputFactor factor) {
        Input input = transformer.transformInput(departmentInput);
        Service service = input.getService();
        List<SubService> subServices = invoiceUtils.getSubServicesByService(service);
        for (SubService subService : subServices) {
            Tariff tariff = invoiceUtils.getTariffBySubService(subService, departmentInput);//  this.getTariffBySubService(subService,departmentInput);
            if (tariff == null) continue;
            if (invoiceUtils.checkTariffDataInAction(tariff) == false) tariff.setTariff(0.0);
            Double res = (factor.getEndFactor() - factor.getFactorOnBeginMonth()) * tariff.getTariff();
            InputProperty property = this.transformer.transformInputProperties(departmentInput);
            boolean isEnabledSubService = this.invoiceUtils.checkEnabled(departmentInput, subService);
            if (isEnabledSubService == false) continue;
            if (property.getKoefWatterOut() != 0) {
                if (this.invoiceUtils.isWatterSupply(subService) == false) {
                    res *= property.getKoefWatterOut();
                }
            }
            if (property.getKoefWatterSupply() != 0) {
                if (this.invoiceUtils.isWatterSupply(subService) == true)
                    res *= property.getKoefWatterSupply();
            }
            InvoiceTransfer transfer = new InvoiceTransfer();
            transfer.setTariff(tariff);
            transfer.setFactor(factor);
            transfer.setDepartmentInput(departmentInput);
            transfer.setSum(res);
            transfer.setConnection(connection);
            transfer.setSubService(subService);

            tariff.setCategory(new CategoryOfTariff(departmentInput.getTariffCategory()));

            AgreementCondition condition = new AgreementCondition();
            condition.setContraAgentID(condition.getContraAgentID());
            condition.setStatus(true);
            List<Agreement> list = new SearchAgreementQuery(condition).execute(connection);
            if (list.isEmpty()) transfer.setContrAgentAgreementID(null);
            else
                transfer.setContrAgentAgreementID(list.get(0).getId());

            if (this.invoiceUtils.isWatterSupply(subService)) {
                transfer.setKoefWatterSupply(property.getKoefWatterSupply());
                transfer.setKoefWatterOut(0.0);
            } else {
                transfer.setKoefWatterSupply(0.0);
                transfer.setKoefWatterOut(property.getKoefWatterOut());
            }

            this.resultCollector.fillCalcResult_byCounter(transfer, factor);
        }

    }

    void calculationByCounterFullInvoice(DepartmentInputInvoice departmentInput) {
        typeCalculations.calculationByCounterInvoice(connection, departmentInput);
    }

    void calculationDepartmentRainsInvoice(DepartmentInputInvoice departmentInput) {
        typeCalculations.calculationDepartmentRainsInvoice(connection, departmentInput);
    }

    public void calculationMixNormaCounter(DepartmentInputInvoice dii) {
        RegisterOfCounter doc = getLastRegisterOfCounterDocument(connection, dii);
        typeCalculations.calculationMixNormaCounter(connection, dii, doc, null);
    }

    private int getCountUnregisterOfCounterInPeriod(Connection connection, DepartmentInputInvoice departmentInputInvoice) {
        List<UnregisterOfCounter> list = this.invoiceUtils.getUnregisterOfCounterDocInPeriod(departmentInputInvoice);
        return list.size();
    }


    private int getCountRegisterOfCounterInPeriod(Connection connection, DepartmentInputInvoice departmentInputInvoice) {
        List<RegisterOfCounter> list = this.invoiceUtils.getRegisterOfCounterDocInPeriod(departmentInputInvoice);
        return list.size();
    }

    private RegisterOfCounter getLastRegisterOfCounterDocument(Connection connection, DepartmentInputInvoice departmentInputInvoice) {
        RegisterOfCounterCondition condition = new RegisterOfCounterCondition();
        condition.setDepartmentInputID(departmentInputInvoice.getDepartmentInputID());
        List<RegisterOfCounter> list = new SearchRegisterOfCounterQuery(condition).execute(connection);
        return list.get(0);
    }

    private boolean checkIsRegisteredCounterOnInputAnyTime(Connection connection, DepartmentInputInvoice departmentInputInvoice) {
        RegisterOfCounterCondition condition = new RegisterOfCounterCondition();
        condition.setDepartmentInputID(departmentInputInvoice.getDepartmentInputID());
        List<RegisterOfCounter> list = new SearchRegisterOfCounterQuery(condition).execute(connection);
        return !list.isEmpty();
    }

    private boolean isRegisteredDepartmentInput(Connection connection, DepartmentInputInvoice departmentInputInvoice) {
        RegisterOfCounterCondition condition = new RegisterOfCounterCondition();
        condition.setDepartmentInputID(departmentInputInvoice.getDepartmentInputID());
        List<RegisterOfCounter> registerOfCounters = new SearchRegisterOfCounterQuery(condition).execute(connection);
        if (registerOfCounters.isEmpty()) return false;
        RegisterOfCounter registerOfCounter = registerOfCounters.get(0);
        UnregisterOfCounterCondition unregisterOfCounterCondition = new UnregisterOfCounterCondition();
        unregisterOfCounterCondition.setDepartmentID(departmentInputInvoice.getDepartmentID());
        unregisterOfCounterCondition.setInputID(departmentInputInvoice.getInputID());
        List<UnregisterOfCounter> unregisterOfCounters = new SearchUnregisterCounterQuery(unregisterOfCounterCondition).execute(connection);
        if (unregisterOfCounters.isEmpty()) return true;
        UnregisterOfCounter unregisterOfCounter = unregisterOfCounters.get(0);
        if (registerOfCounter.getOnDate().getTime() > unregisterOfCounter.getDateActToUnPlomb().getTime()) return true;
        else return false;
    }

    private boolean checkInputOnClose(DepartmentInputInvoice dii) {
        if (dii.getDateEnd() == null) return false;
        if (dii.getDateEnd().getTime() < invoiceUtils.getPeriod().getTime()) return true;
        if (dii.getDateStart().getTime() > invoiceUtils.getPeriod().getTime()) return true;
        return false;
    }*/


}
