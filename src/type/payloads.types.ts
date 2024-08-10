export type APIResponsePayload = {
  data: any;
  message: string;
  success: boolean;
};

export type AdminResponsePayload = {
  siteId: string;
  role: string;
  email: string;
  staffId: string;
  title: string;
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  gender: string;
  dob: string;
  address: string;
  alternateAddress: string;
  city: string;
  state: string;
  country: string;
  countryCode: string;
  zipCode: string;
  profilePic: string;
  religion: string;
  maritalStatus: string;
  id: string;
  createdAt: Date;
};
