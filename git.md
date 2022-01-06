최초 깃 시작 시 등록정보
git config --global core.autocrlf inupt
git config --global user.name 'chancharn'
git config --global user.email 'mchank9191@gmail.com'

등록한 정보 확인
git config --global --list

현재 프로젝트에서 버전관리(변경사항 추적)을 시작
git init

깃 상태 확인
git status

깃을 스테이지에 추가
git add .

버전을 생성해서 깃 커밋
git commit -m 'ver.1'

프로젝트 내용 수정 및 추가 (ex/main.js)
git add main.js
git commit -m 'ver.2'

깃 로그 상태
git log

-- 여기까지는 컴퓨터 내에만 등록되어 있는 상태 --
-- 깃허브에서 레퍼지토리 생성 후 --

깃허브에 생성한 원격 저장소와 연결
git remote add origin /생성한 레퍼지토리 주소/

원격 저장소에 업로드 (master 권한으로)
git push origin master

