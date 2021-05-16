# 백준 Daily 문제 재출봇 프로젝트



## 구성

1. 초안

   ![img](https://media.vlpt.us/images/chkchk610/post/a7e7b11f-629c-4361-bb46-aa0343354c3a/image.png)

   * 백준 사이트 스크래핑 (문제제목, 번호, 등급, 분류, url) 후 JSON 파일 생성 -> python
   * 생성된 JSON 파일을 DB에 저장 -> SpringBoot + Batch ( RestAPI )
   * 매일밤 자정 카톡봇을 이용하여 저장된 문제들 중 설정한 조건에 따라 문제 보내주기. -> Kakao Openbot + SpringBoot

---

## 2021.05.11 - 스크래핑 구성

* python 스크래핑 방식 공부.
  * `requests` 라이브러리를 이용한 웹 스크래핑. HTML 문자열로 원하는 url사이트 스크래핑 가능.
    * 스크래핑시 `context/robot.txt` 를 이용하여 해당 사이트의 웹사이트가 크롤링이 허용되어 있는지 꼭 확인하고 진행할 것.
  * `bs4` 패키지의 `BeautifulSoup` 라이브러리를 이용하여 html 내에서 필요한 요소 추출.
  * 추출한 요소를 `pandas` 라이브러리를 이용하여 dictionary 자료구조로 변경함.
  * `json` 라이브러리를 이용하여 해당 dictionary 자료를 json으로 저장.

## 2021.05.12 - Python, Spring 연동

* 1일차에 생성한 python 소스를 구동시킬 RestApi 구성
* python 자료를 SpringBoot로 가져오는 방법을 구상
  1. Jython + SpringBatch 를 이용하여 스프링 내에서 python 소스를 실행. (반려)
     * Jython으로 실행시 스크래핑에 필요한 외부 라이브러리를 import하는 방식을 찾아보았으나, 해결하지 못함.
  2. 서버에 python 소스를 두고 Linux의 CronTab을 이용하여 해당 소스를 실행시켜 JSON 파일 생성후 해당 파일을 Spring 에서 배치를 이용하여 읽어와 DB에 자료 저장. (채택)

## 2021.05.13 - 카카오 오픈봇

* 카카오오픈봇 신청.  (신청사이트 : [카카오 오픈빌더](https://i.kakao.com/))

## 2021.05.14

* 카카오 오픈봇 신청 반려. ( 사유: 불명확한 용도 )

## 2021.05.16

* 카카오 오픈봇 반려에 따른 대안 자료조사.
  * 채팅 자동응답봇 + textPlus를 이용한 채팅 응답
  * 