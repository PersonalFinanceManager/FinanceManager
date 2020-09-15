package com.manager.service;

import com.manager.dataObject.Transaction;

import java.util.List;

public interface TransactionService  {
    public List<Transaction> findAll();
}
