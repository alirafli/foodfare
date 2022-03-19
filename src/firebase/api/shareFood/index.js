import {
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
  Timestamp,
} from 'firebase/firestore';
import { SECRET } from '../../env';
import { database, firebaseApp } from '../../init';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

const uploadFile = (file, folderName) => {
  const storage = getStorage();
  const storageRef = ref(storage, folderName);

  return uploadBytes(storageRef, file);
};


/**
 * 
 * @param {String} title 
 * @param {Timestamp} boughtDate 
 * @param {Timestamp} expiredDate 
 * @param {String} condition 
 * @param {String} pickUpTime 
 * @param {String} caption 
 * @param {Geolocation} location 
 * @param {File} photos 
 */
export const createShareFood = async (
  title,
  boughtDate,
  expiredDate,
  condition,
  pickUpTime,
  caption,
  location,
  photos,
) => {
  const fileName = uuidv4();

  const responsePhoto = await uploadFile(photos, `images/${fileName}`);
  const fullPath = responsePhoto.metadata.fullPath;

  const response = await setDoc(doc(database, 'shareFoods'), {
    title,
    boughtDate,
    expiredDate,
    condition,
    pickUpTime,
    caption,
    location,
    photo: fullPath,
  });
};
