export type ALLProductInterFace = Products[]

export interface Products {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
  total:number

}

export interface Rating {
  rate: number
  count: number
}
