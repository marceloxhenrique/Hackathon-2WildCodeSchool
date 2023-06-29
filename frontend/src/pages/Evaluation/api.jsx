import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const instance = axios.create({
  baseURL: BACKEND_URL,
});

// eslint-disable-next-line import/prefer-default-export
export const api = {
  // eslint-disable-next-line consistent-return
  brandAvailable: async () => {
    try {
      const res = await instance.get("/brands");
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },

  // eslint-disable-next-line consistent-return
  modelAvailable: async () => {
    try {
      const res = await instance.get("/models");
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },

  // eslint-disable-next-line consistent-return
  colorAvailable: async () => {
    try {
      const res = await instance.get("/colors");
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },

  // eslint-disable-next-line consistent-return
  storageAvailable: async () => {
    try {
      const res = await instance.get("/storages");
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },

  // eslint-disable-next-line consistent-return
  memoryAvailable: async () => {
    try {
      const res = await instance.get("/memories");
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },

  // eslint-disable-next-line consistent-return
  stateAvailable: async () => {
    try {
      const res = await instance.get("/states");
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },

  // eslint-disable-next-line consistent-return
  registerPhone: async (phoneData) => {
    try {
      const res = await instance.post("/phones", phoneData);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },
};
