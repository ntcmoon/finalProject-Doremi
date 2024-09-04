import React from 'react'

const logOut = () => {
  const actionObject = {
    type: 'LOGOUT',
    payload: null
  };
  dispatch(actionObject);
}

function Profile() {
  return (
    <>
    <div>Profile</div>
    <button onClick={logOut}>Log out</button>
    </>
  )
}

export default Profile