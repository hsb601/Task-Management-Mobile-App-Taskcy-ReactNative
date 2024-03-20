import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView,ImageBackground } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import { auth } from '../firebase';
import ImagePicker from 'react-native-image-picker';
// import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { Box, NativeBaseProvider } from 'native-base';
import { Icon } from 'react-native-elements';
// import { useUserData } from './authHelpers';

export default function Profile({ navigation }) {
  const [image, setImage] = useState('');
 const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [dob, setDOB] = useState('');
   const [isLogged, setIsLogged] = useState(false);
//   useEffect(() => {
//     const fetchUserData = async () => {
//       const firestore = getFirestore();
//       const userUID = auth.currentUser.uid;
//
//       try {
//         const userDocRef = doc(firestore, 'users', userUID);
//         const userDocSnapshot = await getDoc(userDocRef);
//
//         if (userDocSnapshot.exists()) {
//           const userData = userDocSnapshot.data();
//           setUserName(userData.name);
//           setEmail(userData.email);
//           setContact(userData.contact);
//           setDOB(userData.dob);
//           setImage(userData.profileImageUrl || '');
//           setIsLogged(true);
//         } else {
//           console.log('User profile not found');
//         }
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };
//
//     fetchUserData();
//   }, []);
useEffect(() => {
    navigation.setOptions({
      title: 'Profile',
      headerLeft: () => (
        <View style={styles.headerLeft}>
          <TouchableOpacity
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.navigate('Home')}
          >
            <Icon
              name='angle-left'
              type='font-awesome'
              size={30}
              color='mediumpurple'
            />
          </TouchableOpacity>

        </View>
      ),

    });
  }, []);
  const handleLogout = () => {
//      auth.signOut();
        setIsLogged(false);
        // Clear user data from state

        setUserName('');
        setEmail('');
        setContact('');
        setDOB('');
        setImage('');
        navigation.navigate('Login'); // Navigate to the login screen
  };

  const handleSave = async () => {
//     const firestore = getFirestore();
//     const userUID = auth.currentUser.uid;
//     const userDocRef = doc(firestore, 'users', userUID);
//
//     const updatedUserData = {
//       name: userName,
//       email: email,
//       contact: contact,
//       dob: dob,
//       profileImageUrl: image,
//     };
//
//     try {
//       await updateDoc(userDocRef, updatedUserData);
//       console.log('User data updated successfully');
//       alert('Successfully updated');
//     } catch (error) {
//       console.error('Error updating user data:', error);
//       alert('Error:' + error);
//     }
  };

  useEffect(() => {
    let isMounted = true;

    const requestMediaLibraryPermission = async () => {
      try {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionAsync();
          if (status !== 'granted') {
            alert('Permission denied!');
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    requestMediaLibraryPermission();

    return () => {
      isMounted = false;
    };
  }, []);

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>

      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>

          <Image style={styles.userImage} source={image ? { uri: image } : require('../assets/profile_icon.jpg')} />

          <TouchableOpacity style={styles.bt} onPress={PickImage}>
            <FontAwesome5 name="user-circle" size={28} color="black" />
            <Text style={styles.buttonText}>Picture Upload</Text>
          </TouchableOpacity>

          <NativeBaseProvider>
            <Box style={styles.cardBody}>
              <Text style={styles.txt}>Name</Text>
              <TextInput
                value={userName}
                onChangeText={setUserName}
                editable={true}
                style={styles.sub_txt}
              />

              <Text style={styles.txt}>Email</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                editable={true}
                style={styles.sub_txt}
              />

              <Text style={styles.txt}>Contact</Text>
              <TextInput
                value={contact}
                onChangeText={setContact}
                editable={true}
                style={styles.sub_txt}
              />

              <Text style={styles.txt}>Date of Birth</Text>
              <TextInput
                value={dob}
                onChangeText={setDOB}
                editable={true}
                style={styles.sub_txt}
              />
            </Box>
          </NativeBaseProvider>
          <TouchableOpacity style={styles.bt} onPress={handleSave}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  sub_txt: {
    paddingHorizontal: 10,
    fontSize: 15,
    color: 'white',
    marginTop: 0,
  },
  bt: {
    marginTop: 10,
    width: 250,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginVertical: 8,
    borderRadius: 4,
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  buttonText: {
    fontSize: 18,
    marginHorizontal: 12,
    color: 'black',
    fontWeight: '500',
  },
  userImage: {
    marginTop: 10,
    width: 160,
    height: 160,
    borderRadius: 100,
  },
  cardBody: {
    backgroundColor: 'black',
    height: 401,
    width: 329,
    borderColor: 'white',
    borderWidth: 2,
  },
  logoutButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
   cover: {
       width: 360,
       height: 618,
       resizeMode: 'contain',
           alignSelf: 'center',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
                 marginBottom: -650,
             shadowColor: 'mediumpurple',
               shadowOffset: {
                 width: 0,
                 height: 1,
               },
               shadowOpacity: 0.2,
               shadowRadius: 1.41,


    },
      headerLeft: {
        paddingVertical: 4,
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      },
});
