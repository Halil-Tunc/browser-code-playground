import { describe, expect, it } from 'vitest'
import { buildDoc } from './buildDoc'

describe('buildDoc', () => {
  it('combines HTML, CSS, and JavaScript into one preview document', () => {
    const result = buildDoc(
      '<h1>Hello</h1>',
      'h1 { color: red; }',
      'document.body.dataset.ready = "true";'
    )

    expect(result).toContain('<h1>Hello</h1>')
    expect(result).toContain('<style>h1 { color: red; }</style>')
    expect(result).toContain('document.body.dataset.ready = "true";')
  })
})
