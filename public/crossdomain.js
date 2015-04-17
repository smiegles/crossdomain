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
    'getParams' : function() {
        var response = '';
        for (i in this.param) {
            response += '<param name="' + i + '" value="' + this.param[i] + '" />';
        }

        return response;
    },
    'getAttributes' : function() {
        var response = '';
        for (i in this.attr) {
            response += ' ' + i + '="' + this.attr[i] + '"';
        }

        return response;
    },
    /*
     * This functions implements the flash object on the page.
     * @param string src
     * @return void
     */
    'create': function (element) {
        var i;
        this.attr.type = 'application/x-shockwave-flash';
        if (window.ActiveXObject) {
            this.attr.classid = 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000';
            this.param.movie = this.file;
        }
        else {
            this.attr.data = this.file;
        }
        var response = '<object' + this.getAttributes() + '>' + this.getParams() + '</object>';

        if(element !== undefined) {
            var dump = document.querySelector(element);
            dump.innerHTML = response;
            return true; 
        }

        document.write(response);
    },
    /*
     * Set the domain to target
     * @param string target
     * @return void
     */
    'setTarget' : function(target) {
        this.target = target;
    }
    /*
     * Set the flash files location
     * @param string file
     * @return void
     */
    'setTarget' : function(file) {
        this.file = file;
    }
};
sendToJavaScript = crossdomain.callback;

crossdomain.setTarget('http://www.olivierbeg.nl/');
crossdomain.setFile('crossdomain.swf');
crossdomain.create();