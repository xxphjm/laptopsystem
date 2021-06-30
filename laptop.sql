SET time_zone = "+00:00";

--
-- 資料庫： `laptop`
--

-- --------------------------------------------------------

--
-- 資料表結構 `stock`
--

CREATE TABLE `stock` (
  `id` varchar(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `cpu` varchar(100) NOT NULL,
  `ram` varchar(100) NOT NULL,
  `rom` varchar(100) NOT NULL,
  `price` int(100) NOT NULL,
  `rank` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `stock`
--

INSERT INTO `stock` (`id`, `name`, `cpu`, `ram`, `rom`, `price`, `rank`) VALUES
('001', 'Lenovo Legion 7i 15.6吋電競筆電', 'Intel i7-10875H', '16GB', '512GB', 54990, 0),
('002', 'ASUS ZenBook Duo UX482EG 蒼宇藍', 'i7-1165G7', '32GB', '1TB', 63900, 0),
('003', 'ACER SF314-511-545L 銀 14吋輕薄窄邊筆電', 'i5-1135G7', '16GB', '512GB', 28900, 0),
('004', 'Microsoft 微軟 Surface Pro 7 VDV-00011\r\n12.3吋10代i5輕薄觸控筆電', 'i5-1035G4', '8GB', '128G', 29888, 0),
('005', 'MSI GF65 10UE-264TW 電競筆電', 'i5-10300H', '8GB', '512GB', 34900, 0),
('006', 'CJSCOPE FORGE 14V 魅惑銀', 'intel i7-1165G7', '8G', '512G', 29900, 0),
('007', '技嘉 G5 GD 電競筆電', 'i5-11400H', '16G', '512G', 35900, 0);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id`);
