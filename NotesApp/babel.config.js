module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: [
          "module-resolver",
          {
            extensions: [".tsx", ".ts", ".js", ".json"],
          },
          'react-native-paper/babel',
          'react-native-reanimated/plugin'
        ],
      },
    },
  };
};
