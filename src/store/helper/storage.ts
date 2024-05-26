import CryptoJS from "crypto-js";
import { StateStorage } from "zustand/middleware";

// Encryption key (you should store it securely)
const ENCRYPTION_KEY = "your-encryption-key";

// Function to encrypt data
const encrypt = (data: any) => {
  const stringifiedData = JSON.stringify(data);
  return CryptoJS.AES.encrypt(stringifiedData, ENCRYPTION_KEY).toString();
};

// Function to decrypt data
const decrypt = (data: string) => {
  const bytes = CryptoJS.AES.decrypt(data, ENCRYPTION_KEY);
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(decryptedData);
};

export const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    try {
      const encryptedData = localStorage.getItem(name);
      if (!encryptedData) {
        return null;
      }
      const decryptedData = decrypt(encryptedData);
      return JSON.stringify(decryptedData);
    } catch (error) {
      return null;
    }
  },
  setItem: async (name: string, value: string): Promise<void> => {
    try {
      const encryptedData = encrypt(JSON.parse(value));
      localStorage.setItem(name, encryptedData);
    } catch (error) {
      console.error("Error setting item in storage:", error);
    }
  },
  removeItem: async (name: string): Promise<void> => {
    try {
      localStorage.removeItem(name);
    } catch (error) {
      console.error("Error removing item from storage:", error);
    }
  },
};
