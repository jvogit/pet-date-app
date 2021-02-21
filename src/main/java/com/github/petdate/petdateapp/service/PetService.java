package com.github.petdate.petdateapp.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.github.petdate.petdateapp.entity.pet.Pet;
import com.github.petdate.petdateapp.payload.IdPayload;
import com.github.petdate.petdateapp.payload.PetCreateMetadata;
import com.github.petdate.petdateapp.repository.PetRepository;
import com.google.common.io.Files;

@Service
public class PetService {
    
    @Autowired
    private UploadService uploadService;
    
    @Autowired
    private PetRepository petRepository;
    
    public Pet swipe(IdPayload pet) {
        Pet pet2 = petRepository.findById(pet.getId()).get();
        pet2.setSwipes(pet2.getSwipes() + 1);
        
        return petRepository.save(pet2);
    }
    
    public List<Pet> findAllByUser(Long user_id) {
        return petRepository.findAllByuserId(user_id);
    }
    
    public Optional<Pet> findById(Long id) {
        return petRepository.findById(id);
    }
    
    public Pet createPet(Long user_id, PetCreateMetadata metadata, MultipartFile file) throws IOException {
        String id = String.format("%s%s.%s", metadata.getName(), System.currentTimeMillis(), Files.getFileExtension(file.getOriginalFilename())).replaceAll("\\s+", "");
        String url = uploadService.upload(file.getBytes(), id);
        
        Pet pet = new Pet();
        
        pet.setUrl(url);
        pet.setUserId(user_id);
        pet.setDescription(metadata.getDescription());
        pet.setName(metadata.getName());
        
        return petRepository.save(pet);
    }
    
    public List<Pet> feed(Long user_id) {
        Long qty = petRepository.count() / 10;
        int idx = (int) (Math.random() * qty);
        
        return petRepository.findAllByuserIdNot(user_id, PageRequest.of(idx, 10)).getContent();
    }
    
}
