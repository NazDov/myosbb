package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.imports;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Payment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.PaymentToDelete;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.SourceInputPayment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.PaymentFromParus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils.DateUtils;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.Validator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoByContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoByDepartment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateNotLoadedPaymentQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreatePaymentQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.*;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 8/19/2015.
 */
public class ImportPaymentFromDBFOperation extends AbstractModifyOperation<PaymentFromParus> {
    public ImportPaymentFromDBFOperation() {
        super(Validator.NoValidator());
    }

    @Override
    protected long _doOperation(Connection connection, PaymentFromParus payments) {
        Date period = new GetCurrentPeriodQuery(null).execute(connection).get(0).getCurrentPeriod();
        if (!DateUtils.checkDateInPeriod(payments.getDatePayment(),period)){
           // putPaymentToNotLoaded(connection,payments);
            return 2;
        }
        if (!isContainsKeyWord(payments)){
            return 2;
        }
        List<ContraAgent> payer = getPayer(payments, connection);
        if (payer.isEmpty()) {
            payer = findPayerFromNotes(connection, payments);
            if (payer.isEmpty()) {
                putPaymentToNotLoaded(connection,payments);
                return 1;
            }else{
                Payment payment = preparePayment(payer.get(0),payments, connection);
                new CreatePaymentQuery().execute(connection,payment);
                new RecalculateSaldoByContraAgent().recalculateSaldo(connection,payment.getContraAgent());
            }

        }else {
            Payment payment = preparePayment(payer.get(0), payments, connection);
            new CreatePaymentQuery().execute(connection, payment);
            new RecalculateSaldoByContraAgent().recalculateSaldo(connection,payment.getContraAgent());
        }
        return 0;
    }

    private boolean isContainsKeyWord(PaymentFromParus payments) {
        if (payments == null && payments.getReason() == null) return false;
        String s = payments.getReason().toLowerCase();
        return s.contains("вод") || s.contains("вк") || s.contains("вп") ||
                s.contains("сток") || s.contains("канал") || s.contains("пен") ||
                s.contains("в/п") || s.contains("в/в") || s.contains("дощ") ||
                s.contains("населен") || s.contains("стічн") || s.contains("'утримання стягнень") ||
                s.contains("відрахування з пенсії");
    }

    private void putPaymentToNotLoaded(Connection connection, PaymentFromParus payments) {
        PaymentToDelete p = this.preparePaymentToDelete(payments,connection);
        new CreateNotLoadedPaymentQuery().execute(connection,p);
    }

    private List<ContraAgent> findPayerFromNotes(Connection connection, PaymentFromParus payments) {
        List<ContraAgent> res = new ArrayList<>();
        String inputString = payments.getReason();
        int countNumberToAgreementNumber = 6;
        int statrNumber = 0;
        boolean isFound = false;
        for (int i=0;i<inputString.length();i++){
            if (isNumber(inputString.charAt(i))){
                String numberString = "";
                for (int k=0;k<countNumberToAgreementNumber;k++){
                    numberString += inputString.charAt(i+k);
                }
                try{
                    Long.parseLong(numberString);
                    isFound = true;
                }catch (NumberFormatException e){
                    continue;
                }
            }
            if (isFound) {
                statrNumber = i;
                break;
            }
        }
        String rightNumber = inputString.substring(statrNumber,statrNumber+countNumberToAgreementNumber);
        Agreement agreement  = findAgreement(connection,rightNumber);
        if (agreement == null) return new ArrayList<>();

        ContraAgent contraAgent = getContraAgent(agreement,connection);
        if (contraAgent.getEDRPO() == null) return new ArrayList<>();
        if (contraAgent.getEDRPO().equals(payments.getEdrpo()))
            res.add(contraAgent);
        else
            return new ArrayList<>();
        return res;
    }



    private List<ContraAgent> searchContraAgentByEDRPO(Connection connection, PaymentFromParus payments) {
        ContraAgentCondition condition = new ContraAgentCondition();
        condition.setEdrpo(payments.getEdrpo());
        List<ContraAgent> list = new SearchContraAgentQuery(condition).execute(connection);
        /*for (ContraAgent ca:list){
            AgreementCondition agreementCondition = new AgreementCondition();
            agreementCondition.setContraAgentID(ca.getId());
            agreementCondition.setStatus(true);
            Agreement a = new SearchAgreementQuery(agreementCondition).execute(connection).get(0);
            ca.getProperty().setAgreement(a);
        }*/
        return list;
    }

    private ContraAgent getContraAgent(Agreement agreement,Connection connection) {
        ContraAgentCondition condition = new ContraAgentCondition();
        condition.setId(agreement.getContraAgent().getId());
        return new SearchContraAgentQuery(condition).execute(connection).get(0);
    }

    private Agreement findAgreement(Connection connection, String rightNumber) {
        AgreementCondition condition = new AgreementCondition();
        condition.setAgreementNumber(rightNumber);
        List<Agreement> agreements = new SearchAgreementQuery(condition).execute(connection);
        if (agreements.isEmpty()) return null;
        else return agreements.get(0);
    }

