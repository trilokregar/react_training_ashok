import React from "react";


class Signup extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: props.name || "ashok",
            age: props.age,
            gender: "",
            place: props.place,
            nationality: props.nationality,
            password: "",
        };
      }

    render(){
        return (
            <div className="App">
                <h1>Hi {this.state.name} !!</h1>
                <h2>please fillup the details.</h2>

                <div>
                    <span>name </span>
                    <input value={this.state.name} onChange={(e) => {
                    let state = this.state;
                    state.name = e.target.value;
                    this.setState(state);
                    // this.setState({name: "asda"});
                    }} />
                </div>
                <div>
                    <span>age </span>
                    <input value={this.state.age} onChange={(e) => {
                    let state = this.state;
                    state.age = e.target.value;
                    this.setState(state);
                    }} />
                </div>


                <button className="mt-3" type={"submit"} onClick={() =>{}}>Signup</button>
            </div>

            
        )
    }

}

export default Signup;