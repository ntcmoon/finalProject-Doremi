import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react()],
  server: {
    proxy: {
      '/api':'https://crudcrud.com/api/1a733604522147088533cfb9016f1917'
    }
  }
})

// plugins: [react()],
// server: {
//   proxy: {
//     '/api': {
//       target: 'https://crudcrud.com/api/1a733604522147088533cfb9016f1917',
//       changeOrigin: true,
//       rewrite: (path) => path.replace(/^\/api/, '')
//     }
//   }
// }
// })

