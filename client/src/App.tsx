<<<<<<< HEAD
const App = () => {
  return (
    <>
    <div>App</div>
    </>
  );
};

export default App;

=======
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <>
    <BrowserRouter>
     <AppRoutes />  
    </BrowserRouter>
    </>
  );
};

export default App;
>>>>>>> 5cca3f07871409517c3745f45cd826462cf5f994
