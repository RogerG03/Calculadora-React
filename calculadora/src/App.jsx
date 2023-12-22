import './App.css';
import BoxText from './components/BoxText';
import BoxNumber from './components/BoxNumber';

import AppContext from './context/AppContext';

function App() {
  return (
  <>  
      <AppContext>
        <div className="luces"></div>
        
        <div className="MainContainer">
        
          <BoxText></BoxText>

          <BoxNumber></BoxNumber>
        </div>
      </AppContext>
  </>
 );

}


export default App;
