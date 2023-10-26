import Car from "./components/Car";
import Actor from "./components/Actor";
import Counter from "./components/Counter";
import Sunrise from "./components/Sunrise";
import Users from "./components/Users";
const App = () => {
  const brand = "Ford";

  return (
    <div className="box">
      {/* <h1>In the App.js</h1> */}
      {/* <Counter /> */}
      {/* <Actor /> */}
      {/* <Car /> */}
      {/* <Sunrise /> */}
      <Users />
    </div>
  );
};

export default App;
