package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils.DateUtils;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils.DoubleUtils;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.agreements.AgreementsCaches;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.SaldoCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.GetCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AgreementCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SaldoCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SumCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SumPaymentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.invoice.SearchSaldoQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchAgreementQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.saldo.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateSaldoAllContraAgentQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateSaldoDetailsQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateSaldoMainQuery;

import java.sql.Connection;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 11/26/2015.
 */
public class RecalculateSaldoByContraAgent {

     public void recalculateSaldo(Connection connection,ContraAgent contraAgent){
         AgreementCondition condition = new AgreementCondition();
         condition.setContraAgentID(contraAgent.getId());
         condition.setOnlyContraAgent(true);
        List<Agreement> agreements = new SearchAgreementQuery(condition).execute(connection);
        for (Agreement agreement:agreements) {
            _recalculateSaldoVVVP(connection, contraAgent,agreement);
            _recalculateSaldoStockWithoutPermission(connection, contraAgent,agreement);
            _recalculateSaldoPenya(connection, contraAgent,agreement);
        }
    }

    private void _recalculateSaldoPenya(Connection connection, ContraAgent contraAgent, Agreement agreement) {
        /*
        1. Документ "Оплата" із видом оплат  : пеня ВВ/ВП, в т.ч. і оплата, сформована на основі Документу «Внутрішні обороти (колишній корекція оплати).
         */
        SaldoGroup saldoGroup = new SaldoGroup(3L);

            TransferDTO transfer = new TransferDTO();
            transfer.saldoOnBegis = getSaldoOnBegin(connection, contraAgent, agreement, saldoGroup);
            transfer.sumPaymentPenya = getSumPayment(connection,contraAgent,2L,agreement);

            transfer.allInvoice = transfer.sumInvoicePenya = 0.0;
            transfer.allPayment = transfer.sumPaymentPenya;

            transfer.saldoOnEnd = (transfer.saldoOnBegis + transfer.allInvoice) - (transfer.allPayment);
            transfer.agreementID = agreement.getId();
            transfer.contraAgentID = contraAgent.getId();
            _udpateSaldo(connection,transfer,saldoGroup);
    }

    private void _recalculateSaldoStockWithoutPermission(Connection connection, ContraAgent contraAgent, Agreement agreement) {

        SaldoGroup saldoGroup = new SaldoGroup(2L);

            TransferDTO transfer = new TransferDTO();
            transfer.saldoOnBegis = getSaldoOnBegin(connection, contraAgent, agreement,saldoGroup);
            transfer.sumByInvoiceStockWithoutPermission = getSumByInvoiceStockWithOutPermission(connection, contraAgent,agreement);
            transfer.sumDocumentStockWithoutPermission = getSumDocumentStockWithOutPermission(connection,contraAgent,agreement);

            transfer.sumPaymentStockWithoutPerimission = getSumPayment(connection,contraAgent,3L,agreement);
            transfer.allInvoice = transfer.sumByInvoiceStockWithoutPermission+transfer.sumDocumentStockWithoutPermission;
            transfer.allPayment = transfer.sumPaymentStockWithoutPerimission;

            transfer.saldoOnEnd = (transfer.saldoOnBegis + transfer.allInvoice) - (transfer.allPayment);
            transfer.agreementID = agreement.getId();
            transfer.contraAgentID = contraAgent.getId();
            _udpateSaldo(connection,transfer,saldoGroup);

    }

    private double getSumByInvoiceStockWithOutPermission(Connection connection, ContraAgent contraAgent,Agreement agreement) {
        double res = 0;
        SumCondition condition = new SumCondition();
        condition.setAgreementID(agreement.getId());
        condition.setContraAgentID(contraAgent.getId());
        List<Double> list = new GetSumStockWithoutPerimission(condition).execute(connection);
        if (list.isEmpty()) return res;
        else
            return list.get(0);
    }

