import { User } from "../model/allModel.ts";
import * as CleanJson from "../libs/CleanJson.ts";

export const retrieveUser = async (element: any) => {
  const id = CleanJson.parse(element);
  return await User.where("id", id).get();
};

export const retrieveAllUsers = async () => {
  return await User.select("id", "name", "email", "role").all();
};

export const removeUser = async (element: any) => {
  let result: boolean = false;
  const id = CleanJson.parse(element);
  const userFound = await User.where("id", id).get();

  if (userFound.toString().length > 2) {
    await User.where("id", id).delete();
    result = true;
  }
  return result;
};

export const patchUser = async (
  id: number,
  name: string,
  email: string,
  role: string
) => {
  let regexEmail: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (regexEmail.test(email)) {
    if (name !== "" && role !== "") {
      await User.where("id", id).update({
        email: email,
        name: name,
        role: role,
      });
    } else if (name === "" && role !== "") {
      await User.where("id", id).update({ email: email, role: role });
    } else if (name !== "" && role == "") {
      await User.where("id", id).update({ email: email, name: name });
    } else {
      await User.where("id", id).update({ email: email });
    }
  } else {
    if (name !== "" && role !== "") {
      await User.where("id", id).update({ name: name, role: role });
    } else if (name === "" && role !== "") {
      await User.where("id", id).update({ role: role });
    } else if (name !== "" && role === "") {
      await User.where("id", id).update({ name: name });
    }
  }

  return await User.where("id",id).get();
};
