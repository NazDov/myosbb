package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.invoices;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;

/**
 * Created by vostap on 06.05.2015.
 */
class Transformer {
     Input transformInput(DepartmentInputInvoice departmentInput) {
        Input input = new Input();
        input.setService(new Service());
        input.getService().setId(departmentInput.getServiceID());
        input.getService().setName(departmentInput.getServiceName());
         input.setId(departmentInput.getInputID());
        return input;
    }

     InputProperty transformInputProperties(DepartmentInputInvoice departmentInput) {
        InputProperty res = new InputProperty();
        res.setKoefWatterOut(departmentInput.getKoefWatterOut());
        res.setKoefWatterSupply(departmentInput.getKoefWatterSupply());
        res.setNorma(departmentInput.getNorma());
        res.setId(departmentInput.getInputPropertyID());
        return res;
    }

    Department transformDepartment(DepartmentInputInvoice departmentInput) {
        Department res = new Department();
        res.setId(departmentInput.getDepartmentID());
        res.setProperty(new DepartmentProperty());
        res.getProperty().setCategoryOfTariff(new CategoryOfTariff());
        res.getProperty().getCategoryOfTariff().setId(departmentInput.getTariffCategory());
        return res;
    }

}
