import { describe, expect, it } from 'vitest'
import { TEMPLATES } from './templates'

describe('TEMPLATES', () => {
  it('includes Basic Page and Button Demo templates with code for all three editors', () => {
    expect(TEMPLATES.basicPage).toBeDefined()
    expect(TEMPLATES.buttonDemo).toBeDefined()

    for (const template of Object.values(TEMPLATES)) {
      expect(template.label).toBeTruthy()
      expect(template.html).toBeTruthy()
      expect(template.css).toBeTruthy()
      expect(template.js).toBeTruthy()
    }
  })
})
