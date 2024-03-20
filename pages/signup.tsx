
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { errormessage, formgroup, head1, head2, input, label, link, link2 } from './formcss'
// import { auth, firestore } from '../firebase';
 /*<Icon
                color='#964B00'
                name='comments'
                type='font-awesome'
                size={50}
              />*/
export default function SignupScreen({navigation}) {
  const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [retypePassword, setRetypePassword] = useState('');

   const [fdata, setFdata] = useState({
   name: '',
   email: '',
   password: '',
   cpassword: '',
   dob: 'null',

   })

   const [errormsg, setErrormsg] = useState (null);

   const handleSignUp = async () => {
           // Check if all required fields are filled
           if (!fdata.name || !fdata.email || !fdata.password || !fdata.cpassword) {
             setErrormsg('All fields are required');
             return;
           }

           // Check if password matches confirm password
           if (fdata.password !== fdata.cpassword) {
             setErrormsg('Password and Confirm Password must be the same');
             return;
           }

           // Prepare the user data for signup
           const userData = {
             name: fdata.name,
             email: fdata.email,
             password: fdata.password,
             dob: fdata.dob,
           };

fetch('http://192.168.0.111:3000/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(userData),
})
  .then((response) => {
    console.log('Response:', response);
    return response.json();
  })
  .then((data) => {
    console.log('Data:', data);


      if (data.error) {
                                 setErrormsg(data.error);
                             }
     else{
     alert(userData.name+": Signup Successfull");
            navigation.navigate('Login');
     }
    // Handle the data
  })
  .catch((error) => {
    console.error('Error during signup:', error, userData);
  });

        }


   /*  if (password !== retypePassword) {
       alert('Passwords do not match');
       return;
     }

     try {
       const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
       const user = userCredentials.user;

       // Store user information in Firestore
        const userDocRef = doc(firestore, 'users', user.uid);
             await setDoc(userDocRef, {
               name,
               email,
               password,
               // Additional data you want to store
             });

       console.log('Registered with:', user.email);
       alert('You registered with: ' + user.email);
     } catch (error) {
       alert(error.message);
     }*/
    return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
     <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={styles.centerizedView}>

          <View style={styles.authBox}>
            <View>
            <Image style={styles.logoBox} source={require('../assets/cover.png')} />
            </View>
            <Text style={styles.loginTitleText}>Create Account</Text>
            <Text>Please Enter your Information & create your account</Text>
             { errormsg ? <Text style={errormessage}>{errormsg}</Text> : null }
            <View style={styles.hr}></View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Full Name</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
               keyboardType="default"
                 onChangeText={(text) => setFdata({...fdata, name: text})}
                  onPressIn={() => setErrormsg(null)}
              />
            </View>
             <View style={styles.inputBox}>
                          <Text style={styles.inputLabel}>Email</Text>
                          <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            keyboardType='email-address'
                        onChangeText={(text) => setFdata({...fdata, email: text})}
                         onPressIn={() => setErrormsg(null)}
                          />
                        </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                secureTextEntry={true}
                 onChangeText={(text) => setFdata({...fdata, password: text})}
                  onPressIn={() => setErrormsg(null)}
              />
            </View>
             <View style={styles.inputBox}>
                          <Text style={styles.inputLabel}>Re-enter Password</Text>
                          <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            secureTextEntry={true}
                      onChangeText={(text) => setFdata({...fdata, cpassword: text})}
                       onPressIn={() => setErrormsg(null)}
                          />
                        </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
              <Text style={styles.loginButtonText}>Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.registerText}>
                Go to Login!
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
         </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  bigCircle: {
    width: Dimensions.get('window').height * 0.7,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: 'mediumpurple',
    borderRadius: 1000,
    position: 'absolute',
    right: Dimensions.get('window').width * 0.60,
    top: -50,
  },
  smallCircle: {
    width: Dimensions.get('window').height * 0.4,
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: 'mediumpurple',
    borderRadius: 1000,
    position: 'absolute',
    bottom: Dimensions.get('window').width * -0.2,
    right: Dimensions.get('window').width * -0.3,
  },
  centerizedView: {
    width: '100%',
    top: '15%',
  },
  authBox: {
    width: 300,
    backgroundColor: '#fafafa',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 14,
    marginBottom: 100,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

  },
  logoBox: {
     width: 300,
    height: 170,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
     top: -90,
        marginBottom: -80,
      shadowColor: '#000',


  },
  loginTitleText: {
    fontSize: 26,
    fontWeight: 'bold',
    color:'black',
  },
  hr: {
    width: '100%',
    height: 1,
    backgroundColor: '#7C4700',
    marginTop: 6,
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
    color: 'black',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#dfe4ea',
    borderRadius: 4,
    paddingHorizontal: 10,
    color: 'black',
  },
  loginButton: {
    backgroundColor: 'mediumpurple',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color:'black',
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
    color:'black',
  },
  scrollViewContainer: {
      flexGrow: 1,
      justifyContent: 'center',
    },
});
