import { StyleSheet, Text, View, Alert, TouchableOpacity, Image,  ScrollView,ImageBackground } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, { useState, useEffect } from 'react';
import DocumentPicker from 'react-native-document-picker';
import PromptScreen from './prompt';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import AboutScreen from './pages/about';
export default function HomeScreen({ navigation }) {
 useEffect(() => {
    navigation.setOptions({
      title: 'Home',

      headerRight: () => (
        <TouchableOpacity
          style={{ paddingRight: 10 }}
          onPress={() => navigation.navigate('About')}
        >
 <Icon name="info-circle" type="font-awesome-5" color="mediumpurple" size={24}   />
        </TouchableOpacity>
      ),
    });
  }, []);


  return (

    <View style={styles.container}>
 <ImageBackground source={require('../assets/intro1.png')} style={styles.selectedFileImage} >
 <Text style={styles.txt}>Lets make a                 habits together 🙌 </Text>
  <TouchableOpacity style={styles.arrowButton} onPress={'Home'}>
           <Text style={styles.arrowButtonText}>=&gt;</Text>
         </TouchableOpacity>


       <View style={styles.sub_txt}>

           <Text style={styles.sub_txt}>Progress</Text>

       </View>
       </ImageBackground>
<ScrollView>
<View style={styles.centerizedView}>
          <View style={styles.Box}>
            <Text style={styles.Para}>Productivity Mobile App</Text>
            <Text style={styles.SubText}>Create detail booking</Text>
            <Text style={styles.Para}>2 min ago</Text>
       </View>
          </View>
          <View style={styles.centerizedView}>
                    <View style={styles.Box}>
                      <Text style={styles.Para}>Productivity Mobile App</Text>
                      <Text style={styles.SubText}>Create detail booking</Text>
                      <Text style={styles.Para}>4 min ago</Text>
                 </View>
                    </View>
                    <View style={styles.centerizedView}>
                              <View style={styles.Box}>
                                <Text style={styles.Para}>Productivity Mobile App</Text>
                                <Text style={styles.SubText}>Create detail booking</Text>
                                <Text style={styles.Para}>5 min ago</Text>
                           </View>
                              </View>
                              </ScrollView>

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',


  },
  txt: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    textAlign: 'left',
    marginHorizontal: 25,
    marginVertical: 10,
  },
  sub_txt: {
      fontSize: 23,
       fontWeight: 'bold',
      color: 'black',
      textAlign: 'left',
       marginHorizontal: 10,
       marginVertical: 10,

    },
        centerizedView: {
          width: '100',
          height: '200',
           paddingVertical:10,
           paddingHorizontal: 10,

        },
        Box: {
            width: '100',
            height:'200',
            borderRadiusColor: '#fafafa',
            borderColor: '#fafafa', // Set the border color here
                borderWidth: 2,
            borderRadius: 20,
            alignSelf: 'left',
            paddingHorizontal: 10,

            shadowColor: '#000',
            },
             Para: {
                textAlign: 'left',
                marginTop: 12,
                marginBottom: 5,
                fontSize: 16,
                color:'slategrey',
              },
              SubText: {
                    fontSize: 16,
                    fontWeight: 'bold',
                    color:'black',
                    textAlign: 'left',
                  },
  bt: {
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
  selectedFileContainer: {

    alignItems: 'center',
  },
  selectedFileName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  selectedFileImage: {
    width: 380,
    height: 400,

  },
    arrowButton: {
      position: 'absolute',
      right: 50,
      bottom: 20,
    },
    arrowButtonText: {
      color: 'mediumpurple',
      fontSize: 30,
      fontWeight: 'bold',
    },
     aboutButton: {
        marginLeft: '80%',
      },
});
