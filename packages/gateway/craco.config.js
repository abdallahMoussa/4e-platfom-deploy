const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");

const packages = [];

packages.push(
  path.join(__dirname, "../modules/controlPanel/controlpanel-usermanagement")
);
packages.push(
  path.join(__dirname, "../modules/controlPanel/controlpanel-orghierarchies")
);
packages.push(
  path.join(__dirname, "../modules/controlPanel/control-panel-workspace")
);
packages.push(
  path.join(
    __dirname,
    "../modules/controlPanel/control-panel-services-settings"
  )
);
packages.push(path.join(__dirname, "../modules/adminPanel/platform-settings"));

packages.push(path.join(__dirname, "../modules/technical-support"))
packages.push(path.join(__dirname, "../modules/knowledge"));

packages.push(path.join(__dirname, "../shared"));
packages.push(path.join(__dirname, "../modules/user-profile"));



module.exports = {
  webpack: {
    configure: (webpackConfig, arg) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];

        match.loader.include = include.concat(packages);
      }

      return webpackConfig;
    },
  },
};
