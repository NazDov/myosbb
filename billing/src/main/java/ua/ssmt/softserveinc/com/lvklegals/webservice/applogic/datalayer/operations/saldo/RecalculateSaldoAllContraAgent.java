package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo;

import org.springframework.util.NumberUtils;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils.DateUtils;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils.DoubleUtils;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils.Profiller;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.FasterInvoiceCalculator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.invoices.ResultCollector;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.agreements.AgreementsCaches;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.SaldoCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.invoice.InvoiceSumCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.invoice.canceldebt.CancelDeptCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.invoice.correctionstockwithoutpermission.CorrectionStockWithoutPermissionCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.invoice.invoicebylkp.InvoiceByLKPSumCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.invoice.teploenergo.InvoiceSumTeploenergoCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.payment.PaymentCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.payment.commis.PaymentCommisCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.payment.correctionofrealize.CorrectionOfRealizeCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.payment.phys.PhysPaymentCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.stockwithoutpermission.StockWithoutPermissionCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.stockwithoutpermission.paymentstockwithoutpermission.PaymentStockWithOutPermissionCache;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by vostap on 13.01.2016.
 */
public class RecalculateSaldoAllContraAgent {

    private SaldoCache saldoCache;
    private AgreementsCaches agreementsCaches;
    private InvoiceSumCache calcInvoiceResult;
    private InvoiceSumCache rainsInvoiceResult;
    private InvoiceByLKPSumCache lkpInvoiceResult;
    private PhysPaymentCache physPaymentResult;
    private CorrectionOfRealizeCache correctionOfRealizeCache;
    private PaymentCache paymentCache;
    private PaymentCommisCache paymentCommisCache;
    private InvoiceSumTeploenergoCache teploEnergoInvoiceResult;

    private CancelDeptCache cancelDeptCache;

    private StockWithoutPermissionCache stockWithoutPermissionCache;
    private PaymentStockWithOutPermissionCache paymentStockWithOutPermissionCache;
    private CorrectionStockWithoutPermissionCache correctionStockWithoutPermissionCache;


    public RecalculateSaldoAllContraAgent(){

        System.out.println("saldo start cache.....  SaldoCache");
        saldoCache = new SaldoCache();

        System.out.println("saldo start cache..... AgreementsCaches");
        agreementsCaches = new AgreementsCaches();

        System.out.println("saldo start cache..... InvoiceSumCache");
        calcInvoiceResult = new InvoiceSumCache("CalcInvoiceResults","ContrAgentAgreementID");

        System.out.println("saldo start cache..... InvoiceSumCache");
        rainsInvoiceResult = new InvoiceSumCache("CalcInvoiceRainsInvoice","AgreementID");

        System.out.println("saldo start cache..... InvoiceSumCache");
        lkpInvoiceResult = new InvoiceByLKPSumCache("calculateVolumeLKP","AgreementID");

        teploEnergoInvoiceResult = new InvoiceSumTeploenergoCache();

        System.out.println("saldo start cache..... PhysPaymentCache");
        physPaymentResult = new PhysPaymentCache();

        System.out.println("saldo start cache..... CorrectionOfRealizeCache");
        correctionOfRealizeCache = new CorrectionOfRealizeCache();

        System.out.println("saldo start cache..... PaymentCache");
        paymentCache = new PaymentCache();

        cancelDeptCache = new CancelDeptCache();
        correctionStockWithoutPermissionCache = new CorrectionStockWithoutPermissionCache();

        System.out.println("saldo start cache..... PaymentCommisCache");
        paymentCommisCache = new PaymentCommisCache();
        stockWithoutPermissionCache = new StockWithoutPermissionCache();
        paymentStockWithOutPermissionCache = new PaymentStockWithOutPermissionCache();
        System.out.println("saldo end cache.....");

    }

    public List<Saldo> recalculatoSaldoAllContraAgent(){

        List<Saldo> res = new ArrayList<>();
        int size = saldoCache.getDocuments().size();
        int cnt=0;

        for (Saldo s:saldoCache.getDocuments()){
            //102365	1528
            if (s.getContraAgent().getId().equals(100001L) && s.getAgreement().getId().equals(4985L)){
                int breakpoint = 0;
            }

              cnt++;
                    res.add(recalculateSaldo(s));
        }
        System.out.println("end reaclculate saldo  /   "+size);
        return res;
    }

