import { Link, Route, Routes } from 'react-router-dom';
import router from '../router/PageRouter.componet';

function App() {
  return (
    <div className="App">
      <ul>
        {router.map((r,i) => <li key={i + "link"}><Link to={r.path}>{r.name}</Link></li>)}
      </ul>
      <Routes>
        {router.map((r, i) => <Route key={i} path={r.path} element={r.element}/>)}
      </Routes>
    </div>
  );
}

export default App;
