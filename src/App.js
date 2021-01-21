import React, { Component } from 'react';
import './App.css';


function City(props) {
  return (
    <>
      <div>{props.zipcode}</div>
      
    </>
    
    );
}

class App extends Component {
  constructor(){
    super()
    this.state ={
        data: []
    }
  }
 



   ZipSearchField(event) {
    event.preventDefault();
    let value = event.target.city.value.toUpperCase()
    fetch('http://ctp-zip-api.herokuapp.com/city/'+ value)
    .then(response => response.json())
    // we get a response and then we use to convert the response into json data    

    //missing code
    .then(data => {
      this.setState({
        data:data
      })
    })    
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>City SEARCH</h2>
        </div>         
        <form onSubmit= {(e)=>this.ZipSearchField(e)}>
          <input type="submit" value="Search" />
          <input id="city" name="city" type="text" ></input>
        </form>
        <div>
          {
            //missing code
            this.state.data.map((data) =>{
              return (
                <City zipcode = {data}/>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;