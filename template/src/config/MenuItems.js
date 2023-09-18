/**
 * @file 메뉴 Item 용 JSON
 * @author Yongsik Yun <comnori@gmail.com>
 *
 */

/**
 * @typedef {import("@antd/menu/hooks/useItems").ItemType} ItemType - antd menu ItemType
 */

import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

/**
 * 일반 메뉴
 * @enum {ItemType[]}
 * @ignore
 */
const NormalMenuItems = [
  {
    key: "Home",
    label: <Link to="/">Home</Link>,
    icon: <HomeOutlined />,
  },
];

/**
 * 관리자 메뉴
 * @type {ItemType[]}
 * @ignore
 */
const AdminMenuitems = [];

/**
 * 일반 / 관리자 메뉴
 * @enum {ItemType[]}
 */
const MenuItems = {
  NORMAL: NormalMenuItems,
  ADMIN: AdminMenuitems,
};

export default MenuItems;
