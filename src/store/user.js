import { atomWithStorage } from "jotai/utils";
import { TOKEN_USER } from "../constants/index";

export const userAtom = atomWithStorage(TOKEN_USER, {
  name: "",
  token: "",
  email: "",
});

