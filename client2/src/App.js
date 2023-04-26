import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import LandingPage from './screens/auth/Landing';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import Dashboard from './screens/Dashboard';
import AddPlayerForm from './screens/players/AddPlayerForm';
// import ProtectedRoute from './screens/ProtectedRoute';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-player" element={<AddPlayerForm />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
