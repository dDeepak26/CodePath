import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="max-w-lg w-full">
        {/* close button */}
        <div className="flex justify-end pr-0 mr-0">
          <button onClick={onClose} className="text-white text-2xl">
            X
          </button>
        </div>
        {/* yt video */}
        <div>
          <iframe
            width="100%"
            height="315"
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
