package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

/**
 * Created by vostap on 09.09.2014.
 */
public class Authorization {
    private Long id;
    private String userName;
    private String userPassword;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


}
