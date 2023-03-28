
import { InitState, IState }  from "./InitState"
export const Reducer = (state:IState = InitState, action:any) =>
{  
  switch (action.type) {   
    case "GetCat":
      return {
        ...state,
        DataItem: action.items
      }; 
    default:
      return state;
  }
}