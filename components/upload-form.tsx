"use client"

import { uploadFile } from '@/lib/file';
import React, { useState, useTransition } from 'react'

const UploadForm = () => {
    const [file, setFile] = useState<File | undefined>();

    const handleFileChange = (e: any) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file!);
        
        uploadFile(formData);
        //console.log(formData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default UploadForm