    private void _recalculateSaldoVVVP(Connection connection, ContraAgent contraAgent, Agreement agreement) {
        /*
            1. Нарахування за водопостачання і водовідведення 	1. Документ "Оплата" із видом оплат  : ВВ/ВП, оплата за промивку, оплата по п. 3.3, в т.ч. і оплата, сформована на основі Документу «Внутрішні обороти (колишній корекція оплати).
            2. Нарахування Дощівки	2. Нарахування комісійної винагороди
            3. Корекція Реалізації (Документ окремий)
            4. Нарахування по ЛКП
            5. Внесення даних по фізичних особах

             */
        SaldoGroup saldoGroup = new SaldoGroup(1L);

            TransferDTO transfer = new TransferDTO();

            transfer.saldoOnBegis = getSaldoOnBegin(connection, contraAgent, agreement,saldoGroup);
            transfer.sumByInvoiceVVAndVP = getSumByInvoiceVVAndVP(connection, contraAgent, agreement);
            transfer.sumByInvoiceRain = getSumByInvoiceRain(connection, contraAgent, agreement);
            transfer.sumInvoiceByLkp = getSumInvoiceByLkp(connection, contraAgent, agreement);
            transfer.sumPhys = getSumPhys(connection, contraAgent, agreement);
            transfer.sumCorrectionRealize = getSumCorrection(connection,contraAgent,agreement);
            transfer.sumInvoiceCalncelDept = getSumInvoiceCancelDept(connection,contraAgent,agreement);
            transfer.sumInvoiceCorrectionStockWithoutPermission = getsumByInvoiceCorrectionStockWithoutPermmission(connection,contraAgent,agreement);
            transfer.sumInvoiceTeploenergo = getSumInvoiceTeploenergo(connection,agreement);
        double pdv = transfer.sumByInvoiceVVAndVP+transfer.sumByInvoiceRain+transfer.sumInvoiceTeploenergo;
        pdv = pdv /5;
        pdv = DoubleUtils.round(pdv,2);
            transfer.allInvoice =
                    transfer.sumByInvoiceVVAndVP +
                            transfer.sumByInvoiceRain +
                            transfer.sumInvoiceByLkp +
                            transfer.sumPhys +
                            transfer.sumCorrectionRealize-
                            transfer.sumInvoiceCalncelDept+
                            transfer.sumInvoiceCorrectionStockWithoutPermission;
        transfer.pdv = pdv;
        transfer.allInvoice +=pdv;
            transfer.sumPaymentVVVP = getSumPayment(connection,contraAgent,1L,agreement);
            transfer.sumPaymentP33 = getSumPayment(connection,contraAgent,4L,agreement);
            transfer.sumPaymentToPromyv = getSumPayment(connection,contraAgent,5L,agreement);
            transfer.sumComissVynagorod = getSumComiss(connection,contraAgent,agreement);


            transfer.allPayment = transfer.sumPaymentVVVP + transfer.sumPaymentP33+
                    transfer.sumPaymentToPromyv+transfer.sumComissVynagorod;

            transfer.saldoOnEnd = (transfer.saldoOnBegis + transfer.allInvoice) - (transfer.allPayment);
            transfer.agreementID = agreement.getId();
            transfer.contraAgentID = contraAgent.getId();

            _udpateSaldo(connection,transfer,saldoGroup);

    }

    private double getSumInvoiceTeploenergo(Connection connection, Agreement agreement) {
       //TODO
       return 0;
    }

    private double getsumByInvoiceCorrectionStockWithoutPermmission(Connection connection, ContraAgent contraAgent,Agreement agreement) {
        SumCondition condition = new SumCondition();
        condition.setContraAgentID(contraAgent.getId());
        condition.setAgreementID(agreement.getId());
        List<Double> list = new  GetAllCorrctionStockWithoutPermissionQuery(condition).execute(connection);
        if (list.isEmpty()) return 0;
        else return list.get(0);
    }

    private double getSumInvoiceCancelDept(Connection connection,ContraAgent contraAgent, Agreement agreement) {
        SumCondition condition = new SumCondition();
        condition.setAgreementID(agreement.getId());
        condition.setContraAgentID(contraAgent.getId());
        List<Double> list = new GetSumInvoiceCancelDeptByContraAgentQuery(condition).execute(connection);
        if (list.isEmpty()) return 0.0;
        else
            return list.get(0);
    }

    private double getSumComiss(Connection connection, ContraAgent contraAgent, Agreement agreement) {
        SumCondition condition = new SumCondition();
        condition.setAgreementID(agreement.getId());
        condition.setContraAgentID(contraAgent.getId());
        List<Double> list = new GetSumByCommisQuery(condition).execute(connection);
        if (list.isEmpty()) return 0;
        else return list.get(0);
    }

