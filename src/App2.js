import 'bootstrap/dist/css/bootstrap.min.css'
import {accordionData} from './data/AccordionData';
import {useState} from "react";

function App() {
  const [data, setData] = useState(accordionData);

  function handleToggle(id) {
    setData(data =>
         data.map(accordion =>
              accordion.id === id
                ? {...accordion, isOpen: !accordion.isOpen }
                : {...accordion, isOpen: false }
    ));
  }
  return (
       <div className='accordion'>
         {data.map(accordion =>
              <Accordion key={accordion.id} accordion={accordion} onToggle={handleToggle} />
         )}
       </div>
  );
}
function Accordion({accordion, onToggle}) {

  return (
       <div key={accordion.id} className="accordion-item">
         <h2 className="accordion-header"
             >
           <button className="accordion-button collapsed fs-2"
                   style={accordion.isOpen ? { backgroundColor: "green", color:'white' }: {}}
                   data-id={accordion.id}
                   onClick={() => onToggle(accordion.id)}>
             {accordion.title}
           </button>
         </h2>
         {accordion.isOpen &&
            <div id={accordion.id} className="fs-4 text-bg-light text-info">
              <div className="accordion-body" dangerouslySetInnerHTML={{__html: accordion.body}}>
              </div>
            </div>
         }
       </div>
  )
}

export default App;
