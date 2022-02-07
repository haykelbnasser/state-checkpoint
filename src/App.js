import React from 'react';
import './App.css';
import Myimg from './Myimg.jpg'
import {Button } from 'react-bootstrap'
import Cards from './components/card'



class App extends React.Component {
  state = {
    fullName: "Haykel ben nasser",
    bio: "Company culture is having a watershed moment thats redefining relationship between employers and employees. Find out more in LinkedIns Global Talent Trends 2022 report.",
    img: Myimg,
    profession: "student",
    show: false,
    time: 0,
  };
  Hide = () => {
    this.setState({ show: !this.state.show });
  }

  

  render() {
    return (
     <div>
         
        <Button onClick={this.Hide}>View Profil</Button>
        {
          this.state.show?(<Cards props={this.state}/>):(<p></p>)
        }
      </div>

    )


  }

}



export default App;
