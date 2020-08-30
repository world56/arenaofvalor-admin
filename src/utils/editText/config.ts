
const plugins = 'advlist table wordcount hr visualchars code charmap lists insertdatetime paste preview fullscreen media print link image';
const toolbar = `fontselect fontsizeselect forecolor backcolor bold italic underline strikethrough | resources preview | alignleft aligncenter alignright alignjustify | imageUpload quicklink blockquote numlist bullist`;
const font_formats = "微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;";
const fontsize_formats = '14px 15px 16px 17px 18px 19px 20px 21px 22px 23px 24px 25px 26px 27px 28px 29px 30px 32px 48px';

export const EDIT_CONFIG = {
    language: 'zh_CN',
    skin_url: '/oxide',
    browser_spellcheck: true,
    branding: true,
    elementpath: false,
    statusbar: false,
    tinymce: true,
    height: 650,
    paste_data_images: true,
    plugins,
    toolbar,
    paste_image_maxsize: 10,
    font_formats,
    fontsize_formats,
    'distraction-free': true,
};

export type EDIT_CONFIG = typeof EDIT_CONFIG;