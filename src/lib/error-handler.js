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
            return res.render('error.pug', {
                errorCode: 500,
                errorMsg: 'Internal Server Error',
            });
    }
};

module.exports = { errorHandler };