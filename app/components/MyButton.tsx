import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import {colors} from '../colors';

interface MyButtonProps extends TouchableOpacityProps {
  title: string;
}
export function MyButton({title, style, ...rest}: MyButtonProps) {
  return (
    <TouchableOpacity {...rest} style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 8,
<<<<<<< HEAD
    padding: 14,
    minWidth: 70,
=======
    width: '100%',
    height: 50,
>>>>>>> feature/started
  },
});
