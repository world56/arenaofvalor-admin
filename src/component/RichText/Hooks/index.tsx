import React, {
    memo,
    useEffect,
    useCallback,
    forwardRef,
    useImperativeHandle,
} from 'react';
import styles from '../index.styl?';
import { useEditor, EditorUtils } from '../index';

interface RichTextProps {
    /**
     * @name value 实际上就是个defaultValue 
     */
    value?: string;
    /**
     * @name onChange 监听变化
     * @param val 富文本返回的数据
     * @warning 函数组件一定使用 useCallback
     */
    onChange?: (val: string | void) => void;
};

type RichTextComponent = React.ForwardRefRenderFunction<
    EditorUtils,
    RichTextProps
>;

const { richText } = styles;

const RichText: RichTextComponent = (props, ref) => {

    const { onChange, value } = props;

    const [edit] = useEditor();

    const onKeyup = useCallback((val: string) => {
        onChange && onChange(val);
    }, [onChange]);

    useEffect(() => {
        edit.onChange = onKeyup;
    }, [edit, onKeyup]);

    useEffect(() => {
        value && edit.setContent(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useImperativeHandle(ref, () => edit, [edit]);

    return (
        <div id={edit.id} className={richText} />
    );
};

export default memo(forwardRef(RichText));
