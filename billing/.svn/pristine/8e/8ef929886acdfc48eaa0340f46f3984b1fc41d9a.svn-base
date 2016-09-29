package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents;


import com.sun.istack.NotNull;

import java.util.Date;

/**
 * Created by vostap on 11/17/2015.
 */
public abstract class CounterDocuments implements Comparable<CounterDocuments> {
    private Long id;
    @NotNull
    private Date documentDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDocumentDate() {
        return documentDate;
    }

    public void setDocumentDate(Date documentDate) {
        this.documentDate = documentDate;
    }

    @Override
    public int compareTo(CounterDocuments o) {
        return this.documentDate.compareTo(o.getDocumentDate());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CounterDocuments that = (CounterDocuments) o;
        if (documentDate != null ? !documentDate.equals(that.documentDate) : that.documentDate != null) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (documentDate != null ? documentDate.hashCode() : 0);
        return result;
    }
}
