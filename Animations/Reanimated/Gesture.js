import React from 'react';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

export const GestureAnimation = (props) => {
  const startingPosition = 50;
  // shared values carry animatable data
  const x = useSharedValue(startingPosition);
  const y = useSharedValue(startingPosition);
  const pressed = useSharedValue(false);

  const eventHandler = useAnimatedGestureHandler(
    {
      // ctx is a js object shared between all callbacks.
      // All gesture handler callbacks will receive the same instance of context
      onStart: (event, ctx) => {
        ctx.y = y.value;
      },
      // touch move
      onActive: (event, ctx) => {
        x.value = event.absoluteX;
        y.value = ctx.y + event.translationY;
        pressed.value = true;
      },
      onEnd: () => {
        pressed.value = false;
      },
    },
    [],
  );

  const styles = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? '#FEEF86' : '#001972',
      transform: [
        {translateX: x.value},
        // {translateY: y.value}
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={eventHandler}>
      <Animated.View
        style={[
          {
            width: 50,
            height: 50,
          },
          styles,
        ]}
      />
    </PanGestureHandler>
  );
};
