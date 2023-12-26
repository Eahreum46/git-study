import React from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import { users } from "../db";

const User = () => {
  const { userId } = useParams();
  return (
    <div>
      <h1>
        User with it {userId} is name : {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="followers">See followers</Link>
      <Outlet
        context={{
          nameOfMyUsers: users[Number(userId) - 1].name,
        }}
      />
    </div>
  );
};

export default User;
