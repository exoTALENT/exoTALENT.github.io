var i=0;
setInterval(function(){
    var titles=[
"|s|",
"|sk|",
"|ske|",
"|skee|",
"|skeet|",
"|skeet.|",
"|skeet.l|",
"|skeet.le|",
"|skeet.leg|",
"|skeet.lega|",
"|skeet.legac|",
"|skeet.legacy|",
"|skeet.legacy|",
"|skeet.legacy|",
"|skeet.legac|",
"|skeet.lega|",
"|skeet.leg|",
"|skeet.le|",
"|skeet.l|",
"|skeet.|",
"|skeet|",
"|skee|",
"|ske|",
"|sk|",
"|s|",
"||",
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 500);

