import { useAtom } from "jotai";
import { useMemo } from "react";
import userAtom from "../store/user";

const useUser = () => {
  const [user, setUser] = useAtom(userAtom);

  const isLogged = useMemo(() => Boolean(user.token), [user]);

  return {
    ...user,
    isLogged,
    setUser,
  };
};

export default useUser;
