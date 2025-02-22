module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    ['module-resolver', {
      root: ['./'],
      alias: {
        '@Components': ['./src/components'],
        '@Images': ['./src/images'],
        '@Icons': ['./src/icons'],
        '@Routes': ['./src/routes'],
        '@Screens': ['./src/screens'],
        '@Theme': ['./src/theme'],
        '@Layouts': ['./src/layouts'],
        '@Utils': ['./src/utils'],
        '@Resources': ['./src/resources'],
        '@Store': ['./src/store'],
        '@Requests': ['./src/requests'],
        '@Constants': ['./src/constants'],
      },
    }],
  ],
};
