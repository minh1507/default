import { useEffect, useReducer } from "react";
import { Actions } from "./Action";
import { Cat, InitState } from "./InitState";
import { Reducer } from "./Reducer";
import LightBeachButton from "components/buttons/LightBeachButton/LightBeachButton"

function App() {
  const [state, dispatch] = useReducer(Reducer, InitState);

  useEffect(() => {
    Actions.GetData(dispatch);
  }, []);

  return (
    <>
      <h1>Default page</h1>
      {state.DataItem &&
        state.DataItem.map((e: Cat, ie: number, arr: Cat[]) => {
          return (
            <div key={e.id}>
              <h5>{e.name}</h5>
              <p>{e.age}</p>
              <br />
            </div>
          );
        })}
        <LightBeachButton onClick={() => {}} title="ok" color="red"/>
    </>
  );
}

export default App;
