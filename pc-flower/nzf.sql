-- phpMyAdmin SQL Dump
-- version 3.4.10.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 06 月 29 日 03:44
-- 服务器版本: 5.5.20
-- PHP 版本: 5.3.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `nzf`
--

-- --------------------------------------------------------

--
-- 表的结构 `login`
--

CREATE TABLE IF NOT EXISTS `login` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `userName` varchar(300) NOT NULL,
  `passWord` varchar(3000) NOT NULL,
  `ip` varchar(50) DEFAULT NULL,
  `addTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=30 ;

--
-- 转存表中的数据 `login`
--

INSERT INTO `login` (`id`, `userName`, `passWord`, `ip`, `addTime`) VALUES
(1, 'wangwei', '981026yuchen', NULL, '2017-06-07 01:15:02'),
(2, 'yuchen', 'baobeiww520', NULL, '2017-06-07 01:15:02'),
(29, '12', '12', NULL, '2017-06-27 02:55:14'),
(28, '1989222968', '1989222968', NULL, '2017-06-26 10:27:03'),
(27, '孙源辛', '111', NULL, '2017-06-17 09:23:23'),
(26, '1', '1', NULL, '2017-06-17 09:19:54'),
(25, '111', '111', NULL, '2017-06-07 11:56:26'),
(24, '宁忠锋', '123321', NULL, '2017-06-07 11:55:19');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
