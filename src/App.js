// import logo from './logo.svg';
import './App.css';
import CompanyComponent from './components/company/CompanyComponent';
import UserListComponent from './components/user/UserListComponent';
// import lib BrowserRouter
import { BrowserRouter as Router, Route } from "react-router-dom"; 

function App() {
  return (
    <Router>
      <div className="App">
          <Route path="/" exact component={CompanyComponent} />
          {/* path: Là đường dẫn trên URL. */}
          {/* exact: route chi hoạt động nếu URL trên trình duyệt same với value của property path của nó. */}
          {/* component: Là component sẽ đươc load ra tương ứng với Route đó. */}
          <Route path="/user" component={UserListComponent} />
      </div>
    </Router>
  );
}

export default App;
