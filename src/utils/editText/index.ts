
import tinymce from 'tinymce';
import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/skins/ui/oxide/content.min.css';
import 'tinymce/themes/silver';
import 'tinymce/themes/silver/theme';
import lodash from 'lodash';
import { EDIT_CONFIG } from './config';
import { RICH_TEXT_KEY } from '@/config/appKey';
import { Editor } from 'tinymce/index';
import './lang';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/wordcount';
import 'tinymce/plugins/visualchars';
import 'tinymce/plugins/hr';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/media';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/table';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/imagetools';
import 'tinymce/plugins/print';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/code';
import 'tinymce/icons/default';
import 'tinymce/icons/default/icons.min';

// import 'tinymce/skins/ui/oxide/skin.min.css';
// import 'tinymce/skins/ui/oxide/content.min.css';

// require('tinymce/skins/ui/oxide/skin.min.css')
// require('tinymce/skins/ui/oxide/content.min.css')

export class EditorUtils {

    public id: string;

    private edit: Editor;

    public value: string = '';

    private readonly RICH_TEXT_KEY: RICH_TEXT_KEY = RICH_TEXT_KEY;

    protected config: typeof EDIT_CONFIG & { selector?: string; } = EDIT_CONFIG;

    public constructor(
        protected readonly ELE_ID?: string,
    ) {
        this.edit = tinymce;
        this.id = this.createEleID(ELE_ID);
    };

    public onChange = (val: string) => {
        this.value = val;
    };

    protected registerEvent = (ele: Editor) => {
        this.edit = ele;
        ele.on('keyup change', lodash.debounce(() => {
            this.onChange(ele.getContent());
        }, 100));
    };

    public create() {
        this.config.selector = `#${this.id}`;
        tinymce.init(this.config);
        this.config.setup = this.registerEvent;
        this.CSSPrivate();
    };

    public unmount(): void {
        this.edit.remove();
    };

    private CSSPrivate = (): void => {
        const ele = document.getElementById(this.id);
        ele?.attachShadow({ mode: 'closed' });
    };

    public setContent = (val: string) => {
        this.edit?.setContent(val);
    };


    private createEleID(ELE_ID?: string) {
        return ELE_ID ? ELE_ID : `rich-text-${new Date().valueOf()}`;
    };

};
