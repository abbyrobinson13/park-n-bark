import React, { useRef, useState } from "react";
import { drawImage } from "canvas-object-fit";

const AI = () => {
  const imageRef = useRef(null);
  const canvRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  const startModel = async () => {
    setIsLoading(true);
    await drawCanvas();
    const ml5 = await import("ml5");
    const classifier = await ml5.imageClassifier("./models/model.json");
    const results = await classifier.classify(canvRef.current);
    console.log("full results:", results);
    setResults(results);

    setIsLoading(false);
  };

  const drawCanvas = async () => {
    const canvas = canvRef.current;
    const ctx = canvas.getContext("2d");
    const grayImage = new Image();
    grayImage.src = imageRef.current.src;

    canvas.height = 400;
    canvas.width = 400;
    // ctx.filter = 'grayscale(1)';
    drawImage(ctx, grayImage, 0, 0, canvas.height, canvas.width, {
      objectFit: "cover",
    });
  };

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    setImageUrl(fileUrl);
  };

  return (
    <div id="ai-container">
      <div>
        <span>Upload dog image here to check breed!</span>
      </div>
      <input type="file" onChange={onFileChange} />
      {imageUrl && (
        <div id="ai-image-holder">
          <img
            ref={imageRef}
            src={imageUrl}
            id="ai-image"
            alt="Preview"
            width="400px"
            height="400px"
          />
          <canvas ref={canvRef} />
        </div>
      )}
      {imageUrl && <button onClick={startModel}>Start</button>}
      {isLoading && <div>Loading...</div>}

      {results.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Label</th>
              <th>Confidence</th>
            </tr>
          </thead>
          <tbody>
            {results.slice(0, 3).map((result) => (
              <tr>
                <td>{result.label}</td>
                <td>{(result.confidence * 100).toFixed(1)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AI;