    private Saldo recalculateSaldo(Saldo s){
        TransferDTO transfer =null;
        if (s.getSaldoGroup().getId().equals(1L))
            transfer = getTransferSaldoVVVPDTO(s.getAgreement());
        if (s.getSaldoGroup().getId().equals(2L))
            transfer = getTransferSaldoStockWithoutPermission(s.getAgreement());
        if (s.getSaldoGroup().getId().equals(3L))
            transfer = getTransferSaldoPenya(s.getAgreement());

        s.setSaldoOnBegin(transfer.saldoOnBegis);
        s.setSaldoOnEnd(transfer.saldoOnEnd);
        s.setInvoice(transfer.allInvoice);
        s.setSumPayment(transfer.allPayment);
        s.setDetailses(this.refreshSaldoDetails(transfer,s.getDetailses(),s.getSaldoGroup()));

        return s;

    }

    /*private void calcualtePDV(Saldo s) {
        /*
         sumInvoiceWatterSupplyAndWatterOut, sumInvoiceRains, sumInvoiceTeploenergo
         *//*
        SaldoDetails sd = s.getDetailses();
        double pdv = sd.getSumInvoiceWatterSupplyAndWatterOut()+sd.getSumInvoiceRains()+sd.getSumInvoiceTeploenergo();
        pdv = pdv /5;
        pdv = DoubleUtils.round(pdv,2);
        sd.setPdv(pdv);
        s.setInvoice(s.getInvoice()+pdv);

    }*/


    /*private List<Saldo> recalculateSaldo(Agreement agreement){
        if (agreement.getId().equals(82233L)){
            int breckPoing = 0;
        }
        long st = System.currentTimeMillis();
        List<Saldo> saldos = getSaldoOnContraAgent(agreement);
        long e = System.currentTimeMillis();
        System.out.println("getSaldoOnContraAgent = "+(e-st));
        for (Saldo s:saldos){
            TransferDTO transfer =null;
            if (s.getSaldoGroup().getId().equals(1L))
                transfer = getTransferSaldoVVVPDTO(agreement);
            if (s.getSaldoGroup().getId().equals(2L))
                transfer = getTransferSaldoStockWithoutPermission(agreement);
            if (s.getSaldoGroup().getId().equals(3L))
                transfer = getTransferSaldoPenya(agreement);
            s.setSaldoOnBegin(transfer.saldoOnBegis);
            s.setSaldoOnEnd(transfer.saldoOnEnd);
            s.setInvoice(transfer.allInvoice);
            s.setSumPayment(transfer.allPayment);
            s.setDetailses(this.refreshSaldoDetails(transfer,s.getDetailses(),s.getSaldoGroup()));
        }
        return saldos;

    }*/


    private TransferDTO getTransferSaldoPenya(Agreement agreement){
        SaldoGroup saldoGroup = new SaldoGroup(3L);

        TransferDTO transfer = new TransferDTO();
        transfer.saldoOnBegis = getSaldoOnBegin(agreement, saldoGroup);
        transfer.sumPaymentPenya = getSumPayment(2L,agreement);
        transfer.sumInvoiceCalncelDept = getSumInvoiceCancelDept(agreement,new ServicePayment(3L));

        transfer.allInvoice = transfer.sumInvoicePenya = 0.0;
        transfer.allPayment = transfer.sumPaymentPenya;

        transfer.saldoOnEnd = (transfer.saldoOnBegis + transfer.allInvoice) - (transfer.allPayment);
        transfer.agreementID = agreement.getId();
        transfer.contraAgentID = agreement.getContraAgent().getId();
        return transfer;
    }

