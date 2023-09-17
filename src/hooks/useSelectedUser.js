import { useAtom } from "jotai";
import { userSelected } from "../store";

export default function userSelectedChat() {
  const [authorSelected, setUserSelected] = useAtom(userSelected);

  const handleSelected = ({ id, nombre, imagen }) => {
    setUserSelected({ id, nombre, imagen });
  };

  return { authorSelected, handleSelected };
}
