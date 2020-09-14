package com.manager.dataObject;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Transaction {
    private String key;
    private String item;
    private String expense;
    private String date;
    private String classification;

    public Transaction(String key, String item, String expense, String date, String classification) {
        this.key = key;
        this.item = item;
        this.expense = expense;
        this.date = date;
        this.classification = classification;
    }
}
