function toUNIXtimestamp (time) {
    return Date.parse(new Date(time))/1000;
};

function toJStime (time) {
    var date = new Date(time*1000);
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds(); 
    return Y + M + D + h + m + s;
};