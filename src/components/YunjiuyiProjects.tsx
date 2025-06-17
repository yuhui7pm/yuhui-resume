const YunjiuyiProjects = () => {
  return (
    <div className="space-y-8">
      <div className="project-card bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
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
                  <li className="leading-relaxed">国际化支持：实现完整的i18n解决方案。</li>
                  <li className="leading-relaxed">音频系统：基于Howler.js开发的音频控制器。</li>
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

      <div className="project-card bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
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

      <div className="project-card bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
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

      <div className="project-card bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
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

      <div className="project-card bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
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
  )
}

export default YunjiuyiProjects
