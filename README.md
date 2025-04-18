# Todo App

Next.js와 TypeScript로 만든 투두 앱입니다.

## 기술 스택

- Next.js 14
- TypeScript
- Tailwind CSS
- React

## 시작하기

1. 저장소를 클론합니다:

```bash
git clone <repository-url>
cd todo-app
```

2. 의존성을 설치합니다:

```bash
npm install
# 또는
yarn install
```

3. 개발 서버를 실행합니다:

```bash
npm run dev
# 또는
yarn dev
```

4. 브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인합니다.

## 주요 기능

- 할 일 추가/수정/삭제
- 할 일 완료 체크
- 할 일 목록 필터링

## 프로젝트 구조

```
src/
  ├── app/         # 페이지 컴포넌트
  ├── components/  # 재사용 가능한 컴포넌트
  ├── store/       # 상태 관리
  └── types/       # TypeScript 타입 정의
```

## 배포

Vercel을 통해 배포할 수 있습니다. 자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 참조하세요.
