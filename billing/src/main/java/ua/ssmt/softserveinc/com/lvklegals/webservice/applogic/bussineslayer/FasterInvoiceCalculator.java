package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.logging.ApplicationLogger;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.invoices.CalculateHelper;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.database.DataSource;

import java.sql.Connection;
import java.sql.SQLException;

/**
 * Created by vostap on 31.03.2015.
 */
public class FasterInvoiceCalculator {

    public void startInvoice() {
        CalculateHelper calculateHelper = new CalculateHelper();
        try{
            _startCalculation(calculateHelper);
        }catch (Exception e){
            calculateHelper.unlockDateBase();
            throw new RuntimeException(e);
        }
    }

    private void _startCalculation(CalculateHelper calculateHelper){
        calculateHelper.clearInvoices();
        calculateHelper.calcPortion();
        calculateHelper.unlockDateBase();
    }


}
