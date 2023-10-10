import { create } from 'zustand';

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

interface IUserStore extends IUser {
  user: IUser;
  setFirstName: (firstName: IUser['firstName']) => void;
  setLastName: (lastName: IUser['lastName']) => void;
  setEmail: (email: IUser['email']) => void;
  setPhoneNumber: (phoneNumber: IUser['phoneNumber']) => void;
  setAddress: (address: IUser['address']) => void;
  updateUser: () => void;
}

const useUserStore = create<IUserStore>(set => ({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  address: '',
  user: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
  },
  setFirstName: firstName => set({ firstName }),
  setLastName: lastName => set({ lastName }),
  setEmail: email => set({ email }),
  setPhoneNumber: phoneNumber => set({ phoneNumber }),
  setAddress: address => set({ address }),
  updateUser: () =>
    set(state => {
      return {
        user: {
          ...state.user,
          firstName: state.firstName,
          lastName: state.lastName,
          email: state.email,
          phoneNumber: state.phoneNumber,
          address: state.address,
        },
      };
    }),
}));

export default useUserStore;
