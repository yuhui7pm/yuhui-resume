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
              <span className="font-medium text-purple-600">技术痛点：</span>
              作为前端负责人，面临遗留系统Webpack构建缓慢（开发启动10分钟+）、首屏渲染超时（10秒+）、团队协作效率低等核心问题。
              <span className="font-medium text-purple-600">业务目标：</span>
              优化全球用户体验，支撑企业快速扩张需求。
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">💡 核心解决方案</h5>
            <ul className="space-y-2 text-gray-700">
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">性能革命：</span>
                主导Webpack→Vite迁移，
                <span className="bg-yellow-100 px-2 py-1 rounded">开发启动速度提升5倍</span>
                ，CI/CD构建优化50%
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">架构升级：</span>引入Module
                Federation微前端架构，
                <span className="bg-yellow-100 px-2 py-1 rounded">首屏渲染从10s优化至5s</span>
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">全球部署：</span>
                设计GCS静态资源方案，显著提升全球访问速度
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🔧 技术创新亮点</h5>
            <ul className="space-y-2 text-gray-700">
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">代码质量：</span>
                主导TypeScript全面改造，建立完整类型体系，代码可维护性提升60%
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">工程化：</span>
                自研ESLint/Stylelint规则，实现Styled-Components自动化规范
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">设计系统：</span>
                创新px→CSS变量转换规则，统一全局设计token
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">国际化：</span>
                集成Crowdin翻译流水线，实现多语言版本自动化管理
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">👥 团队管理成果</h5>
            <ul className="space-y-2 text-gray-700">
              <li className="leading-relaxed">
                • 建立前端团队技术标准和最佳实践，提升团队整体技术水平
              </li>
              <li className="leading-relaxed">
                • 设计完整的Code Review流程，确保代码质量和知识传承
              </li>
              <li className="leading-relaxed">• 构建技术文档体系，显著提升团队协作效率</li>
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
          📱 SMS多渠道通信平台
          <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
            React 18, TypeScript, Twilio SDK, Redux-Saga, 数据可视化
          </span>
        </h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🎯 项目背景与价值</h5>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-medium text-purple-600">业务痛点：</span>
              WhatsApp消息送达率受网络、用户在线状态影响，企业关键消息可能无法触达。
              <span className="font-medium text-purple-600">解决方案：</span>
              从0到1开发SMS作为WhatsApp的智能Fallback方案，确保重要消息100%送达。
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">💡 核心功能实现</h5>
            <ul className="space-y-2 text-gray-700">
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">Twilio集成：</span>
                设计完整的SMS服务商接入流程，实现API封装和错误处理机制
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">智能Fallback：</span>
                开发WhatsApp发送失败自动切换SMS的降级策略，
                <span className="bg-yellow-100 px-2 py-1 rounded">消息触达率提升30%+</span>
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">模板系统：</span>
                实现SMS模板创建、编辑、管理全流程，支持变量替换和预览功能
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">双向预览：</span>
                创新实现WhatsApp ↔ SMS实时预览切换，支持字符限制智能提醒
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">数据分析：</span>
                构建SMS发送统计分析仪表盘，提供发送量、成功率、成本等多维度数据
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🔧 技术亮点</h5>
            <ul className="space-y-2 text-gray-700">
              <li className="leading-relaxed">
                • 设计统一的多渠道消息发送抽象层，实现渠道切换的无缝体验
              </li>
              <li className="leading-relaxed">
                • 实现SMS字符编码优化，支持GSM-7和UCS-2智能切换，降低发送成本
              </li>
              <li className="leading-relaxed">
                • 开发实时消息状态追踪系统，支持Webhook回调处理
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🏆 业务成果</h5>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-600">30%+</div>
                  <div className="text-sm text-gray-600">消息触达率提升</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">100%</div>
                  <div className="text-sm text-gray-600">关键消息送达保障</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-card bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="font-bold text-xl mb-4 text-gray-800">
          🌐 全渠道消息平台整合
          <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
            React 18, TypeScript, WebSocket, 多渠道API集成
          </span>
        </h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🎯 项目背景</h5>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-medium text-purple-600">业务需求：</span>
              支持企业在WhatsApp、Facebook Messenger、Instagram、RCS等多个社交平台统一管理客户对话。
              <span className="font-medium text-purple-600">技术挑战：</span>
              不同渠道API差异大，需要设计统一的数据模型和交互体验。
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">💡 核心功能实现</h5>
            <ul className="space-y-2 text-gray-700">
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">Facebook Messenger集成：</span>
                完整开发Messenger消息收发、快速回复、富媒体消息支持
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">Instagram自动化：</span>
                实现Instagram评论自动流转到Team Inbox，支持私信回复
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">RCS渠道支持：</span>
                新增RCS（富媒体通信）渠道，支持品牌认证和交互式消息
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">WhatsApp Calling：</span>
                开发WhatsApp语音通话统计分析功能，提供通话时长、频次等数据
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">渠道管理页面：</span>
                构建统一的渠道连接状态监控和管理中心
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🔧 技术亮点</h5>
            <ul className="space-y-2 text-gray-700">
              <li className="leading-relaxed">
                • 设计统一消息适配器模式，抽象不同渠道的差异，实现一致的用户体验
              </li>
              <li className="leading-relaxed">
                • 实现多渠道消息实时同步机制，基于WebSocket保证消息即时性
              </li>
              <li className="leading-relaxed">
                • 开发渠道健康度监控系统，自动检测连接状态并告警
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🏆 项目成果</h5>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-600">5+</div>
                  <div className="text-sm text-gray-600">支持社交渠道</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">统一体验</div>
                  <div className="text-sm text-gray-600">多渠道消息管理</div>
                </div>
              </div>
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
          ✨ 其他核心贡献
          <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
            持续优化 · 技术创新
          </span>
        </h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-indigo-600 mb-2">📊 工作量统计</h5>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-indigo-600">175+</div>
                  <div className="text-sm text-gray-600">完成任务总数</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-600">135+</div>
                  <div className="text-sm text-gray-600">功能开发任务</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-600">28+</div>
                  <div className="text-sm text-gray-600">性能Bug修复</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-indigo-600 mb-2">🚀 性能优化专项</h5>
            <ul className="space-y-2 text-gray-700">
              <li className="leading-relaxed">
                • <span className="font-medium">Team Inbox加载优化：</span>
                解决3-5秒加载延迟问题，优化消息同步机制，提升用户体验
              </li>
              <li className="leading-relaxed">
                • <span className="font-medium">懒加载优化：</span>
                实现核心模块按需加载，减少首屏资源体积
              </li>
              <li className="leading-relaxed">
                • <span className="font-medium">国际化体积优化：</span>
                优化translation.json构建策略，减少翻译文件体积50%+
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-indigo-600 mb-2">🔧 工程化提升</h5>
            <ul className="space-y-2 text-gray-700">
              <li className="leading-relaxed">
                • <span className="font-medium">代码规范：</span>
                完善Stylelint规则、Code Inspector插件集成、CODEOWNERS管理
              </li>
              <li className="leading-relaxed">
                • <span className="font-medium">开发体验：</span>
                添加开发模式代码跳转工具，更新Cursor AI规则，提升开发效率
              </li>
              <li className="leading-relaxed">
                • <span className="font-medium">文档建设：</span>
                编写前端代码规范文档、README优化、技术文档体系建设
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-indigo-600 mb-2">💼 产品功能迭代</h5>
            <ul className="space-y-2 text-gray-700">
              <li className="leading-relaxed">
                • <span className="font-medium">Team Inbox核心功能：</span>
                完成89+个Team Inbox相关任务，覆盖聊天、过滤、搜索等核心功能
              </li>
              <li className="leading-relaxed">
                • <span className="font-medium">营销自动化：</span>
                参与Broadcasts、Automation模块的18+个功能开发
              </li>
              <li className="leading-relaxed">
                • <span className="font-medium">用户体验优化：</span>
                修复快捷键冲突、优化交互细节、提升产品易用性
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WatiProjects
