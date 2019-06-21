import { Item } from "../../Items/types";

interface User {
    firstName: string;
    lastName: string;
    email: string;
    itemList: Item[];
}

export default User;