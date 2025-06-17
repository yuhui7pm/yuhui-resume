import * as htmlToImage from 'html-to-image'
import html2pdf from 'html2pdf.js'

interface ExportButtonProps {
  onExportStart: (message?: string) => void
  onExportEnd: () => void
}

const ExportButton = ({ onExportStart, onExportEnd }: ExportButtonProps) => {
  // 预加载并转换图片为base64的函数
  const convertImageToBase64 = async (src: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.onload = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        canvas.width = img.width
        canvas.height = img.height
        ctx?.drawImage(img, 0, 0)
        resolve(canvas.toDataURL('image/jpeg', 0.9))
      }
      img.onerror = reject
      // 尝试多个可能的路径
      const possiblePaths = [
        src,
        src.startsWith('/') ? window.location.origin + src : src,
        '/images/yuhui.jpg',
        './images/yuhui.jpg',
      ]

      let pathIndex = 0
      const tryNextPath = () => {
        if (pathIndex < possiblePaths.length) {
          img.src = possiblePaths[pathIndex]
          pathIndex++
        } else {
          reject(new Error('无法加载图片'))
        }
      }

      img.onerror = tryNextPath
      tryNextPath()
    })
  }

  // 替换页面中的图片为base64格式
  const replaceImagesWithBase64 = async () => {
    const images = document.querySelectorAll('#resume img')
    const promises = Array.from(images).map(async (img) => {
      const imgElement = img as HTMLImageElement
      try {
        const base64 = await convertImageToBase64(imgElement.src)
        imgElement.setAttribute('data-original-src', imgElement.src)
        imgElement.src = base64
      } catch (error) {
        console.warn('图片转换失败:', imgElement.src, error)
      }
    })
    await Promise.all(promises)
  }

  // 恢复图片的原始src
  const restoreOriginalImages = () => {
    const images = document.querySelectorAll('#resume img[data-original-src]')
    images.forEach((img) => {
      const imgElement = img as HTMLImageElement
      const originalSrc = imgElement.getAttribute('data-original-src')
      if (originalSrc) {
        imgElement.src = originalSrc
        imgElement.removeAttribute('data-original-src')
      }
    })
  }

  // 添加PDF友好样式的函数
  const applyPdfStyles = () => {
    const style = document.createElement('style')
    style.id = 'pdf-export-styles'
    style.textContent = `
      /* PDF导出专用样式 */
      #resume .bg-gradient-to-r {
        background: #6366f1 !important; /* 使用单色代替渐变 */
      }
      
      #resume .bg-clip-text {
        background-clip: initial !important;
        -webkit-background-clip: initial !important;
        color: white !important;
        background: none !important;
      }
      
      #resume .text-transparent {
        color: white !important;
      }
      
      #resume .bg-gradient-to-r.from-white.to-purple-200 {
        background: none !important;
        color: white !important;
      }
      
      /* 简化阴影效果 */
      #resume .shadow-2xl {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) !important;
      }
      
      #resume .shadow-lg {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
      }
      
      /* 移除背景图案 */
      #resume .bg-\\[url\\(\\/yuhui-resume\\/pattern\\.svg\\)\\] {
        background-image: none !important;
      }
      
      /* 优化透明度 */
      #resume .border-white\\/30 {
        border-color: rgba(255, 255, 255, 0.8) !important;
      }
      
      #resume .text-purple-100,
      #resume .text-purple-200 {
        color: rgba(255, 255, 255, 0.9) !important;
      }
      
      /* 确保所有文字清晰可见 */
      #resume * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      
      /* 优化字体渲染 */
      #resume {
        -webkit-font-smoothing: antialiased !important;
        -moz-osx-font-smoothing: grayscale !important;
      }
      
      /* 移除复杂的变换效果 */
      #resume .hover\\:scale-105,
      #resume .hover\\:scale-110 {
        transform: none !important;
      }
      
      /* 优化背景色对比度 */
      #resume .bg-purple-50 {
        background-color: #f8fafc !important;
      }
      
      /* 优化进度条样式 */
      #resume .bg-gradient-to-r.from-purple-500.to-indigo-500 {
        background: #8b5cf6 !important; /* 使用单色代替渐变 */
      }
      
      #resume .bg-gradient-to-r.from-purple-600.to-indigo-600 {
        background: #7c3aed !important; /* 使用单色代替渐变 */
      }
      
      /* 移除所有变换和过渡效果 */
      #resume .transform,
      #resume .transition-all,
      #resume .hover\\:translate-x-2,
      #resume .group-hover\\:scale-110 {
        transform: none !important;
        transition: none !important;
      }
      
      /* 优化链接颜色 */
      #resume .text-purple-600 {
        color: #7c3aed !important;
      }
      
      #resume .border-purple-200 {
        border-color: #ddd6fe !important;
      }
      
      /* 优化项目卡片样式 */
      #resume .bg-gradient-to-br.from-gray-50.to-purple-50 {
        background: #f8f9fa !important; /* 使用浅灰色代替渐变 */
      }
      
      /* 优化悬浮效果 */
      #resume .hover\\:shadow-md {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) !important;
      }
      
      /* 优化链接样式 */
      #resume .text-blue-600 {
        color: #2563eb !important;
      }
      
      /* 确保所有过渡效果被移除 */
      #resume .duration-300,
      #resume .transition-colors,
      #resume .hover\\:underline {
        transition: none !important;
      }
      
      /* 优化分页处理 - 避免内容截断 */
      #resume .company-section {
        page-break-inside: avoid !important;
        break-inside: avoid !important;
        margin-bottom: 2rem !important;
      }
      
      #resume .company-section > div {
        page-break-inside: avoid !important;
        break-inside: avoid !important;
      }
      
      /* 确保项目卡片不被截断 */
      #resume .project-card {
        page-break-inside: avoid !important;
        break-inside: avoid !important;
        margin-bottom: 1.5rem !important;
        padding-bottom: 1rem !important;
      }
      
      /* 优化标题的分页处理 */
      #resume h2,
      #resume h3 {
        page-break-after: avoid !important;
        break-after: avoid !important;
        page-break-before: auto !important;
        break-before: auto !important;
      }
      
      /* 项目标题和内容保持在一起 */
      #resume .project-card h4 {
        page-break-after: avoid !important;
        break-after: avoid !important;
      }
      
      /* 确保项目内容不被拆分 */
      #resume .project-card .space-y-4 {
        page-break-inside: avoid !important;
        break-inside: avoid !important;
      }
      
      /* 确保图片在PDF中正确显示 */
      #resume img {
        max-width: 100% !important;
        height: auto !important;
        page-break-inside: avoid !important;
        break-inside: avoid !important;
      }
      
      /* 智能分页控制 - 只对特定公司section从新页开始 */
      #resume .company-section:nth-child(2) {
        page-break-before: always !important;
        break-before: page !important;
      }
      
      /* 其他公司section根据内容自动分页 */
      #resume .company-section:nth-child(n+3) {
        page-break-before: auto !important;
        break-before: auto !important;
      }
      
      /* 优化列表项不被截断 */
      #resume li {
        page-break-inside: avoid !important;
        break-inside: avoid !important;
      }
      
      /* 优化段落不被截断 */
      #resume p {
        page-break-inside: avoid !important;
        break-inside: avoid !important;
        margin-bottom: 0.5rem !important;
      }
    `
    document.head.appendChild(style)
  }

  // 移除PDF样式的函数
  const removePdfStyles = () => {
    const style = document.getElementById('pdf-export-styles')
    if (style) {
      style.remove()
    }
  }

  const exportToImage = async () => {
    console.log('开始导出图片')

    // 显示loading
    onExportStart('请稍候，正在生成高质量图片')

    // 临时隐藏导出按钮
    const exportButtons = document.querySelector('.export-buttons')
    if (exportButtons) {
      exportButtons.classList.add('hidden')
    }

    try {
      const resumeElement = document.getElementById('resume')
      if (!resumeElement) {
        console.error('找不到简历元素')
        return
      }

      // 保存原始样式和滚动位置
      const originalScrollPos = window.scrollY
      const originalStyle = resumeElement.style.cssText
      const originalBodyStyle = document.body.style.cssText

      // 准备导出环境
      document.body.style.overflow = 'hidden'
      document.body.style.margin = '0'
      document.body.style.padding = '0'
      document.body.style.background = '#ffffff'

      // 设置临时样式以确保完整捕获
      resumeElement.style.width = `${resumeElement.offsetWidth}px`
      resumeElement.style.margin = '0 auto'
      resumeElement.style.transform = 'none'
      resumeElement.style.position = 'relative'
      resumeElement.style.top = '0'
      resumeElement.style.left = '0'
      resumeElement.style.borderRadius = '0'
      resumeElement.style.boxShadow = 'none'

      // 滚动到顶部
      window.scrollTo(0, 0)

      // 等待样式和图片加载完成
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // 预加载所有图片和图标
      const images = [...resumeElement.getElementsByTagName('img')]
      const icons = [...resumeElement.getElementsByTagName('i')]
      await Promise.all([
        ...images.map(
          (img) =>
            new Promise((resolve) => {
              if (img.complete) {
                resolve(null)
              } else {
                img.onload = () => resolve(null)
                img.onerror = () => resolve(null)
              }
            })
        ),
        ...icons.map(
          () =>
            new Promise((resolve) => {
              // 确保图标字体加载完成
              document.fonts.ready.then(() => resolve(null))
            })
        ),
      ])

      // 使用html-to-image生成图片，添加优化配置
      const dataUrl = await htmlToImage.toPng(resumeElement, {
        quality: 1.0,
        pixelRatio: 2, // 使用2倍像素比以获得更清晰的图像
        backgroundColor: '#ffffff',
        width: resumeElement.offsetWidth,
        height: resumeElement.offsetHeight,
        style: {
          transform: 'scale(1)',
          transformOrigin: 'top left',
        },
        filter: (node) => {
          // 过滤掉导出按钮
          if (node.classList && node.classList.contains('export-buttons')) {
            return false
          }
          return true
        },
      })

      // 下载图片
      const link = document.createElement('a')
      link.download = '余晖的简历.png'
      link.href = dataUrl
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // 恢复原始样式和滚动位置
      resumeElement.style.cssText = originalStyle
      document.body.style.cssText = originalBodyStyle
      window.scrollTo(0, originalScrollPos)
    } catch (error) {
      console.error('导出图片失败:', error)
    } finally {
      // 隐藏loading
      onExportEnd()

      // 恢复导出按钮显示
      if (exportButtons) {
        exportButtons.classList.remove('hidden')
      }
    }
  }

  const exportToPDF = async () => {
    console.log('开始导出PDF')

    // 显示loading
    onExportStart('请稍候，正在生成PDF文件')

    // 临时隐藏导出按钮
    const exportButtons = document.querySelector('.export-buttons')
    if (exportButtons) {
      exportButtons.classList.add('hidden')
    }

    try {
      const resumeElement = document.getElementById('resume')
      if (!resumeElement) {
        console.error('找不到简历元素')
        return
      }

      // 保存原始样式和滚动位置
      const originalScrollPos = window.scrollY
      const originalStyle = resumeElement.style.cssText
      const originalBodyStyle = document.body.style.cssText

      // 先转换图片为base64格式
      await replaceImagesWithBase64()

      // 应用PDF友好样式
      applyPdfStyles()

      // 准备导出环境
      document.body.style.overflow = 'hidden'
      document.body.style.margin = '0'
      document.body.style.padding = '0'
      document.body.style.background = '#ffffff'

      // 设置临时样式以确保完整捕获
      resumeElement.style.width = `${resumeElement.offsetWidth}px`
      resumeElement.style.margin = '0 auto'
      resumeElement.style.transform = 'none'
      resumeElement.style.position = 'relative'
      resumeElement.style.top = '0'
      resumeElement.style.left = '0'
      resumeElement.style.borderRadius = '0'
      resumeElement.style.boxShadow = 'none'

      // 滚动到顶部
      window.scrollTo(0, 0)

      // 等待样式应用和图片加载完成
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // 等待字体加载完成
      await document.fonts.ready

      // 优化的PDF导出配置
      const options = {
        margin: [0.1, 0.1, 0.1, 0.1] as [number, number, number, number], // 修复：极小边距
        filename: '余晖的简历.pdf',
        image: {
          type: 'jpeg',
          quality: 0.98,
        },
        html2canvas: {
          scale: 1.5, // 平衡质量和性能
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
          logging: false,
          letterRendering: true, // 改善文字渲染
          foreignObjectRendering: true, // 改善复杂元素渲染
          scrollX: 0,
          scrollY: 0,
          width: resumeElement.offsetWidth,
          height: resumeElement.offsetHeight,
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait',
          compressPDF: false, // 不压缩以保持质量
          putOnlyUsedFonts: true,
          floatPrecision: 16, // 更高精度
        },
        pagebreak: {
          mode: ['avoid-all', 'css', 'legacy'], // 修复：优化分页处理
          before: ['.company-section'],
          after: ['.page-break-after'],
          avoid: ['.company-section', '.project-card', 'h2', 'h3', 'h4', 'li', 'p'],
        },
      }

      // 使用html2pdf导出PDF
      await html2pdf().set(options).from(resumeElement).save()

      // 恢复原始样式和滚动位置
      resumeElement.style.cssText = originalStyle
      document.body.style.cssText = originalBodyStyle
      window.scrollTo(0, originalScrollPos)

      // 恢复图片原始路径
      restoreOriginalImages()

      // 移除PDF样式
      removePdfStyles()
    } catch (error) {
      console.error('导出PDF失败:', error)
    } finally {
      // 确保恢复图片和移除PDF样式
      restoreOriginalImages()
      removePdfStyles()

      // 隐藏loading
      onExportEnd()

      // 恢复导出按钮显示
      if (exportButtons) {
        exportButtons.classList.remove('hidden')
      }
    }
  }

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 export-buttons">
      <button
        onClick={exportToImage}
        className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-purple-300"
        title="导出图片"
      >
        <i className="i-mdi-image text-3xl"></i>
      </button>
      <button
        onClick={exportToPDF}
        className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-purple-300"
        title="导出PDF"
      >
        <i className="i-mdi-file-pdf text-3xl"></i>
      </button>
    </div>
  )
}

export default ExportButton
