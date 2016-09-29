package ua.ssmt.softserveinc.com.lvklegals.webservice.tests;

import com.linuxense.javadbf.DBFException;
import com.linuxense.javadbf.DBFReader;
import org.junit.Ignore;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.PaymentFromParus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.ReferencesServiceImpl;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.inerfc.ReferencesService;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.sql.SQLException;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 *
 *
 * @author vstoian
 * @version 1.0.0
 * @since 1.0.0
 */
public class ImportDbfTest {
    private static ReferencesService service = new ReferencesServiceImpl();

    private static User getUser() {
        User user = new User();
        user.setId(1L);
        user.setName("admin");
        user.setUserPassword("admin");
        return user;
    }
    /**
     * Return records of dbf-file using path to file
     * @param path path to dbf-file
     * @return reader records of file
     */
    private static DBFReader readFromDbf(String path) throws FileNotFoundException, DBFException{
        InputStream inputStream = null;
        inputStream = new FileInputStream(path);
        DBFReader reader = new DBFReader(inputStream);
        reader.setCharactersetName("866");
        return reader;
    }

    /**
     * Return list of payments beans in Parus format from dbf-file for next import to Payments
     * @param reader dbf-file for import records
     * @return list of payments
     */
    public static List<PaymentFromParus> parsePaymentFromDbf (DBFReader reader) throws DBFException {
        List<PaymentFromParus> list = new ArrayList<>();
        NumberFormat formatter = new DecimalFormat("###.#####");
        Object[] rowObjects;
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
        return list;
    }

    /**
     * Prepare record for create payment
     * @param contragent    Contragent for import payments
     * @param paymentParus  Record from dbf file for contragent
     * @return Payment
     */
    public static Payment preparePayment (ContraAgent contragent,PaymentFromParus paymentParus) throws DBFException, ValidateException, StorageException {
        Payment payment = new Payment();
        List<ComboBoxItem> bank = service.searchBank(paymentParus.getMfo(),getUser());
        if (bank.size() > 0) {
            Bank bankContra =new Bank();
            bankContra.setId(bank.get(0).getId());
            bankContra.setName(bank.get(0).getName());
            payment.setBank(bankContra);
        }

        AgreementCondition agrCond = new AgreementCondition();
        agrCond.setContraAgentID(contragent.getId());
        List<Agreement> agreement = service.searchAgreement(agrCond, getUser());
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
        PaymentType paymentType = service.searchPaymentType(paymentTypeCond,getUser()).get(0);
        payment.setPaymentType(paymentType);

        ServicePaymentCondition serviceCond = new ServicePaymentCondition();
        serviceCond.setId(1L);
        ServicePayment servicePayment = service.searchServicePayment(serviceCond, getUser()).get(0);
        payment.setServicePayment(servicePayment);

        OwnerBankAccountCondition ownerBankCondition = new OwnerBankAccountCondition();
        ownerBankCondition.setOwnerBankAccount(paymentParus.getOwnerBankAccount());
        OwnerBankAccount ownerBankAccount = service.searchOwnerBankAccount(ownerBankCondition,getUser()).get(0);
        payment.setOwnerBankAccount(ownerBankAccount);

        return payment;
    }

    /**
     * Get contragent for import payment
     * @param payments Payment for import
     */
    public static List<ContraAgent> getPayer (PaymentFromParus payments)  {
        List<ContraAgent> contragent = new ArrayList<ContraAgent>();
        ContraAgentCondition cond = new ContraAgentCondition();
        cond.setBankAccount(payments.getPayerBankAccount());
        contragent = service.searchContraAgent(cond, getUser());
        if (contragent.size() == 0 ) {
            cond.setBankAccount(null);
            cond.setEdrpo(payments.getEdrpo());
            contragent = service.searchContraAgent(cond, getUser());
            if (contragent.size() != 0) {
                String bankAccount = contragent.get(0).getProperty().getBankAccount();
                if (bankAccount.substring(0,1).equals("*")) return null;
            }
        }
        return contragent;
    }

    /**
     * Prepare records for insert to table payments that not parsed (payer is absent in database)
     * @param paymentFromParus payments from DBF
     */
    public static UnparsedPayment prepareUnparsedPayment (PaymentFromParus paymentFromParus) throws DBFException, ValidateException, StorageException {
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
    @Test
    @Ignore
    public  void  main() throws SQLException, IOException, ValidateException, StorageException {
        DBFReader reader =  readFromDbf("D:\\Temp\\01_04_16.dbf");
        List<PaymentFromParus> list = parsePaymentFromDbf(reader);
        service.deleteUnparsedPayment(null,getUser());
        int k = 0;
        for (PaymentFromParus payments: list){
            k++;
            //("payment "+k+" /"+" from "+list.size());
            List<ContraAgent> payer = getPayer(payments);
            if (payer != null)
                if (payer.size() > 0) {

                    Payment payment = preparePayment(payer.get(0),payments);
                    PaymentCondition paymentCondition = new PaymentCondition();
                    paymentCondition.setContraAgentID(payment.getContraAgent().getId());
                    paymentCondition.setDocNumber(payment.getNumberDocPayment());
                    paymentCondition.setnSum(payment.getSumPayment());
                    paymentCondition.setReason(payment.getReason());
                    List<Payment> paymentCreated = service.searchPayment(paymentCondition, getUser());
                    if (paymentCreated.size() == 0)
                        service.createPayment(payment,getUser());
                } else {
                    UnparsedPayment unparsed = prepareUnparsedPayment(payments);
                    service.createUnparsedPayment(unparsed,getUser());

                }
            ////(payments.getEdrpo());
        }

    }
    @Test
    @Ignore
    public void test() throws FileNotFoundException, DBFException {
     //   DBFReader reader =  readFromDbf("D:\\Test\\test.dbf");
        List<Commission> list = new ArrayList<>();
        this.service.clearComission(list, getUser());
        int cnt=0; 
        }


    @Test
    @Ignore
    public void testNotLoaded(){
        PaymentCondition condition = new PaymentCondition();
        condition.setPaymentDate(new Date());
        condition.setnSum(0.0);
        condition.setServicePaymentID(1L);
        condition.setAccountOwner(1L);
        List<PaymentToDelete> list = service.searchPaymentToDeleteOperation(condition,getUser());
        System.out.println(list.size());
    }

    @Test
    @Ignore
    public void testClear(){
        PaymentFromParus p = new PaymentFromParus();
        p.setDatePayment(getPaymentDate());
        p.setOwnerBankAccount("26004620013670");
        List<PaymentFromParus> list = new ArrayList<>();
        list.add(p);
        this.service.clearPayment(list,new User());
    }

    private Date getPaymentDate() {
         Calendar c = Calendar.getInstance();
        c.set(Calendar.DAY_OF_MONTH,15);
        c.set(Calendar.MONTH,3);
        c.set(Calendar.YEAR,2015);
        return c.getTime();
    }

}
