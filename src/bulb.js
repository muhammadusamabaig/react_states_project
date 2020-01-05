import "./bulllb.css"
import React, { Component } from 'react';
class Bulb extends Component{
    constructor(props) {  
      super(props);        
      this.state = { displayBio:"" 
      } 

this.openb=this.openb.bind(this)
this.close=this.close.bind(this)
this.destroy=this.destroy.bind(this)

  }
      openb(){
        
          
          this.setState({
            displayBio:  process.env.PUBLIC_URL + "/openb.jpg" 
           
            
          } )
          
        }
        close(){
        
          
            this.setState({
              displayBio:  process.env.PUBLIC_URL + "/closeb.jpg" 
             
              
            } )
            
          }
          destroy(){
        
          
            this.setState({
              displayBio:  process.env.PUBLIC_URL + "/crackb.jpg" 
             
              
            } )
            
          }
   render()
   
     {
        
return(
       

<div>
<img src={this.state.displayBio} style={{width:"200px",marginLeft:"10%", height:"70px"}}/>
<button onClick={this.openb} style={{backgroundColor:"green"}} className="bulb">open bulb</button> 
<button onClick={this.close} style={{backgroundColor:"yellow"}} className="bulb">close bulb</button> 

<button onClick={this.destroy} style={{backgroundColor:"red"}} className="bulb">destroy bulb</button> 

 

  {  console.log(this.state.displayBio)
  
  }
  </div>
  )
    }
  }
  
  
  
  
  export default Bulb;