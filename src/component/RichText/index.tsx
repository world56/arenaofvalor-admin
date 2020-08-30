import React from 'react';
import styles from './index.styl?';
import EditText from '@/utils/editText/index';

class RichText extends React.Component {

    private readonly edit: EditText;

    public constructor(props: {}) {
        super(props);
        this.edit = new EditText('#class-rich-text');
    };

    public componentDidMount() {
        this.edit.create();
    };

    public componentWillUnmount() {
        this.edit.unmount();
    };

    public render() {
        return (
            <div
                id='class-rich-text'
                className={styles.richText} />
        );
    };

};

export default RichText;