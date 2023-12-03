/* eslint-disable no-unused-vars */
import React from 'react';
import UseAuth from '../../../hooks/UseAuth';

const UserHome = () => {
    const { user } = UseAuth();
  return (
    <div>
      <h2 className="text-3xl">
        <span> Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
        console.log(user.displayName);
      </h2>
    </div>
  );
};

export default UserHome;