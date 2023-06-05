import { atomWithStorage } from "jotai/utils";

const userAtom = atomWithStorage("userData", {
  name: "",
  token: "",
  email: "",
});
export default userAtom
