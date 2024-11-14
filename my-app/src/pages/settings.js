import React, { Component } from 'react'
import { connect } from 'react-redux'

//  class Settings extends Component {
//   render() {
//     console.log(this.props);
//     const {value,dispatch} =this.props;

    
//     return (
//       <div className='usage'>
//         <div className='usage-item'>
//             <button onClick={()=>{
//                 dispatch({
//                     type:'increment'
//                 })

//             }}>increment</button>
              
//               <label>{value}</label>
//             <button onClick={()=>{
//                 dispatch({
//                     type:'decrement'
//                 })

//             }}>decrement</button>
//         </div>
        
//       </div>
//     )
//   }
// }
// const mapStateToProps = (state)=>{
//     return{
//         value:state.value
//     }
// }

// export default connect(mapStateToProps)(Settings)







class Settings extends Component {
    render() {
      console.log(this.props);
      const {value,myIncrement,myDecrement} =this.props;
  
      
      return (
        <div className='usage'>
          <div className='usage-item'>
              <button onClick={()=>{
                  myIncrement()
  
              }}>increment</button>
                
                <label>{value}</label>
              <button onClick={()=>{
                 myDecrement()
  
              }}>decrement</button>
          </div>
          
        </div>
      )
    }
  }
  const mapStateToProps = (state)=>{
      return{
          value:state.value
      }
  }

  const mapStateToDispatch = (dispatch)=>{
    return {
        myIncrement: ()=>{
            dispatch({
                type:'increment'
            })

        },
        myDecrement: ()=>{
            dispatch({
                type:'decrement'
            })
        }

    }

  }
  
  export default connect(mapStateToProps,mapStateToDispatch)(Settings)