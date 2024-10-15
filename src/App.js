import logo from './logo.svg';
import './App.css';
import FormPage from './FormPage';
import FileUpload from './FileUpload';
import MapWithLocationPicker from './MapWithLocationPicker ';
import DrawingToolsMap from './components/DrawingToolsMap';
import Time from './Time';
import TimePicker1 from './components/TimePicker1';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <FormPage /> */}
      {/* <FileUpload /> */}

      {/* <MapWithLocationPicker /> */}
      {/* <DrawingToolsMap /> */}
      {/* <Time /> */}
      <TimePicker1 />
    </div>
  );
}

export default App;
