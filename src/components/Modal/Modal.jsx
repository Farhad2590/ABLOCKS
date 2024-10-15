import './Modal.css';

const Modal = ({ isOpen, onClose, onSubmit, id, title, color, onIdChange, onTitleChange, onColorChange }) => {
  if (!isOpen) return null;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="kzui-modal__overlay">
      <div className="kzui-modal__container">
        <h2 className="kzui-modal__title">Add New Color</h2>
        <form className="kzui-modal__form" onSubmit={handleFormSubmit}>
          <label className="kzui-modal__label">ID:</label>
          <input 
            className="kzui-modal__input" 
            type="number" 
            value={id} 
            onChange={(e) => onIdChange(e.target.value)} 
            required 
          />
          
          <label className="kzui-modal__label">Title:</label>
          <input 
            className="kzui-modal__input" 
            type="text" 
            value={title} 
            onChange={(e) => onTitleChange(e.target.value)} 
            required 
          />
          
          <label className="kzui-modal__label">Color:</label>
          <input 
            className="kzui-modal__input kzui-modal__input--color" 
            type="color" 
            value={color} 
            onChange={(e) => onColorChange(e.target.value)} 
          />

          <div className="kzui-modal__actions">
            <button className="kzui-modal__button kzui-modal__button--submit" type="submit">Add</button>
            <button className="kzui-modal__button kzui-modal__button--cancel" type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
