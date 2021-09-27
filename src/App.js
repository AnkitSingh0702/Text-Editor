import './App.css';
import Texteditor from './texteditor'
import Lottie from 'lottie-react';
import background from './Animation/animation.json';
function App() {
  return (
     <div className="App">
      <Lottie animationData={background} className="background"/>
      <div className="h1">
        Text Editor
      </div>
      <Texteditor/>
    </div>
  );
}

export default App;
