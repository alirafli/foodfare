import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { SECRET } from '../../env';
import { firebaseApp } from '../../init';


/**
 *
 * @param {JSON} formData
 *
 */
const uploadFile = (file) => {

}
export const createShareFood = (formData) => {
  const {
    titile,
    boughtDate,
    expiredDate,
    condition,
    pickUpTime,
    caption,
    location,
    photos,
  } = formData;

	const hash = sha256(1 + SECRET);
	const fileName = Base64.stringify(hmacSHA512(hash, SECRET));

		
};
