import React from 'react'
// de-structure
function Card({username, email, password}) {
  return (
    <>
      <div className="card" >
        <div className='card-header'>
            <h2>{username}</h2>
            <h2>{email}</h2>
            <h2>{password}</h2>

        </div>
      </div>
    </>
  )
}

export default Card

// structure
// function Card(props) {
//     return (
//       <>
//         <div className="card" >
//           <div className='card-header'>
//               <h2>{props.username}</h2>
//               <h2>{props.email}</h2>
//               <h2>{props.password}</h2>
  
//           </div>
//         </div>
//       </>
//     )
//   }


