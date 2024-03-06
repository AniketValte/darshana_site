import { Route, Routes, useLocation, useNavigate } from "@solidjs/router";

import Home from "pages/home";

import NewHome from "pages/new-home/index";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" component={NewHome} />
    </Routes>
  );
};

export default App;
