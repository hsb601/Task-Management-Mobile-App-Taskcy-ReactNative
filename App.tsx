import 'react-native-gesture-handler';
import { StyleSheet, Text, View,TextInput, Modal, FlatList, SafeAreaView, Image, ImageBackground, ActivityIndicator, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Profile from './pages/profile';
import Project from './pages/project';
import PromptScreen from './pages/prompt';
import HomeScreen from './pages/home';
import React,{useEffect,useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';
import StackNavigation from './StackNavigation';

const CustomDropDown = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [Name, setName] = useState('');
  const [Description, setDescription] = useState('');
  const [Category, setCategory] = useState('');
  const [Numbers, setNumber] = useState('');
  const [workersName, setWorkersName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const showStartDate = () => setShowStartDatePicker(true);
  const showEndDate = () => setShowEndDatePicker(true);

    const handleStartDateChange = (event, selectedDate) => {
      setShowStartDatePicker(Platform.OS === 'ios'); // Hide the picker on iOS, show on Android
      if (selectedDate) {
        setStartDate(selectedDate);
      }
    };

    const handleEndDateChange = (event, selectedDate) => {
      setShowEndDatePicker(Platform.OS === 'ios'); // Hide the picker on iOS, show on Android
      if (selectedDate) {
        setEndDate(selectedDate);
      }
    };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModal2 = () => {
      setModalVisible2(!isModalVisible2);
    };

  const categoryOptions = [
    { label: 'Hardware', value: 'Hardware' },
    { label: 'Software', value: 'Software' },
    { label: 'Networking', value: 'Networking' },
    // Add more options as needed
  ];
  const handleSave = () => {
    // Add your logic for saving data or performing actions here
    console.log('Name:', Name);
    console.log('Description:', Description);
    console.log('StartDate:', startDate);
    console.log('EndDate:', endDate);

    // Close the modal after saving
    toggleModal();
  };

  return (
    <View >
      <View style={styles.dropdownContainer}>
        <TouchableOpacity onPress={toggleModal} style={styles.Box}>
          <Text style={styles.sub_txt}><Icon name="edit" size={20} color="black" />  Create Task</Text>
        </TouchableOpacity>
         <Modal visible={isModalVisible} animationType="slide" transparent={true}>
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Task Details</Text>

                    <TextInput
                      placeholder="Task Name"
                      style={styles.input}
                      value={Name}
                      onChangeText={(text) => setName(text)}
                    />
                    <TextInput
                                          placeholder="Task Description"
                                          style={styles.input}
                                          value={Description}
                                          onChangeText={(text) => setDescription(text)}
                                        />

                          {/* Start Date Input */}
                              <View>
                                <Text style={styles.label}>Start Date</Text>
                                <TouchableOpacity onPress={showStartDate}>

                                    <Text  style={styles.input}>
                                      {startDate ? startDate.toDateString() : 'Select Start Date'}
                                    </Text>

                                </TouchableOpacity>
                                {showStartDatePicker && (
                                  <DateTimePicker
                                    testID="startDatePicker"
                                    value={startDate || new Date()}
                                    mode="date"
                                    is24Hour={true}
                                    display="default"
                                    onChange={handleStartDateChange}
                                  />
                                )}
                              </View>

                              {/* End Date Input */}
                              <View>
                                <Text style={styles.label}>End Date</Text>
                                <TouchableOpacity onPress={showEndDate}>

                                    <Text  style={styles.input}>
                                      {endDate ? endDate.toDateString() : 'Select End Date'}
                                    </Text>

                                </TouchableOpacity>
                                {showEndDatePicker && (
                                  <DateTimePicker
                                    testID="endDatePicker"
                                    value={endDate || new Date()}
                                    mode="date"
                                    is24Hour={true}
                                    display="default"
                                    onChange={handleEndDateChange}
                                  />
                                )}
                              </View>
                    <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
                      <Text style={styles.saveButtonText}>Save</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={toggleModal} style={styles.closeButton2}>
                      <Text style={styles.closeButtonText2}>Close</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
        <TouchableOpacity onPress={toggleModal2} style={styles.Box}>
          <Text style={styles.sub_txt}><Icon name="plus-square-o" size={20} color="black" />  Create Project</Text>
        </TouchableOpacity>
          <Modal visible={isModalVisible2} animationType="slide" transparent={true}>
                        <View style={styles.modalContainer}>
                          <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Project Details</Text>

                            <TextInput
                              placeholder="Project Name"
                              style={styles.input}
                              value={Name}
                              onChangeText={(text) => setName(text)}
                            />
                            <Text style={styles.label}>Project Category</Text>
                            <View   style={styles.input} >
                                 <RNPickerSelect
                                   placeholder={{ label: 'Select a category', value: null }}
                                   items={categoryOptions}
                                   onValueChange={(value) => setCategory(value)}
                                   value={Category}
                                   style={pickerSelectStyles}
                                 />
                                 </View>
                            <TextInput
                                                   placeholder="Number of Workers"
                                                   style={styles.input}
                                                   value={Numbers}
                                                   onChangeText={(text) => setNumber(text)}
                                                    keyboardType="numeric"
                                                 />
                           <TextInput
                                                     placeholder="Workers Name"
                                                     style={styles.input}
                                                     value={workersName}
                                                     onChangeText={(text) => setWorkersName(text)}
                                                   />
                            <TextInput
                                                  placeholder="Project Description"
                                                  style={styles.input}
                                                  value={Description}
                                                  onChangeText={(text) => setDescription(text)}
                                                />

                                  {/* Start Date Input */}
                                      <View>
                                        <Text style={styles.label}>Start Date</Text>
                                        <TouchableOpacity onPress={showStartDate}>

                                            <Text  style={styles.input}>
                                              {startDate ? startDate.toDateString() : 'Select Start Date'}
                                            </Text>

                                        </TouchableOpacity>
                                        {showStartDatePicker && (
                                          <DateTimePicker
                                            testID="startDatePicker"
                                            value={startDate || new Date()}
                                            mode="date"
                                            is24Hour={true}
                                            display="default"
                                            onChange={handleStartDateChange}
                                          />
                                        )}
                                      </View>

                                      {/* End Date Input */}
                                      <View>
                                        <Text style={styles.label}>End Date</Text>
                                        <TouchableOpacity onPress={showEndDate}>

                                            <Text  style={styles.input}>
                                              {endDate ? endDate.toDateString() : 'Select End Date'}
                                            </Text>

                                        </TouchableOpacity>
                                        {showEndDatePicker && (
                                          <DateTimePicker
                                            testID="endDatePicker"
                                            value={endDate || new Date()}
                                            mode="date"
                                            is24Hour={true}
                                            display="default"
                                            onChange={handleEndDateChange}
                                          />
                                        )}
                                      </View>
                            <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
                              <Text style={styles.saveButtonText}>Save</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={toggleModal2} style={styles.closeButton2}>
                              <Text style={styles.closeButtonText2}>Close</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </Modal>
        <TouchableOpacity onPress={() => console.log('Item 3 pressed')} style={styles.Box}>
          <Text style={styles.sub_txt}><Icon name="users" size={20} color="black" />  Create Team</Text>
                </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Item 4 pressed')} style={styles.Box}>
          <Text style={styles.sub_txt}> <Icon name="clock-o" size={22} color="black" />  Create Event</Text>
                </TouchableOpacity>
        <TouchableOpacity onPress={onClose}>
          <View style={styles.closeButton}>
            <Icon name="times" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const CustomTabBarButton = ({ accessibilityState }) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <TouchableOpacity onPress={() => setIsDropDownVisible(!isDropDownVisible)}>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: '#6A5ACD',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 15,
          }}
        >
          <Icon name="plus" size={20} color="white" />
        </View>
      </TouchableOpacity>
      <CustomDropDown isVisible={isDropDownVisible} onClose={() => setIsDropDownVisible(false)} />
    </View>
  );
};


