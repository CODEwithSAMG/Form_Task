import React, { useState } from "react";

const App = () => {
  const [image, setImage] = useState();

  const handleImgChange = (e) => {
    setImage(e.target.files[0])
  };

  return (
    <div>
      <h3>Hello World</h3>
      <input
        type="file"
        onChange={handleImgChange}
      />
      {
        image && <img
          width={100}
          height={100}
          src={URL.createObjectURL(image)}
        />
      }
    </div>
  );
};

export default App;
