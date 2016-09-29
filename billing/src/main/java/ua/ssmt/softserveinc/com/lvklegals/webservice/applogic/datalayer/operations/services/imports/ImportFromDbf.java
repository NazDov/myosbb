package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.imports;

import com.linuxense.javadbf.DBFException;
import com.linuxense.javadbf.DBFReader;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.PaymentFromParus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.ReferencesServiceImpl;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.inerfc.ReferencesService;

import java.io.*;
import java.sql.SQLException;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.*;

/**
 * @author vstoian
 * @version 1.0.0
 * @since 1.0.0
 */
public class ImportFromDbf {
    private static ReferencesService service = new ReferencesServiceImpl();

    /**
     * Return records of dbf-file using path to file
     * @param path path to dbf-file
     * @return reader records of file
     */
    private static DBFReader readFromDbf(String path)  {
        InputStream inputStream = null;
        try {
            inputStream = new FileInputStream(path);
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
        DBFReader reader = null;
        try {
            reader = new DBFReader(inputStream);
        } catch (DBFException e) {
            throw new RuntimeException(e);
        }
        reader.setCharactersetName("866");
        return reader;
    }

    private static DBFReader readFromDbf(InputStream is)  {
        DBFReader reader = null;
        try {
            reader = new DBFReader(is);
        } catch (DBFException e) {
            throw new RuntimeException(e);
        }
        reader.setCharactersetName("866");
        return reader;
    }


    /**
     * Return list of payments beans in Parus format from dbf-file for next import to Payments
     * @param reader dbf-file for import records
     * @return list of payments
     */
    private static List<PaymentFromParus> parsePaymentFromDbf (DBFReader reader)  {
        List<PaymentFromParus> list = new ArrayList<>();
        NumberFormat formatter = new DecimalFormat("###.#####");
        Object[] rowObjects;
        try {
            while ((rowObjects = reader.nextRecord()) != null) {
                PaymentFromParus paymentRow = new PaymentFromParus();
                String mfo = formatter.format(rowObjects[2]);
                paymentRow.setMfo(mfo);
                String numberDoc = String.valueOf(rowObjects[3]);
                paymentRow.setNumberDoc(numberDoc);
                String ownerBankAccount = formatter.format(rowObjects[5]);
                paymentRow.setOwnerBankAccount(ownerBankAccount);
                String payerBankAccount = formatter.format(rowObjects[6]);
                paymentRow.setPayerBankAccount(payerBankAccount);
                Double sumPayment = Double.valueOf(String.valueOf(rowObjects[7]));
                paymentRow.setSumPayment(sumPayment);
                String edrpo = String.valueOf(rowObjects[9]);
                String edrpoCode= edrpo.substring(0, edrpo.indexOf(" "));
                paymentRow.setEdrpo(edrpoCode);
                String reason = String.valueOf(rowObjects[10]);
                paymentRow.setReason(reason);
                Date datePayment = (Date)rowObjects[12];
                paymentRow.setDatePayment(datePayment);
                list.add(paymentRow);
            }
        } catch (DBFException e) {
            throw new RuntimeException(e);
        }
        return list;
    }

    /**
     * Prepare record for create payment
     * @param contragent    Contragent for import payments
     * @param paymentParus  Record from dbf file for contragent
     * @param user          user
     * @return Payment
     */
    private static Payment preparePayment (ContraAgent contragent,PaymentFromParus paymentParus, User user) {
        Payment payment = new Payment();
        List<ComboBoxItem> bank = service.searchBank(paymentParus.getMfo(),user);
        if (bank.size() > 0) {
            Bank bankContra =new Bank();
            bankContra.setId(bank.get(0).getId());
            bankContra.setName(bank.get(0).getName());
            payment.setBank(bankContra);
        }

        AgreementCondition agrCond = new AgreementCondition();
        agrCond.setContraAgentID(contragent.getId());
        List<Agreement> agreement = service.searchAgreement(agrCond, user);
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
        PaymentType paymentType = service.searchPaymentType(paymentTypeCond,user).get(0);
        payment.setPaymentType(paymentType);

        ServicePaymentCondition serviceCond = new ServicePaymentCondition();
        serviceCond.setId(1L);
        ServicePayment servicePayment = service.searchServicePayment(serviceCond, user).get(0);
        payment.setServicePayment(servicePayment);

        OwnerBankAccountCondition ownerBankCondition = new OwnerBankAccountCondition();
        ownerBankCondition.setOwnerBankAccount(paymentParus.getOwnerBankAccount());
        OwnerBankAccount ownerBankAccount = service.searchOwnerBankAccount(ownerBankCondition,user).get(0);
        payment.setOwnerBankAccount(ownerBankAccount);

        return payment;
    }

    /**
     * Get contragent for import payment
     * @param payments Payment for import
     * @param user     User
     */
    private static List<ContraAgent> getPayer (PaymentFromParus payments, User user) {
        List<ContraAgent> contraAgents;
        ContraAgentCondition cond = new ContraAgentCondition();
        cond.setBankAccount(payments.getOwnerBankAccount());
        contraAgents = service.searchContraAgent(cond, user);
        if (contraAgents.size() == 0 ) {
            cond.setBankAccount(null);
            //cond.setEdrpo(payments.getEdrpo());
            cond.setMfo(payments.getMfo());
            contraAgents = service.searchContraAgent(cond, user);
            if (contraAgents.size() != 0) {
                String bankAccount = contraAgents.get(0).getProperty().getBankAccount();
                if (bankAccount.substring(0,1).equals("*")) return null;
            }
        }
        return contraAgents;
    }

    /**
     * Prepare records for insert to table payments that not parsed (payer is absent in database)
     * @param paymentFromParus payments from DBF
     */
    private static UnparsedPayment prepareUnparsedPayment (PaymentFromParus paymentFromParus) {
        UnparsedPayment unparsedPayment = new UnparsedPayment();
        unparsedPayment.setMfo(paymentFromParus.getMfo());
        unparsedPayment.setReason(paymentFromParus.getReason());
        unparsedPayment.setOwnerBankAccount(paymentFromParus.getOwnerBankAccount());
        unparsedPayment.setPayerBankAccount(paymentFromParus.getPayerBankAccount());
        unparsedPayment.setDatePayment(paymentFromParus.getDatePayment());
        unparsedPayment.setNumberDocPayment(paymentFromParus.getNumberDoc());
        unparsedPayment.setSumPayment(paymentFromParus.getSumPayment());
        unparsedPayment.setPayer(paymentFromParus.getEdrpo());
        return unparsedPayment;
    }

    public static boolean  importFromDbf(String pathToFile, User user)  {
        DBFReader reader =  readFromDbf(pathToFile);
        List<PaymentFromParus> list = parsePaymentFromDbf(reader);
        UnparsedPayment unparsed2 = new UnparsedPayment();
        service.deleteUnparsedPayment(unparsed2,user);
        for (PaymentFromParus payments: list){
            List<ContraAgent> payer = getPayer(payments, user);
            if (payer.size() > 0) {
                Payment payment = preparePayment(payer.get(0),payments, user);
                PaymentCondition paymentCondition = new PaymentCondition();
                paymentCondition.setContraAgentID(payment.getContraAgent().getId());
                paymentCondition.setDocNumber(payment.getNumberDocPayment());
                paymentCondition.setnSum(payment.getSumPayment());
                paymentCondition.setReason(payment.getReason());
                List<Payment> paymentCreated = service.searchPayment(paymentCondition, user);
                if (paymentCreated.size() == 0)
                    service.createPayment(payment,user);
            } else {
                UnparsedPayment unparsed = prepareUnparsedPayment(payments);
                service.createUnparsedPayment(unparsed,user);

            }
        }
        return true;
    }

    public static boolean  importFromDbf(List<PaymentFromParus> transferList, User user)  {
        UnparsedPayment unparsed2 = new UnparsedPayment();
        service.deleteUnparsedPayment(unparsed2,user);
        int count = 0;
        for (PaymentFromParus payments: transferList){
            count++;
            //(payments.getOwnerBankAccount());
            List<ContraAgent> payer = getPayer(payments, user);
           // if (payer != null)
            if (payer.size() > 0) {
                Payment payment = preparePayment(payer.get(0),payments, user);
                PaymentCondition paymentCondition = new PaymentCondition();
                paymentCondition.setContraAgentID(payment.getContraAgent().getId());
                paymentCondition.setDocNumber(payment.getNumberDocPayment());
                paymentCondition.setnSum(payment.getSumPayment());
                paymentCondition.setReason(payment.getReason());
                /*List<Payment> paymentCreated = service.searchPayment(paymentCondition, user);
                if (paymentCreated.size() == 0)*/
                service.createPayment(payment,user);
            } else {
                UnparsedPayment unparsed = prepareUnparsedPayment(payments);
                service.createUnparsedPayment(unparsed,user);
                throw new RuntimeException("Payer not found");
            }
        }
        return true;
    }



}
