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
                <p className="text-xl text-purple-100 mb-4">前端架构师和前端负责人</p>
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
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-purple-200 pb-2">
                  <i className="i-mdi-account-details mr-2 text-purple-600"></i>基本信息
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <i className="i-mdi-clock text-purple-600"></i>
                    <span className="text-gray-700">
                      {Math.ceil(
                        (new Date().getTime() - new Date('2020-06-01').getTime()) /
                          (1000 * 60 * 60 * 24 * 365)
                      )}
                      年前端开发经验
                    </span>
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
                    <span className="text-gray-700">期望薪资：35K+</span>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-purple-200 pb-2">
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
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-purple-200 pb-2">
                  <i className="i-mdi-web mr-2 text-purple-600"></i>个人博客
                </h2>
                <div className="space-y-3">
                  <a
                    href="https://blog.csdn.net/qq_40511157?type=blog"
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="i-mdi-link"></i>
                    <span>CSDN</span>
                  </a>
                  <a
                    href="https://github.com/yuhui7pm?tab=repositories"
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
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
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-lg mb-3 text-gray-800">
                      官网
                      <span className="text-sm font-normal text-gray-500 ml-2">
                        Vue3, Nuxt, Ts, Antd, TailwindCSS
                      </span>
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-purple-600 mb-2">业务功能</h5>
                        <p className="text-gray-700 leading-relaxed">
                          公司官网的开发，主要是向外界展示我司的游戏，适配了PC和移动端，功能涉及：轮播图、游戏列表、api接文档和使用文档（临时版本）、多语言。
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
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-lg mb-3 text-gray-800">
                      B端V1、B端V2、B端APK
                      <span className="text-sm font-normal text-gray-500 ml-2">
                        Vue3, Ts, Vant, React Native, Appflyers
                      </span>
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-purple-600 mb-2">业务功能</h5>
                        <p className="text-gray-700 leading-relaxed">
                          设计初衷是为了推广运营游戏，而开发商家平台和react-native打包的apk包。非登录状态时，默认以游戏模式下的demo形式下的游戏，用户登录后，则自以下功能模块：主题背景切换，登录模块，语言切换，货币切换，充值模块，轮播，跑马灯广告，游戏列表展示，平台和游戏端之间货币的转入转出，邀请返佣等功能。
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
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-lg mb-3 text-gray-800">
                      B端后台管理系统
                      <span className="text-sm font-normal text-gray-500 ml-2">
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
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-lg mb-3 text-gray-800">
                      B端后台H5
                      <span className="text-sm font-normal text-gray-500 ml-2">
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
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">项目描述</h5>
                          <p className="text-gray-700 leading-relaxed">
                            实现多张CAD图纸的上传解析、编辑与审查功能。首先，使用高性能的Canvas库"pixi.js"，将10w+数量级的图元，根据几何类型的不同，调用相应的绘制方法，绘制图元于画布上；并且，使用"RBush"和"碰撞检测"使得图元具有hover、selected、单选多选等简单交互，对于复杂交互，比如图元的增删改等操作，则基于于"事件"实现；另外，还实现图纸的层与高亮和面积功能，以及与高亮相关的缩放功能；最后，对于一些无关画布的操作，比如注册登录、项目列展示、图元信息的显示与编辑、评论功能以及整体流程的串联，则是使用antd组件实现。
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

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-bold text-lg mb-3 text-gray-800">
                        智能建筑设计系统
                        <span className="text-sm font-normal text-gray-500 ml-2">
                          React18, TypeScript, Fanc.js, Antd
                        </span>
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-purple-600 mb-2">项目描述</h5>
                          <p className="text-gray-700 leading-relaxed">
                            该产品依托海量户型库和智能编辑能力，可快速便捷输出建筑单体设计图纸。本人主要负责产品的重要功能开发，比如：1.
                            实现户型门门、窗、电梯、楼梯等构建"移、增、删、改、拖、摊铺、回退"等复杂操作；2.
                            根据户型以及构建的几何信息，实时计算十余种不同的面积指标，并将对应的面积在上显示化；3.
                            添加平面和模板输入界面板，让用户在存储平面或模板时，可对平面或模板标的适当配置；4.
                            添加模板设置置面板，对模板中的平面进行"移、增、删、......"等交互。5.
                            绘制草图一键生成户型，设计师只需要勾勒不同比例块，即可根据算法生成规范的户型，该功能申请了专利，并且被许多同行抄袭模仿。6.
                            项目主题色切换，根据根节点的自定义属性以及css变量，来切换不同主题。
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

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-bold text-lg mb-3 text-gray-800">
                        管理平台
                        <span className="text-sm font-normal text-gray-500 ml-2">
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
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-purple-600 mb-2">主要工作</h5>
                        <ul className="space-y-2 text-gray-700">
                          <li className="leading-relaxed">
                            1.
                            使用Ext.js开发新版的"AF防火墙终端管理平台"以及"SD-WAN的终端管理平台"，开发内容以表格表单为主。
                          </li>
                          <li className="leading-relaxed">
                            2.
                            使用Vue框架开发BBC管理平台，该平台实现了对SDWAN设备进行监控、配置、管理等功能。页面内容多以表格、表单、弹窗、趋势图为主，使用的工具为我司内部开发的Vue组件库以及Highchart和Echart；并且使用NutUI实现移动端页面，使得用户的手机连接设备后后，可以配置硬件设备。
                          </li>
                          <li className="leading-relaxed">
                            3.
                            Vue+ts重写的SDWAN的EXT项目，目的是为了解决新人难以入手Ext.js的问题。期间使用Vue-property-decorator来让Vue支持ts的写法，完成的内容和原SDWR的功能保持一致。
                          </li>
                          <li className="leading-relaxed">
                            4.
                            完成公司UEDC部门官网的市场城功能。使用Element组件库实现商品展示页、商品详情页面和购买功能；以及后台管理系统的用户信息评价页面和商品评价和购买兑换页面；最后使用koa、sequelize、ts、mysql编写了对应的后端功能。
                          </li>
                        </ul>
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
