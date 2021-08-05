import React, {useRef, useEffect} from 'react';
import {Animated, Text, View, Button} from 'react-native';

export const SlideIn = (props) => {
  const anim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  const AnimatedView = () => (
    <Animated.View // Special animatable View
      style={{
        width: 250,
        height: 50,
        backgroundColor: 'powderblue',
        transform: [{translateX: animateSlideIn}], // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );

  const onPress = () => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const animateSlideIn = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 100],
  });

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <AnimatedView>
        <Text style={{fontSize: 16, textAlign: 'center', margin: 10}}>
          Slide in
        </Text>
      </AnimatedView>
      <Button onPress={onPress} title={'Fading In'} />
    </View>
  );
};
