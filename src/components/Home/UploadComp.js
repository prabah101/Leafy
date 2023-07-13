import React from 'react'
import Navbar from "../Navbar/Navbar";
import './UploadComp.css'
import { useRef, useState } from 'react'

import potato from '../images/potato.jpg'
import bellPepper from "../images/pepper.jpg"
import tomato from "../images/tomato.jpg"
import apple from "../images/apple.jpg"
import grape from "../images/grape.jpg"
import corn from "../images/corn.jpg"



const UploadComp = (props) => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [gotResult, setGotResult] = useState(false);
    const [confidence, setConfidence] = useState();
    const [diseaseGot, setDiseaseGot] = useState();
   const handleFileChange = (e) => {
      setSelectedFile(e.target.files[0]);
   };

   const handleUpload = async () => {
      if (!selectedFile) {
         alert("Please first select a file");
         return;
      }

      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
         // Replace this URL with your server-side endpoint for handling file uploads
         fetch(`https://plant-disease-classification-1rzh.onrender.com/predict/${props.cropName}`, {
            method: "POST",
            body: formData
         })
         .then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
                setGotResult(true)
                setConfidence(result.confidence)
                setDiseaseGot(result.class)
			})
			.catch((error) => {
				console.error('Error:', error);
			});

        //  if (response.ok) {
        //     alert("File upload is  successfully");
        //     console.log(response.text())
        //  } else {
        //     alert("Failed to upload the file due to errors");
        //  }
      } catch (error) {
         console.error("Error while uploading the file:", error);
         alert("Error occurred while uploading the file");
      }
   };

   return (
      <div className='uploadComp-body'>

      {gotResult ? (
				<div>
               <h2>Result</h2>
					<p>Disease Name: {diseaseGot}</p>
					<p>Confidence: {confidence}%</p>
				</div>
			) : (
                <div>
                  <h2>Upload File</h2>
                  
                     
                     <div className='input'>
                        <input type="file" onChange={handleFileChange} />
                     </div>
                     <div className='upload-button'>
                        <button className='upload-btn' onClick={handleUpload}>Predict</button>
                     </div>
                  
                  
                </div>
                
			)}
      </div>
    
   );

}

export default UploadComp