    private TransferDTO getTransferSaldoStockWithoutPermission(Agreement agreement){
        TransferDTO transfer = new TransferDTO();
        transfer.saldoOnBegis = getSaldoOnBegin(agreement,new SaldoGroup(2L));
        transfer.sumInvoiceCalncelDept = getSumInvoiceCancelDept(agreement,new ServicePayment(3L));
        transfer.sumByInvoiceStockWithoutPermission = getSumByInvoiceStockWithOutPermission(agreement);
        transfer.sumDocumentStockWithoutPermission = getSumDocumentStockWithOutPermission(agreement);

        transfer.sumPaymentStockWithoutPerimission = getSumPayment(3L,agreement);
        transfer.allInvoice = transfer.sumByInvoiceStockWithoutPermission+transfer.sumDocumentStockWithoutPermission;
        transfer.allPayment = transfer.sumPaymentStockWithoutPerimission;

        transfer.saldoOnEnd = (transfer.saldoOnBegis + transfer.allInvoice) - (transfer.allPayment);
        transfer.agreementID = agreement.getId();
        transfer.contraAgentID = agreement.getContraAgent().getId();
        return transfer;
    }

    private TransferDTO getTransferSaldoVVVPDTO(Agreement agreement){
        TransferDTO transfer = new TransferDTO();
        transfer.saldoOnBegis = getSaldoOnBegin(agreement,new SaldoGroup(1L));
        transfer.sumInvoiceCalncelDept = getSumInvoiceCancelDept(agreement,new ServicePayment(1L));
        transfer.sumByInvoiceVVAndVP = getSumByInvoiceVVAndVP(agreement);
        transfer.sumInvoiceTeploenergo = getSumInvoiceTeploenergo(agreement);
        transfer.sumInvoiceCorrectionStockWithoutPermission = getsumByInvoiceCorrectionStockWithoutPermmission(agreement);

        transfer.sumByInvoiceRain = getSumByInvoiceRain(agreement);
        transfer.sumInvoiceByLkp = getSumInvoiceByLkp(agreement);
        transfer.sumPhys = getSumPhys(agreement);
        transfer.sumCorrectionRealize = getSumCorrection(agreement);

        double pdv = transfer.sumByInvoiceVVAndVP+transfer.sumByInvoiceRain+transfer.sumInvoiceTeploenergo;
        pdv = pdv /5;
        pdv = DoubleUtils.round(pdv,2);

        transfer.allInvoice =
                transfer.sumByInvoiceVVAndVP +
                        transfer.sumByInvoiceRain +
                        transfer.sumInvoiceByLkp +
                        transfer.sumPhys +
                        transfer.sumCorrectionRealize+
                        transfer.sumInvoiceTeploenergo-
                        transfer.sumInvoiceCalncelDept+
                        transfer.sumInvoiceCorrectionStockWithoutPermission;
                        transfer.pdv = pdv;
        transfer.allInvoice +=pdv;


        transfer.sumPaymentVVVP = getSumPayment(1L,agreement);
        transfer.sumPaymentP33 = getSumPayment(4L,agreement);
        transfer.sumPaymentToPromyv = getSumPayment(5L,agreement);
        transfer.sumComissVynagorod = getSumComiss(agreement);

        transfer.allPayment = transfer.sumPaymentVVVP + transfer.sumPaymentP33+
                transfer.sumPaymentToPromyv+transfer.sumComissVynagorod;

        transfer.saldoOnEnd = (transfer.saldoOnBegis + transfer.allInvoice) - (transfer.allPayment);
        transfer.agreementID = agreement.getId();
        transfer.contraAgentID = agreement.getContraAgent().getId();
        return transfer;
    }

    private double getsumByInvoiceCorrectionStockWithoutPermmission(Agreement agreement) {
        for (SaldoInvoiceSum s:correctionStockWithoutPermissionCache.getDocuments()){
            if (s.getAgreement().getId().equals(agreement.getId()) && s.getAgreement().getContraAgent().getId().equals(agreement.getContraAgent().getId())){
                return s.getSum();
            }
        }
        return 0;
    }

    private double getSumInvoiceCancelDept(Agreement agreement,ServicePayment servicePayment) {
        for (SaldoInvoiceWithServiceSum s:cancelDeptCache.getDocuments()){
            if (s.getAgreement().getId().equals(agreement.getId()) && s.getAgreement().getContraAgent().equals(agreement.getContraAgent()) &&
                    s.getServicePayment().getId().equals(servicePayment.getId())){
                return s.getSum();
            }
        }
        return 0;
    }

