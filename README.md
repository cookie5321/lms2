# LMS

Git, Docker, Node.js가 설치되어 있는 리눅스 환경에서 다음 명령을 실행합니다. (Node.js v18.19.0 환경에서 테스트되었습니다.)
```
git clone https://github.com/cookie5321/lms2.git
cd lms2
sudo docker compose up -d
npm run start
```

`http://localhost:3000`으로 접속합니다.