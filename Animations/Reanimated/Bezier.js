import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  withSpring,
} from 'react-native-reanimated';
import {View, Button} from 'react-native';
import React from 'react';

export const Bezier = (props) => {
  const randomWidth = useSharedValue(10); // new Animated.Value(0)

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width:
        // withTiming(randomWidth.value, config),
        withSpring(randomWidth.value, config),
    };
  });

  return (
    <View style={{}}>
      <Animated.View
        style={[
          {width: 100, height: 80, backgroundColor: 'pink', margin: 30},
          style,
        ]}
      />
      <Button
        title="toggle"
        onPress={() => {
          randomWidth.value = Math.random() * 350;
        }}
      />
    </View>
  );
};
