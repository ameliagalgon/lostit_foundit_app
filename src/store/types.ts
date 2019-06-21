import { AuthState } from "./Auth/types";
import { ModalsState } from "./Modals/types";
import { CameraState } from "./Camera/types";
import {ItemsState} from "./Items/types";

export interface AppState {
    auth?: AuthState;
    modals?: ModalsState;
    camera?: CameraState;
    item?: ItemsState;
}