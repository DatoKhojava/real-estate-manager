export interface Estate {
  id: number;
  address: string;
  zip_code: string;
  price: number;
  area: number;
  bedrooms: number;
  is_rental: boolean;
  image: string;
  city_id: number;
  city: City;
}

export interface City {
  id: number;
  name: string;
  region_id: number;
  region: Region;
}

export interface Region {
  id: number;
  name: string;
}

export interface FormInput {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  // file: FileList;
}
