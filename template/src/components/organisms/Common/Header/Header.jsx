import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Col, Layout, Menu, Popover, Row, Space } from "antd";
import ExtendedMenuItems from "config/ExtendedMenuItems";
import { useNavigate } from "react-router-dom";
import { convertJsonToMenuItems } from "utils/menu";

const { Header: AntHeader } = Layout;
const menuItems = convertJsonToMenuItems(ExtendedMenuItems.NORMAL);

function Header() {
  const navigate = useNavigate();

  function handleAvatarClick() {
    navigate("/login");
  }

  return (
    <AntHeader>
      <Row wrap={false}>
        <Col flex="auto">
          <Menu
            items={menuItems}
            mode="horizontal"
            theme="dark"
          />
        </Col>
        <Col flex="50px">
          <Space align="center">
            <Popover
              placement="bottomRight"
              trigger="hover"
              content={<a>Close</a>}>
              <Badge count={1}>
                <Avatar
                  shape="square"
                  size="large"
                  icon={<UserOutlined />}
                  onClick={() => handleAvatarClick()}
                />
              </Badge>
            </Popover>
          </Space>
        </Col>
      </Row>
    </AntHeader>
  );
}

export default Header;
