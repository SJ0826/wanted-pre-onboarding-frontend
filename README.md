# wanted-pre-onboarding-frontend 선발 과제 :computer:

## 배포 링크 및 데모 영상
* 배포 링크 : https://wanted-pre-onboarding-frontend-chi-seven.vercel.app/
## 프로젝트 실행 방법
1. `git clone https://github.com/SJ0826/wanted-pre-onboarding-frontend.git`

2. `cd wanted-pre-onboarding-frontend.git`

3. `npm install`

4. `npm start`

## 사용 기술 및  라이브러리
* React
* TypeScript
* React Router
* Axios
* Styled Components
* React-Icons
* eslint
* prettier
* husky


## 프로젝트 설명
이번 프로젝트는 원티드 프리온보딩 선발과제를 위한 목적입니다.

프로젝트에서 구현한 사항은 다음과 같습니다.


#### [Assignment1] 이메일과 비밀번호 유효성 검사 
* 이메일 조건: `@` 포함
* 비밀번호 조건: 8자 이상
* 이메일과 비밀번호 조건이 만족할 때만 버튼 활성화

#### [Assignment2] 로그인 API 호출
* 로그인 API를 호출해서 올바른 응답시 `/todo`경로로 이동
* 로그인 성공시 응답받은 JWT를 로컬 스토리지에 저장

#### [Assignment3] 로그인 여부에 따른 리다이렉트 처리
* 로컬 스토리지에 토큰이 있는 상태로 `/`페이지에 접속시, `/todo`경로로 이동
* 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속시, `/`경로로 이동

#### [Assignment4] 투두리스트 목록 렌더링 및 완료 여부 토글, 추가 기능 구현
* `/todo`경로에 접속하면 투두리스트로 이동
* 투두리스트 페이지에 투두리스트의 내용과 완료 여부 표시
* 투두리스트 페이지에 입력창과 추가버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 투두리스트에 추가

#### [Assignment5] 투두리스트 수정, 삭제 기능 구현
* 투두아이템 우측에 수정버튼을 추가하고 클릭시 수정모드 활성화
* 수정모드에서 투두아이템 우측에 제출버튼과 취소버튼 추가하고 클릭시 수정 내용 제출 및 수정모드 취소
* 투두아이템 우측에 삭제버튼 추가하고 버튼 클릭시 해당 투두 아이템 삭제

