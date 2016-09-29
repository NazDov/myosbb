package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

/**
 * Created by vstoian on 24.11.2014.
 */
public class OwnerBankAccount extends ComboBoxItem{
    private Long id;
    private OwnerAccount ownerAccount;
    private Bank bank;
    private String ownerBankAccount;

    public OwnerBankAccount(){
        this.ownerAccount = new OwnerAccount();
        this.bank = new Bank();
    }

    public OwnerBankAccount(Long id) {
        this();
        this.id = id;
    }

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

    @Override
    public String toString() {
        return "OwnerBankAccount{" +
                "id=" + id +
                ", owner=" + ownerAccount +
                ", bank='" + bank + '\'' +
                ", ownerBankAccount='" + ownerBankAccount + '\'' +
                '}';
    }
}
