// async function getUsers(users) {
//     const new_users = [];
  
//     for (let i = 0; i < users.length; i = i + 1) {
//       const newUser = user[i];
//       newUser.id = i;
  
//       new_users.push(newUser);
//     }
  
//     return new_users;
//   }


import React from 'react'

function codeQuality() {
    const new_users =[];

    for (let i=0; i< users.length; i++){
        new_users.push(<User key={i}/>);
    }
  return (


    <div>{new_users}</div>
  )
}

export default codeQuality
