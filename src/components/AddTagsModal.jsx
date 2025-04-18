import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const AddTagsModal = ({ tags, addTag, deleteTag, addTaskTag, closeModal }) => {
  const [newTagName, setNewTagName] = useState("");

  const getRandomPastelColor = () => {
    const hue = Math.floor(Math.random() * 360); // any hue
    return `hsl(${hue}, 70%, 85%)`; // pastel tone
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (!newTagName.trim()) return; // Prevent adding empty tags
    let color = getRandomPastelColor();
    const newTag = {
      name: newTagName,
      color: color,
    };
    addTag(newTag);
    setNewTagName(""); // Clear input field after adding
  };

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // prevent backdrop close
      >
        <button className="close-tag-modal-button" onClick={closeModal}>
          &times;
        </button>
        <h2 className="modal-title">Manage Tags</h2>

        <div className="tag-list">
          {tags.length > 0 ? (
            tags.map((tag, i) => (
              <span
                key={i}
                className="tag"
                style={{
                  backgroundColor: tag.color,
                }}
                // Need to handle this a better way than having the onclick apply to the whole span because there is also the garbage icon
                onClick={(e) => {
                  e.preventDefault();
                  addTaskTag(tag);
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                {tag.name}
                <button
                  className="delete-tag-button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation(); // prevent tag click event from firing
                    deleteTag(tag);
                  }}
                >
                  <FaTrashAlt className="delete-tag-icon" />
                </button>
              </span>
            ))
          ) : (
            <p>No tags yet. Add some below!</p>
          )}
        </div>

        <div className="new-tag-section">
          <input
            type="text"
            placeholder="New tag name"
            value={newTagName}
            onChange={(e) => setNewTagName(e.target.value)}
            className="new-tag-input"
          />
          <button className="add-tag-button" onClick={handleAddTag}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTagsModal;
