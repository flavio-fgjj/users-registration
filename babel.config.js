module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: {
          '@assets': './app/assets',
          '@components': './app/components',
          '@screens': './app/screens',
          '@routes': './app/routes',
          '@services': './app/services',
        },
      },
    ],
  ],
};