const getAlertScript = msg => `<script>alert("${msg}");history.back();</script>`;

const errorHandler = (err, req, res, next) => {
    switch (err.message) {
        case 'BAD_REQUEST':
            return res.send(getAlertScript('입력한 내용이 올바르지 않습니다. 입력값이 정확한지, 너무 길거나 비어 있지 않은지 확인해 주세요.'));
        case 'UNAUTHORIZED':
            return res.send(getAlertScript('로그인 정보가 정확하지 않습니다.'));
        case 'NOT_FOUND':
            return res.send("404 Not Found");
        default:
            if (process.env.MODE !== 'prod') console.error('\x1b[31m%s\x1b[0m', err);
            return res.send(getAlertScript('오류가 발생했습니다. 이미 존재하는 계정으로 회원가입을 시도하거나, 여러 번 동일 과목을 수강신청을 시도했을 수 있습니다.'));
    }
};

module.exports = { errorHandler };