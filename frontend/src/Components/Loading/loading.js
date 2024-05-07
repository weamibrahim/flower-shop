// LoadingComponent.js
//import img from '../../../public/images/loading.gif';
import React from 'react';
import './loading.css'; // Import CSS file with loading animation

const Loading = () => {
  return (
    <div className="loading-container  d-flex align-items-center justify-content-center ">
       
      <div  >
        <img src="images/loading.gif" alt="Loading..."/>
       
      </div>

    </div>
  );
};

export default Loading;
