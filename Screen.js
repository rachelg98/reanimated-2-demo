import {View} from 'react-native';
import React from 'react';
import {Bezier} from './Animations/Reanimated/Bezier';
import {Spring} from './Animations/Reanimated/Spring';
import {GestureAnimation} from './Animations/Reanimated/Gesture';
import {SlideIn} from './Animations/Animated/SlideIn';

export default function AnimatedStyleUpdateExample(props) {
  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Bezier />
        <Spring />
        <GestureAnimation />
        {/* <SlideIn /> */}
      </View>
    </>
  );
}
