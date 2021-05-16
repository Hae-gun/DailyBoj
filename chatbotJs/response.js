function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
    var answer = chkCode(msg);
    // Log.d(answer,true);
    if(answer != ''){
        replier.reply(answer);
    }
}
function chkCode(msg){
    var code;
    if(msg.includes('/')){
        code = msg.slice(1,msg.length);
        // Log.d(code,true);
    }else{
        return '';
    }
    
    if(code.includes('안녕')){
        return '네, 안녕하세요.';
    }

    var answer;
    switch (code) {
        case '설정':
            answer = '설정 입니다.';
            break;
        case '불러오기':
            answer = '불러오기 입니다.';
            break;
        case '메뉴':
            answer = menu();
            break;
        default:
            answer = '알수없는 코드 입니다.';
            break;
    }
    return answer;
}
function menu(){
    var result = '';
    result += '\t사용자 메뉴\n';
    result += '"/명령어" 로 사용이 가능합니다.\n';
    result += '명령어 : 안녕xx, 설정, 불러오기, 메뉴';
    return result;
}