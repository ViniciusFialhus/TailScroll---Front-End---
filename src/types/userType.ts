import { Dispatch, SetStateAction } from "react";

export type register = {
  name: string;
  email: string;
  password: string;
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
