import { createContext } from "react";

const FirstContext=createContext();
export const FirstProvider=FirstContext.Provider;
export const FirstConsumer=FirstContext.Consumer;