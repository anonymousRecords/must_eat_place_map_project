# 클라이언트-서버 관계론 이해, 네트워크 필수 지식 정리
서버가 터졌다라는 표현을 종종 쓰는데...
- 카카오톡이 잘 보내질 때
- 게임이 안 돌아갈 때

서버란?
- 클라이언트 요청에 응답

클라이언트와 서버를 다음과 같이 비유해볼 수 있는데...
- 클라이언트는 손님
    - 웹
    - AOS, IOS
    - 게임
- 서버는 홀서빙
    - Apache
    - Nginx
    - Tomcat
    - Express
- 백엔드 언어가 주방장
    - ASP, JSP, PHP
    - Node.js, Express.js
    - Django
- DB는 냉장고
    - MySQL
    - MSSQL
    - Oracle
    - MongoDB

클라이언트와 서버의 관계를 보다 자세히 살펴보면...
- 일반적인 손님과 홀서빙의 관계와 달리, IT의 경우 인터넷을 통해 이루어짐
- 따라서 다음과 같은 순서가 요구됨
    1. IP 가게 위치 = 주소 
        - ex. 3.36.43.123
    2. Domain
        - 인간이 이해하기 힘든 IP를 Domain을 통해 사용함
        - ex. www.naver.com
    3. 문 = Port
        - 가게를 보면 정문, 직원용 출입구, drive thru와 같이 다양한 문이 존재함
        - port에는 숫자가 부여됨
    4. 주문 방식 = protocal
        - 문인 port를 선택하면 어떻게 주문할 지에 대해서도 정해야함
        - protocal의 종류
            - HTTP
            - HTTPS
            - SSH
            - SFTP
            - FTP
            - MySQL
        - 각 protocal마다 자주 사용하는 port가 존재함
        - 각 주문방식마다 어떤 문으로 들어올 지 정해두면 요청을 처리하는데 효율적임
        - 반드시 지켜야 하는 것은 아니지만, 관례임
        - protocal & port 
            |protocal|port|
            |---|---|
            |HTTP|80|
            |HTTPS|443|
            |SSH|22|
            |SFTP|22|
            |FTP|21|
            |MySQL|3306|
        - protocal & port에 대한 간략한 설명
            - HTTP와 HTTPS는 일반 손님
            - SSH, SFTP, FTP, MySQL은 관리자
                - SSH는 다른 컴퓨터의 터미널에 접근할 때
                - SFTP, FTP는 파일 전송할 경우
                - MySQL은 DB


