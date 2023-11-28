import React, {useRef, useEffect, ReactNode} from 'react';
import {StyleSheet, Animated} from 'react-native';

export const FadeContainer = ({children}: {children: ReactNode}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.fadeContainer, {opacity: fadeAnim}]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  fadeContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
