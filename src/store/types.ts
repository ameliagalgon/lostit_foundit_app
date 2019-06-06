import { AuthState } from "./Auth/types";
import { ModalsState } from "./Modals/types";

export interface AppState {
    auth?: AuthState;
    modals?: ModalsState;
}