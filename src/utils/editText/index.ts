import tinymce from 'tinymce';
import { EDIT_CONFIG } from './config';
import { RICH_TEXT_KEY } from '@/config/appKey';
import { Editor as TINYMCE_CONFIG } from 'tinymce/index';
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

class EditText {

    protected readonly selector: string;

    private readonly edit: TINYMCE_CONFIG;

    private readonly RICH_TEXT_KEY: RICH_TEXT_KEY = RICH_TEXT_KEY;

    protected config: EDIT_CONFIG & { selector?: string; } = EDIT_CONFIG;

    public constructor(
        protected readonly ElementID: string,
    ) {
        this.edit = tinymce;
        this.selector = ElementID;
    };

    public create(): TINYMCE_CONFIG {
        this.config.selector = this.selector;
        tinymce.init(this.config);
        this.CSSPrivate();
        return tinymce;
    };

    public unmount(): void {
        this.edit.remove();
    };

    private CSSPrivate = (): void => {
        const { selector: id } = this;
        const ele = document.getElementById(id);
        ele?.attachShadow({ mode: 'closed' });
    };

};

export default EditText;
