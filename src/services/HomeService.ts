import axios from "axios";

const cat = "cat";
const HomeService = {
  GetData: async () => {
    let res: any = await axios.get("http://localhost:3000/api/" + cat);
    return res.data.data;
  },
};
export default HomeService;