const Tab = createBottomTabNavigator();
export default function App() {
//   const { image, userName, isLogged, setIsLogged } = useUserData();
const [isLogged, setIsLogged] = useState(false);

          return (
           <SafeAreaView style={styles.BottomNavBackground}>
                <NavigationContainer>
                  <Tab.Navigator
                     initialRouteName= {isLogged ? "Home" : "Add"}
                    screenOptions={{
                      tabBarShowLabel: false,
                      tabBarStyle: {
                        display: 'flex',
                      },
                      headerStyle: {
                        backgroundColor: 'white',
                      },
                      headerTintColor: 'white',
                      headerTitleAlign: 'center',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                        color: 'black',
                      },
                    }}
                  >
                    <Tab.Screen
                      name="Home"
                      component={HomeScreen}
                      options={{
                        tabBarIcon: ({ color, size }) => <Icon name="home" size={size} color={color} />,
                      }}
                    />
                    <Tab.Screen
                      name="Project"
                      component={Project}
                      options={{
                        tabBarIcon: ({ color, size }) => <Icon name="folder" size={size} color={color} />,
                      }}
                    />
                        <Tab.Screen
                                         name="Add"
                                         component={StackNavigation}
                                         options={{
                                           tabBarButton: () => (
                                             <CustomTabBarButton>
                                             </CustomTabBarButton>
                                           ),
                                           headerShown: false, tabBarStyle: { display: 'none' },
                                                                                                           tabBarVisible: false,
                                         }}
                                       />
                    <Tab.Screen
                      name="Prompt"
                      component={PromptScreen}
                      options={{
                        tabBarIcon: ({ color, size }) => <Icon name="comment" size={size} color={color} />,
                      }}
                    />
                    <Tab.Screen
                      name="Profile"
                      component={Profile}
                      options={{
                        tabBarIcon: ({ color, size }) => <Icon name="user" size={size} color={color} />,
                      }}
                    />
                  </Tab.Navigator>
                </NavigationContainer>
              </SafeAreaView>
          );
        }
