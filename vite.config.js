import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { readFileSync, writeFileSync } from 'fs'

const GUIDE_PATH = resolve(process.cwd(), 'aws_soa_c03_study_guide.md')

function mdEditorPlugin() {
  return {
    name: 'md-editor',
    configureServer(server) {
      server.middlewares.use('/api/save-slide', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end()
          return
        }

        let body = ''
        req.on('data', chunk => { body += chunk.toString() })
        req.on('end', () => {
          try {
            const { slideTitle, sectionId, slideIndex, content } = JSON.parse(body)
            const md = readFileSync(GUIDE_PATH, 'utf-8')
            const lines = md.split('\n')

            // Find section boundaries using sectionId (1-based number in heading)
            const sectionNum = sectionId + 1
            let sectionStart = -1
            let sectionEnd = lines.length

            for (let i = 0; i < lines.length; i++) {
              if (lines[i].startsWith(`## ${sectionNum}. `) || lines[i] === `## ${sectionNum}.`) {
                sectionStart = i
                break
              }
            }

            if (sectionStart === -1) {
              // Fallback: search whole file if section not found
              sectionStart = 0
            } else {
              for (let i = sectionStart + 1; i < lines.length; i++) {
                if (/^##\s+\d+[.\s]/.test(lines[i]) && !lines[i].startsWith(`## ${sectionNum}.`)) {
                  sectionEnd = i
                  break
                }
              }
            }

            // Within the section, find the slideIndex-th ### heading
            let slideCount = 0
            let startIdx = -1
            let endIdx = lines.length

            for (let i = sectionStart + 1; i < sectionEnd; i++) {
              if (lines[i].startsWith('### ')) {
                if (slideCount === slideIndex) {
                  startIdx = i
                  break
                }
                slideCount++
              }
            }

            if (startIdx === -1) {
              res.statusCode = 404
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: `Slide "${slideTitle}" (index ${slideIndex}) not found in section ${sectionNum}` }))
              return
            }

            for (let i = startIdx + 1; i < lines.length; i++) {
              const line = lines[i]
              if (line.startsWith('### ') || line.startsWith('## ') || line.trim() === '---') {
                endIdx = i
                break
              }
            }

            const newFileContent = [
              ...lines.slice(0, startIdx + 1),
              '',
              content.trim(),
              '',
              ...lines.slice(endIdx),
            ].join('\n')

            writeFileSync(GUIDE_PATH, newFileContent, 'utf-8')

            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: true }))
          } catch (e) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: e.message }))
          }
        })
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), mdEditorPlugin()],
})
