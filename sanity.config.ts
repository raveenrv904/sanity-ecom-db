import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {colorInput} from '@sanity/color-input'
import {codeInput} from '@sanity/code-input'

export default defineConfig({
  name: 'default',
  title: 'Zoyee LifeStyle',

  projectId: '4ec8io8c',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), colorInput(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
