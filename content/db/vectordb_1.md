---
emoji: 💬
title: '[#1] VectorDB'
date: '2024-04-14 22:31:04'
author: yi
tags: DB
categories: DB
---

## VectorDB 기반 application 구조

VectorDB의 파이프라인을 간단히 정리하자면 다음과 같다. 우선, `자연어`(비정형 데이터)를 의미를 가진 형상(`Text Embedding`)인 embedding vector로 변환하는 과정(`Vector Embedding`)을 거친다. 이후에 embedding을 통해 변환한 vector들을 `Vector DB`에 저장하고, `Application`에서는 이를 사용 목적에 맞게 사용한다.

### Text Embedding 이란?

기존의 비정형 데이터 형태의 자연어 데이터를 n차원의 수치형 벡터로 표상화 시킨 데이터이다.
단순히 텍스트 -> 숫자 매핑이 아니라, 해당 언어가 가지는 의미적 컨텍스트를 나타낸다.
