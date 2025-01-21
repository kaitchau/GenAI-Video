import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import '../stylesheets/VideoEditor.css';

const VideoEditor: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [timelineElements, setTimelineElements] = useState<any[]>([]);

  useEffect(() => {
    gsap.fromTo(videoRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });
    gsap.fromTo(timelineRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });
  }, []);

  const handleAddElement = (type: string) => {
    const newElement = { type, id: Date.now() };
    setTimelineElements([...timelineElements, newElement]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-8">
      <div className="flex flex-col items-center">
        <div className="video-container mb-4">
          <video ref={videoRef} controls className="w-full max-w-3xl">
            <source src="your-video-file.mp4" type="video/mp4" />
          </video>
        </div>
        <div ref={timelineRef} className="timeline flex overflow-x-scroll w-full max-w-3xl h-24 border border-gray-600 mb-4">
          {timelineElements.map((element) => (
            <div key={element.id} className={`timeline-element ${element.type} flex items-center justify-center w-24 h-full bg-gray-700 border border-gray-600 mr-2`}>
              {element.type}
            </div>
          ))}
        </div>
        <div className="controls flex gap-2">
          <button onClick={() => handleAddElement('clip')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Clip</button>
          <button onClick={() => handleAddElement('audio')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add Audio</button>
          <button onClick={() => handleAddElement('transition')} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Add Transition</button>
          <button onClick={() => handleAddElement('effect')} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Add Effect</button>
        </div>
      </div>
    </div>
  );
};

export default VideoEditor;