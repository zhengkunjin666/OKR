/*
Navicat MySQL Data Transfer

Source Server         : root
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : okr

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2022-08-25 22:01:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `openid` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('5', 'oU20r5SINtHoGecyOPEpdhaht6wM', '2022-08-25 21:47:25');
