import { createContext } from 'react';

export interface ContextProps {
    navShow: boolean;
    changeNavBar(): void;
};

export default createContext<ContextProps>({
    navShow: false,
    changeNavBar: function () { }
});