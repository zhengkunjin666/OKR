/*
Navicat MySQL Data Transfer

Source Server         : root
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : okr

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2022-08-25 22:01:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for objective
-- ----------------------------
DROP TABLE IF EXISTS `objective`;
CREATE TABLE `objective` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `objective` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `done_at` datetime DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of objective
-- ----------------------------
INSERT INTO `objective` VALUES ('47', '4', '做一款优秀的OKR产品', '2022-08-24 19:12:38', '2022-08-24 20:36:01', null, '0');
INSERT INTO `objective` VALUES ('48', '4', '成为业界标杆企业', '2022-08-24 19:13:12', null, '2022-08-25 21:45:05', '1');
INSERT INTO `objective` VALUES ('108', '5', '我想让网站打开速度快一些', '2022-08-25 21:49:45', null, '2022-08-25 21:54:01', '1');
