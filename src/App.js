import './App.css';
import Form from "../src/Components/JS/Form.js"
import Image from "../src/Components/JS/Image.js"

function App() {
  return (
    <div class="main">
      <br></br>
      <Image source={"/old-man.png"} size={200}/>
      <h3>How Long Will I Live?</h3>
      <p>Ever wanted to figure out how old you're going to live until? Well, it's your lucky day. Or maybe not.
      <br></br>Simply type your name below <strong></strong>(first or last only) and then hit submit to see your age!</p>
      <Form/>
    </div>
  );
}

export default App;
