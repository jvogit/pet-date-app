package com.github.petdate.petdateapp.service;

import java.io.IOException;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.github.petdate.petdateapp.entity.pet.Pet;
import com.github.petdate.petdateapp.payload.PetCreateMetadata;
import com.github.petdate.petdateapp.repository.PetRepository;
import com.google.common.io.Files;

@Service
public class PetService {
    
    @Autowired
    private UploadService uploadService;
    
    @Autowired
    private PetRepository petRepository;
    
    public Optional<Pet> findById(Long id) {
        return petRepository.findById(id);
    }
    
    public Pet createPet(Long user_id, PetCreateMetadata metadata, MultipartFile file) throws IOException {
        String id = String.format("%s%s.%s", metadata.getName(), System.currentTimeMillis(), Files.getFileExtension(file.getOriginalFilename()));
        String url = uploadService.upload(file.getBytes(), id);
        
        Pet pet = new Pet();
        
        pet.setUrl(url);
        pet.setUser_id(user_id);
        pet.setDescription(metadata.getDescription());
        pet.setName(metadata.getName());
        
        return petRepository.save(pet);
    }
    
}
