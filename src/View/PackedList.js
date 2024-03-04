function PackedList({item, onChecked, onDelete}) {

  return (
    <>
      <li key={item.id}>
        <input type='checkbox' className='actions button'
               onChange={(e) => onChecked(item.id)}/>
        <div className={item.checked ? "checked" : ''}>{item.quantity} {item.description}</div>
        <button onClick={() => onDelete(item.id)}>❌</button>
      </li>
    </>
  );
}

export default PackedList