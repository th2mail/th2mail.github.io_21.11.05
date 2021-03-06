/**
 * 파일명 : main.js
 * 설 명 : 공통 JS
 * 최초 생성일 : 
 *
 * 수정일			수정내역 
 * ---------  -----------------------------------------------------------------
 * 
 */

// 네비게이션
$("#navigation").load("/view/ScreenLayout/Navigation.html");

// 헤더
$("header").load("/view/ScreenLayout/Header.html");

// 대쉬보드
$("#dashboard-1").load("/view/Dashboard/Dashboard-1.html");
$("#dashboard-2").load("/view/Dashboard/Dashboard-2.html");
$("#dashboard-3").load("/view/Dashboard/Dashboard-3.html");
$("#dashboard-4").load("/view/Dashboard/Dashboard-4.html");
$("#dashboard-5").load("/view/Dashboard/Dashboard-5.html");

// 센서 데이터 현황
$("#data-status").load("/view/DataPreparation/DataStatus.html");

// 센서 데이터 선택
$("#data-select").load("/view/DataPreparation/DataSelect.html");

// 시계열 데이터 탐험 - Pandas Profiler
$("#explore-pandas-profiler").load("/view/DataPreparation/ExplorePandasProfiler.html");

// 시계열 데이터 탐험 - Sweetviz
$("#explore-sweetviz").load("/view/DataPreparation/ExploreSweetviz.html");

// 센서 데이터 로딩 & 프리뷰
$("#loading-preview").load("/view/DataPreparation/LoadingPreview.html");

// 센서 데이터 상관관계 그래프
$("#correlate-graph").load("/view/DataPreparation/CorrelateGraph.html");

// 결측치 시각화 및 처리
$("#visual-process-miss-value").load("/view/DataPreparation/VisualProcessMissValue.html");

// 이상치 시각화 및 처리
$("#visual-process-out-value").load("/view/DataPreparation/VisualProcessOutValue.html");

// 리셈플링 및 정규화
$("#resample-normalize").load("/view/DataPreparation/ResampleNormalize.html");

// 시계열 데이터 분해
$("#decompose").load("/view/TimeSeriesPreparation/Decompose.html");

// 시계열 정상성 검사 및 변환
$("#sanity-check-Transform").load("/view/TimeSeriesPreparation/SanityCheckTransform.html");

// 시계열 예측 with 단일 변수
$("#predict-single-variable").load("/view/TimeSeriesForecasting/PredictSingleVariable.html");

// 시계열 예측 with 다중 변수
$("#predict-multi-variable").load("/view/TimeSeriesForecasting/PredictMultiVariable.html");

// 시계열 결과 분석
$("#predict-result-analysis").load("/view/PerformanceAnalysis/PredictResultAnalysis.html");