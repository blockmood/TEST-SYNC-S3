import { Link } from "react-router-dom";
import { useEffect, useRef } from 'react'
import _ from 'lodash'

function App() {

  const hooksRef = useRef({
    mousedown2: false,
    mousemove2: false,
    value: ''
  })

  useEffect(() => {

    const { mousedown2, mousemove2, value} = hooksRef.current

    document.addEventListener('mousedown', () => {
      mousedown2 = true;
    });

    document.addEventListener('mousemove', () => {
      if(mousedown2){
        mousemove2 = true;
        value = window.getSelection().toString();
      }
    });

    document.addEventListener("mouseup", function(event) {
      if(mousedown2 && value){
        fetchJson(value)
      }
      mousedown2 = false;
      mousemove2 = false;
      value = ''
    });
  }, [])



  const fetchJson = async (value) => {
     const response = await (await fetch('https://img.dsers.com/product_langs/dev_content/master/EN.json')).json()
     const matchingKeys = _.keys(_.pickBy(response, (v) => v.includes(value)));
     console.log(matchingKeys)

  }


  return (
    <div className="App">
      test
      <Link to="about">And the price's change exceeds</Link>
    </div>
  );
}

export default App;
