import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Pressable } from 'react-native';

const DEFAULT_USER = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  address: '',
};

const SignUpForm = () => {
  const [user, setUser] = useState(DEFAULT_USER);

  const handleInputChange = (
    field: keyof typeof DEFAULT_USER,
    value: string,
  ) => {
    setUser(prevUser => ({
      ...prevUser,
      [field]: value,
    }));
  };

  const handleSignUp = () => {
    // TODO: Implement signup logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Personal Information</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          value={user.firstName}
          onChangeText={text => handleInputChange('firstName', text)}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          value={user.lastName}
          onChangeText={text => handleInputChange('lastName', text)}
          style={styles.input}
        />
      </View>
      <Text style={styles.heading}>Contact Information</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={user.email}
          onChangeText={text => handleInputChange('email', text)}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          value={user.phoneNumber}
          onChangeText={text => handleInputChange('phoneNumber', text)}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          value={user.address}
          onChangeText={text => handleInputChange('address', text)}
          style={styles.input}
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
