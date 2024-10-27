import React from 'react';
import './Video.css'; 

const Video = () => {
  const videos = [
    "https://baroque.pk/cdn/shop/videos/c/vp/2f6ff9fc9b5145ee9bb35433a8694e75/2f6ff9fc9b5145ee9bb35433a8694e75.HD-1080p-7.2Mbps-36191305.mp4?v=0",
    "https://baroque.pk/cdn/shop/videos/c/vp/c441bbf6e33e41228b44405295794153/c441bbf6e33e41228b44405295794153.HD-1080p-7.2Mbps-36191877.mp4?v=0",
    "https://baroque.pk/cdn/shop/videos/c/vp/6f70f2bb7add48fca2341ed30c02a82c/6f70f2bb7add48fca2341ed30c02a82c.HD-1080p-7.2Mbps-36191306.mp4?v=0"
  ];

  return (
    <div className="video-section">
      <h2>Be Inspired by Our Latest Collections</h2>
      <div className="video-container">
        {videos.map((video, index) => (
          <div className="video-wrapper" key={index}>
            <video width="100%" controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
