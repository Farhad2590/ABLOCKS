const SortableItem = SortableElement(({ color, onEdit, onDuplicate, onDelete, isSelected, onSelect }) => {
    const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility
  
    return (
      <div
        className="kzui-color-item"
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
          borderBottom: '1px solid #ddd',
          backgroundColor: isSelected ? '#f0f0f0' : '#fff', // Highlight selected item
          cursor: 'pointer',
        }}
        onClick={() => onSelect(color.id)} // Handle item click to select
      >
  
          <span style={{flex:"1"}}>{color.name}</span>
  
        <div className="kzui-color-info" style={{ display: 'flex', flex:"1",  alignItems: 'center' }}>
  
             {/* Color Box */}
             <div
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: color.value,
              marginRight: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          ></div>
  
          <span style={{ marginLeft: '10px', color: '#666' }}>{color.value}</span>
        </div>
        </div>
      </div>
    );
  });