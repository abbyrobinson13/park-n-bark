import React, { useRef, useState } from "react";


const AI = () => {
  const imageRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  const startModel = async () => {
    setIsLoading(true);

    const ml5 = await import('ml5')
    const classifier = await ml5.imageClassifier("MobileNet");
    const results = await classifier.classify(imageRef.current);
    setResults(results);

    setIsLoading(false);
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    setImageUrl(fileUrl);
  };

  return (
    <div id='ai-container'>
      <div>
        <span>Upload dog image here!</span>
      </div>
      <input type='file' onChange={onFileChange} />
      {imageUrl && (
        <img ref={imageRef} src={imageUrl} id='ai-image' alt='Preview' />
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
            {results.map((result) => (
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
