import React, {
    useState,
    useCallback
} from 'react';
import Working from './Working';
import styles from './index.styl?';
import StatusBar from './StatusBar';
import AddressBar from './AddressBar';
import Navigation from './Navigation';
import LayoutRight from './LayoutRight';
import ContextState from './ContextState';
import { PRoutes } from '@/@types/router';

const Home: React.FC<PRoutes> = props => {

    const [navShow, setNavShow] = useState(false);

    const changeNavBar = useCallback(() => setNavShow(bol => !bol), []);

    const ProviderState = { navShow, changeNavBar };

    return (
        <ContextState.Provider value={ProviderState}>
            <div className={styles.home}>
                <Navigation />
                <LayoutRight>
                    <StatusBar />
                    <AddressBar />
                    <Working {...props} />
                </LayoutRight>
            </div>
        </ContextState.Provider>
    );
};

export default Home;