const styles = StyleSheet.create({

 sub_txt: {
      fontSize: 18,
      color: 'black',
      textAlign: 'left',
       marginHorizontal: 10,
       marginVertical: 10,

    },
    dropdownContainer: {

        width: 400,
        height: 750,
        backgroundColor: 'white',
        elevation: 5,
        padding: 30,
       flexDirection: 'column',
      marginHorizontal: 20,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    paddingHorizontal: 40,
    paddingVertical: 10,

       // marginHorizontal: 20,
      },
      closeButton: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: '#6A5ACD',
       alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        marginHorizontal: 145,
      },
       Box: {

                  borderRadiusColor: '#fafafa',
                  borderColor: '#D8D8D8', // Set the border color here
                  borderWidth: 1,
                  borderRadius: 20,
                  alignSelf: 'left',
                  paddingHorizontal: 10,
                   paddingVertical: 5,
                   marginVertical: 10,
                  shadowColor: '#000',
                  },

  drawerHeaderContainer: {
  marginTop:51.5,
    height: 100,
  },
  BottomNavBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
   buttonText: {
      fontSize: 18,
      marginHorizontal: 12,
      color: 'black',
      fontWeight: '500',
    },
    bt: {
        marginTop: 10,
        width: 250,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#deb887',
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

        button: {
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
        },
        buttonText: {
          color: 'white',
          fontSize: 16,
        },
        modalContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        modalContent: {
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 10,
          width: 300,
        },
        modalTitle: {
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 10,
        },
        input: {
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 5,
          padding: 8,
          marginBottom: 10,
        },
        saveButton: {
          backgroundColor: 'mediumpurple',
          padding: 10,
          borderRadius: 5,
          alignItems: 'center',
        },
        saveButtonText: {
          color: 'white',
          fontSize: 16,
        },
        closeButton2: {
          backgroundColor: 'red',
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
          alignItems: 'center',
        },
        closeButtonText2: {
          color: 'white',
          fontSize: 16,
        },
        label: {
            fontSize: 16,
            marginBottom: 5,
            color: 'black',
          },
          inputContainer: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 10,
            justifyContent: 'center',
            padding: 10,
          },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
};
