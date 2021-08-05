import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {View, Button} from 'react-native';
import React from 'react';

export const Spring = (props) => {
  const offset = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value * 255}],
    };
  });
  return (
    <View style={{}}>
      <Animated.View
        style={[
          {
            width: 80,
            height: 80,
            borderRadius: 10,
            backgroundColor: 'blue',
            margin: 30,
          },
          animatedStyles,
        ]}
      />
      <Button
        onPress={() => {
          offset.value = withSpring(Math.random());
        }}
        title="Move"
      />
    </View>
  );
};
