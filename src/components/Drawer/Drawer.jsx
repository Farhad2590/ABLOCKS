import './Drawer.css';

const Drawer = ({ isOpen, onClose, title, color, onTitleChange, onColorChange, onSave }) => {
    return (
        <div className={`kzui-drawer ${isOpen ? 'kzui-drawer--open' : ''}`}>
            <div className="kzui-drawer__body">
                <h3 className="kzui-drawer__title">Name</h3>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => onTitleChange(e.target.value)}
                    className='kzui-drawer__input '
                />
                {/* <div className=''></div> */}
                <h3 className="kzui-drawer__title kzui-drawer__border">Value</h3>
                <label>Color:</label>
                <input
                    type="color"
                    value={color}
                    onChange={(e) => onColorChange(e.target.value)}
                />
            </div>
            <div className="kzui-drawer__buttons">
                <button className="kzui-drawer__button kzui-drawer__button--save" onClick={onSave}>Save</button>
                <button className="kzui-drawer__button kzui-drawer__button--cancel" onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default Drawer;
