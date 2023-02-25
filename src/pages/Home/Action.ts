import Service from "services/HomeService";


export const Actions: any = {
  GetData: async (dispatch: any) => {
    let res: any = await Service.GetData();
    dispatch({
      type: "GetData",
      items: res,
    });
  },
  
};
