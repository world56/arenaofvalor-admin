import React from 'react';
import { Breadcrumb } from 'antd';
import styles from './index.styl?';


const AddressBar: React.FC = () => {

    return (
        <Breadcrumb className={styles.addressBar}>

            <Breadcrumb.Item>
                Home
            </Breadcrumb.Item>

            <Breadcrumb.Item>
                Application Center
            </Breadcrumb.Item>

            <Breadcrumb.Item>
                Application Center
            </Breadcrumb.Item>

            <Breadcrumb.Item>
                An Application
            </Breadcrumb.Item>

        </Breadcrumb>
    );
};

export default AddressBar;