import { BrowserRouter, Routes, Route} from 'react-router-dom';
import FrontPage from './FrontPage';
import PlantCatalog from './PlantCatalog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FrontPage />} />
        <Route path='/Katalog' element={<PlantCatalog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;