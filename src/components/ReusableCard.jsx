import { useState, useEffect } from "react";

export default function ReusableCard({
  imageSrc,
  title,
  description,
  modalContent,
  colSpan = "col-span-1",
  rowSpan = "row-span-1",
  disableModal = false, // New parameter to disable modal
  link = "#", // Link to open when modal is disabled
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const closeModal = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setIsExiting(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsExiting(false);
      }, 300); // match the animation duration
    }
  };

  useEffect(() => {
    if (!isModalOpen) {
      setIsExiting(false); // Reset exit animation state when modal is closed
    }
  }, [isModalOpen]);

  const handleClick = () => {
    if (disableModal) {
      window.open(link, "_blank"); // Open the link in a new tab
    } else {
      toggleModal(); // Open modal if not disabled
    }
  };

  return (
    <div className={`${colSpan} ${rowSpan}`}>
      {/* Clickable Card */}
      <div
        className="grid-container cursor-pointer transform transition-transform duration-300 hover:scale-105"
        onClick={handleClick} // Handle click for both modal and link
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-full sm:h-[276px] h-fit object-contain"
        />
        <div>
          <p className="grid-headtext">{title}</p>
          <p className="grid-subtext">{description}</p>
        </div>
      </div>

      {/* Modal */}
      {!disableModal && isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 modal-overlay"
          onClick={closeModal} // Close modal if background is clicked
        >
          <div
            className={`bg-black text-white-600 rounded-2xl p-8 w-[80%] max-w-4xl h-[70%] shadow-lg relative 
            ${isExiting ? "animate-modal-exit" : "animate-modal-enter"}`}
          >
            {/* Modal Content */}
            <h2 className="text-xl font-bold mb-6">{title}</h2>
            <div className="mb-6">{modalContent}</div>

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => {
                setIsExiting(true);
                setTimeout(() => setIsModalOpen(false), 300); // match the animation duration
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
