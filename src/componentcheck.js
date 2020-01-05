import React, { Component } from 'react';


class Comp extends Component{

constructor()
{
 super();
 console.log("construckkkkkkkkkkkkkkkkkkkkkkktor")   
}

componentWillMount()
{
    console.log("willmount")
}
componentWillReceiveProps(Nextprops){
console.log("reciveprops")
}    
shouldComponentUpdate(Nextprops,newstate)
{
console.log(Nextprops,"shoulld")
return true;
}


componentWillUpdate()
{
console.log("")
}
    render()
    {    console.log("render")

        return(


            <div></div>
        )


    }
}

export default Comp;