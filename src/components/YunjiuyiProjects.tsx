const YunjiuyiProjects = () => {
  return (
    <div className="space-y-8">
      <div className="project-card bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="font-bold text-xl mb-4 text-gray-800">
          🎮 VDD游戏生态系统
          <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
            Vue3, Pixi.js, Matter.js, Canvas, 游戏引擎
          </span>
        </h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🚀 项目规模与挑战</h5>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-medium text-purple-600">技术挑战：</span>从0到1构建
              <span className="bg-yellow-100 px-2 py-1 rounded">16款小游戏</span>
              的完整生态系统，需要解决高性能渲染、复杂物理交互、多设备适配等核心技术难题。
              <span className="font-medium text-purple-600">业务价值：</span>
              为5家商户提供稳定的游戏运营服务，实现用户规模的快速增长。
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🏗️ 核心技术架构</h5>
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                <p className="font-medium text-gray-800 mb-2">🎯 游戏引擎设计</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>基于Pixi.js构建高性能渲染系统，支持复杂场景实时渲染</li>
                  <li>集成Matter.js物理引擎，实现真实物理交互效果</li>
                  <li>自研多设备自适应方案，完美适配手机/平板/PC端</li>
                  <li>设计智能生命周期管理，解决内存泄漏问题</li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                <p className="font-medium text-gray-800 mb-2">⚡ 性能优化策略</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>分层交互架构设计，优化Canvas绘制性能</li>
                  <li>自定义Controller实现高效的用户交互</li>
                  <li>基于Howler.js的音频系统优化</li>
                  <li>实现对象池技术，减少GC频率</li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                <p className="font-medium text-gray-800 mb-2">📊 数据驱动运营</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Google Analytics深度集成，实现精准用户行为分析</li>
                  <li>基于Antd开发实时数据监控系统</li>
                  <li>完整的A/B测试框架，支持游戏玩法优化</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🏆 商业成果</h5>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-600">4万+</div>
                  <div className="text-sm text-gray-600">日活跃用户</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">99.9%</div>
                  <div className="text-sm text-gray-600">系统可用性</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">5家</div>
                  <div className="text-sm text-gray-600">合作商户</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🔗 作品展示</h5>
            <div className="space-y-2">
              <a
                href="https://www.figma.com/design/WBkRUH74zsQT6una29GmAM/VDD%E6%B8%B8%E6%88%8F%E9%A1%B9%E7%9B%AE%E6%B1%87%E6%80%BB?t=1bmmIRFGxuDZlk8a-0"
                className="block text-blue-600 hover:underline bg-blue-50 p-3 rounded-lg transition-all hover:bg-blue-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                🎮 查看游戏作品集合
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-card bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="font-bold text-xl mb-4 text-gray-800">
          🌐 全球化官网建设
          <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
            Vue3, Nuxt, SSR, TailwindCSS, 国际化
          </span>
        </h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🎯 项目价值</h5>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-medium text-purple-600">业务目标：</span>
              打造面向全球市场的多语言官网，提升品牌影响力。
              <span className="font-medium text-purple-600">技术要求：</span>
              需要优秀的SEO表现和首屏加载性能。
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🔧 技术实现</h5>
            <ul className="space-y-2 text-gray-700">
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">SSR优化：</span>
                基于Nuxt.js实现服务端渲染，显著提升SEO效果
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">响应式设计：</span>
                通过媒体查询实现完美的移动端适配
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">国际化方案：</span>
                i18n多语言支持，覆盖主要目标市场
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">性能优化：</span>
                代码分割和资源预加载，提升加载速度
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">📈 运营成果</h5>
            <p className="text-gray-700">
              <span className="bg-green-100 px-2 py-1 rounded">线上稳定运行1年+</span>
              ，支撑公司全球业务拓展
            </p>
          </div>
        </div>
      </div>

      <div className="project-card bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="font-bold text-xl mb-4 text-gray-800">
          📱 B端运营平台矩阵
          <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
            Vue3, React Native, 跨平台, 数据分析
          </span>
        </h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🎯 产品规划</h5>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-medium text-purple-600">业务挑战：</span>
              为商户提供完整的运营工具链，包括Web端、移动端和APK版本。
              <span className="font-medium text-purple-600">技术方案：</span>
              设计统一的数据层和业务逻辑，实现跨平台的一致体验。
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">💡 核心功能</h5>
            <ul className="space-y-2 text-gray-700">
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">智能登录：</span>集成短信登录 +
                社交登录（Google/Facebook）
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">跨平台通信：</span>WebView与React
                Native的深度集成
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">用户分析：</span>
                基于设备指纹的用户追踪和返佣系统
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">数据上报：</span>
                Appflyers埋点事件，实现精准分析
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🏆 商业价值</h5>
            <p className="text-gray-700">
              B端平台V2和APK版本<span className="bg-green-100 px-2 py-1 rounded">成功上线1年+</span>
              ，为商户提供稳定的运营服务
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🔗 作品展示</h5>
            <div className="space-y-2">
              <a
                href="https://www.figma.com/design/f5UIsdls2L0IyLcE6gQwkn/B%E7%AB%AF"
                className="block text-blue-600 hover:underline bg-blue-50 p-3 rounded-lg transition-all hover:bg-blue-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                💼 查看B端平台设计
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-card bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="font-bold text-xl mb-4 text-gray-800">
          🎛️ 企业级管理后台
          <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
            Vue3, Vben-Admin, 权限管理, 数据可视化
          </span>
        </h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🎯 系统设计</h5>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-medium text-purple-600">架构思路：</span>
              基于vue-vben-admin框架，快速构建企业级管理系统。
              <span className="font-medium text-purple-600">核心模块：</span>
              涵盖用户管理、财务管理、游戏设置、运营配置等全业务链条。
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🔧 技术亮点</h5>
            <ul className="space-y-2 text-gray-700">
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">权限控制：</span>
                基于路由的动态权限管理，支持角色精细化配置
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">数据导出：</span>
                前端轮询+xlsx库实现大数据量CSV导出
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">文件管理：</span>
                集成Minio对象存储，实现图片上传和管理
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">数据看板：</span>
                实时财务数据展示和趋势分析
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">📊 业务成果</h5>
            <p className="text-gray-700">
              后台V2版本<span className="bg-green-100 px-2 py-1 rounded">稳定运行1年+</span>
              ，商户端后台已分配给商户长期使用
            </p>
          </div>
        </div>
      </div>

      <div className="project-card bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="font-bold text-xl mb-4 text-gray-800">
          📱 移动端数据分析平台
          <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
            Vue3, Vant, ECharts, 移动端优化
          </span>
        </h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🎯 产品定位</h5>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-medium text-purple-600">业务需求：</span>
              为内部员工提供移动端的业务数据查看，随时随地掌握运营情况。
              <span className="font-medium text-purple-600">技术挑战：</span>
              在移动端呈现复杂的数据分析和趋势图表。
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">💡 移动端优化</h5>
            <ul className="space-y-2 text-gray-700">
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">交互优化：</span>
                vue3-touch-events实现流畅的手势操作
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">数据可视化：</span>
                ECharts移动端适配，完美呈现趋势图
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">性能优化：</span>
                AbortController取消无效请求，优化切换体验
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">下拉刷新：</span>vue-use
                hooks实现原生般的刷新加载
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🔗 产品展示</h5>
            <div className="space-y-2">
              <a
                href="https://www.figma.com/design/AaRNEZw9D7DkfH4KhIDM3L/G%E7%AB%AF%E5%90%8E%E5%8F%B0H5?node-id=0-1&t=gDnGH60UHxLR7kwh-1"
                className="block text-blue-600 hover:underline bg-blue-50 p-3 rounded-lg transition-all hover:bg-blue-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                📱 查看移动端设计
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YunjiuyiProjects
