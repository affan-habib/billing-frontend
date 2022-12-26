import { Button, Dialog, Input } from "@mui/material";
import React, { useState } from "react";
import Bugs from "./Bugs";

export default function File() {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
        uploadImage(reader.result);
      };
      reader.onerror = () => {
        console.error("AHHHHHHHH!!");
        setErrMsg("something went wrong!");
      };
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      console.error("AHHHHHHHH!!");
      setErrMsg("something went wrong!");
    };
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      await fetch("https://billing-server.vercel.app/api/upload", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { "Content-Type": "application/json" },
      });
      setFileInputState("");
      setPreviewSource("");
      setSuccessMsg("Image uploaded successfully");
    } catch (err) {
      console.error(err);
      setErrMsg("Something went wrong!");
    }
  };
  return (
    <div>
      <Dialog>
        <Bugs />
      </Dialog>
      <h1 className="title">Upload Bugs</h1>
      <Input
        id="fileInput"
        type="file"
        name="image"
        onChange={handleFileInputChange}
        value={fileInputState}
        className="form-input"
      />

      {previewSource && (
        <img src={previewSource} alt="chosen" style={{ height: "100px" }} />
      )}
    </div>
  );
}
