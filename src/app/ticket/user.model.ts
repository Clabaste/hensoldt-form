interface Address {
  "Street": string,
  "City": string,
  "State": string,
  "ZipCode": string,
  "Country": string
}

export interface Person {
  'oda.metadata': string,
  PersonID: number,
  Age: number,
  Gender: boolean,
  Phone: string,
  Address: Address
}





