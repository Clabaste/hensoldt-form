
export interface Options {
  name: number,
  desription: string
}

export interface OptionsRespValue {
  "ID": number,
  "Name": string,
  "Description": string,
  "ReleaseDate": string,
  "DiscontinuedDate": Date | null,
  "Rating": number,
  "Price": number
}
export interface OptionsResp {
  'odata.metadata': string,
  value: OptionsRespValue[]
}
export interface Ticket {
  'title': string,
  'products': string
  'desc': string

}



