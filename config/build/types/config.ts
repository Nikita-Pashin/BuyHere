export type BuildMode = 'production' | 'development';
export type BuildPort = number;
export type BuildIsDev = boolean;

export interface BuildPaths {
  entry: string,
  build: string,
  html: string,
  src: string,
}

export interface BuildEnv {
  mode: BuildMode,
  port: BuildPort,
  apiUrl: string,
}

export interface BuildOptions {
  mode: BuildMode,
  paths: BuildPaths,
  isDev: BuildIsDev,
  port: BuildPort,
  apiUrl: string,
  project: 'storybook' | 'frontend' | 'jest';
}
