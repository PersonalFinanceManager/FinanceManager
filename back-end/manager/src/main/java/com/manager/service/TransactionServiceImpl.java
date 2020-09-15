package com.manager.service;

import com.manager.dataObject.Transaction;
import com.manager.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    TransactionRepository transactionRepository;


    @Override
    public List<Transaction> findAll() {
        return transactionRepository.findAll();
    }
}
