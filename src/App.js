import { useEffect, useState } from "react";

const App = () => {
  const [data, setdata] = useState("");
  const getData = async () => {
    const res = await fetch("https://dummyjson.com/users", {
      method: "GET",
    });
    const d = await res.json();
    if (res.ok === true) {
      setdata(d.users);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  if (data) {
    console.log(data);
  }
  return (
    <div className=" h-full bg-black grid  place-items-center text-white">
      <h1 className="text-lg font-bold my-5">Dummy Data</h1>
      <table className="mt-5">
        <tr>
          <th>Sno</th>
          <th>Profile Pic</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Email</th>
          <th>UserName</th>
          <th>Domain</th>
          <th>IP</th>
          <th>university</th>
        </tr>
        {data ? (
          data.map((i) => {
            return (
              <tr>
                <td>{i.id}</td>
                <td>
                  <img src={i.image} width={30} height={30} />
                </td>
                <td>{i.firstName}</td>
                <td>{i.lastName}</td>
                <td>{i.gender}</td>
                <td>{i.email}</td>
                <td>{i.username}</td>
                <td>{i.domain}</td>
                <td>{i.ip}</td>
                <td>{i.university}</td>
              </tr>
            );
          })
        ) : (
          <h1 className="text-white text-center h-screen">Loading</h1>
        )}
      </table>
    </div>
  );
};

export default App;
