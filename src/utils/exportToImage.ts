import html2canvas from 'html2canvas'

export const exportToImage = async () => {
  console.log('开始导出图片')
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

    // 使用html2canvas生成图片，添加优化配置
    const canvas = await html2canvas(resumeElement, {
      scale: 2, // 使用2倍缩放以获得更清晰的图像
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: true,
      width: resumeElement.offsetWidth,
      height: resumeElement.offsetHeight,
      windowWidth: resumeElement.scrollWidth,
      windowHeight: resumeElement.scrollHeight,
      onclone: (clonedDoc) => {
        const clonedElement = clonedDoc.getElementById('resume')
        if (clonedElement) {
          // 确保克隆元素应用所有必要的样式
          clonedElement.style.width = `${resumeElement.offsetWidth}px`
          clonedElement.style.height = `${resumeElement.offsetHeight}px`
          clonedElement.style.position = 'relative'
          clonedElement.style.transform = 'none'
          clonedElement.style.margin = '0 auto'
          clonedElement.style.padding = '0'
          clonedElement.style.borderRadius = '0'
          clonedElement.style.boxShadow = 'none'

          // 确保背景渐变正确显示
          const container = clonedDoc.querySelector('.container') as HTMLElement
          if (container) {
            container.style.maxWidth = '1000px'
            container.style.margin = '0 auto'
            container.style.padding = '0'
          }

          // 确保所有渐变背景和字体渐变正确显示
          const gradientElements = clonedElement.querySelectorAll(
            '[class*="bg-gradient-"], [class*="text-transparent"], [class*="bg-clip-text"]'
          )
          gradientElements.forEach((el) => {
            const element = el as HTMLElement
            const computedStyle = window.getComputedStyle(element)
            element.style.background = computedStyle.background
            element.style.backgroundClip = computedStyle.backgroundClip
            element.style.webkitBackgroundClip = computedStyle.webkitBackgroundClip
            element.style.color = computedStyle.color
          })

          // 确保图标字体正确显示
          const iconElements = clonedElement.querySelectorAll('i[class*="i-"]')
          iconElements.forEach((icon) => {
            const element = icon as HTMLElement
            const computedStyle = window.getComputedStyle(element)
            element.style.fontFamily = computedStyle.fontFamily
            element.style.fontSize = computedStyle.fontSize
            element.style.width = computedStyle.width
            element.style.height = computedStyle.height
            element.style.display = computedStyle.display
          })

          // 确保flex布局正确
          const flexElements = clonedElement.querySelectorAll('[class*="flex"]')
          flexElements.forEach((el) => {
            const element = el as HTMLElement
            const computedStyle = window.getComputedStyle(element)
            element.style.display = computedStyle.display
            element.style.alignItems = computedStyle.alignItems
            element.style.justifyContent = computedStyle.justifyContent
            element.style.gap = computedStyle.gap
          })
        }
      },
    })

    // 转换为PNG并下载，使用最高质量
    const dataUrl = canvas.toDataURL('image/png', 1.0)
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
    // 恢复导出按钮显示
    if (exportButtons) {
      exportButtons.classList.remove('hidden')
    }
  }
}
