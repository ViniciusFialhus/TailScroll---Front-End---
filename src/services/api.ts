import axios, { AxiosInstance } from "axios";
import { login, register, formNewFile, formNewFolder} from "../types/userType";

const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function registerUser(user: register) {
  try {
    const response = await instance.post("/register", user);
    console.log(response);
    return true;
  } catch (error: any) {
    throw error;
  }
}

export async function loginUser(user: login) {
  try {
    const response = await instance.post("/login", user);
    const { token } = response.data;
    localStorage.setItem("token", `${token}`);
    return true;
  } catch (error: any) {
    throw error;
  }
}

export async function viewAllSystem(token: string) {
  try {
    const response = await instance.get("/viewSystem", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error: any) {
    throw error;
  }
}


export async function viewAllUserFolder(token: string ) {
  try {
    const response = await instance.get("/viewFolders", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error: any) {
    throw error;
  }
}


export async function viewAllUserFiles(token: string ) {
  try {
    const response = await instance.get("/viewFiles", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error: any) {
    throw error;
  }
}

export async function createFolder(form:formNewFolder ,token: string) {
  try {
    const response = await instance.post("/registerFolder", form, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error: any) {
    throw error;
  }
}

export async function createFile(form:formNewFile ,token: string) {
  try {
    const response = await instance.post("/registerFile", form, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error: any) {
    throw error;
  }
}















