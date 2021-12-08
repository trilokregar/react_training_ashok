import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";


function Login() {

  const response = [{ name: "ashok", age: 30 }, { name: "trilok", age: 28 }, { name: "deepika" }];
  const [name, setName] = useState("");
  const [listOfNames, setListOfNames] = useState(response);
  const [age, setAge] = useState("");


  const update = (e) => {

    if (!name || !age) {
      setListOfNames(response);
    } else {
      // api call -> login success
      // setListOfNames();

      let old = listOfNames;
      old.push({ name: name, age: age });
      console.log(old);
      setListOfNames([...old]);

    }
  }

  const element1 = <h1>your name is = {name}</h1>;
  const element2 = <h1>your age is = {age}</h1>

  const renderForNull = () => {
    return (
      <Fragment>
        <div>No data available</div>
        <div>Please login</div>
      </Fragment>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        {listOfNames === null ?
          (
            renderForNull()
          )
          :
          <div> {listOfNames.map((data, index) => {
            let greet = "Hello " + data.name;
            return (
              <div key={`list${index}`}>
                <span> {greet} </span>
                <span> {data.age} </span>
              </div>
            )
          })}</div>
        }
        <span>{element1}</span>
        <span>{element2}</span>

        <input value={name} placeholder="name" onChange={(e) => {
          console.log(e);
          setName(e.target.value);
        }}></input>

        <input value={age} placeholder="age" onChange={(e) => {
          setAge(e.target.value);
        }}></input>

        <button className="mt-3" type={"submit"} onClick={update}>Update</button>

      </header>
    </div>
  );
}

export default Login;




