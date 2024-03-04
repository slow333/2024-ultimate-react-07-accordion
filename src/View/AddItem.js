import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

function AddItem({ setItems }) {

  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

    const numList = Array.from({length: 10},
    (_, index) => index);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const newItems = { quantity, description, id: uuidv4(), checked: false}
    setItems(items => [...items, newItems]);
    setDescription('');
    setQuantity('1');
  }

  return (
    <div className='add-form'>
      <h3>여행에 필요한 건 ?</h3>
      <form className='add-form' onSubmit={handleSubmit}>
        <select value={quantity}
          onChange={e=> setQuantity(e.target.value)} >
          <option value='0'>선택하세요</option>
          {numList.map(num =>
            <option key={num} value={num + 1}>{num + 1}</option>)}
        </select>
        <input type='text'
               onChange={e=> setDescription(e.target.value)}
               value={description} />
        <button type='submit'>ADD</button>
      </form>
    </div>
  );
}

export default AddItem