const App = () => {
  const exportToPDF = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12">
      <div className="container mx-auto px-4" style={{ maxWidth: '1000px' }}>
        <div id="resume" className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* 顶部个人信息区域 */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-white">
            <div className="flex items-center gap-8">
              <img
                src="/yuhui-resume/images/yuhui.jpg"
                alt="余晖"
                className="w-40 h-40 rounded-2xl object-cover shadow-lg border-4 border-white/20"
              />
              <div>
                <h1 className="text-4xl font-bold mb-3">余晖</h1>
                <p className="text-xl text-purple-100 mb-4">高级前端开发工程师</p>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <i className="i-mdi-phone text-purple-200"></i>
                    <span>15766495385</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="i-mdi-email text-purple-200"></i>
                    <span>1176951680@qq.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-8 p-8">
            {/* 左侧信息 */}
            <div className="w-1/3 space-y-8">
              <section>
                <h2 className="text-xl font-bold mb-4 text-gray-800 border-b-2 border-purple-200 pb-2">
                  <i className="i-mdi-account-details mr-2 text-purple-600"></i>基本信息
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <i className="i-mdi-clock text-purple-600"></i>
                    <span className="text-gray-700">4年前端开发经验</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="i-mdi-school text-purple-600"></i>
                    <span className="text-gray-700">汕头大学 · 本科</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="i-mdi-map-marker text-purple-600"></i>
                    <span className="text-gray-700">深圳</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="i-mdi-currency-cny text-purple-600"></i>
                    <span className="text-gray-700">期望薪资：27K+</span>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-gray-800 border-b-2 border-purple-200 pb-2">
                  <i className="i-mdi-tools mr-2 text-purple-600"></i>专业技能
                </h2>
                <div className="space-y-4">
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
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-purple-600">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-gray-800 border-b-2 border-purple-200 pb-2">
                  <i className="i-mdi-web mr-2 text-purple-600"></i>个人博客
                </h2>
                <div className="space-y-3">
                  <a
                    href="https://blog.csdn.net/xxx"
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
                  >
                    <i className="i-mdi-link"></i>
                    <span>CSDN</span>
                  </a>
                  <a
                    href="https://github.com/xxx"
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
                  >
                    <i className="i-mdi-github"></i>
                    <span>Github</span>
                  </a>
                </div>
              </section>
            </div>

            {/* 右侧工作经验 */}
            <div className="flex-1">
              <section>
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-purple-200 pb-2">
                  <i className="i-mdi-briefcase mr-2 text-purple-600"></i>工作经验
                </h2>

                {/* 深圳云九易科技有限公司 */}
                <div className="mb-8 relative pl-6 border-l-2 border-purple-200 company-section">
                  <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-0"></div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-gray-800">深圳云九易科技有限公司</h3>
                      <span className="text-purple-600 font-medium">2023.04 - 2024.06</span>
                    </div>
                    <p className="text-gray-600 mt-1">前端负责人</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-lg mb-3 text-gray-800">
                      VDD游戏平台
                      <span className="text-sm font-normal text-gray-500 ml-2">
                        Vue3, TypeScript, Pixi.js, Antd, Vant, Matter.js, Howler.js
                      </span>
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-purple-600 mb-2">业务功能</h5>
                        <p className="text-gray-700 leading-relaxed">
                          作为核心开发者，主导开发了16个小游戏及其周边生态系统。项目采用模块化设计，主要包含游戏展示区域、操作界面、玩家信息中心、游戏介绍及音效系统等核心模块。通过Canvas交互实现沉浸式游戏体验，并集成了完整的数据分析和展示功能。
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-purple-600 mb-2">技术亮点</h5>
                        <div className="space-y-3">
                          <div>
                            <p className="font-medium text-gray-800 mb-1">架构设计：</p>
                            <p className="text-gray-700 leading-relaxed">
                              基于Vite构建的现代化前端架构，集成ESLint、Stylelint和Prettier规范代码质量。采用Pinia进行状态管理，Minio处理静态资源，通过Google
                              Analytics实现用户行为分析。使用Rollup插件优化打包性能，确保了统一的Layout框架下的高效开发。
                            </p>
                          </div>
                          <div>
                            <p className="font-medium text-gray-800 mb-1">核心功能实现：</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                              <li className="leading-relaxed">
                                游戏引擎：基于Pixi.js构建高性能画布系统，整合Matter.js物理引擎实现复杂场景。针对性能优化包括：设备适配、页面生命周期管理、内存优化等。
                              </li>
                              <li className="leading-relaxed">
                                交互系统：设计了分层的交互架构，通过自定义Controller封装画布交互行为。
                              </li>
                              <li className="leading-relaxed">
                                数据可视化：基于Antd组件库开发动态数据展示系统。
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
                    </div>
                  </div>
                </div>

                {/* 深圳小库科技有限公司 */}
                <div className="mb-8 relative pl-6 border-l-2 border-purple-200 company-section">
                  <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-0"></div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-gray-800">深圳小库科技有限公司</h3>
                      <span className="text-purple-600 font-medium">2021.05 - 2023.03</span>
                    </div>
                    <p className="text-gray-600 mt-1">高级前端开发工程师</p>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-bold text-lg mb-3 text-gray-800">
                        CAD智能审图平台
                        <span className="text-sm font-normal text-gray-500 ml-2">
                          React18, TypeScript, Pixi.js, Antd
                        </span>
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        开发了一个高性能的CAD图纸协同审查平台。基于Pixi.js实现了10万级图元的高效渲染，支持复杂的图纸编辑与审查流程。创新性地运用RBush空间索引和碰撞检测算法，实现了高性能的图元交互系统。
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-bold text-lg mb-3 text-gray-800">
                        智能建筑设计系统
                        <span className="text-sm font-normal text-gray-500 ml-2">
                          React18, TypeScript, Fanc.js, Antd
                        </span>
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        开发了基于海量户型库的智能建筑设计平台。实现了完整的建筑构件编辑系统，支持门窗、电梯、楼梯等构件的智能操作。设计了实时面积计算引擎，支持多维度指标的动态可视化。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 深信服科技股份有限公司 */}
                <div className="relative pl-6 border-l-2 border-purple-200 company-section">
                  <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-0"></div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-gray-800">深信服科技股份有限公司</h3>
                      <span className="text-purple-600 font-medium">2019.12 - 2021.04</span>
                    </div>
                    <p className="text-gray-600 mt-1">初级前端开发工程师</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold text-lg mb-3 text-gray-800">
                      企业级管理平台开发
                      <span className="text-sm font-normal text-gray-500 ml-2">
                        Vue2, TypeScript, Ext
                      </span>
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="leading-relaxed">
                        •
                        主导开发新一代AF防火墙和SD-WAN终端管理平台，采用Ext.js框架实现高性能的数据管理和可视化展示
                      </li>
                      <li className="leading-relaxed">
                        • 使用Vue框架开发BBC管理平台，实现了SDWAN设备的全生命周期管理
                      </li>
                      <li className="leading-relaxed">
                        • 主导SDWAN管理平台的Vue+TypeScript重构项目，显著提升了代码可维护性
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* 导出按钮 */}
        <div className="fixed bottom-8 right-8 flex flex-col gap-4 export-buttons">
          <button
            onClick={exportToPDF}
            className="w-14 h-14 rounded-full bg-white hover:bg-purple-600 text-purple-600 hover:text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 ease-in-out"
            title="导出PDF"
          >
            <i className="i-mdi-file-pdf text-3xl"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
