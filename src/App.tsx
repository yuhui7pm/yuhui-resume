import * as htmlToImage from 'html-to-image'

const App = () => {
  const exportToImage = async () => {
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
      // 恢复导出按钮显示
      if (exportButtons) {
        exportButtons.classList.remove('hidden')
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 font-sans">
      <div className="container mx-auto" style={{ maxWidth: '1000px' }}>
        <div
          id="resume"
          className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl"
        >
          {/* 顶部个人信息区域 */}
          <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 p-10 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/yuhui-resume/pattern.svg')] opacity-10"></div>
            <div className="flex items-center gap-10 relative z-10">
              <img
                src="/yuhui-resume/images/yuhui.jpg"
                alt="余晖"
                className="w-44 h-44 rounded-2xl object-cover shadow-2xl border-4 border-white/30 transition-transform duration-300 hover:scale-105"
              />
              <div>
                <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 font-title">
                  余晖
                </h1>
                <p className="text-2xl text-purple-100 mb-6 font-title">
                  高级前端开发工程师 | 前端架构师
                </p>
                <div className="flex gap-8">
                  <div className="flex items-center gap-3 group">
                    <i className="i-mdi-phone text-2xl text-purple-200 group-hover:text-white transition-colors"></i>
                    <span className="group-hover:text-white transition-colors">15766495385</span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <i className="i-mdi-email text-2xl text-purple-200 group-hover:text-white transition-colors"></i>
                    <a
                      href="mailto:1176951680@qq.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      1176951680@qq.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-10 p-10">
            {/* 左侧信息 */}
            <div className="w-1/3 space-y-8">
              <section className="transform transition-all duration-300 hover:translate-x-2">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-purple-200 pb-2 flex items-center">
                  <i className="i-mdi-account-details mr-3 text-2xl text-purple-600"></i>基本信息
                </h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 group hover:bg-purple-50 p-2 rounded-lg transition-all">
                    <i className="i-mdi-clock text-xl text-purple-600 group-hover:scale-110 transition-transform"></i>
                    <span className="text-gray-700">
                      {Math.ceil(
                        (new Date().getTime() - new Date('2020-06-01').getTime()) /
                          (1000 * 60 * 60 * 24 * 365)
                      )}
                      年前端开发经验
                    </span>
                  </div>
                  <div className="flex items-center gap-3 group hover:bg-purple-50 p-2 rounded-lg transition-all">
                    <i className="i-mdi-school text-xl text-purple-600 group-hover:scale-110 transition-transform"></i>
                    <span className="text-gray-700">汕头大学 · 本科</span>
                  </div>
                  <div className="flex items-center gap-3 group hover:bg-purple-50 p-2 rounded-lg transition-all">
                    <i className="i-mdi-map-marker text-xl text-purple-600 group-hover:scale-110 transition-transform"></i>
                    <span className="text-gray-700">深圳</span>
                  </div>
                  <div className="flex items-center gap-3 group hover:bg-purple-50 p-2 rounded-lg transition-all">
                    <i className="i-mdi-currency-cny text-xl text-purple-600 group-hover:scale-110 transition-transform"></i>
                    <span className="text-gray-700">期望薪资：35K+</span>
                  </div>
                </div>
              </section>

              <section className="transform transition-all duration-300 hover:translate-x-2">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-purple-200 pb-2 flex items-center">
                  <i className="i-mdi-tools mr-3 text-2xl text-purple-600"></i>专业技能
                </h2>
                <div className="space-y-6">
                  {[
                    { name: 'Vue3', level: 100 },
                    { name: 'React18', level: 100 },
                    { name: 'Vue2', level: 100 },
                    { name: 'Ext', level: 100 },
                    { name: 'React Native', level: 75 },
                    { name: 'Typescript', level: 75 },
                    { name: 'Unity', level: 50 },
                    { name: 'Node.js', level: 50 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-2 group">
                      <div className="flex justify-between">
                        <span className="text-gray-700 font-medium group-hover:text-purple-600 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-purple-600">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-500 group-hover:from-purple-600 group-hover:to-indigo-600"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="transform transition-all duration-300 hover:translate-x-2">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-purple-200 pb-2 flex items-center">
                  <i className="i-mdi-web mr-3 text-2xl text-purple-600"></i>个人博客
                </h2>
                <div className="space-y-2">
                  <a
                    href="https://blog.csdn.net/qq_40511157?type=blog"
                    className="flex items-center gap-3 group hover:bg-purple-50 p-3 rounded-lg transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="i-mdi-link text-xl text-purple-600 group-hover:scale-110 transition-transform"></i>
                    <span className="text-purple-600 group-hover:text-purple-800">CSDN</span>
                  </a>
                  <a
                    href="https://github.com/yuhui7pm?tab=repositories"
                    className="flex items-center gap-3 group hover:bg-purple-50 p-3 rounded-lg transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="i-mdi-github text-xl text-purple-600 group-hover:scale-110 transition-transform"></i>
                    <span className="text-purple-600 group-hover:text-purple-800">Github</span>
                  </a>
                </div>
              </section>
            </div>

            {/* 右侧工作经验 */}
            <div className="flex-1">
              <section>
                <h2 className="text-2xl font-bold mb-8 text-gray-800 border-b-2 border-purple-200 pb-2 flex items-center">
                  <i className="i-mdi-briefcase mr-3 text-2xl text-purple-600"></i>工作经验
                </h2>

                {/* WATI */}
                <div className="mb-12 relative pl-8 border-l-2 border-purple-200 company-section">
                  <div className="absolute w-5 h-5 bg-purple-600 rounded-full -left-[11px] top-0 shadow-lg"></div>
                  <div className="mb-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-gray-800 hover:text-purple-600 transition-colors">
                        WATI
                      </h3>
                      <span className="text-purple-600 font-medium px-4 py-1 bg-purple-50 rounded-full">
                        2024.06 - 至今
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2 font-medium">前端负责人 | 前端架构师</p>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                      <h4 className="font-bold text-xl mb-4 text-gray-800">
                        WATI前端应用项目
                        <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
                          React 18, TypeScript, Redux, Redux-Saga, MUI, Styled-Components, Vite
                        </span>
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">项目概述</h5>
                          <p className="text-gray-700 leading-relaxed">
                            作为企业级SaaS应用的前端负责人，主导了从Webpack迁移至Vite的技术升级，采用微前端架构提升团队协作效率。项目使用TypeScript进行开发，确保了代码的类型安全和可维护性。
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">技术架构优化</h5>
                          <ul className="space-y-2 text-gray-700">
                            <li className="leading-relaxed">
                              • 主导Webpack迁移至Vite，开发启动速度提升5倍，CI/CD构建速度提升50%
                            </li>
                            <li className="leading-relaxed">
                              • 采用Module Federation实现微前端架构，优化首屏渲染从10s降至5s
                            </li>
                            <li className="leading-relaxed">
                              • 将所有静态资源迁移至Google Cloud Storage，优化全球资源加载速度
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">工程化实践</h5>
                          <ul className="space-y-2 text-gray-700">
                            <li className="leading-relaxed">
                              • 主导项目TypeScript改造，完成全部代码类型定义，提升代码可维护性
                            </li>
                            <li className="leading-relaxed">
                              • 添加并配置Stylelint，完成全部历史代码规范化，统一样式开发规范
                            </li>
                            <li className="leading-relaxed">
                              • 编写ESLint规则实现Styled-Components命名规范化，提升组件可维护性
                            </li>
                            <li className="leading-relaxed">
                              • 自定义Stylelint规则，将px单位自动转换为CSS变量，统一设计规范
                            </li>
                            <li className="leading-relaxed">
                              • 接入Crowdin翻译系统，实现多语言版本的自动化管理
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">团队管理</h5>
                          <ul className="space-y-2 text-gray-700">
                            <li className="leading-relaxed">
                              • 负责团队管理和技术培训，建立完善的代码审查流程
                            </li>
                            <li className="leading-relaxed">
                              • 主导技术文档体系建设，提升团队协作效率
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">项目链接</h5>
                          <div className="space-y-2">
                            <a
                              href="https://www.figma.com/design/eP3gMKPnFZIygaCXqvjHEn/wati-forntend-app?node-id=0-1&t=lg9D1UVUvIvEpcbb-1"
                              className="block text-blue-600 hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              查看主平台作品集
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                      <h4 className="font-bold text-xl mb-4 text-gray-800">
                        Astra Landing Page
                        <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
                          React 18, TypeScript, Vite, Ant Design, Less, i18next
                        </span>
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">项目概述</h5>
                          <p className="text-gray-700 leading-relaxed">
                            独立开发的企业官网落地页项目，采用现代化技术栈，实现响应式设计、多语言支持和主题切换功能。
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">核心工作</h5>
                          <ul className="space-y-2 text-gray-700">
                            <li className="leading-relaxed">
                              • 基于React 18和TypeScript构建，使用Vite提升开发体验
                            </li>
                            <li className="leading-relaxed">
                              • 使用i18next实现多语言切换，支持自动检测用户语言
                            </li>
                            <li className="leading-relaxed">
                              • 通过CSS变量实现极简白和暗黑主题无缝切换
                            </li>
                            <li className="leading-relaxed">
                              • 采用移动优先设计，完美适配手机和PC端显示
                            </li>
                            <li className="leading-relaxed">
                              • 完整的工程化配置和Docker容器化部署
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">项目链接</h5>
                          <div className="space-y-2">
                            <a
                              href="https://www.engagechat.ai/"
                              className="block text-blue-600 hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              查看落地页
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                      <h4 className="font-bold text-xl mb-4 text-gray-800">
                        WhatsApp Widget
                        <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
                          React, TypeScript, Ant Design, Google Tag Manager
                        </span>
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">项目概述</h5>
                          <p className="text-gray-700 leading-relaxed">
                            开发了一个高度可配置的WhatsApp聊天组件，支持品牌定制和响应式设计，已发布为NPM包并支持GTM快速部署。
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">核心功能</h5>
                          <ul className="space-y-2 text-gray-700">
                            <li className="leading-relaxed">
                              • 提供可嵌入的WhatsApp聊天按钮和对话框，支持品牌定制
                            </li>
                            <li className="leading-relaxed">
                              • 发布为NPM包并集成Google Tag Manager，实现一键部署
                            </li>
                            <li className="leading-relaxed">
                              • 成功应用于多个客户网站，显著提升用户转化率
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">项目链接</h5>
                          <div className="space-y-2">
                            <a
                              href="https://www.npmjs.com/package/@aimer2024/wati-widget"
                              className="block text-blue-600 hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              查看NPM包
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 深圳云九易科技有限公司 */}
                <div className="mb-12 relative pl-8 border-l-2 border-purple-200 company-section">
                  <div className="absolute w-5 h-5 bg-purple-600 rounded-full -left-[11px] top-0 shadow-lg"></div>
                  <div className="mb-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-gray-800 hover:text-purple-600 transition-colors">
                        深圳云九易科技有限公司
                      </h3>
                      <span className="text-purple-600 font-medium px-4 py-1 bg-purple-50 rounded-full">
                        2023.04 - 2024.06
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2 font-medium">前端负责人</p>
                  </div>

                  <div className="space-y-8">
                    {/* Project cards with enhanced styling */}
                    <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                      <h4 className="font-bold text-xl mb-4 text-gray-800">
                        VDD游戏平台
                        <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
                          Vue3, TypeScript, Pixi.js, Antd, Vant, Matter.js, Howler.js
                        </span>
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">业务功能</h5>
                          <p className="text-gray-700 leading-relaxed">
                            作为核心开发者，主导开发了16个小游戏及其生态系统，实现了从0到1的完整构建。项目采用模块化设计，包含游戏核心引擎、用户交互界面、数据分析系统等关键模块。通过Canvas技术实现高性能渲染，打造沉浸式游戏体验，并集成完整的数据分析和可视化功能。
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">技术亮点</h5>
                          <div className="space-y-3">
                            <div>
                              <p className="font-medium text-gray-800 mb-1">技术架构：</p>
                              <p className="text-gray-700 leading-relaxed">
                                基于Vite构建的现代化前端架构，采用ESLint、Stylelint和Prettier实现严格的代码规范。使用Pinia进行高效的状态管理，结合Minio实现可靠的静态资源处理。通过Google
                                Analytics深度集成实现精确的用户行为分析，并使用Rollup插件优化打包性能，确保了统一的Layout框架下的高性能表现。
                              </p>
                            </div>
                            <div>
                              <p className="font-medium text-gray-800 mb-1">核心功能实现：</p>
                              <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li className="leading-relaxed">
                                  游戏引擎：基于Pixi.js构建高性能渲染系统，整合Matter.js物理引擎实现复杂物理场景。针对性能优化包括：多设备自适应、智能生命周期管理、内存优化等。
                                </li>
                                <li className="leading-relaxed">
                                  交互系统：设计并实现分层交互架构，通过自定义Controller优化画布交互体验。
                                </li>
                                <li className="leading-relaxed">
                                  数据可视化：基于Antd组件库开发实时数据监控和分析系统。
                                </li>
                                <li className="leading-relaxed">
                                  国际化支持：实现完整的i18n解决方案。
                                </li>
                                <li className="leading-relaxed">
                                  音频系统：基于Howler.js开发的音频控制器。
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">项目成果</h5>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>系统稳定运行超过12个月，可用性达99.9%</li>
                            <li>成功服务5家商户，建立了稳定的商业合作关系</li>
                            <li>日活跃用户突破4万，环比增长保持15%</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">成果链接</h5>
                          <div className="space-y-2">
                            <a
                              href="https://www.figma.com/design/WBkRUH74zsQT6una29GmAM/VDD%E6%B8%B8%E6%88%8F%E9%A1%B9%E7%9B%AE%E6%B1%87%E6%80%BB?t=1bmmIRFGxuDZlk8a-0"
                              className="block text-blue-600 hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              查看游戏项目作品集
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 官网项目 */}
                    <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                      <h4 className="font-bold text-xl mb-4 text-gray-800">
                        官网
                        <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
                          Vue3, Nuxt, Ts, Antd, TailwindCSS
                        </span>
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">业务功能</h5>
                          <p className="text-gray-700 leading-relaxed">
                            公司官网项目负责人，主导开发了面向全球市场的多语言响应式官网。采用Nuxt.js实现SSR，确保更好的SEO效果和首屏加载性能。项目涵盖：产品展示系统、API文档中心、国际化支持等核心功能。
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">技术说明</h5>
                          <p className="text-gray-700 leading-relaxed">
                            项目使用nuxt搭建，配置了eslint、stylelint和prettier，多语言使用了i18n，页面组件未使用组件库，纯手写，页面适配，通过媒体查询实现。
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">产品成效</h5>
                          <p className="text-gray-700">线上稳定运行1年之余。</p>
                        </div>
                      </div>
                    </div>

                    {/* B端V1、V2、APK项目 */}
                    <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                      <h4 className="font-bold text-xl mb-4 text-gray-800">
                        B端V1、B端V2、B端APK
                        <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
                          Vue3, Ts, Vant, React Native, Appflyers
                        </span>
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">业务功能</h5>
                          <p className="text-gray-700 leading-relaxed">
                            作为B端平台核心开发者，设计并实现了完整的商户运营系统。采用Vue3 +
                            TypeScript技术栈，实现了主题定制、多语言切换、支付系统集成、数据分析等核心功能。同时负责React
                            Native版本的开发，实现了跨平台统一的用户体验。
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">技术说明</h5>
                          <p className="text-gray-700 leading-relaxed">
                            登录模块主要是短信登录，和相关web
                            api实现的google、facebook登录；若apk打开的B端，h5则webview通信用react-native的google库、facebook库实现用户登录；邀请返佣是用户下载和打开apk时，前端根据设备信息生成唯一一标识上报后端，判断当前用户发奖励；apk运行时，通过appflyers的埋点事件实现事件上报。
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">产品成效</h5>
                          <p className="text-gray-700">
                            B端平台V1和APK已经发布；B端平台V2上线1年余，基本功能内部员工正常使用中。
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">成果链接</h5>
                          <div className="space-y-2">
                            <a
                              href="https://www.figma.com/design/f5UIsdls2L0IyLcE6gQwkn/B%E7%AB%AF"
                              className="block text-blue-600 hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              查看B端作品集
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* B端后台管理系统 */}
                    <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                      <h4 className="font-bold text-xl mb-4 text-gray-800">
                        B端后台管理系统
                        <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
                          Vue3, Ts, Antd, Vben-Admin
                        </span>
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">业务功能</h5>
                          <p className="text-gray-700 leading-relaxed">
                            通过开源管理后台vue-vben-admin前后实现了三个"B端平台"的管理后台，在管理后台配置相关功能，"B端平台"的数据才能正常显示。B端管理平台功能模块主要有：管理员管理（账号操作、登录日志）、玩家管理（玩家查询）、财务管理（充值、体现、转入转出、数据看板、体现列表等）、游戏设置（G端列表、游戏列表）、运营管理（APP配置、反馈建议、banner设置、活动设置、停服更新、跑马灯、返佣设置）、货币配置、下注配置等。
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">技术说明</h5>
                          <p className="text-gray-700 leading-relaxed">
                            调用该框架内部的组件和方法可实现全部业务。像一些图片的上传则是使用upload到后端的minio存储桶，以便前端download到相应的资源；特别地，像csv导出功能则是前端通过轮询访问table数据，调用xlsx库实现的前端导出；用户页面权限的控制，前端匹配项目的路由和后台配置的角色页面的路由权限，动态过滤需要隐藏的路由。
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">产品成效</h5>
                          <p className="text-gray-700">
                            后台V1已弃用；V2已上线1年余次；商户端后台已分配给商户使用很长一段时间。
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* B端后台H5 */}
                    <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                      <h4 className="font-bold text-xl mb-4 text-gray-800">
                        B端后台H5
                        <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
                          Vue3, Ts, Vant, Echart
                        </span>
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">业务功能</h5>
                          <p className="text-gray-700 leading-relaxed">
                            为了方便内部员工用手机查看公司业务的运行情况，将管理后台的部分重要业务，放到移动端去展示。比如每个游戏的运营情况，每月每周每日的实际运营情况，以及每个商家的运营情况等。基本只涉及表格，趋势图和基本的页面展示功能。
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">技术说明</h5>
                          <p className="text-gray-700 leading-relaxed">
                            项目使用vite构建，配置了eslint、stylelint和prettier，使用pinia进行数据存储与通信。使用vue3-touch-events实现手势滑动，提高移动端体验；echart实现趋势图；vue-use的hook实现表格滑动刷新加载；通过AbortController取消上个tab的未完成的请求。
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">产品成效</h5>
                          <p className="text-gray-700">线上运营两个月。</p>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-purple-600 mb-2">成果链接</h5>
                        <div className="space-y-2">
                          <a
                            href="https://www.figma.com/design/AaRNEZw9D7DkfH4KhIDM3L/G%E7%AB%AF%E5%90%8E%E5%8F%B0H5?node-id=0-1&t=gDnGH60UHxLR7kwh-1"
                            className="block text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            查看H5后台作品集
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 深圳小库科技有限公司 */}
                <div className="mb-12 relative pl-8 border-l-2 border-purple-200 company-section">
                  <div className="absolute w-5 h-5 bg-purple-600 rounded-full -left-[11px] top-0 shadow-lg"></div>
                  <div className="mb-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-gray-800 hover:text-purple-600 transition-colors">
                        深圳小库科技有限公司
                      </h3>
                      <span className="text-purple-600 font-medium px-4 py-1 bg-purple-50 rounded-full">
                        2021.05 - 2023.03
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2 font-medium">高级前端开发工程师</p>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                      <h4 className="font-bold text-xl mb-4 text-gray-800">
                        CAD智能审图平台
                        <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
                          React18, TypeScript, Pixi.js, Antd
                        </span>
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">项目描述</h5>
                          <p className="text-gray-700 leading-relaxed">
                            作为CAD智能审图平台的核心开发者，成功实现了处理10万级图元的高性能渲染系统。基于Pixi.js实现了复杂的CAD图纸解析与渲染，设计了高效的图元选择与编辑系统。创新性地实现了图层管理、智能测量、协同标注等功能，显著提升了设计审核效率。
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">成果链接</h5>
                          <div className="space-y-2">
                            <a
                              href="https://www.yuque.com/login?goto=https%3A%2F%2Fwww.yuque.com%2Fg%2Fyuhui-syyd0%2Fzvhoye%2Fuenvm451sixwsewv%2Fcollaborator%2Fjoin%3Ftoken%3Dmq4VHs6FnUtTWPNO%26source%3Ddoc_collaborator#%20%E3%80%8A%E5%B0%8F%E5%BA%93_%E6%99%BA%E8%83%BD%E5%AE%A1%E5%9B%BE%E3%80%8B"
                              className="block text-blue-600 hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              查看CAD审图作品集
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                      <h4 className="font-bold text-xl mb-4 text-gray-800">
                        智能建筑设计系统
                        <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
                          React18, TypeScript, Fabric.js, Antd
                        </span>
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">项目描述</h5>
                          <p className="text-gray-700 leading-relaxed">
                            作为智能建筑设计系统的核心开发者，设计并实现了创新的建筑设计工具。核心功能包括：智能构件编辑系统、实时面积计算引擎、模板管理系统等。特别设计了"草图一键生成"功能并获得专利，该功能通过AI算法将手绘草图转换为标准化建筑户型，显著提升了设计效率。
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">成果链接</h5>
                          <div className="space-y-2">
                            <a
                              href="https://www.yuque.com/g/yuhui-syyd0/zvhoye/guyuqq/collaborator/join?token=8aI2ZZwdtrRddSqv&source=doc_collaborator#%20%E3%80%8A%E5%B0%8F%E5%BA%93_%E6%99%BA%E8%83%BD%E5%8D%95%E4%BD%93%E3%80%8B"
                              className="block text-blue-600 hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              查看建筑单体作品集
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                      <h4 className="font-bold text-xl mb-4 text-gray-800">
                        管理平台
                        <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
                          React18, TypeScript, Antd
                        </span>
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">项目描述</h5>
                          <p className="text-gray-700 leading-relaxed">
                            负责项目管理平台的维护开发工作。主要工作包括添加设计工具的入口，展示设计项目信息，展示设计师的信息等功能的开发与维护。该平台作为公司内部重要的管理工具，为设计工作提供了便捷的管理界面。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 深信服科技股份有限公司 */}
                <div className="relative pl-8 border-l-2 border-purple-200 company-section">
                  <div className="absolute w-5 h-5 bg-purple-600 rounded-full -left-[11px] top-0 shadow-lg"></div>
                  <div className="mb-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-gray-800 hover:text-purple-600 transition-colors">
                        深信服科技股份有限公司
                      </h3>
                      <span className="text-purple-600 font-medium px-4 py-1 bg-purple-50 rounded-full">
                        2019.12 - 2021.04
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2 font-medium">初级前端开发工程师</p>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                      <h4 className="font-bold text-xl mb-4 text-gray-800">
                        企业级管理平台开发
                        <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
                          Vue2, TypeScript, Ext
                        </span>
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">主要工作</h5>
                          <ul className="space-y-2 text-gray-700">
                            <li className="leading-relaxed">
                              1.
                              主导开发新一代AF防火墙和SD-WAN终端管理平台，实现了设备监控、配置管理等核心功能。
                            </li>
                            <li className="leading-relaxed">
                              2.
                              设计并实现了BBC管理平台的Web端和移动端，采用响应式设计确保多端统一的用户体验。整合了Highchart和Echart实现数据可视化，通过NutUI开发移动端界面。
                            </li>
                            <li className="leading-relaxed">
                              3.
                              主导完成了SDWAN项目的Vue+TypeScript重构，优化了代码架构，提升了开发效率和系统可维护性。
                            </li>
                            <li className="leading-relaxed">
                              4.
                              独立完成UEDC部门官网的商城系统，包括前端展示系统和后台管理系统，采用全栈开发方案（Vue
                              + Koa + MySQL）。
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* 导出按钮 */}
        <div className="fixed bottom-8 right-8 flex flex-col gap-4 export-buttons">
          <button
            onClick={exportToImage}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-purple-300"
            title="导出图片"
          >
            <i className="i-mdi-image text-3xl"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
