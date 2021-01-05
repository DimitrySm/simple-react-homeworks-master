import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HW1 from "../h1/HW1";
import HW2 from "../h2/HW2";
import HW3 from "../h3/HW3";
import HW4 from "../h4/HW4";
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";

export const PATH = {
  PRE_JUNIOR: "/pre-junior",
  // add paths
};

function Routes() {
  return (
    <div>
      {/* Switch выбирает первый подходящий роут */}
      <Switch>
        {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
        {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
        <Route path="/" exact render={() => <Redirect to="/pre-junior" />} />
        <Route path="/pre-junior" render={() => <PreJunior />} />
        <Route path="/hw1" render={() => <HW1 />} />
        <Route path="/hw2" render={() => <HW2 />} />
        <Route path="/hw3" render={() => <HW3 />} />
        <Route path="/hw4" render={() => <HW4 />} />

        {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
        <Route render={() => <Error404 />} />
      </Switch>
    </div>
  );
}

export default Routes;
