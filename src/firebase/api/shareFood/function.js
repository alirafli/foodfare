import { getStorage, ref, uploadBytes } from "firebase/storage";
/**
 *
 * @param {File} file
 * @param {String} folderName
 * Path of the folder
 * @returns
 */


export const uploadFile = (file, folderName) => {
  const storage = getStorage();
  const storageRef = ref(storage, folderName);

  return uploadBytes(storageRef, file);
};
