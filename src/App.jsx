// src/App.jsx

import { Routes, Route } from 'react-router'

// Global components
import Navbar from './components/Navbar/Navbar'

// Page component
import ActivityIndex from './components/ActivityIndex/ActivityIndex'
// show to come 


const App = () => {

  return (
    <main>
      <Routes>
        <Route path="/activities" element={<ActivityIndex />} />
        <Route path="/" element={<ActivityIndex />} />

      </Routes>
    </main>
  );
};

export default App;
