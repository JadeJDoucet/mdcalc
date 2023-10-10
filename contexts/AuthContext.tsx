import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from 'react';

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

const AuthContext = createContext<{
  user: IUser;
  updateUser: () => void;
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
  setEmail: (value: string) => void;
  setPhoneNumber: (value: string) => void;
  setAddress: (value: string) => void;
}>({
  user: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
  },
  updateUser: () => {},
  setFirstName: () => {},
  setLastName: () => {},
  setEmail: () => {},
  setPhoneNumber: () => {},
  setAddress: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUser>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const [firstName, setFirstName] = useState<IUser['firstName']>('');
  const [lastName, setLastName] = useState<IUser['lastName']>('');
  const [email, setEmail] = useState<IUser['email']>('');
  const [phoneNumber, setPhoneNumber] = useState<IUser['phoneNumber']>('');
  const [address, setAddress] = useState<IUser['address']>('');

  /**
   * Would be far less code to implement something like this, but trying to follow directions verbatim:
   * "... manage form elements as state variables."
   */
  // const updateUserField = (field: keyof IUser, value: string) => {
  //   setUser(prevUser => ({
  //     ...prevUser,
  //     [field]: value,
  //   }));
  // };

  const updateUser = () => {
    setUser({
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        updateUser,
        setFirstName,
        setLastName,
        setEmail,
        setPhoneNumber,
        setAddress,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
