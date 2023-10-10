import React from 'react';
import { View, TextInput, Text, StyleSheet, Pressable } from 'react-native';
import { useAuth } from '../contexts/AuthContext';

const SignUpForm = () => {
  const {
    user,
    updateUser,
    setFirstName,
    setLastName,
    setEmail,
    setPhoneNumber,
    setAddress,
  } = useAuth();

  const handleSignUp = () => {
    updateUser();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Personal Information</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          autoComplete="name"
          defaultValue={user.firstName}
          onChangeText={setFirstName}
          style={styles.input}
          returnKeyType="next"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          autoComplete="family-name"
          defaultValue={user.lastName}
          onChangeText={setLastName}
          style={styles.input}
          returnKeyType="next"
        />
      </View>
      <Text style={styles.heading}>Contact Information</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          autoComplete="email"
          defaultValue={user.email}
          onChangeText={setEmail}
          style={styles.input}
          returnKeyType="next"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          autoComplete="tel"
          defaultValue={user.phoneNumber}
          onChangeText={setPhoneNumber}
          style={styles.input}
          keyboardType="numeric"
          returnKeyType="next"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          autoComplete="street-address"
          defaultValue={user.address}
          onChangeText={setAddress}
          style={styles.input}
          returnKeyType="done"
        />
      </View>
      <Pressable style={styles.submit} onPress={() => handleSignUp()}>
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
};

// TODO: Move input borders/padding to theme
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 24,
    textAlign: 'left',
  },
  heading: {
    fontSize: 18,
    paddingBottom: 14,
    width: 300,
  },
  input: {
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 5,
    paddingVertical: 14,
    width: 300,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
  },
  submit: {
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 5,
    marginTop: 14,
    padding: 24,
    width: 300,
  },
});

export default SignUpForm;
