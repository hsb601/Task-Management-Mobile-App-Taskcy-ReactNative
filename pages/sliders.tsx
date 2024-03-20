import React, { useEffect, useState, useRef  } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
// import { useUserData } from './authHelpers';
const carouselImages = [
  { img: require('../assets/intro1.png'), text1: 'Task Management', text2: 'Let`s create a space for your workflows.' },
  { img: require('../assets/intro2.png'), text1: 'Task Management', text2: 'Work more Structured and Organized' },
  { img: require('../assets/intro3.png'), text1: 'Task Management', text2: 'Manage Your Tasks quickly for Results✌' },
];

export default function Slider({ navigation }) {
 const [isLogged, setIsLogged] = useState(false);
  const [images, setImages] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
    const carouselRef = useRef(null);

  useEffect(() => {
    setImages(carouselImages);
  }, []);


  const handleSkipPress = () => {
    const targetScreen = isLogged ? 'Home' : 'Login';
    navigation.navigate(targetScreen);
  };
const handleNextPress = () => {
  const nextSlide = (activeSlide + 1) % images.length;
  const limitSlide = nextSlide + 2;

  if (limitSlide == 2) {

     const targetScreen = isLogged ? 'Home' : 'Login';
        navigation.navigate(targetScreen);
        console.log(limitSlide)
  } else {
    setActiveSlide(nextSlide);
       if (carouselRef.current) {
         carouselRef.current.snapToItem(nextSlide);
         console.log(limitSlide)
       }
  }
};




  const renderItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Text style={styles.carouselText1}>{item.text1}</Text>
        <Text style={styles.carouselText2}>{item.text2}</Text>
        <Image style={styles.carouselImage} source={item.img} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
       ref={carouselRef}
        data={images}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveSlide(index)}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeSlide}
        activeDotStyle={styles.activeDotStyle}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.dotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />

      <View style={styles.smallCircle}>
        <TouchableOpacity style={styles.arrowButton} onPress={handleNextPress}>
          <Text style={styles.arrowButtonText}>=&gt;</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.skipButtonContainer}>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkipPress}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  smallCircle: {
    width: Dimensions.get('window').height * 0.3,
    height: Dimensions.get('window').height * 0.3,
    backgroundColor: '#4169e1',
    borderTopRightRadius: 1000,
    borderTopLeftRadius: 600,
    position: 'absolute',
    bottom: Dimensions.get('window').width * -0.25,
    right: Dimensions.get('window').width * -0.4,
  },
  carouselItem: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselText1: {
    position: 'absolute',
    bottom: 250,
    left: 20,
    color: 'mediumpurple',
    fontSize: 16,
  },
  carouselText2: {
    position: 'absolute',
    bottom: 110,
    left: 20,
    color: 'black',
    fontSize: 36,
    marginRight: 50,
  },
  carouselImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    marginBottom: 250,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 16,
   marginBottom: '4%',
  },
  dotStyle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'skyblue',
  },
  activeDotStyle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'white',
  },
  skipButton: {
    position: 'absolute',
     left: 20,
    bottom: 20,
  },
  skipButtonText: {
    color: 'mediumpurple',
    fontSize: 15,
    left: '20%',
  },
  arrowButton: {
    position: 'absolute',
    marginLeft: '5%',
    bottom: 105,
  },
  arrowButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
     textAlign: 'center',
  },
});