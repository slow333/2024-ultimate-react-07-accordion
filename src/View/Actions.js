function Actions({onDelete, sorted, setSorted}) {

  return (
    <div className='actions'>
      <select onChange={(ev) => setSorted(ev.target.value)}
      value={sorted}>
        <option value=''>정렬 선택</option>
        <option value='input'>by input order</option>
        <option value='description'>by description</option>
        <option value='packed'>by packed</option>
      </select>
      <button onClick={onDelete}>Clear List</button>
    </div>
  );
}

export default Actions