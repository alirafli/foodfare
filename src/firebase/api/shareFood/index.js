import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  startAfter,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import { database } from '../../init';
import { v4 as uuidv4 } from 'uuid';
import { uploadFile } from './function';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { STORAGELINK } from '../../env';

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
  { displayName, uid, photoUrl }
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
    user: { displayName, uid, photoUrl },
  });
};

export const cancelSharefood = async (docId) => {
  const shareFoodRef = doc(db, 'shareFoods', docId);
  return await updateDoc(shareFoodRef, {
    status: 'canceled',
  });
};

/**
 *
 * @param {Integer} page
 */
export const getSharefoods = async (page) => {
  const itemPerPage = 9;
  const shareFoods = query(collection(database, 'shareFoods'), limit(9));
  const storage = getStorage();
  const shareFoodsSnapshot = await getDocs(shareFoods);

  const shareFoodsData = [];
  shareFoodsSnapshot.forEach((doc) => {
    shareFoodsData.push(doc.data());
  });

  const DataWithPhotoLink = shareFoodsData.map(async (data) => {
    const photo = data.photos;
    const photoLink = await getDownloadURL(
      ref(storage, `${STORAGELINK}/${photo}`)
    ).catch((err) => {});
    return {
      ...data,
      photos: photoLink,
    };
  });
  return DataWithPhotoLink;
};
