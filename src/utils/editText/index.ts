import tinymce from 'tinymce';
import lodash from 'lodash';
import { EDIT_CONFIG } from './config';
import { RICH_TEXT_KEY } from '@/config/appKey';
import { Editor } from 'tinymce/index';
import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/skins/ui/oxide/content.min.css';
import './language';
import 'tinymce/themes/silver/theme';
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
import 'tinymce/plugins/emoticons/js/emojis.min.js';
import 'tinymce/themes/silver';
import 'tinymce/icons/default/icons.min';

export class EditorUtils {

    public readonly id: string;

    private edit: Editor | null = null;

    public value: string = '';

    private readonly RICH_TEXT_KEY: RICH_TEXT_KEY = RICH_TEXT_KEY;

    protected config: EDIT_CONFIG & { selector?: string; } = EDIT_CONFIG;

    public constructor(
        protected readonly ElementID: string,
    ) {
        this.id = ElementID;
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
        this.config.setup = this.registerEvent;
        tinymce.init(this.config);
        this.CSSPrivate();
    };

    public unmount(): void {
        tinymce.remove();
    };

    private CSSPrivate = (): void => {
        const ele = document.getElementById(this.id);
        ele?.attachShadow({ mode: 'closed' });
    };

    public setContent = (val: string) => {
        this.edit?.setContent(val);
    };

};

export function createEditorId() {
    return `rich-text-${new Date().valueOf()}`;
}