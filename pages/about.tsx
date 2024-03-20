import { StyleSheet, Text, TouchableOpacity, View,ImageBackground,Linking } from 'react-native';
import { Box, NativeBaseProvider } from 'native-base';
import { Icon } from 'react-native-elements';
import {useEffect} from 'react';
export default function AboutScreen({ navigation }) {
 useEffect(() => {
    navigation.setOptions({
      title: 'About',
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
 const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/haseeb-khan-997b73257');
  };

 const openGmail = async () => {
     const recipient = 'haseebkhanhk601@gmail.com';
     const subject = 'Hello from the Hebrewly';
     const body = 'Type your message here: ';

     const url = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

     const supported = await Linking.canOpenURL(url);

     if (supported) {
       await Linking.openURL(url);
     } else {
       console.log("Don't know how to open this URL:", url);
     }
   };

  const openTwitter = () => {
    Linking.openURL('https://www.twitter.com'); // Replace with the actual Twitter URL
  };
  return (
   <NativeBaseProvider>
     <ImageBackground source={require('../assets/cover.png')} style={{width: '100%', height: '100%'}}>

<View style={styles.container}>
<Box style={styles.cardHeader}>
 <Text  style={styles.subheading}>Task Managemment App (Taskcy)</Text>

</Box>
<Box style = {styles.cardBody}>
<Text style={styles.txt}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Quaerat autem labore voluptas repudiandae voluptatem veniam
                                        tenetur facere neque omnis aperiam, nam deserunt minima ullam
                                        dolore iste eius assumenda consectetur a!</Text>

<Box style = {styles.footer}>

              <TouchableOpacity  style={{ marginLeft: 12 }}   onPress={openLinkedIn}>
                      <Icon name='linkedin' type='font-awesome' color='mediumpurple'/ >
                    </TouchableOpacity>
                    <Text style={styles.txt}>LinkedIn</Text>

                    <TouchableOpacity  style={{ marginLeft: 15 }}   onPress={openGmail}>
                      <Icon name='envelope' type='font-awesome' color='mediumpurple'/>
                    </TouchableOpacity>
                    <Text style={styles.txt}>Gmail</Text>

                    <TouchableOpacity    onPress={openTwitter}>
                      <Icon name='twitter' type='font-awesome' color='mediumpurple'/>
                    </TouchableOpacity>
                    <Text style={styles.txt}>Twitter</Text>
</Box>
</Box>
</View>
</ImageBackground>
</NativeBaseProvider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    height: 60,

    },
         subheading: {
            fontSize: 20,
            fontWeight: '900',
            color: 'mediumpurple',
             paddingHorizontal: 10,
             textAlign: 'center',
          },
           txt:{
              flex: 2,
              fontSize: 15,
              color: 'mediumpurple',
              textAlign: 'left',
              paddingHorizontal: 5,
              fontWeight: '600',
              },
          cardHeader: {
            justifyContent: 'center',
            marginLeft: 1,
            backgroundColor: 'white',
            height: 55,
            width: '100%',



          },
          cardBody:{
           backgroundColor: '#fff',
           height: '24%',
           width: '100%',
          },

          footer: {
            width: '100%',
            paddingVertical: 4,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'white',

          },
            headerLeft: {
              paddingVertical: 4,
              paddingHorizontal: 10,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            },
    });
