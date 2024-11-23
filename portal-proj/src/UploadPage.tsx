import React, { useState } from "react";

interface UploadedFile {
  name: string;
  dateUploaded: string;
  url: string;
}

const UploadPage: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newFile: UploadedFile = {
        name: file.name,
        dateUploaded: new Date().toLocaleString(),
        url: `/uploads/${file.name}`, // Simulated upload path
      };
      setUploadedFiles((prev) => [...prev, newFile]);
      alert(`File ${file.name} uploaded successfully!`);
    }
  };

  return (
    <div>
      <h1>Upload Page</h1>
      <label htmlFor="fileUpload" className="upload-button">
        Upload File
      </label>
      <input
        id="fileUpload"
        type="file"
        onChange={handleFileUpload}
        style={{ display: "none" }}
      />
      {uploadedFiles.length > 0 && (
        <div className="uploaded-files">
          <h2>Uploaded Files</h2>
          {uploadedFiles.map((file, index) => (
            <div key={index} className="file-card">
              <p>
                <strong>Name:</strong> {file.name}
              </p>
              <p>
                <strong>Uploaded On:</strong> {file.dateUploaded}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadPage;
