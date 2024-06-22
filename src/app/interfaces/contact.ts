import { User } from "./user"

export interface Contact {
    id: number,
    name: string
    lastName: string
    address : string
    email: string
    image: string
    number: string
    company: string
    user?: User
    userId: number
}

