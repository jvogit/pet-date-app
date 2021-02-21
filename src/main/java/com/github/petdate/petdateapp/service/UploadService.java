package com.github.petdate.petdateapp.service;

import org.springframework.stereotype.Service;
import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;

@Service
public class UploadService {
    
    private String PROJECT = "petdate-305510";
    private String BUCKET = "petdate_pet_images";
    
    public String upload(byte[] img, String id) {
        System.out.println(System.getenv("GOOGLE_APPLICATION_CREDENTIALS"));
        Storage storage = StorageOptions.newBuilder()
                .setProjectId(PROJECT)
                .build()
                .getService();
        BlobId blobId = BlobId.of(BUCKET, id);
        BlobInfo blobInfo = BlobInfo.newBuilder(blobId).build();
        storage.create(blobInfo, img);
        
        return String.format("https://storage.googleapis.com/%s/%s", BUCKET, id);
    }
    
}
