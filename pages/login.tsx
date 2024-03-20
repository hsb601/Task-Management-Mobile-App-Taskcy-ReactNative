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
} from 'react-native';
import { Icon } from 'react-native-elements';
// import {auth} from '../firebase';
import React, {useState,useEffect} from 'react';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
// import { useUserData } from './authHelpers';
import App from '../App';
import {Profile} from './profile'
import { errormessage, formgroup, head1, head2, input, label, link, link2 } from './formcss'
import { getFirestore, doc, getDoc } from 'firebase/firestore';
 /*<Icon
                color='#964B00'
                name='comments'
                type='font-awesome'
                size={50}
              />*/
export default function LoginScreen({ navigation,onLogin }) {
const [fdata, setFdata] = useState({
        email: '',
        password: ''
    })

    const [errormsg, setErrormsg] = useState(null);

    const Sendtobackend = () => {
        // console.log(fdata);
        if (fdata.email == '' || fdata.password == '') {
            setErrormsg('All fields are required');
            return;
        }
        else {
        console.log(fdata.email);
            fetch('http://192.168.0.111:3000/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fdata)
            })
                .then(res => res.json()).then(
                    data => {
                        // console.log(data);
                        if (data.error) {
                            setErrormsg(data.error);
                        }
                        else {
                            alert('logged successfully');
                            navigation.navigate('Home');
                        }
                    }
                )
               .catch((error) => {
                   alert(fdata.email+'\nPlease try later'+'\n'+error);
                 });
        }
    };
  /*const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const { image, userName, isLogged, setIsLogged } = useUserData();

  const handleLogin = async () => {
    const auth = getAuth(); // Initialize Firebase authentication
 onLogin();
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredentials.user;

      // Fetch user's name from Firestore collection
      const firestore = getFirestore();
      const userDocRef = doc(firestore, 'users', user.uid);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        const userName = userData.name;

        console.log('Logged in with:', user.email);
        alert('Welcome, ' + userName);
        navigation.navigate('Home');


      } else {
        console.log('User profile not found');
      }
    } catch (error) {
      alert('error:'+error.message);
    }
  };*/
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>

            <Image style={styles.logoBox} source={require('../assets/cover.png')} />

            <Text style={styles.loginTitleText}>Welcome Back</Text>
            <Text>Please enter your email address and password for login</Text>
             {  errormsg ? <Text style={errormessage}>{errormsg}</Text> : null  }
            <View style={styles.hr}></View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                keyboardType='email-address'
               onPressIn={() => setErrormsg(null)}
               onChangeText={(text) => setFdata({ ...fdata, email: text })}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                secureTextEntry={true}
                onPressIn={() => setErrormsg(null)}
                onChangeText={(text) => setFdata({ ...fdata, password: text })}
              />
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={Sendtobackend} >
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.registerText}>
                Don't have an account? Register Now
              </Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={() => navigation.navigate('Learn more')}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    color: 'mediumpurple',
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