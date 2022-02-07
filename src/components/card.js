import React from 'react';
import { Card } from 'react-bootstrap'

class Cards extends React.Component () {
    componentDidMount() {
        this.chrono = setInterval(() => {
        this.props.time++
        }, 1000);
      }
      componentWillUnmount() {
        clearInterval(this.chrono);
      }
      render(){
        return <div>
        <div style={{textAlign:"center"}}> Chrono :  {this.props.time} </div>
          <Card style={{ display: this.props.show ? "flex" : "none", width: '18rem' }}>
            <Card.Img variant="top" src={this.props.img} />
            <Card.Body>
              <Card.Title>{this.props.fullName}</Card.Title>
              <Card.Text>
                {this.props.bio}
              </Card.Text>
              <Card.Title>
                {this.props.profession}
              </Card.Title>
            </Card.Body>
          </Card>
          </div>
      }
  
  
}
export default Cards;