    private double getSumInvoiceTeploenergo(Agreement agreement) {
       for (SaldoInvoiceSum s:this.teploEnergoInvoiceResult.getDocuments()){
           if (s.getAgreement().getContraAgent().getId().equals(agreement.getContraAgent().getId()) &&
                   s.getAgreement().getId().equals(agreement.getId())){
               return s.getSum();
           }
       }
        return 0;
    }

    private List<Saldo> getSaldoOnContraAgent(Agreement agreement){
        List<Saldo> list = this.saldoCache.getDocuments().stream().filter(s -> s.getAgreement().getId().equals(agreement.getId()) && s.getContraAgent().getId().equals(agreement.getContraAgent().getId())).collect(Collectors.toList());
        return list;
    }


    private double getSumByInvoiceStockWithOutPermission(Agreement agreement) {
        for (SaldoInvoiceSum s:this.stockWithoutPermissionCache.getDocuments()){
            if (s.getAgreement().getId().equals(agreement.getId()) && s.getAgreement().getId().equals(agreement.getContraAgent().getId())){
                return s.getSum();
            }
        }
        return 0;
    }

    private double getSumComiss(Agreement agreement) {
        for (SaldoInvoiceSum s:paymentCommisCache.getDocuments()){
            if (agreement.getId().equals(s.getAgreement().getId()) && agreement.getContraAgent().getId().equals(agreement.getContraAgent().getId()))
                return s.getSum();
        }
        return 0;

    }

    private SaldoDetails refreshSaldoDetails(TransferDTO transfer, SaldoDetails res, SaldoGroup saldoGroup) {


        if (saldoGroup.getId() == 1) {
            res.setSumInvoiceByLkp(transfer.sumInvoiceByLkp);
            res.setSumInvoiceRains(transfer.sumByInvoiceRain);
            res.setSumInvoiceWatterSupplyAndWatterOut(transfer.sumByInvoiceVVAndVP);
            res.setSumInputByPhysicalPerson(transfer.sumPhys);
            res.setSumCorrectionOfRealization(transfer.sumCorrectionRealize);
            res.setSumInvoiceTeploenergo(transfer.sumInvoiceTeploenergo);

            res.setSumPaymentVVVP(transfer.sumPaymentVVVP);
            res.setSumPaymentPromyv(transfer.sumPaymentToPromyv);
            res.setSumPaymentPP3(transfer.sumPaymentP33);
            res.setSumInvoiceCorrectionStockWithoutPermission(transfer.sumInvoiceCorrectionStockWithoutPermission);

        }
        if (saldoGroup.getId() == 2){

            res.setSumInvoiceByStockWithoutPermission(transfer.sumByInvoiceStockWithoutPermission);
            res.setSumPaymentStockWithoutPermission(transfer.sumPaymentStockWithoutPerimission);
            res.setSumDocumentStockWithoutPermission(transfer.sumDocumentStockWithoutPermission);

        }

        if (saldoGroup.getId() == 3){

            res.setSumPaymentPenya(transfer.sumPaymentPenya);
            res.setSumInvoiceByPenya(transfer.sumInvoicePenya);

        }
        res.setSumInvoiceCancelDept(transfer.sumInvoiceCalncelDept);
        res.setPdv(transfer.pdv);
        return res;
    }

    private Double getSumCorrection(Agreement agreement) {

        for (SaldoInvoiceSum s:correctionOfRealizeCache.getDocuments()){
            if (s.getAgreement().getId().equals(agreement.getId()) &&
                    s.getAgreement().getContraAgent().getId().equals(agreement.getContraAgent().getId()))
                return s.getSum();
        }
        return 0.0;
    }

    private Double getSumPhys(Agreement agreement) {
        for (SaldoInvoiceSum s:this.physPaymentResult.getDocuments()){
            if (s.getAgreement().getId().equals(agreement.getId()) &&
                    s.getAgreement().getContraAgent().getId().equals(agreement.getContraAgent().getId()))
                return s.getSum();
        }
        return 0.0;
    }

