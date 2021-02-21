package com.github.petdate.petdateapp.entity.pet;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.github.petdate.petdateapp.entity.account.User;
import com.github.petdate.petdateapp.entity.audit.DateAudit;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "pets")
@Getter
@Setter
@JsonInclude(Include.NON_NULL)
public class Pet extends DateAudit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank
    private String name;
    
    @NotBlank
    private String description;
    
    @NotBlank
    private String url;
    
    private Integer swipes = 0;
    
    private Long userId;
    
    @ManyToOne
    @JoinColumn(name = "userId", insertable = false, updatable = false)
    @JsonManagedReference
    private User user;
    
}
