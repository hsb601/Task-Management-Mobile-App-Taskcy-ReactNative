import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, ImageBackground } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Box, NativeBaseProvider } from 'native-base';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

export default  function Project ()
{
  const TaskName = '';
  const TaskDetail = '';
  const image = '../assets/task.jpeg';

  return (

     <NativeBaseProvider>
    <ImageBackground source={require('../assets/Best_Mac_to_do_list_apps.jpg')} style={styles.container}>
      <View>
      <ScrollView>
      <View>
       <TouchableOpacity style={styles.bt}>
                <Text style={styles.buttonText}>Update</Text>
              </TouchableOpacity>
               <TouchableOpacity style={styles.bt}>
                              <Text style={styles.buttonText}>Delete</Text>
                            </TouchableOpacity>
                            </View>
        <Box style={styles.cardBody}>
          <Text style={styles.txt}>Project Name</Text>
          <TextInput value={TaskName} editable={true} style={styles.sub_txt} />
          <View style={styles.hr}></View>

          <Text style={styles.txt}>Category</Text>
          <TouchableOpacity style={styles.sub_txt} >
            {image ? (
              <Image style={styles.BgImage} source={require('../assets/task.jpeg')} />
            ) : (
              <MaterialCommunityIcons name="camera" size={30} color="mediumpurple" />
            )}
          </TouchableOpacity>
           <View style={styles.hr}></View>
          <Text style={styles.txt}>Project Description</Text>
          <TextInput value={TaskDetail} editable={true} style={styles.sub_txt} />
          <View style={styles.hr}></View>

          <Text style={styles.txt}>Number of Workers</Text>
          <TextInput value={0} editable={true} style={styles.sub_txt} />
          <View style={styles.hr}></View>

            <Text style={styles.txt}>Name of Workers</Text>
            <TextInput value={TaskDetail} editable={true} style={styles.sub_txt} />
            <View style={styles.hr}></View>

          <Text style={styles.txt}>Start Date</Text>
          <TextInput value={'Date Placeholder'} editable={false} style={styles.sub_txt} />
          <View style={styles.hr}></View>
          <Text style={styles.txt}>End Date</Text>
          <TextInput value={'Date Placeholder'} editable={false} style={styles.sub_txt} />
           <View style={styles.hr}></View>

          <Text style={styles.txt}>Time</Text>
          <TextInput value={'Time Placeholder'} editable={false} style={styles.sub_txt} />




        </Box>
</ScrollView>

      </View>
    </ImageBackground>
       </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  sub_txt: {
    paddingHorizontal: 10,
    fontSize: 15,
    color: 'black',
  },
  bt: {
    marginTop: 10,
    width: 150,
    marginHorizontal: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'mediumpurple',
    paddingVertical: 8,
    marginVertical: 8,
    borderRadius: 20,
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
  BgImage: {
    marginTop: 10,
    width: 140,
    height: 105,
    marginBottom: 10,
  },
  cardBody: {
    backgroundColor: 'white',
    height: 'auto',
    width: 329,
    borderColor: 'mediumpurple',
    borderWidth: 2,
    marginTop: 10,
    marginBottom: '10%',
    borderRadius: 20,
  },
  hr: {
    width: '100%',
    height: 2,
    backgroundColor: 'mediumpurple',
    marginTop: 6,
  },
});
