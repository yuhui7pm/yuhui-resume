const SangforProjects = () => {
  return (
    <div className="space-y-8">
      <div className="project-card bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="font-bold text-xl mb-4 text-gray-800">
          🌟 企业级安全产品开发
          <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
            Vue2, TypeScript, Ext, 企业级应用
          </span>
        </h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🎯 职业起步与成长</h5>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-medium text-purple-600">成长轨迹：</span>
              从初级前端工程师起步，在知名网络安全公司深信服快速成长。
              <span className="font-medium text-purple-600">技术积累：</span>
              接触企业级产品开发，为后续架构师之路奠定坚实基础。
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🔧 核心项目成果</h5>
            <ul className="space-y-3 text-gray-700">
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">🔥 AF防火墙管理平台：</span>
                主导开发新一代防火墙管理系统，实现设备监控、配置管理、安全策略等核心功能，为企业网络安全提供强力保障。
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">🌐 SD-WAN终端管理：</span>
                设计并实现企业级SD-WAN解决方案，支持大规模网络设备的统一管理和智能调度。
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">📊 BBC数据可视化：</span>
                构建全端数据分析平台，集成Highcharts和ECharts实现复杂数据可视化，支持Web端和移动端统一体验。
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-purple-600">🚀 技术架构升级：</span>
                主导SDWAN项目的Vue+TypeScript重构，建立现代化的前端架构，显著提升开发效率和代码质量。
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">💻 全栈能力展现</h5>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
              <p className="font-medium text-gray-800 mb-2">🛒 UEDC商城系统（全栈项目）</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>
                  <span className="font-medium">前端：</span>Vue SPA应用，响应式设计，现代化UI交互
                </li>
                <li>
                  <span className="font-medium">后端：</span>Koa.js RESTful API，JWT认证，文件上传
                </li>
                <li>
                  <span className="font-medium">数据库：</span>MySQL关系型数据库设计，数据建模
                </li>
                <li>
                  <span className="font-medium">部署：</span>完整的DevOps流程，从开发到生产环境
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🏆 技术能力提升</h5>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-600">🎯</div>
                  <div className="text-sm text-gray-600">企业级产品经验</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">🔧</div>
                  <div className="text-sm text-gray-600">全栈开发能力</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">📈</div>
                  <div className="text-sm text-gray-600">架构设计思维</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">⚡</div>
                  <div className="text-sm text-gray-600">性能优化经验</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">🌱 职业发展价值</h5>
            <p className="text-gray-700 leading-relaxed">
              在深信服的经历为我后续的技术leader之路提供了
              <span className="bg-yellow-100 px-2 py-1 rounded">企业级产品开发经验</span>， 培养了
              <span className="bg-yellow-100 px-2 py-1 rounded">全栈技术视野</span>和
              <span className="bg-yellow-100 px-2 py-1 rounded">系统架构思维</span>，
              为成长为前端架构师奠定了坚实基础。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SangforProjects
