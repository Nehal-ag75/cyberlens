// frontend/src/pages/upload.tsx
import React, { useState } from "react";
import EvidenceUploader from "../components/EvidenceUploader";

export default function UploadPage() {
  const [uploaded, setUploaded] = useState<any | null>(null);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Upload Evidence</h1>
      <EvidenceUploader onUploaded={(res) => setUploaded(res)} />
      {uploaded && (
        <div className="mt-6 p-4 border rounded">
          <h2 className="font-semibold">Uploaded file</h2>
          <div className="text-sm">Filename: {uploaded.filename}</div>
          <div className="text-sm">SHA256: {uploaded.sha256}</div>
          <div className="text-sm">File ID: {uploaded.file_id}</div>
        </div>
      )}
    </div>
  );
}

