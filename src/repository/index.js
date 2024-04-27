import { Products, Cart, Messages, User } from "../dao/factory.js"
import ProductRepository from "./product.repository.js"
import CartRepository from "./product.repository.js"
import MessagesRepository from "./product.repository.js"
import UserRepository from "./product.repository.js"

export const ProductService = new ProductRepository(new Products())
export const CartService = new CartRepository(new Cart())
export const MessagesService = new MessagesRepository(new Messages())
export const UserService = new UserRepository(new User())