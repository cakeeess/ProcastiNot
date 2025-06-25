
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
const App = () => (
  <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-cyan-100 via-cyan-200 to-teal-100">
    <Navbar />
    <AppRoutes />
  </div>
);
export default App;

