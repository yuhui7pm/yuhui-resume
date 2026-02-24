const WatiProjects = () => {
  return (
    <div className="space-y-8">
      <div className="project-card bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="font-bold text-xl mb-4 text-gray-800">
          🚀 WATI企业级SaaS平台重构
          <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
            React 18, TypeScript, Redux-Saga, MUI, Vite, 微前端
          </span>
        </h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🎯 项目背景与挑战</h5>
            <p className="text-gray-700 leading-relaxed">
              作为前端负责人，面临遗留系统Webpack构建缓慢（开发启动10分钟+）、首屏渲染超时（10秒+）、团队协作效率低等核心问题。主导平台架构升级，优化全球用户体验，支撑企业快速扩张。
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">💡 核心解决方案</h5>
            <ul className="space-y-2 text-gray-700">
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">性能革命：</span>
                主导Webpack→Vite迁移，<span className="bg-yellow-100 px-2 py-1 rounded">开发启动速度提升5倍</span>，CI/CD构建优化50%
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">架构升级：</span>引入Module
                Federation微前端架构，<span className="bg-yellow-100 px-2 py-1 rounded">首屏渲染从10s优化至5s</span>
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">技术创新：</span>
                TypeScript全面改造、自研ESLint/Stylelint规则、Crowdin翻译流水线集成
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">团队管理：</span>
                建立技术标准、Code Review流程、技术文档体系
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🏆 项目成果</h5>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-600">5x</div>
                  <div className="text-sm text-gray-600">开发效率提升</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">50%</div>
                  <div className="text-sm text-gray-600">构建速度优化</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🔗 作品展示</h5>
            <div className="space-y-2">
              <a
                href="https://www.figma.com/design/eP3gMKPnFZIygaCXqvjHEn/wati-forntend-app?node-id=0-1&t=lg9D1UVUvIvEpcbb-1"
                className="block text-blue-600 hover:underline bg-blue-50 p-3 rounded-lg transition-all hover:bg-blue-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                📱 查看主平台设计作品集
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-card bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="font-bold text-xl mb-4 text-gray-800">
          🌟 Astra企业官网解决方案
          <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
            React 18, TypeScript, Vite, i18next, 响应式设计
          </span>
        </h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🎯 项目价值</h5>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-medium text-purple-600">业务目标：</span>
              打造高转化率的企业官网，支撑全球市场拓展。
              <span className="font-medium text-purple-600">技术挑战：</span>
              实现极致的用户体验和完美的多端适配。
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">💡 核心亮点</h5>
            <ul className="space-y-2 text-gray-700">
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">现代化架构：</span>React 18 +
                TypeScript + Vite，追求极致开发体验
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">智能国际化：</span>
                i18next实现多语言切换，支持用户语言自动检测
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">主题系统：</span>
                CSS变量驱动的极简白/暗黑主题无缝切换
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">响应式设计：</span>
                移动优先策略，完美适配所有设备
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🔗 在线体验</h5>
            <div className="space-y-2">
              <a
                href="https://www.engagechat.ai/"
                className="block text-blue-600 hover:underline bg-blue-50 p-3 rounded-lg transition-all hover:bg-blue-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                🌐 访问线上产品
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-card bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="font-bold text-xl mb-4 text-gray-800">
          🎁 WhatsApp Widget产品化
          <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
            React, TypeScript, NPM包, GTM集成
          </span>
        </h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🎯 产品创新</h5>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-medium text-purple-600">商业痛点：</span>
              客户需要快速部署WhatsApp客服功能，但缺乏技术资源。
              <span className="font-medium text-purple-600">解决方案：</span>
              开发高度可配置的Widget，支持品牌定制和一键部署。
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">💡 技术实现</h5>
            <ul className="space-y-2 text-gray-700">
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">产品化：</span>
                发布为标准NPM包，支持主流框架集成
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">零代码部署：</span>集成Google Tag
                Manager，实现一键部署
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">商业成果：</span>
                已成功应用于多个客户网站，显著提升转化率
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">📦 开源贡献</h5>
            <div className="space-y-2">
              <a
                href="https://www.npmjs.com/package/@aimer2024/wati-widget"
                className="block text-blue-600 hover:underline bg-blue-50 p-3 rounded-lg transition-all hover:bg-blue-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                📦 查看NPM包详情
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-card bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border-2 border-indigo-100">
        <h4 className="font-bold text-xl mb-4 text-gray-800">
          💼 核心业务功能开发
          <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
            完成175+需求迭代
          </span>
        </h4>
        <div className="space-y-3">
          <div className="leading-relaxed text-gray-700">
            <span className="font-medium text-indigo-600">📱 SMS多渠道通信：</span>
            从0到1开发SMS Fallback方案，完成Twilio集成、智能降级策略、模板系统、双向预览等完整功能，<span className="bg-yellow-100 px-2 py-1 rounded">消息触达率提升30%+</span>
          </div>
          <div className="leading-relaxed text-gray-700">
            <span className="font-medium text-indigo-600">🌐 多渠道平台整合：</span>
            完整开发Facebook Messenger、Instagram评论自动化、RCS渠道、WhatsApp Calling统计等功能，实现5+社交渠道统一管理
          </div>
          <div className="leading-relaxed text-gray-700">
            <span className="font-medium text-indigo-600">⚡ Team Inbox性能优化：</span>
            解决大客户3-5秒加载延迟、消息同步问题、快捷键冲突等核心体验问题，完成89+个Team Inbox相关任务
          </div>
          <div className="leading-relaxed text-gray-700">
            <span className="font-medium text-indigo-600">🌍 国际化系统优化：</span>
            优化Crowdin翻译流水线集成，translation.json构建体积减少50%+，提升多语言版本加载速度
          </div>
          <div className="leading-relaxed text-gray-700">
            <span className="font-medium text-indigo-600">📊 营销自动化功能：</span>
            参与Broadcasts、Automation模块18+功能开发，包括广播分析、自动化流程优化等
          </div>
        </div>
      </div>
    </div>
  )
}

export default WatiProjects
