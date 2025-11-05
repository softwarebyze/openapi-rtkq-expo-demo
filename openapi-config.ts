import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: 'https://petstore3.swagger.io/api/v3/openapi.json',
  apiFile: './app/store/emptyApi.ts',
  apiImport: 'emptySplitApi',
  outputFile: './app/store/petApi.ts',
  exportName: 'petApi',
  hooks: true,
}

export default config
