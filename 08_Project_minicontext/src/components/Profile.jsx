import React, { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>please signUp</div>;
  return (
    <div>
      Welcome {user.username} your password is {user.password}
    </div>
  );
}

export default Profile;
