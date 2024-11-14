
import Usage from "./pages/Usage";
import {Provider} from "react-redux"
import store from "./pages/store"
import Settings from "./pages/settings";

function App() {
  return (
  <Provider store={store}>
     <div>
   <Usage/>
 
  </div>
  </Provider>
  
 
  );
}

export default App;



// function App() {
//   return (
//   <Provider store={store}>
//      <div>
//    <Settings/>
 
//   </div>
//   </Provider>
  
 
//   );
// }

// export default App;