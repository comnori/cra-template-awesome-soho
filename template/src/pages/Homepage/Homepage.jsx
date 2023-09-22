import { Col, Image, Row, Space, Typography } from "antd";
import logo from "logo.svg";
import { useTranslation } from "react-i18next";
import styles from "./Homepage.module.scss";
import EnterPriseTemplate from "./components/EnterPriseTemplate";
import Template1 from "./components/Template1";
import Template2 from "./components/Template2";
import Template3 from "./components/Template3";
import Template4 from "./components/Template4";

const { Title, Paragraph } = Typography;

function Homepage() {
  const { t } = useTranslation();

  return (
    <>
      <Row justify="center">
        <Col>
          <Image
            src={logo}
            className="App-logo"
            preview={false}
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Typography className={styles.typography}>
            <Title>{t("text.package.title")}</Title>
            <Paragraph>{t("text.package.description")}</Paragraph>
          </Typography>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <a
            href="https://www.npmjs.com/package/cra-template-awesome-soho"
            target="_blank"
            rel="noreferrer">
            <Space>
              <Image
                src="https://img.shields.io/npm/v/cra-template-awesome-soho?style=for-the-badge&logo=npm"
                preview={false}
                alt="NPM Package Version"
              />
              <Image
                src="https://img.shields.io/npm/dt/cra-template-awesome-soho?style=for-the-badge&logo=npm"
                preview={false}
                alt="NPM Package Total Counts"
              />
              <Image
                src="https://img.shields.io/npm/l/cra-template-awesome-soho?style=for-the-badge"
                preview={false}
                alt="License"
              />
            </Space>
          </a>
        </Col>
      </Row>
      <Row
        justify="center"
        gutter={[24, 24]}
        className={styles.row}>
        <Col
          xs={24}
          sm={12}
          xl={4}>
          <Template1 />
        </Col>
        <Col
          xs={24}
          sm={12}
          xl={4}>
          <Template2 />
        </Col>
        <Col
          xs={24}
          sm={12}
          xl={4}>
          <Template3 />
        </Col>
        <Col
          xs={24}
          sm={12}
          xl={4}>
          <Template4 />
        </Col>
      </Row>
      <Row
        justify="center"
        className={styles.row}>
        <Col
          xs={24}
          sm={24}
          xl={16}>
          <EnterPriseTemplate />
        </Col>
      </Row>
    </>
  );
}

export default Homepage;
