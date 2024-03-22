export type Product = {
  name: string
  price: number
  quantity: number
  category: string
}

export type Purchase = {
  products: Product[]
  total: number
  date: string
  title: string
}