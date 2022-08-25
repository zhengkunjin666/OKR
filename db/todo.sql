/*
Navicat MySQL Data Transfer

Source Server         : root
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : okr

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2022-08-25 22:01:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for todo
-- ----------------------------
DROP TABLE IF EXISTS `todo`;
CREATE TABLE `todo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `todo` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `done_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of todo
-- ----------------------------
INSERT INTO `todo` VALUES ('21', '4', '为公司创造更⼤的市场份额 ', '1', '2022-08-24 20:17:52', '2022-08-25 15:30:17');
INSERT INTO `todo` VALUES ('23', '4', '创造令⼈惊艳的客户体验', '0', '2022-08-24 20:18:34', null);
INSERT INTO `todo` VALUES ('24', '4', '重新设计并启动新的登录⻚⾯ ', '1', '2022-08-24 20:28:54', '2022-08-25 15:29:35');
INSERT INTO `todo` VALUES ('25', '4', '⽤设计成果⽀持市场和销售', '0', '2022-08-24 20:29:31', null);
INSERT INTO `todo` VALUES ('26', '4', '成功上线某关键产品的3.0版本 ', '1', '2022-08-24 20:30:05', '2022-08-25 16:28:18');
INSERT INTO `todo` VALUES ('35', '5', '替换提及较大的资源库', '0', '2022-08-25 21:48:10', null);
INSERT INTO `todo` VALUES ('36', '5', 'JavaScript代码压缩', '0', '2022-08-25 21:48:34', null);
INSERT INTO `todo` VALUES ('37', '5', '图片资源压缩和代理', '0', '2022-08-25 21:48:47', null);
INSERT INTO `todo` VALUES ('38', '5', '添加Loading', '1', '2022-08-25 21:48:59', '2022-08-25 21:53:39');
