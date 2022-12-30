import React from "react";

import { MzawadieAPI } from "../api";
import { ConfigInput } from "../apollo";

export type MzawadieContextType = { api: MzawadieAPI; config: ConfigInput };

export const MzawadieContext = React.createContext<MzawadieContextType | null>(null);
