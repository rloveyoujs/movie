import { HashRouter, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";

export default function App() {
  return (
    <>
      <HashRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/detail" component={Detail} />
      </HashRouter>
    </>
  );
}
