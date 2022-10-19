import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header";
import {Earpods} from "./components/Earpods";
import {Navbar} from "./components/Navbar";
import {Basket} from "./components/Basket";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const items=[
    {
        img:"/Image.png",
        title:"Model1",
        price:1200,
        rate: 4.8
    },
    {
        img:"/Image1.png",
        title:"Model2",
        price:3500,
        rate: 4.8
    },
    {
        img:"/Image2.png",
        title:"Model3",
        price:2800,
        rate: 4.8
    }
]
const count=0;
function App() {
  return (
      <BrowserRouter>
    <div className="app-wrapper">
        <div>
            <Header items={items} count={count} />
        </div>
        <div>
            <Routes>
                <Route path="/earpods" element={<Earpods items ={items} count ={count}/>}  />
                <Route path ="/basket" element ={<Basket items ={items}/>}/>
            </Routes>

        </div>
        <div>
            <Navbar/>
        </div>

    </div>
      </BrowserRouter>
  );
}

export default App;
