package com.manager.VO;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class TransactionInfoVO {

    private String key;
    private String item;
    private String expense;
    private String date;
    private String classification;

}
