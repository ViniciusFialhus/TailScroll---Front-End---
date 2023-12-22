import { Dispatch, SetStateAction } from "react";

export type registerName = {
  name: string;
  surname?: string;
};

export type registerForm = {
  email: string;
  password: string;
  confirmedPassword: string;
};

export type login = {
  email: string;
  password: string;
};

export type formNewFolder = {
  name: string;
  type: string;
  path: string;
};

export type formNewFile = {
  name: string;
  type: string;
  path: string;
};

export type SetContextType = Dispatch<SetStateAction<any>>;
