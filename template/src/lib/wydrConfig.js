/* eslint-disable import/no-extraneous-dependencies */
import whyDidYouRender from "@welldone-software/why-did-you-render";

/**
 * Why did you render 설치
 *
 * @description `development` 환경에서만 설치
 * @param {React} react
 */
export function installWydr(react) {
  if (process.env.NODE_ENV === "development") {
    whyDidYouRender(react, {
      trackAllPureComponents: false,
      collapseGroups: true,
      titleColor: "#adc6ff",
      diffNameColor: "#597ef7",
      diffPathColor: "#ff4d4f",
    });
  }
}

const wydrConfig = {
  installWydr,
};

export default wydrConfig;