    private Double getSumInvoiceByLkp(Agreement agreement) {
        for (SaldoInvoiceSum saldoInvoiceSum:this.lkpInvoiceResult.getDocuments()){
            if (saldoInvoiceSum.getAgreement().getId().equals(agreement.getId()) &&
                    saldoInvoiceSum.getAgreement().getContraAgent().getId().equals(agreement.getContraAgent().getId()))
                return saldoInvoiceSum.getSum();
        }
        return 0.0;
    }

    private Double getSumDocumentStockWithOutPermission(Agreement agreement){
        for (SaldoInvoiceSum saldoInvoiceSum:this.paymentStockWithOutPermissionCache.getDocuments()){
            if (saldoInvoiceSum.getAgreement().getId().equals(agreement.getId()) &&
                    saldoInvoiceSum.getAgreement().getContraAgent().getId().equals(agreement.getContraAgent().getId()))
                return saldoInvoiceSum.getSum();
        }
        return 0.0;


    }

    private Double getSumByInvoiceRain(Agreement agreement) {
        for (SaldoInvoiceSum saldoInvoiceSum:this.rainsInvoiceResult.getDocuments()){
            if (saldoInvoiceSum.getAgreement().getId().equals(agreement.getId()) &&
                    saldoInvoiceSum.getAgreement().getContraAgent().getId().equals(agreement.getContraAgent().getId()))
                return saldoInvoiceSum.getSum();
        }
        return 0.0;

    }

    private Double getSumByInvoiceVVAndVP(Agreement agreement) {
        for (SaldoInvoiceSum saldoInvoiceSum:this.calcInvoiceResult.getDocuments()){
            if (saldoInvoiceSum.getAgreement().getId().equals(agreement.getId()) &&
                    saldoInvoiceSum.getAgreement().getContraAgent().getId().equals(agreement.getContraAgent().getId()))
                return saldoInvoiceSum.getSum();
        }
        return 0.0;

    }

    private Double getSaldoOnBegin(Agreement agreement,SaldoGroup saldoGroup) {

        for (Saldo s:saldoCache.getDocuments()){
            if (s.getContraAgent().getId().equals(agreement.getContraAgent().getId()) &&
                    s.getAgreement().getId().equals(agreement.getId()) &&
                    s.getSaldoGroup().getId().equals(saldoGroup.getId())){
                return s.getSaldoOnBegin();
            }
        }
        return 0.0;
    }


    private Double getSumPayment(Long servicePaymentID, Agreement agreement){
        for (SaldoInvoiceSum s:paymentCache.getDocuments()){
            if (servicePaymentID.equals((long)s.getServicePaymentID())
                    && agreement.getId().equals(s.getAgreement().getId())
                    && agreement.getContraAgent().getId().equals(agreement.getContraAgent().getId()))
                return s.getSum();
        }
        return 0.0;

    }

    private class TransferDTO{

        public double saldoOnBegis = 0;
        public double sumByInvoiceVVAndVP = 0;
        public double sumByInvoiceRain = 0;
        public double sumInvoiceByLkp = 0;
        public double sumInvoiceCalncelDept = 0;
        public double sumPhys = 0;
        public double sumCorrectionRealize = 0;
        public double sumPaymentVVVP = 0;
        public double sumPaymentStockWithoutPerimission = 0;
        public double sumPaymentP33 = 0;
        public double allInvoice = 0;
        public double allPayment = 0;
        public double saldoOnEnd = 0;
        public double sumComissVynagorod = 0;
        public double sumPaymentToPromyv = 0;
        public double sumByInvoiceStockWithoutPermission = 0;
        public double sumPaymentPenya = 0;
        public double sumInvoicePenya = 0;
        public double sumDocumentStockWithoutPermission = 0;
        public double sumInvoiceTeploenergo = 0;
        public double sumInvoiceCorrectionStockWithoutPermission = 0;
        public double pdv=0;

        public long contraAgentID;
        public long agreementID;
        public double sumPunkt33 = -1;
    }
}
