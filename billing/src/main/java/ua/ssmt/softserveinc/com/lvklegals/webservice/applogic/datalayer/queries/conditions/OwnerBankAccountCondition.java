package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Bank;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.OwnerAccount;

/**
 * Created by vostap on 19.11.2014.
 */
public class OwnerBankAccountCondition {
    private Long id;
    private OwnerAccount ownerAccount;
    private Bank bank;
    private String ownerBankAccount;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public OwnerAccount getOwnerAccount() {
        return ownerAccount;
    }

    public void setOwnerAccount(OwnerAccount ownerAccount) {
        this.ownerAccount = ownerAccount;
    }

    public Bank getBank() {
        return bank;
    }

    public void setBank(Bank bank) {
        this.bank = bank;
    }

    public String getOwnerBankAccount() {
        return ownerBankAccount;
    }

    public void setOwnerBankAccount(String ownerBankAccount) {
        this.ownerBankAccount = ownerBankAccount;
    }
}
