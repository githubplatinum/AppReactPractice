import logo from './icons8-grinch-240.png';
import './App.css';
import SendBtnFunction from './BtnFunction.js';
import SendBtnClass from './BtnClass.js';
import FormLogin  from './FormLoginFunction';
import Cars from './Cars';
function App() {
  const carsL = {
    brand : 'Audi',
    model : 'A3',
    year: '2023'
  };

  const carsM = {
    brand : 'Mercedes',
    model : 'C',
    year: '2023'
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
          <div> 
             <SendBtnFunction />
              <SendBtnClass /> 
          </div>
        <div>     
          
            <FormLogin />
          </div>
          
        <div>
          <p>Cars List</p>
          <Cars car = {carsL}/>
          <Cars car = {carsM}/>
        </div>
      </header>
    </div>
  );
}

export default App;
