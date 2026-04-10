import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        empresa: resolve(__dirname, 'empresa/index.html'),
        energiaSolar: resolve(__dirname, 'energia-solar/index.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        blogEnergiaFotovoltaica: resolve(__dirname, 'blog/energia-solar-fotovoltaica/index.html'),
        blogQuantoCusta: resolve(__dirname, 'blog/quanto-custa-instalar-energia-solar/index.html'),
        blogFinanciamento: resolve(__dirname, 'blog/financiamento-energia-solar/index.html'),
        blogItapevi: resolve(__dirname, 'blog/energia-solar-em-itapevi/index.html'),
        contato: resolve(__dirname, 'contate-nos/index.html'),
        localizacao: resolve(__dirname, 'localizacao/index.html'),
        obrigado: resolve(__dirname, 'obrigado/index.html'),
        notFound: resolve(__dirname, '404.html'),
      },
    },
  },
})
