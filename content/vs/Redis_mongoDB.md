---
emoji: 💬
title: mongoDB vs Redis
date: '2024-04-12 13:33:04'
author: yi
tags: VS
categories: VS
---

mongoDB에 대해 알아보던 도중 같은 noSQL인 Redis와의 차이는 무엇일지 궁금해 찾아본 내용들을 정리해보고자 한다.

차이점을 표로 간단히 정리하자면 다음과 같다.

<table>
    <tr>
        <th>구분</th>
        <th>Redis</th>
        <th>MongoDB</th>
    </tr>
        <tr>
        <td>저장소</td>
        <td>메모리 저장</td>
        <td>디스크 저장</td>
    </tr>
    <tr>
        <td>데이터 구조</td>
        <td>key-value <br>
        - key: 문자열 <br>
        - value: 문자열 및 List, Set, Bitmap, Hash와 같은 여러 데이터 구조
        </td>
        <td>BSON(Binary JSON) <br>
        - 문자열, 부울, 숫자, 배열, 객체, 날짜 등 다양한 데이터 유형 지원
        </td>
    </tr>
    <tr>
        <td>확장성</td>
        <td>수평적 확장 (샤딩)</td>
        <td>수평적 확장 (샤딩), 복제 세트를 이용한 고가용성 제공</td>
    </tr>
    <tr>
        <td>지원 쿼리</td>
        <td>기본적인 Key-Value 연산 및 데이터 구조별 복잡한 연산 지원</td>
        <td>다양한 쿼리 연산, 인덱싱, 집계 파이프라인 지원</td>
    </tr>
    <tr>
        <td>데이터 유지</td>
        <td>주로 캐싱에 사용, 영속성을 위한 RDB/AOF 옵션 제공</td>
        <td>데이터 영속화</td>
    </tr>
    <tr>
        <td>성능</td>
        <td>메모리 기반으로 고속의 데이터 처리 가능</td>
        <td>메모리 매핑을 이용한 빠른 데이터 처리 가능</td>
    </tr>
</table>

**mongoDB**는 메모리맵 형태의 파일 엔진 db이기 때문에 ***메모리에 의존적***이라 메모리 크기가 성능을 좌우하며 메모리를 넘어서는 경우 성능이 급격히 저하된다.


**참고**
[mongoDB 공식 문서 - mongoDB vs Redis](<https://www.mongodb.com/compare/mongodb-vs-redis>)