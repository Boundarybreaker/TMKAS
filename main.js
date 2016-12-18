function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 16; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
    console.log("Got key" + phrase);
}

function encrypt() {
    var phrase = makeid();
    var code = sha256(phrase);
    console.log("got hash" + code);
    var result = document.createElement("P");
	var hash = document.createTextNode(code);
	result.appendChild(hash);
    document.getElementById("hash").innerHTML = "";
    document.getElementById("hash").appendChild(result);
}