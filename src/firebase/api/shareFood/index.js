import { deleteDoc, doc, serverTimestamp, setDoc, Timestamp, updateDoc } from 'firebase/firestore';
import { database } from '../../init';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

/**
 *
 * @param {File} file
 * @param {String} folderName
 * Path of the folder
 * @returns
 */
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
  {displayName, uid, photoUrl}
) => {
  const fileName = uuidv4();

  const responsePhoto = await uploadFile(photos, `images/${fileName}`);
  const fullPath = responsePhoto.metadata.fullPath;

  return await setDoc(doc(database, 'shareFoods'), {
    title,
    boughtDate,
    expiredDate,
    condition,
    pickUpTime,
    caption,
    location,
    photo: fullPath,
    createdAt: serverTimestamp(),
    status: 'open',
    user: {displayName, uid, photoUrl},
  });
};

export const cancelOrder = async (
  uid,
  docId
) => {
  const shareFoodRef = doc(db , "shareFoods", uid);
  return await updateDoc(shareFoodRef, {
    status: 'canceled'
  })
};
