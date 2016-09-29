package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions;

/**
 * Created by vostap on 23.08.2014.
 */
public class TransactionException extends StorageException {
    public TransactionException() {
    }

    public TransactionException(String message) {
        super(message);
    }

    public TransactionException(String message, Throwable cause) {
        super(message, cause);
    }

    public TransactionException(Throwable cause) {
        super(cause);
    }

    public TransactionException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
