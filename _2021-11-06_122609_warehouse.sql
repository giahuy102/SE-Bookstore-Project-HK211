/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/ warehouse /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE warehouse;

DROP TABLE IF EXISTS book;
CREATE TABLE `book` (
  `title` text,
  `id` int NOT NULL,
  `author` text,
  `category` text,
  `publisher` text,
  `input_date` date DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `cost_price` float DEFAULT NULL,
  `selling_price` float DEFAULT NULL,
  `page_number` int DEFAULT NULL,
  `sale` float DEFAULT NULL,
  `publish_date` date DEFAULT NULL,
  `language` text,
  `picture` text,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS user_account;
CREATE TABLE `user_account` (
  `id` int DEFAULT NULL,
  `fullname` varchar(30) DEFAULT NULL,
  `position_role` varchar(30) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `phone_number` char(10) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO book(title,id,author,category,publisher,input_date,quantity,cost_price,selling_price,page_number,sale,publish_date,language,picture,description) 
VALUES(X'54686520416c6368656d697374',1,X'436f656c686f',X'4e6f76656c',X'5068756f6e67204e616d','2021-11-03',50,4.5,10.45,345,NULL,'2021-11-03',X'456e676c697368',X'68747470733a2f2f73616c742e74696b6963646e2e636f6d2f63616368652f77313230302f74732f70726f647563742f31372f61322f30342f65623236333634633562353032333534646561653766313431353563333162392e6a7067',X'54686520416c6368656d697374206279205061756c6f20436f656c686f20636f6e74696e75657320746f206368616e676520746865206c69766573206f6620697473207265616465727320666f72657665722e2057697468206d6f7265207468616e2074776f206d696c6c696f6e20636f7069657320736f6c642061726f756e642074686520776f726c642c2054686520416c6368656d697374206861732065737461626c697368656420697473656c662061732061206d6f6465726e20636c61737369632c20756e6976657273616c6c792061646d697265642e'),(X'54686520476f64666174686572',2,X'4d6172696f2050757a6f',X'4c697465726174757265',X'5068756f6e67204e616d','2021-09-12',50,8.7,15.4,456,5,'2020-08-12',X'456e676c697368',X'68747470733a2f2f73616c742e74696b6963646e2e636f6d2f74732f70726f647563742f66652f39352f38342f32373433393739346538643162666435663836336632353530663139383830312e6a7067',X'54686520476f646661746865722069732061206372696d65206e6f76656c20627920416d65726963616e20617574686f72204d6172696f2050757a6f2e204f726967696e616c6c79207075626c697368656420696e203139363920627920472e20502e205075746e616d277320536f6e732c20746865206e6f76656c2064657461696c73207468652073746f7279206f6620612066696374696f6e616c204d616669612066616d696c7920696e204e657720596f726b20436974792028616e64204c6f6e672049736c616e64292c20686561646564206279205669746f20436f726c656f6e652c2074686520476f646661746865722e20546865206e6f76656c20636f7665727320746865207965617273203139343520746f203139353520616e6420696e636c7564657320746865206261636b2073746f7279206f66205669746f20436f726c656f6e652066726f6d206561726c79206368696c64686f6f6420746f206164756c74686f6f642e'),(X'5468652053696c656e6365206f6620746865204c616d6273',3,X'54686f6d617320486172726973',X'4c697465726174757265',X'576f726c6420426f6f6b','2021-09-12',80,5.6,8.7,567,2,'2019-09-12',X'4b6f7265616e',X'68747470733a2f2f696d616765732d6e612e73736c2d696d616765732d616d617a6f6e2e636f6d2f696d616765732f492f3831346652494c6e626e4c2e6a7067',X'5468652053696c656e6365206f6620746865204c616d627320697320612070737963686f6c6f676963616c20686f72726f72206e6f76656c2062792054686f6d6173204861727269732e204669727374207075626c697368656420696e20313938382c206974206973207468652073657175656c20746f2048617272697327732031393831206e6f76656c2052656420447261676f6e2e20426f7468206e6f76656c732066656174757265207468652063616e6e6962616c69737469632073657269616c206b696c6c65722044722e2048616e6e6962616c204c65637465722c20746869732074696d652070697474656420616761696e737420464249205370656369616c204167656e7420436c617269636520537461726c696e672e204974732066696c6d2061646170746174696f6e206469726563746564206279204a6f6e617468616e2044656d6d65207761732072656c656173656420696e203139393120746f207769646573707265616420637269746963616c206163636c61696d20616e6420626f78206f666669636520737563636573732e20497420776f6e207468652041636164656d7920417761726420666f7220426573742050696374757265'),(X'486172727920506f74746572',4,X'4a2e204b2e20526f776c696e67',X'4c697465726174757265',X'576f726c6420426f6f6b','2021-09-12',200,5.6,25.3,567,8,'2020-09-12',X'456e676c697368',X'68747470733a2f2f63646e302e6661686173612e636f6d2f6d656469612f636174616c6f672f70726f647563742f682f612f68617272795f706f747465725f70617065726261636b5f626f785f7365745f626f6f6b735f315f375f7370656369616c5f65646974696f6e5f315f323032315f30355f32355f31315f31305f33392e6a7067',X'486172727920506f74746572206973206120736572696573206f6620736576656e2066616e74617379206e6f76656c73207772697474656e206279204272697469736820617574686f72204a2e204b2e20526f776c696e672e20546865206e6f76656c73206368726f6e69636c6520746865206c69766573206f66206120796f756e672077697a6172642c20486172727920506f747465722c20616e642068697320667269656e6473204865726d696f6e65204772616e67657220616e6420526f6e20576561736c65792c20616c6c206f662077686f6d206172652073747564656e747320617420486f677761727473205363686f6f6c206f66205769746368637261667420616e642057697a61726472792e20546865206d61696e2073746f72792061726320636f6e6365726e732048617272792773207374727567676c6520616761696e7374204c6f726420566f6c64656d6f72742c2061206461726b2077697a6172642077686f20696e74656e647320746f206265636f6d6520696d6d6f7274616c2c206f7665727468726f77207468652077697a61726420676f7665726e696e6720626f6479206b6e6f776e20617320746865204d696e6973747279206f66204d6167696320616e64207375626a756761746520616c6c2077697a6172647320616e64204d7567676c657320286e6f6e2d6d61676963616c2070656f706c65292e'),(X'546865203720486162697473204f6620486967686c79204566666563746976652050656f706c65',5,X'5374657068656e20522e20436f766579',X'53656c662d68656c70',X'53696d6f6e2026205363687573746572','2021-09-12',120,4.5,15.6,657,5,'2020-09-12',X'456e676c697368',X'68747470733a2f2f62697a7765622e646b7463646e2e6e65742f3130302f3332362f3232382f70726f64756374732f7468652d372d6861626974732d6f662d686967686c792d6566666563746976652d70656f706c652d62792d7374657068656e2d722d636f7665792d626f6f6b776f726d2d68616e6f692d64363634356236312d653034312d343237612d396433642d3963373066393334616432392e6a70673f763d31353539323033393435363233',X'496e20546865203720486162697473206f6620486967686c79204566666563746976652050656f706c652c20617574686f72205374657068656e20522e20436f7665792070726573656e7473206120686f6c69737469632c20696e74656772617465642c207072696e6369706c652d63656e746572656420617070726f61636820666f7220736f6c76696e6720706572736f6e616c20616e642070726f66657373696f6e616c2070726f626c656d732e20576974682070656e6574726174696e6720696e73696768747320616e6420706f696e74656420616e6563646f7465732c20436f7665792072657665616c73206120737465702d62792d73746570207061746877617920666f72206c6976696e67207769746820666169726e6573732c20696e746567726974792c20736572766963652c20616e642068756d616e206469676e6974792d2d7072696e6369706c6573207468617420676976652075732074686520736563757269747920746f20616461707420746f206368616e676520616e642074686520776973646f6d20616e6420706f77657220746f2074616b6520616476616e74616765206f6620746865206f70706f7274756e69746965732074686174206368616e676520637265617465732e');
INSERT INTO user_account(id,fullname,position_role,email,birthday,phone_number,address) VALUES(1910409,'Nhan Vo','Warehouse manager','nhanvo@hcmut.edu.vn','2001-07-14','0919140789','Ho Chi Minh City');