
import Service from "services/HomeService";

export const Actions: any = {
  GetCat: () => async (dispatch: any, getState: any) => {
    let res: any = await Service.GetData();
    console.log(res)
    dispatch({
      type: "GetCat",
      items: res.Data,
    });
  }
};
