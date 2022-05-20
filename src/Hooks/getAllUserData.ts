import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../Redux/userSlice";

import { baseURL } from "../data/baseURL";

const useGetUserData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(`${baseURL}/api/v1/users`, {}).then((res) => {
      // @ts-ignore
      dispatch(getAllUsers(res.data));
    });
  }, [dispatch]);
};

export default useGetUserData;