    public boolean isNumber(char s){
        if (s == '0') return true;
        if (s == '1') return true;
        if (s == '2') return true;
        if (s == '3') return true;
        if (s == '4') return true;
        if (s == '5') return true;
        if (s == '6') return true;
        if (s == '7') return true;
        if (s == '8') return true;
        if (s == '9') return true;

        return false;
    }

    private  Payment preparePayment (ContraAgent contragent,PaymentFromParus paymentParus, Connection connection) {
        Payment payment = new Payment();

        List<ComboBoxItem> bank = new SearchBankQuery(paymentParus.getMfo()).execute(connection);
        if (bank.size() > 0) {
            Bank bankContra =new Bank();
            bankContra.setId(bank.get(0).getId());
            bankContra.setName(bank.get(0).getName());
            payment.setBank(bankContra);
        }

        AgreementCondition agrCond = new AgreementCondition();
        agrCond.setContraAgentID(contragent.getId());
        agrCond.setStatus(true);
        List<Agreement> agreement = new SearchAgreementQuery(agrCond).execute(connection);

        if (agreement.size() == 1) {
            payment.setAgreement(agreement.get(0));
        }

        payment.setBankAccount(paymentParus.getPayerBankAccount());
        payment.setContraAgent(contragent);

        payment.setDatePayment(paymentParus.getDatePayment());
        payment.setSumPayment(paymentParus.getSumPayment());
        payment.setReason(paymentParus.getReason());
        payment.setIsAutomated(1);
        payment.setNumberDocPayment(paymentParus.getNumberDoc());

        PaymentTypeCondition paymentTypeCond = new PaymentTypeCondition();
        paymentTypeCond.setCode("01");
        PaymentType paymentType = new SearchPaymentTypeQuery(paymentTypeCond).execute(connection).get(0);
        payment.setPaymentType(paymentType);

        ServicePaymentCondition serviceCond = new ServicePaymentCondition();
        serviceCond.setId(1L);
        ServicePayment servicePayment = new SearchServicePaymentQuery(serviceCond).execute(connection).get(0);
        payment.setServicePayment(servicePayment);

        OwnerBankAccountCondition ownerBankCondition = new OwnerBankAccountCondition();
        ownerBankCondition.setOwnerBankAccount(paymentParus.getOwnerBankAccount());
        OwnerBankAccount ownerBankAccount = new SearchOwnerBankAccountQuery(ownerBankCondition).execute(connection).get(0);
        payment.setOwnerBankAccount(ownerBankAccount);
        payment.setSourceInputPayment(new SourceInputPayment(2L));
        return payment;
    }

    private  PaymentToDelete preparePaymentToDelete (PaymentFromParus paymentParus, Connection connection) {
        PaymentToDelete payment = new PaymentToDelete();

        List<ComboBoxItem> bank = new SearchBankQuery(paymentParus.getMfo()).execute(connection);
        if (bank.size() > 0) {
            Bank bankContra =new Bank();
            bankContra.setId(bank.get(0).getId());
            bankContra.setName(bank.get(0).getName());
            payment.setBank(bankContra);
        }
        payment.setAgreement(new Agreement());

        payment.setBankAccount(paymentParus.getPayerBankAccount());
        payment.setContraAgent(new ContraAgent());

        payment.setDatePayment(paymentParus.getDatePayment());
        payment.setSumPayment(paymentParus.getSumPayment());
        payment.setReason(paymentParus.getReason());
        payment.setIsAutomated(1);
        payment.setNumberDocPayment(paymentParus.getNumberDoc());
        payment.setEdrpo(paymentParus.getEdrpo());

        PaymentTypeCondition paymentTypeCond = new PaymentTypeCondition();
        paymentTypeCond.setCode("01");
        PaymentType paymentType = new SearchPaymentTypeQuery(paymentTypeCond).execute(connection).get(0);
        payment.setPaymentType(paymentType);

        ServicePaymentCondition serviceCond = new ServicePaymentCondition();
        serviceCond.setId(1L);
        ServicePayment servicePayment = new SearchServicePaymentQuery(serviceCond).execute(connection).get(0);
        payment.setServicePayment(servicePayment);

        OwnerBankAccountCondition ownerBankCondition = new OwnerBankAccountCondition();
        ownerBankCondition.setOwnerBankAccount(paymentParus.getOwnerBankAccount());
        List<OwnerBankAccount> list =  new SearchOwnerBankAccountQuery(ownerBankCondition).execute(connection);
        if (list.isEmpty())
            payment.setOwnerBankAccount(new OwnerBankAccount());
        else
            payment.setOwnerBankAccount(list.get(0));


        return payment;
    }


    private List<ContraAgent> getPayer (PaymentFromParus payments, Connection connection) {
        ContraAgentCondition condition = new ContraAgentCondition();
        condition.setMfo(payments.getMfo());
        condition.setBankAccount(payments.getPayerBankAccount());
        List<ContraAgent> contraAgents = new SearchContraAgentForBankQuery(condition).execute(connection);
        ContraAgentCondition cond = new ContraAgentCondition();
        cond.setBankAccount(payments.getOwnerBankAccount());
        return contraAgents;
    }

    @Override
    public boolean validate(Connection connection, PaymentFromParus value) {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
