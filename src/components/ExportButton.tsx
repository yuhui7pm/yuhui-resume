import * as htmlToImage from 'html-to-image'
import { type RefObject } from 'react'

interface ExportButtonProps {
  onExportStart: (message?: string) => void
  onExportEnd: () => void
  resumeRef: RefObject<HTMLDivElement | null>
}

const ExportButton = ({ onExportStart, onExportEnd, resumeRef }: ExportButtonProps) => {
  // 使用浏览器自带的打印功能导出PDF
  const handlePrint = () => {
    // 等待样式应用后直接打印
    setTimeout(() => {
      window.print()
    }, 100)
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
      const resumeElement = resumeRef.current
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

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-6 export-buttons">
      <button
        onClick={exportToImage}
        className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-purple-300"
        title="导出图片"
      >
        <i className="i-mdi-image text-4xl"></i>
      </button>
      <button
        onClick={handlePrint}
        className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-purple-300"
        title="导出PDF"
      >
        <i className="i-mdi-file-pdf text-4xl"></i>
      </button>
    </div>
  )
}

export default ExportButton
