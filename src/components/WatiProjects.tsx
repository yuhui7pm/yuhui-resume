const WatiProjects = () => {
  return (
    <div className="space-y-8">
      <div className="project-card bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
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
              <li className="leading-relaxed">• 接入Crowdin翻译系统，实现多语言版本的自动化管理</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">团队管理</h5>
            <ul className="space-y-2 text-gray-700">
              <li className="leading-relaxed">• 负责团队管理和技术培训，建立完善的代码审查流程</li>
              <li className="leading-relaxed">• 主导技术文档体系建设，提升团队协作效率</li>
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

      <div className="project-card bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
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
              <li className="leading-relaxed">• 使用i18next实现多语言切换，支持自动检测用户语言</li>
              <li className="leading-relaxed">• 通过CSS变量实现极简白和暗黑主题无缝切换</li>
              <li className="leading-relaxed">• 采用移动优先设计，完美适配手机和PC端显示</li>
              <li className="leading-relaxed">• 完整的工程化配置和Docker容器化部署</li>
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

      <div className="project-card bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
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
              <li className="leading-relaxed">• 成功应用于多个客户网站，显著提升用户转化率</li>
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
  )
}

export default WatiProjects
