var request = {};

request.getParameter = function (p_name) {
    var v_jusoVal = location.href;
    if(v_jusoVal.indexOf("?") == -1){
        return null;
    }
    // ? 오른쪽 문자열만 빼기
    v_jusoVal = v_jusoVal.split("?")[1].split("&") ;
    // 내용이 =이 포함되어서 넘어오는 경우가 있어서
    // 디코딩을 나중으로 옮김
    for(var i=0; i<v_jusoVal.length; i++){
        if( decodeURIComponent (v_jusoVal[i].split("=")[0]) == p_name ){
              return decodeURIComponent (v_jusoVal[i].split("=")[1]);
        }
     }
}
// 과제 같은이름 여러개 넘어올때
request.getParameterValues = function(p_name) {
    var v_jusoVal = location.href;
    var v_vals = [];
    if(v_jusoVal.indexOf("?") == -1){
        return null;
    }
    // ? 오른쪽 문자열만 빼기
    v_jusoVal = decodeURIComponent(v_jusoVal.split("?")[1]).split("&") ;
    for(var i=0; i<v_jusoVal.length; i++){
        if(v_jusoVal[i].split("=")[0] == p_name ){
            v_vals.push(v_jusoVal[i].split("=")[1]);
        }
     }
     return v_vals;

}