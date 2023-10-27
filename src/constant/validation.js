//유효성검사 정규표현식
export const RegExp = {
    ID_RegExp : /^[A-Za-z0-9]{5,20}$/,
    PW_RegExp : /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/,
    NAME_RegExp : /^[A-Za-z가-힣]{1,5}$/,
    EMAIL_RegExp : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
}

//유효성 경고 문구
export const invalidText = {
    id : "아이디 형식에 맞지 않습니다",
    pw : "비밀번호 형식에 맞지 않습니다",
    name : "닉네임 형식에 맞지 않습니다",
    email : "이메일 형식에 맞지 않습니다"
}
