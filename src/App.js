import './App.css';
import ColorPicker from './components/colorPicker.js';

const App = () => {
  const colors_list = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray', 'cyan', 'magenta', 'black', 'white', 'silver', 'gold']
  ;

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <ColorPicker colors={colors_list}/>
    </div>
  );
}

export default App;
