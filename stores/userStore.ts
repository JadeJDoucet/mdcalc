import { create } from 'zustand';

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

// Define the Zustand store
const useUserStore = create(set => ({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  address: '',
  setFirstName: (firstName: IUser['firstName']) => set({ firstName }),
  setLastName: (lastName: IUser['lastName']) => set({ lastName }),
  setEmail: (email: IUser['email']) => set({ email }),
  setPhoneNumber: (phoneNumber: IUser['phoneNumber']) => set({ phoneNumber }),
  setAddress: (address: IUser['address']) => set({ address }),
}));

export default useUserStore;