    private void _udpateSaldo(Connection connection,TransferDTO transfer,SaldoGroup saldoGroup){
        SaldoCondition saldoCondition = new SaldoCondition();
        saldoCondition.setAgreementID(transfer.agreementID);
        saldoCondition.setContraAgentID(transfer.contraAgentID);
        saldoCondition.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0));
        saldoCondition.setSaldoGroupID(saldoGroup.getId());
        List<Saldo> saldos = new SearchSaldoQuery(saldoCondition).execute(connection);
        //if (saldos.isEmpty()) throw new RuntimeException("Saldo not found contraAgent = "+transfer.contraAgentID+",agreement = "+transfer.agreementID);
        if (saldos.isEmpty()) return;
        Saldo s = saldos.get(0);
        s.setSaldoOnBegin(transfer.saldoOnBegis);
        s.setSaldoOnEnd(transfer.saldoOnEnd);
        s.setInvoice(transfer.allInvoice);
        s.setSumPayment(transfer.allPayment);
        new UpdateSaldoMainQuery().execute(connection,s);
        SaldoDetails saldoDetail = new SaldoDetails();
        saldoDetail.setSaldoID(s.getId());
        saldoDetail = new SearchSaldoDetailsQuery(saldoDetail).execute(connection).get(0);
        SaldoDetails saldoDetailRefreshed = refreshSaldoDetails(transfer, s.getId(),saldoDetail,saldoGroup);
        new UpdateSaldoDetailsQuery().execute(connection,saldoDetailRefreshed);
    }

    private SaldoDetails refreshSaldoDetails(TransferDTO transfer, long saldoID, SaldoDetails saldoDetail, SaldoGroup saldoGroup) {
        SaldoDetails res = new SaldoDetails();
        res.setSaldoID(saldoID);
        res.setId(saldoDetail.getId());


        if (saldoGroup.getId() == 1) {

            /*
            1. Нарахування за водопостачання і водовідведення 	1. Документ "Оплата" із видом оплат  : ВВ/ВП, оплата за промивку, оплата по п. 3.3, в т.ч. і оплата, сформована на основі Документу «Внутрішні обороти (колишній корекція оплати).
            2. Нарахування Дощівки	2. Нарахування комісійної винагороди
            3. Корекція Реалізації (Документ окремий)
            4. Нарахування по ЛКП
            5. Внесення даних по фізичних особах

             */

            res.setSumInvoiceByLkp(transfer.sumInvoiceByLkp);
            res.setSumInvoiceRains(transfer.sumByInvoiceRain);
            res.setSumInvoiceWatterSupplyAndWatterOut(transfer.sumByInvoiceVVAndVP);
            res.setSumInputByPhysicalPerson(transfer.sumPhys);
            res.setSumCorrectionOfRealization(transfer.sumCorrectionRealize);
            res.setSumInvoiceCorrectionStockWithoutPermission(transfer.sumInvoiceCorrectionStockWithoutPermission);

            res.setSumPaymentVVVP(transfer.sumPaymentVVVP);
            res.setSumPaymentPromyv(transfer.sumPaymentToPromyv);
            res.setSumPaymentPP3(transfer.sumPaymentP33);



        }
        if (saldoGroup.getId() == 2){
            /*
            1.Нарахування за скид стоків без дозволу	1. Документ "Оплата" із видом оплат  : Скид без дозволу,в т.ч. і оплата, сформована на основі Документу «Внутрішні обороти (колишній корекція оплати). 1.Нарахування за скид стоків без дозволу	1. Документ "Оплата" із видом оплат  : Скид без дозволу,в т.ч. і оплата, сформована на основі Документу «Внутрішні обороти (колишній корекція оплати).
             */
            res.setSumInvoiceByStockWithoutPermission(transfer.sumByInvoiceStockWithoutPermission);
            res.setSumPaymentStockWithoutPermission(transfer.sumPaymentStockWithoutPerimission);
            res.setSumDocumentStockWithoutPermission(transfer.sumDocumentStockWithoutPermission);

        }

        if (saldoGroup.getId() == 3){
            /*
                        1. Нарахування пені	1. Документ "Оплата" із видом оплат  : пеня ВВ/ВП, в т.ч. і оплата, сформована на основі Документу «Внутрішні обороти (колишній корекція оплати).
             */
            res.setSumPaymentPenya(transfer.sumPaymentPenya);
            res.setSumInvoiceByPenya(transfer.sumInvoicePenya);

        }
        res.setSumInvoiceCancelDept(transfer.sumInvoiceCalncelDept);
        res.setSumPaymentCommis(transfer.sumComissVynagorod);
        res.setPdv(transfer.pdv);
        return res;
    }

    private Double getSumCorrection(Connection connection, ContraAgent contraAgent, Agreement agreement) {
        List<Double> list = new GetSumFromCorrectionOfRealizeQuery(generateCondition(contraAgent, agreement)).execute(connection);
        if (list.isEmpty()) return 0.0;
        else return list.get(0);
    }

    private Double getSumPhys(Connection connection, ContraAgent contraAgent, Agreement agreement) {
        List<Double> list = new GetSumFromPhysTableQuery(generateCondition(contraAgent, agreement)).execute(connection);
        if (list.isEmpty()) return 0.0;
        else
            return list.get(0);
    }

    private Double getSumInvoiceByLkp(Connection connection, ContraAgent contraAgent, Agreement agreement) {
        List<Double> list = new GetSumFromInvoiceByLKPQuery(generateCondition(contraAgent, agreement)).execute(connection);
        if (list.isEmpty()) return 0.0;
        else
            return list.get(0);
    }

    private Double getSumDocumentStockWithOutPermission(Connection connection, ContraAgent contraAgent,Agreement agreement){
        List<Double> list = new GetSumDocumentStockWithoutPermissionQuery(generateCondition(contraAgent, agreement)).execute(connection);
        if (list.isEmpty()) return 0.0;
        else
            return list.get(0);

    }

    private Double getSumByInvoiceRain(Connection connection, ContraAgent contraAgent, Agreement agreement) {
         List<Double> list = new GetSumFromInvoiceRainQuery(generateCondition(contraAgent, agreement)).execute(connection);
        if (list.isEmpty()) return 0.0;
        else return list.get(0);
    }

    private Double getSumByInvoiceVVAndVP(Connection connection, ContraAgent contraAgent, Agreement agreement) {
        List<Double> list = new GetSumInvoiceResultByContraAgentQuery(generateCondition(contraAgent,agreement)).execute(connection);
        if (list.isEmpty()) return 0.0;
        else return list.get(0);
    }

    private Double getSaldoOnBegin(Connection connection, ContraAgent contraAgent, Agreement agreement,SaldoGroup saldoGroup) {
        SaldoCondition condition = new SaldoCondition();
        condition.setContraAgentID(contraAgent.getId());
        condition.setAgreementID(agreement.getId());
        condition.setSaldoGroupID(saldoGroup.getId());
        condition.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0));
        List<Saldo> saldos = new SearchSaldoQuery(condition).execute(connection);
        if (saldos.isEmpty()) throw new RuntimeException("Error loading saldo. Saldo does not exist. AgreementID = "+agreement.getId());
        Saldo s = saldos.get(0);
        return s.getSaldoOnBegin();
    }

    private Double ___getSaldoOnBegin(Connection connection, ContraAgent contraAgent, Agreement agreement,SaldoGroup saldoGroup) {
        SaldoCondition condition = new SaldoCondition();
        condition.setContraAgentID(contraAgent.getId());
        condition.setAgreementID(agreement.getId());
        condition.setSaldoGroupID(saldoGroup.getId());
        condition.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0));
        List<Saldo> saldos = new SearchSaldoQuery(condition).execute(connection);
        if (saldos.isEmpty()) throw new RuntimeException("Error loading saldo. Saldo does not exist. AgreementID = "+agreement.getId());
        Saldo s = saldos.get(0);
        return s.getSaldoOnBegin();
    }

    private Double getSumPayment(Connection connection, ContraAgent contraAgent, Long servicePaymentID, Agreement agreement){
        Date period = new GetCurrentPeriodQuery(null).execute(connection).get(0);
        SumPaymentCondition condition = new SumPaymentCondition();
        condition.setContraAgentID(contraAgent.getId());
        condition.setServicePaymentID(servicePaymentID);
        condition.setDate1(DateUtils.getFirstDayOfMonth(period));
        condition.setDate2(DateUtils.getLastDayOfMonth(period));
        condition.setAgreementID(agreement.getId());
        List<Double> res = new GetSumPayment(condition).execute(connection);
        if (res.isEmpty()) return 0.0;
        else return res.get(0);
    }

    private SumCondition generateCondition(ContraAgent contraAgent, Agreement agreement){
        SumCondition condition = new SumCondition();
        condition.setContraAgentID(contraAgent.getId());
        condition.setAgreementID(agreement.getId());
        return condition;
    }

    private class TransferDTO{

        public double saldoOnBegis = 0;
        public double sumByInvoiceVVAndVP = 0;
        public double sumByInvoiceRain = 0;
        public double sumInvoiceByLkp = 0;
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
        public double sumInvoiceCorrectionStockWithoutPermission = 0;
        public double sumPaymentCommis = 0;
        public double pdv=0;
        public double sumInvoiceTeploenergo = 0;

        public long contraAgentID;
        public long agreementID;
        public double sumPunkt33 = -1;
        public double sumInvoiceCalncelDept = 0;
    }
}
