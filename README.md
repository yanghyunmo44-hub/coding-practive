# 비밀번호 유출 확인 (Password Leak Checker) 🔐

이 프로젝트는 사용자의 비밀번호가 과거의 데이터 유출 사고에 포함되었는지 안전하게 확인해주는 웹 애플리케이션입니다.

## 🔗 실시간 서비스 주소
[https://yanghyunmo44-hub.github.io/coding-practive/](https://yanghyunmo44-hub.github.io/coding-practive/)

## ✨ 주요 기능
- **안전한 비밀번호 확인**: 비밀번호를 직접 서버로 보내지 않고, 브라우저 내에서 SHA-1 해싱을 통해 안전하게 처리합니다 (HIBP API 사용).
- **테마 전환**: 다크 모드와 라이트 모드를 지원하며 사용자의 설정을 기억합니다.
- **반응형 디자인**: PC와 모바일 모든 환경에서 최적화된 화면을 제공합니다.
- **광고 영역**: 상단과 하단에 광고 배치를 위한 구역이 마련되어 있습니다.

## 🛠 사용 기술
- HTML5
- CSS3 (Modern Baseline Features, CSS Variables)
- JavaScript (ES6+, Web Crypto API)
- GitHub Pages (Deployment)

## 🔒 보안 안내
입력된 비밀번호는 절대 어디로도 전송되지 않습니다. 비밀번호의 해시값 중 앞 5자리만을 API 서버에 보내어 대조하는 방식을 사용하여 개인정보를 보호합니다.
