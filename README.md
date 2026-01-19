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

### 자동 배포 (CI/CD)

이 프로젝트는 GitHub Actions를 사용하여 자동 배포가 설정되어 있습니다. `main` 또는 `master` 브랜치에 푸시하면 자동으로 빌드 및 배포가 진행됩니다.

#### Vercel 배포 (권장)

1. [Vercel](https://vercel.com)에 가입하고 프로젝트를 생성합니다.
2. GitHub 저장소의 Settings > Secrets and variables > Actions에서 다음 시크릿을 추가합니다:
   - `VERCEL_TOKEN`: Vercel 대시보드의 Settings > Tokens에서 생성
   - `VERCEL_ORG_ID`: Vercel 프로젝트 설정에서 확인
   - `VERCEL_PROJECT_ID`: Vercel 프로젝트 설정에서 확인
3. `.github/workflows/deploy.yml` 파일이 활성화되어 있습니다.

#### GitHub Pages 배포

1. GitHub 저장소의 Settings > Pages에서 GitHub Pages를 활성화합니다.
2. Source를 "GitHub Actions"로 설정합니다.
3. `.github/workflows/deploy-github-pages.yml` 파일이 활성화되어 있습니다.
4. `next.config.ts`에 `output: 'export'` 설정이 필요할 수 있습니다.

#### Netlify 배포

1. [Netlify](https://netlify.com)에 가입하고 프로젝트를 생성합니다.
2. GitHub 저장소의 Settings > Secrets and variables > Actions에서 다음 시크릿을 추가합니다:
   - `NETLIFY_AUTH_TOKEN`: Netlify 대시보드의 User settings > Applications > Personal access tokens에서 생성
   - `NETLIFY_SITE_ID`: Netlify 프로젝트 설정에서 확인
3. `.github/workflows/deploy-netlify.yml` 파일이 활성화되어 있습니다.

### 수동 배포

Vercel을 통해 배포할 수 있습니다. 자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 참조하세요.
