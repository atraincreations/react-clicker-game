import { useState } from 'react';
import './App.css';
import Mine from './Mine';
import Craft from './Craft';
import Shop from './Shop';
import Stats from './Stats';

function App() {
  const [active, setActive] = useState("");


  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"></link>
      <div class="container py-5">
        <div class="row mb-4">
          <div class="col-lg-8 mx-auto text-center">
            <h1 class="display-6">Mining Auto Clicker</h1>
          </div>
        </div>
        <Stats />
        <div class="row">
          <div class="col-lg-6 mx-auto">
            <div class="card ">
              <div class="card-header">
                <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2 pill-box">
                  <ul role="tablist" class="nav bg-light nav-pills rounded nav-fill mb-3">
                    <li class="nav-item"> <a data-toggle="pill" role="tab" href="#mine" class="nav-link active " onClick={() => setActive("Mine")}> Mine </a> </li>
                    <li class="nav-item"> <a data-toggle="pill" role="tab" href="#craft" class="nav-link " onClick={() => setActive("Craft")}> Craft </a> </li>
                    <li class="nav-item"> <a data-toggle="pill" role="tab" href="#shop" class="nav-link " onClick={() => setActive("Shop")}> Shop </a> </li>
                  </ul>
                </div>
              </div>
              <div class="tab-content"></div>
                {active === "Mine" && <Mine />}
                {active === "Craft" && <Craft />}
                {active === "Shop" && <Shop />}
              </div>
            </div>
          </div>
        </div>

      
      

    </div>
  );
}

export default App;
