// import "./App.css";
import "./sass/main.scss";

import Sidebar from "./sidebar";
import Header from "./header";
import Realtor from "./realtors";

function App() {
  return (
    <div className="container">
      <Sidebar />

      <Header />

      <Realtor />
    </div>
  );
}

export default App;
