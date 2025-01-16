/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 정적 파일 생성 모드 활성화
  basePath: "/GridCSS", // 리포지토리 이름
  assetPrefix: "/GridCSS/", // 정적 자산 경로 설정
};

module.exports = nextConfig;
