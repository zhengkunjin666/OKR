/*
Navicat MySQL Data Transfer

Source Server         : root
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : okr

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2022-08-25 22:01:19
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for keyresult
-- ----------------------------
DROP TABLE IF EXISTS `keyresult`;
CREATE TABLE `keyresult` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `keyresult` varchar(255) DEFAULT NULL,
  `objective_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `done_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of keyresult
-- ----------------------------
INSERT INTO `keyresult` VALUES ('61', '各大媒体平台上搜索OKR，首页有产品宣传文章', '47', '1', '2022-08-25 21:09:58');
INSERT INTO `keyresult` VALUES ('63', '满足90%的客户使用场景需求', '47', '0', null);
INSERT INTO `keyresult` VALUES ('64', '市场占有率提高20%', '48', '1', '2022-08-25 21:11:24');
INSERT INTO `keyresult` VALUES ('65', '用户满意度提高到95%', '48', '0', null);
INSERT INTO `keyresult` VALUES ('66', '在同类竞品中，搜索引擎搜索排名达到第一名', '48', '1', '2022-08-25 21:12:36');
INSERT INTO `keyresult` VALUES ('72', 'vcxvv', '97', '0', null);
INSERT INTO `keyresult` VALUES ('73', 'cxvxv', '97', '0', null);
INSERT INTO `keyresult` VALUES ('74', 'f gdg', '99', '0', null);
INSERT INTO `keyresult` VALUES ('75', 'g fdgfdfg', '99', '0', null);
INSERT INTO `keyresult` VALUES ('107', '打开速度快30%', '108', '0', null);
INSERT INTO `keyresult` VALUES ('108', '感知上也很快', '108', '1', '2022-08-25 21:53:51');
