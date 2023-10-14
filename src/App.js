// import "./App.css";
// import "./sass/main.scss";

import Sidebar from "./sidebar";
import Header from "./header";
import Realtor from "./realtors";
import Feature from "./features";
import Story from "./story";
import Home from "./home";

function App() {
  return (
    <div className="container">
      <Sidebar />

      <Header />

      <Realtor />

      <Feature />

      <Story />

      <Home />
    </div>
  );
}

export default App;
