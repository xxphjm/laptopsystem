-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:8889
-- 產生時間： 2021 年 06 月 13 日 03:32
-- 伺服器版本： 5.7.32
-- PHP 版本： 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- 資料庫： `laptop`
--

-- --------------------------------------------------------

--
-- 資料表結構 `orderform`
--

CREATE TABLE `orderform` (
  `id` int(10) NOT NULL,
  `lpname` varchar(100) NOT NULL,
  `counts` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `orderform`
--

INSERT INTO `orderform` (`id`, `lpname`, `counts`, `name`, `phone`) VALUES
(18, 'ASUS ZenBook Duo UX482EG 蒼宇藍', 10, 'ui', '09977765'),
(19, 'Microsoft 微軟 Surface Pro 7 VDV-0001112.3吋', 6, 'ho', '09887767'),
(20, '技嘉 G5 GD 電競筆電', 9, 'jh', '087567646'),
(21, 'Lenovo Legion 7i 15.6吋電競筆電', 1, 'ko', '0988766'),
(22, 'ACER SF314-511-545L 銀 14吋輕薄窄邊筆電', 5, 'jj', '098778'),
(23, 'MSI GF65 10UE-264TW 電競筆電', 1, 'jkjh', '087888'),
(24, 'CJSCOPE FORGE 14V 魅惑銀', 1, 'jjjj', '090987655');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `orderform`
--
ALTER TABLE `orderform`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `orderform`
--
ALTER TABLE `orderform`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;