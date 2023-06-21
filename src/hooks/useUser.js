import { useAtom } from "jotai";
import { useMemo, useCallback } from "react";
import {userAtom} from "../store/index";
import { removeTokenUser } from "../utils/tokenHelper";

const useUser = () => {

  const [user, setUser] = useAtom(userAtom);

  const isLogged = useMemo(() => Boolean(user?.token), [user]);

  const logout = useCallback(() => {
    removeTokenUser()
    setUser(userAtom)

  }, [setUser]);

  return {
    user,
    isLogged,
    setUser,
    logout
  };
};

export default useUser;
