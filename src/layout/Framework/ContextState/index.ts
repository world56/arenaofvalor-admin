import { createContext } from 'react';

export interface NavigationContextProps {
    navShow: boolean;
    changeNavBar(): void;
};

export default createContext<NavigationContextProps>({
    navShow: false,
    changeNavBar: function () { }
});