import React,{useState,useEffect} from 'react'
import axios from "axios";

function UserDataComp() {
  const [data, setdata] = useState({});

    useEffect(() => {
        axios.get("http://localhost/__payalComputersBackend/_userdata.php").then((response) => {
          // // console.log(response);
            const message = response.data.message;
            if (message == "ok") {
              setdata(response.data);
              // console.log("This is data",data)
            } else if (message == "notLogin") {
                setdata({"message":"not Logged In"})
            }
        });
      }, []);
  return (
      <div>
          <p>User Data Recived : { data.message}</p>
    </div>
  )
}

export default UserDataComp