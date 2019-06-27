import { Item } from "../../Items/types";

interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    itemList?: Item[];
}

export default User;