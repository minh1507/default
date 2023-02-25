import { useEffect, useState } from "react";
import Service from "services/HomeService";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    let result: any = await Service.GetData();
    setData(result);
  };

  return (
    <>
      <h1>Default page</h1>
      {data &&
        data.map((e: any, ie: any) => {
          return (
            <div>
              <h5>{e.name}</h5>
              <p>{e.age}</p>
              <br />
            </div>
          );
        })}
    </>
  );
}

export default App;
