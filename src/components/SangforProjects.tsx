const SangforProjects = () => {
  return (
    <div className="space-y-8">
      <div className="project-card bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
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
                1. 主导开发新一代AF防火墙和SD-WAN终端管理平台，实现了设备监控、配置管理等核心功能。
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
  )
}

export default SangforProjects
