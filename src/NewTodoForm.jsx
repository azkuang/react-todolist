import { useState } from 'react';

export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      if (newItem === "") return

      onSubmit(newItem);
  
      setNewItem("");
    }

    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
            <div className="form-row">
            <label>New Item</label>
            <input 
                value={newItem} 
                type="text" 
                id="item" 
                onChange={e => setNewItem(e.target.value)} 
                />
            </div>
            <button className="btn">Add</button>
        </form>
    )
}