import { useState } from 'react';
import { SortableElement } from 'react-sortable-hoc';
import './SortableItem.css';

const SortableItem = SortableElement(({ item, onEdit, onDuplicate, onDelete }) => {
    const [options, setOptions] = useState(false);
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(prevShowMenu => !prevShowMenu);
    };

    return (
        <div
            className="kzui-sortable-item"
            onMouseEnter={() => setOptions(true)}
            onMouseLeave={() => {
                setOptions(false);
                setMenu(false);
            }}
        >
            <div className="kzui-sortable-item__title-container">
                <span className="kzui-sortable-item__title">{item.title}</span>
            </div>

            <div className="kzui-sortable-item__color-container">
                <span
                    className="kzui-sortable-item__color-box"
                    style={{ backgroundColor: item.color }}
                ></span>
                <span className="kzui-sortable-item__color">{item.color}</span>
            </div>

            {options && (
                <button
                    className="kzui-sortable-item__more-options-button"
                    onClick={toggleMenu}
                >
                    ...
                </button>
            )}

            {menu && (
                <div className="kzui-sortable-item__options-menu">
                    <button onClick={() => onEdit(item.id)}>Edit</button>
                    <button onClick={() => onDuplicate(item.id)}>Duplicate</button>
                    <button onClick={() => onDelete(item.id)}>Delete</button>
                </div>
            )}
        </div>
    );
});

export default SortableItem;
