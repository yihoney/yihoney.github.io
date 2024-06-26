---
emoji: 💬
title: "[#1] mongoDB 도입기"
date: '2024-04-12 10:43:45'
author: yi
tags: PJT
categories: PJT
---
##  들어가기에 앞서
> <br>
>
> 프로젝트의 **기획 배경**은 다음과 같다.
> 1. 기존 사이트의 직관적이지 못한 UI
> 2. 가장 인기 있는 영상 파악의 어려움
> 3. 나에게 적합한 지, 역할(직무)별로 적합한 지 알기 어려움
> 4. 대부분이 영어로 되어 있어, 제목 또는 소개를 통해 컨텐츠가 어떤 내용을 내포하는지 알기 어려움
> 5. 컨텐츠 이용 혹은 영상을 들으며 생기는 질문을 실시간으로 대응해줄 수 있는 시스템의 부재
> 
>
> 기획 배경을 바탕으로 우리 팀은 직관적인 페이지로 사용자들의 접근성 낮추고, 일회성 학습이 아닌, 동기를 부여하여 사이트를 계속 방문 하게끔 하는 학습 플랫폼을 기획하게 되었다.
> 
>
> 이 목표를 위해 우리 팀은 다음과 같은 **기능**을 제공하기로 하였다.
> 1. 현재 내 상황에 맞춘 `컨텐츠 추천 챗봇` 
> 2. 실시간으로 궁금증을 해결할 수 있는 `QnA 챗봇` 
> 3. 강의 검색 시 오타 교정 및 자동완성 기능을 통한 `간편 강의 검색`
> 4. QNA, 강의 소개, 서비스 소개 DB를 연동한 RAG 시스템으로 `구체적이고 정확한 답변 제공`
> 5. 로드맵 및 강의 현황 대시보드 기능으로 `학습 지속성 향상`
>  <br>

<br>

## mongoDB를 도입해보자꾸나

우리 서비스는 크롤링 한 강의 데이터와 FAQ 데이터, 사용자가 챗봇 서비스 이용 시 입력했던 채팅 기록 등을 저장해야 했다. 우리팀은 각 도메인마다의 다양한 데이터 성격을 고려해 기존에 사용해본 경험이 있는 MySQL, Redis 외에 추가적으로 mongoDB를 도입하기로 하였다. <br>

<h4> 여기서 mongoDB란? </h4>

- mongoDB란 document 지향적인 데이터베이스이다. document는 아래와 그림과 같이 field와 value 쌍으로 구성된 데이터 구조이다. field의 vaule에는 다른 document나 document 배열 혹은 배열을 저장하는 것도 가능하다.
- mongoDB는 스키마를 고정하지 않은 형태(Schema-less 구조)이다. 이러한 특징으로 필드 추가 및 제거가 간편하고, 분산 확장이 간단하다.

참고 링크 : [mongoDB 공식문서](<https://www.mongodb.com/docs/manual/introduction/#document-database>) | [mongoDB vs Redis]()
<br>

MongoDB를 도입한 이유는 강의 데이터가 일관적이지 않기 때문이다.
요약된 정보만 제공하는 강의가 있고, 활동이나 목표 등 추가적인 정보를 제공하는 강의가 존재한다. 어떤 강의는 보유하고 있는 데이터를 다른 특정 강의는 가지고 있지 않을 수 있는데, 이럴 경우 데이터에 대한 관리가 힘들 뿐더러 null 데이터에 대한 여러 검증 작업이 필요할 것이다. 따라서, MongoDB를 도입해 **각 document마다 다른 field를 가지고 있을 수 있도록** 하였다.
<br>

<!-- 또한, 우리 서비스는 실시간 문의사항 대응과 사용자 맞춤 컨텐츠 추천 서비스를 챗봇으로 제공하기로 했다. 더욱 구체적이고 정확한 답변을 위해 채팅 내역을 영구 보관하고 이를 챗봇에 활용하는데, 이 과정에서 데이터 읽기 작업과 쓰기 작업이 빈번히 일어난다. 

참고 링크 : [] -->