import { useState } from 'react';
import './ArrayComponent.css';
import SortableList from '../SortableList/SortableList';
import Drawer from '../Drawer/Drawer';
import Modal from '../Modal/Modal';
import { arrayMoveImmutable } from 'array-move';
import img from '../../assets/add.png'

const initialItems = [
  { id: 1, title: 'Primary', color: '#FF5733' },
  { id: 2, title: 'Secondary', color: '#33FF57' },
  { id: 3, title: 'Title Text', color: '#3357FF' },
  { id: 4, title: 'Supporting Text', color: '#FF33A1' },
];

const ArrayComponent = () => {
  const [items, setItems] = useState(initialItems);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newItem, setNewItem] = useState({ id: '', title: '', color: 'black' });
  const [editItem, setEditItem] = useState(null);

  const onSortItemEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMoveImmutable(items, oldIndex, newIndex));
  };

  const handleEdit = (id) => {
    const item = items.find((item) => item.id === id);
    setEditItem(item);
    setIsDrawerOpen(true);
  };

  const handleDuplicateItem = (id) => {
    const itemToDuplicate = items.find((item) => item.id === id);
    const newItem = {
      ...itemToDuplicate,
      id: items.length + 1,
      title: `${itemToDuplicate.title} (Copy)`,
    };
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleTitleChange = (newTitle) => {
    setEditItem((prev) => ({ ...prev, title: newTitle }));
  };

  const handleColorChange = (newColor) => {
    setEditItem((prev) => ({ ...prev, color: newColor }));
  };

  const handleSave = () => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === editItem.id ? { ...item, title: editItem.title, color: editItem.color } : item
      )
    );
    setIsDrawerOpen(false);
  };

  const handleAddNewItemClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleNewItemSubmit = () => {
    setItems([...items, { ...newItem, id: items.length + 1 }]);
    setNewItem({ id: '', title: '', color: '#ffffff' });
    setIsModalOpen(false);
  };

  return (
    <div className="kzui-main-component">
      
      <SortableList
        items={items}
        onSortItemEnd={onSortItemEnd}
        onEdit={handleEdit}
        onDuplicate={handleDuplicateItem}
        onDelete={handleDeleteItem}
      />

      <Drawer
        isOpen={isDrawerOpen}
        onClose={handleDrawerClose}
        title={editItem ? editItem.title : ''}
        color={editItem ? editItem.color : '#ffffff'}
        onTitleChange={handleTitleChange}
        onColorChange={handleColorChange}
        onSave={handleSave}
      />

      <button className="kzui-main-component__add-item-button" onClick={handleAddNewItemClick}>
        <img src={img} /> Add Color
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleNewItemSubmit}
        id={newItem.id}
        title={newItem.title}
        color={newItem.color}
        onIdChange={(newId) => setNewItem((prev) => ({ ...prev, id: newId }))}
        onTitleChange={(newTitle) => setNewItem((prev) => ({ ...prev, title: newTitle }))}
        onColorChange={(newColor) => setNewItem((prev) => ({ ...prev, color: newColor }))}
      />
    </div>
  );
};

export default ArrayComponent;
