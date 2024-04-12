---
emoji: 🆚
title: MySQL vs mongoDB
date: '2024-04-12 14:09:58'
author: yi
tags: VS
categories: VS
---
<br>

> 
> **목차**
> [`MySQL` vs `MongoDB`](#mysql)
> [`ACID` vs `BASE`](#acid-모델-vs-base-모델)

<br>

기존에 사용하던 RDBMS인 MySQL과 NoSQL인 mongoDB는 어떤 차이가 있는지에 대해 정리해보고자 한다.
<br>

## MySQL
- Oracle Corporation에서 만든 Relational Database Management System 관계형 데이터베이스 관리 시스템(RDBMS)
- 데이터베이스 액세스를 위해 structured query language(SQL)을 사용하여 테이블 형태로 데이터를 저장
- 데이터에 접근할 때, `JOIN`을 통해 다수의 테이블을 병합
- 데이터베이스 스키마를 미리 정의하고, 테이블에서 필드 사이의 관계를 제어하는 규칙을 설정
- ACID 기반의 트랜잭션으로 데이터의 일관성을 보장하고, 복잡한 트랜잭션 처리를 안전하게 수행할 수 있도록 지원
<br>

## MongoDB
- 데이터를 JSON-like documents로 저장하는 NoSQL 데이터베이스
- document는 관계된 정보를 함께 저장하고 `MQL(MongoDB query language)`을 사용하여 접근
- document별로 필드는 다를 수 있으며 document가 self-describing하므로 시스템에 document의 구조를 따로 정의할 필요가 없음
- BASE 기반의 트랜잭션으로 ACID보다 느슨한 일관성 모델을 사용하며, 높은 가용성과 분산 시스템에 적합한 성능 제공
<br>

### ACID 모델 vs Base 모델

<table>
    <tr>
        <th>속성</th>
        <th>BASE</th>
        <th>ACID</th>
    </tr>
    <tr>
        <td>적용 분야</td>
        <td>NOSQL</td>
        <td>RDBMS</td>
    </tr>
    <tr>
        <td>일관성 측면</td>
        <td>약한 일관성</td>
        <td>강한 일관성</td>
    </tr>
    <tr>
        <td>중점사항</td>
        <td>Availability</td>
        <td>‘Commit’에 집중</td>
    </tr>
    <tr>
        <td>시스템 측면</td>
        <td>성능에 초점</td>
        <td>엄격한 데이터관리</td>
    </tr>
    <tr>
        <td>효율성</td>
        <td>쿼리 디자인이 중요</td>
        <td>테이블 디자인이 중요</td>
    </tr>
</table>

<br>
<h4>ACID 모델</h4>

- Atomicity(원자성) : 트랜잭션과 관련된 작업들이 모두 수행되었는지 아니면, 모두 실행이 안되었는지를 보장하는 능력
- Consistency(일관성) : 트랜잭션이 실행을 성공적으로 완료하면 언제나 일관성 있는 데이터베이스 상태로 유지하는 것
- Isolation(고립성) : 트랜잭션 수행 시 다른 트랜잭션의 연산 작업이 끼어들지 못하도록 보장하는 것. 즉, 트랜잭션 밖에 있는 어떤 연산도 중간 단계의 데이터를 볼 수 없음을 의미
- Durability (지속성) : DBMS가 사용자에게 트랜잭션 커밋(commit) 응답을 했을 경우, 설사 데이터베이스 객체에 대한 해당 변경 사항이 디스크에 반영(flush) 되기 전에 시스템 장애가 발생하였더라도 해당 트랜잭션의 커밋은 보장 되어야 한다는 속성

<br>
<h4>Base 모델</h4>

- Basically Available(기본적인 가용성): 다수의 실패에도 가용성을 보장, 다수의 스토리지에 복사본 저장 (주 서버가 안되더라도 백업 서버는 동작한다)
- Soft state(소프트 상태): 저장소는 쓰기 일관성이 있을 필요가 없으며 서로 다른 복제본이 항상 상호 일관성이 있을 필요도 없음
- Eventual consistency(최종 일관성): 일시적으로 일관성이 깨지는 상태가 되어도 일정시간 후에는 일관성이 있는 상태가 되는 성질 


<br>
		
		
		
		
