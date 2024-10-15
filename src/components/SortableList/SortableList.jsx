
import { SortableContainer } from 'react-sortable-hoc';
import SortableItem from '../SortableItem/SortableItem';

const SortableList = SortableContainer(({ items, onEdit, onDuplicate, onDelete }) => {
    return (
        <div className="sortable-list">
            {items.map((item, index) => (
                <SortableItem 
                    key={`item-${item.id}`} 
                    index={index} 
                    item={item} 
                    onEdit={onEdit}
                    onDuplicate={onDuplicate}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
});

export default SortableList;
