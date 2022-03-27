import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { database } from "../../init";

export const createBigDonation = async (
  descriptionm,
  address,
  phoneNumber,
  pickUpTime,
  name,
  uid
) => {

  return await addDoc(collection(database, 'bigDonations'), {
		descriptionm,
		address,
		phoneNumber,
		pickUpTime,
    name,
		uid
  });
};
