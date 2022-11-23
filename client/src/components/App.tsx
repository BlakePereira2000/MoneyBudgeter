import "./App.css";
import ExpenseMain from "./expenses/ExpenseMain";
import Layout from "./layout/Layout";
import Main from "./Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="expenses/*" element={<ExpenseMain />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
