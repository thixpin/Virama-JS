
var uniText = 'ပြည်ထောင်စု သင်္ကြန်';
var zgText = 'ျပည္ေထာင္စု သၾကၤန္';

function add2id(id,text){
    var elm = document.getElementById(id);
    elm.innerHTML = text;
}

function tester (id, fn, input) {

    
    if(input){
        var fnText = 'Virama.'+fn+'("'+input+'");';
    } else {
        var fnText = 'Virama.'+fn+'();';
    }
    add2id('t'+id,fnText);

    var result = Virama[fn](input);
    if(input){
        var result = Virama[fn](input);
    } else {
        var result = Virama[fn]();
    }

    add2id('r'+id, result);

    if(fn == 'read'){
        var elm = document.getElementById('r'+id);
        elm.style.fontFamily = "initial";
    }
}

tester('01', 'getBrowserFont', false);
tester('02', 'isUnicodeUser', false);
tester('03', 'write', zgText);
tester('04', 'write', uniText);
tester('05', 'read', uniText);
tester('06', 'uni2zg', uniText);
tester('07', 'zg2uni', zgText);

add2id('current', Virama.getBrowserFont());
add2id('head', Virama.getBrowserFont());
add2id('next', Virama.isUnicodeUser() ? "Zawgyi-One" : 'Unicode');

