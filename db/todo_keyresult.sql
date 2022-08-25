/*
Navicat MySQL Data Transfer

Source Server         : root
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : okr

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2022-08-25 22:01:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for todo_keyresult
-- ----------------------------
DROP TABLE IF EXISTS `todo_keyresult`;
CREATE TABLE `todo_keyresult` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `todo_id` int(11) DEFAULT NULL,
  `keyresult_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of todo_keyresult
-- ----------------------------
INSERT INTO `todo_keyresult` VALUES ('31', '23', '69');
INSERT INTO `todo_keyresult` VALUES ('32', '23', '65');
INSERT INTO `todo_keyresult` VALUES ('33', '23', '63');
INSERT INTO `todo_keyresult` VALUES ('35', '21', '64');
INSERT INTO `todo_keyresult` VALUES ('36', '21', '67');
INSERT INTO `todo_keyresult` VALUES ('37', '21', '68');
INSERT INTO `todo_keyresult` VALUES ('38', '24', '61');
INSERT INTO `todo_keyresult` VALUES ('39', '24', '69');
INSERT INTO `todo_keyresult` VALUES ('40', '25', '67');
INSERT INTO `todo_keyresult` VALUES ('42', '25', '63');
INSERT INTO `todo_keyresult` VALUES ('43', '25', '62');
INSERT INTO `todo_keyresult` VALUES ('44', '26', '62');
INSERT INTO `todo_keyresult` VALUES ('45', '26', '64');
INSERT INTO `todo_keyresult` VALUES ('46', '24', '64');
INSERT INTO `todo_keyresult` VALUES ('47', '24', '66');
INSERT INTO `todo_keyresult` VALUES ('48', '26', '70');
INSERT INTO `todo_keyresult` VALUES ('49', '26', '71');
INSERT INTO `todo_keyresult` VALUES ('50', '25', '70');
INSERT INTO `todo_keyresult` VALUES ('56', '25', '65');
INSERT INTO `todo_keyresult` VALUES ('57', '25', '66');
INSERT INTO `todo_keyresult` VALUES ('58', '23', '64');
INSERT INTO `todo_keyresult` VALUES ('60', '38', '108');
INSERT INTO `todo_keyresult` VALUES ('61', '35', '107');
INSERT INTO `todo_keyresult` VALUES ('62', '36', '107');
INSERT INTO `todo_keyresult` VALUES ('63', '37', '107');
