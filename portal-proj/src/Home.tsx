import React, { useState, useEffect } from "react";

interface UploadedFile {
  name: string;
  dateUploaded: string;
  url: string;
}

const Home: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  // Mock data fetch for demonstration
  useEffect(() => {
    setUploadedFiles([
      { 
        name: "example1.txt", 
        dateUploaded: "2024-11-22 10:30 AM", 
        url: "/mock-path/example1.txt" 
      },
      { 
        name: "example2.txt", 
        dateUploaded: "2024-11-22 11:00 AM", 
        url: "/mock-path/example2.txt" 
      },
    ]);
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {uploadedFiles.length > 0 ? (
        <div className="file-list">
          {uploadedFiles.map((file, index) => (
            <div key={index} className="file-card">
              <p>
                <strong>Name:</strong> {file.name}
              </p>
              <p>
                <strong>Uploaded On:</strong> {file.dateUploaded}
              </p>
              <a 
                href={file.url} 
                download 
                className="download-button"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>No files uploaded yet.</p>
      )}
    </div>
  );
};

export default Home;
