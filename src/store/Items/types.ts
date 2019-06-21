import { Location } from 'expo';
import { ImageURISource } from "react-native";
import User from "../Auth/models/user";

export type LocationData = Location.LocationData;

export enum ItemType {
    Lost = "lost",
    Found = "found"
}

export interface Item {
    id: string;
    type: string;
    name: string;
    description?: string;
    user: User;
    location?: LocationData;
    timestamp?: number;
    photo?: ImageURISource;
}

export interface ItemsState {
    newItem?: Item;
}