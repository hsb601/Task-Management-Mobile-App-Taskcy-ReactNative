// import { useState, useEffect } from 'react';
// import { getFirestore, doc, getDoc } from 'firebase/firestore';
// import { auth } from '../firebase';
//
// export const useUserData = () => {
//   const [image, setImage] = useState('');
//   const [userName, setUserName] = useState('User');
//   const [isLogged, setIsLogged] = useState(false);
//
//   useEffect(() => {
//     const fetchUserData = async () => {
//       const firestore = getFirestore();
//       const user = auth.currentUser;
//
//       if (user) {
//         const userUID = user.uid;
//
//         try {
//           const userDocRef = doc(firestore, 'users', userUID);
//           const userDocSnapshot = await getDoc(userDocRef);
//
//           if (userDocSnapshot.exists()) {
//             const userData = userDocSnapshot.data();
//             setUserName(userData.name);
//             setImage(userData.profileImageUrl || '');
//             setIsLogged(true);
//           } else {
//             console.log('User profile not found');
//             setIsLogged(false);
//           }
//         } catch (error) {
//           console.error('Error fetching user data:', error);
//         }
//       } else {
//         setIsLogged(false);
//       }
//     };
//
//     fetchUserData();
//   }, []);
//
//   return { image,setUserName ,userName, isLogged, setIsLogged };
// };
