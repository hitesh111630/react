import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const user = useLoaderData();
  //   const [user, setUser] = useState(null);
  //   useEffect(() => {
  //     fetch("https://randomuser.me/api")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setUser(data.results[0]);
  //       });
  //   }, []);

  if (!user) return <p>Loading profile...</p>;
  return (
    <div className="text-center">
      <img
        src={user.picture.large}
        className="rounded-full w-32 mb-4 mx-auto"
        alt="Avatar"
      />
      <h5 className="text-xl font-medium leading-tight mb-2">
        {user.name.first} {user.name.last}
      </h5>
      <p className="text-gray-500">Country :{user.location.country}</p>
    </div>
  );
}

export default Github;

export const GithubLoader = async () => {
  const responce = await fetch("https://randomuser.me/api");
  const data = await responce.json();
  return data.results[0];
};
