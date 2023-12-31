import {
  SiAntdesign,
  SiContainerd,
  SiCypress,
  SiEditorconfig,
  SiEslint,
  SiGraphql,
  SiI18next,
  SiJest,
  SiPrettier,
  SiReact,
  SiReactivex,
  SiReactrouter,
  SiSonarlint,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "@icons-pack/react-simple-icons";
import { Card, Space, Tooltip, Typography, Watermark } from "antd";
import styles from "../Homepage.module.scss";

const { Title, Paragraph } = Typography;

function Template4() {
  return (
    <Watermark
      content="Working"
      gap={[50, 50]}>
      <Card title="Modern Typescript">
        <Typography>
          <Title
            level={5}
            className={styles.title}>
            Language
          </Title>
          <Paragraph>
            <Tooltip title="Typescript">
              <SiTypescript color="default" />
            </Tooltip>
          </Paragraph>
          <Title
            level={5}
            className={styles.title}>
            Created by
          </Title>
          <Paragraph>
            <Space wrap>
              <Tooltip title="Vite">
                <SiVite color="default" />
              </Tooltip>
            </Space>
          </Paragraph>
          <Title
            level={5}
            className={styles.title}>
            Library
          </Title>
          <Paragraph>
            <Space wrap>
              <Tooltip title="React">
                <SiReact color="default" />
              </Tooltip>
              <Tooltip title="React-router">
                <SiReactrouter color="default" />
              </Tooltip>
              <Tooltip title="Ant Design">
                <SiAntdesign color="default" />
              </Tooltip>
              <Tooltip title="React-graph">
                <SiGraphql color="default" />
              </Tooltip>
              <Tooltip title="RxJS">
                <SiReactivex color="default" />
              </Tooltip>
              <Tooltip title="Tailwindcss">
                <SiTailwindcss color="default" />
              </Tooltip>
              <Tooltip title="i18next">
                <SiI18next />
              </Tooltip>
            </Space>
          </Paragraph>
          <Title
            level={5}
            className={styles.title}>
            Dev tools
          </Title>
          <Paragraph>
            <Space wrap>
              <Tooltip title="ESLint">
                <SiEslint color="default" />
              </Tooltip>
              <Tooltip title="Prettier">
                <SiPrettier color="default" />
              </Tooltip>
              <Tooltip title="EditorConfig">
                <SiEditorconfig />
              </Tooltip>
              <Tooltip title="Dev Container">
                <SiContainerd />
              </Tooltip>
              <Tooltip title="SonarLint">
                <SiSonarlint color="default" />
              </Tooltip>
              <Tooltip title="Jest">
                <SiJest color="default" />
              </Tooltip>
              <Tooltip title="StrobyBook">
                <SiStorybook color="default" />
              </Tooltip>
              <Tooltip title="Cypress">
                <SiCypress />
              </Tooltip>
            </Space>
          </Paragraph>
        </Typography>
      </Card>
    </Watermark>
  );
}

export default Template4;
