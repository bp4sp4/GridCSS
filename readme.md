# 초기 설정

<h2>트러블 슈팅</h2>

- 최상위 루트에서 images/이미지들 여서 이미지가 404 떴지만
- public폴더를 만들고 그안에 images/이미지를 넣고
- 경로를 바꿨다.

```
  "images": [
    {
      "name": "48.jpg",
      "path": "/images/48.jpg"
    },
```

1. npm init -y package.json

```
"license": "MIT",

 "scripts": {
    "dev": "next dev"  // 바꾸기
  },
```

2. npm install, next, react-dom 최신 버전 다운

```
npm install react@latest next@latest react-dom@latest
```

3. 최상위 폴더에 파일 app/page.tsx 생성
4. npm run dev 타입스크립트 다운 끝
