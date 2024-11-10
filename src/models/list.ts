export interface List {
  data: UserPreview[];
  total: number;
  page: number;
  limit: number;
}

export interface UserPreview {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

export interface UserFull {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
  gender: string;
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  location: Location;
}

export interface Location {
  street: string;
  city: string;
  state: string;
  country: string;
  timezone: string;
}
