import Header from "./View/Header";
import PackedList from "./View/PackedList";
import Footer from "./View/Footer";
import AddItem from "./View/AddItem";
import {useState} from "react";
import Actions from "./View/Actions";

function App() {
  const [items, setItems] = useState([]);
  const [sorted, setSorted] = useState('input');

  const handleChecked = (id) =>
    setItems(items =>
      items.map(item =>
        item.id === id ? {...item, checked: !item.checked} : item ));

  const handleDelete = (id) =>
    setItems(items => items.filter(item => item.id !== id))

  const handleClear = () => {
    const ok = window.confirm('진짜로 지우게요?');
    if(ok) setItems([])
  }

  let sortedItems;
  if (sorted === '') sortedItems = items
  if (sorted === 'input') sortedItems = items
  if (sorted === 'description')
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))
  if (sorted === 'packed')
    sortedItems = items.slice().sort((a, b) => +b.checked - +a.checked)

    return (
      <div className='app'>
        <Header/>
        <AddItem setItems={setItems}/>
        <div className='list'>
          <ul>
            {sortedItems.map(item =>
              <PackedList key={item.id} item={item} onChecked={handleChecked} onDelete={handleDelete}/>)}
          </ul>
          <Actions onDelete={handleClear} sorted={sorted} setSorted={setSorted}/>
        </div>
        <Footer items={items}/>
      </div>
    );
  }

  export default App;
