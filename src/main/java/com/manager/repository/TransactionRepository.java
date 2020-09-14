package com.manager.repository;

import com.manager.dataObject.Transaction;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TransactionRepository extends MongoRepository<Transaction, Long> {

    public List<Transaction> findAll();

}
