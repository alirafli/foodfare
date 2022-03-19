import {
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
} from 'firebase/firestore';
import { SECRET } from '../../env';
import { database, firebaseApp } from '../../init';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

const uploadFile = (file, folder) => {
  const storage = getStorage();
  const storageRef = ref(storage, folder);

  return uploadBytes(storageRef, file);
};

export const createShareFood = async ({
  title,
  boughtDate,
  expiredDate,
  condition,
  pickUpTime,
  caption,
  location,
  photos,
}) => {
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
