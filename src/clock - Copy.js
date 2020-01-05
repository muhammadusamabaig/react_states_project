import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Diisplay from "./disply.js"
import Comp from "./componentcheck.js"

class Cpp extends Component{
  constructor() {  
    super();        
    this.state = { displayBio: new Date().toLocaleString()
  ,count:0
    } 
  // var alpa="k"                                                                          
    this.updateTime(); 
// var alpa="usama"
  }  
 vvv={
  name:"usama"
}
    updateTime(){
      // var fname="irfan baig"
      // var b = new Date().toLocaleString()
      setInterval(() => {
        this.setState.count++
        this.setState({
          displayBio: new Date().toLocaleString(), 
          count:this.state.count+1
          // console.log(this.state.displayBio.toLocaleString())
          
        } )
        
      }, 1000);
      
      // console.log(Number( this.state.displayBio).toLocaleString())
    }
  

    
  render()
  
{
// var ppp="kkkkkkkkk"  
//   var d= {
//     x:"usama"
//   }
//   var bet=new Date()
    // let timm= new Date(g)
    // var date = { currentTime: new Date().toLocaleString};
//  var str="234"
// var b =this.state.count
// if (b==3){
// return <Comp  />
// }
// else{

// }
   return(
     
  <div>
    
    {
      
      (this.state.count==3)?
      (<Diisplay Timer={this.state.displayBio}/>):
      (<h1>3 nhi hy</h1>)
    }
{/* <p>{this.vvv.name}</p> */}
{/* <p>{this.state.displayBio}</p> */}
      {console.log(this.state.displayBio)}
  <p>{this.state.displayBio}</p>
      {/* <p>{console.log(Number(str))}</p> */}
    {/* <p>{Number(str)}</p> */}
      {/* {console.log()} */}
{/* <p>{fname}</p> */}
{/* {alert("usama")} */}
{/* <p>{ppp}</p> */}
  {/* <p>{d.x}</p> */}
    {/* <p>{this.state.displayBio}</p> */}
    
  {/* <p>{date.currentTime.getHoure()}</p> */}
{/* <Diisplay Timer={this.Timer} /> */}
{
// {/* <Comp tim={this.state.displayBio} /> */}
}

  {console.log("incremet")}
    </div>

)
  }
}




export default Cpp;