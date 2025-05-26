import React from 'react'
import { jsPDF } from 'jspdf'
import { Document, Packer, Paragraph, TextRun } from 'docx'
import { saveAs } from 'file-saver'
import html2canvas from 'html2canvas'

const App = () => {
  const exportToPDF = async () => {
    const element = document.getElementById('resume')
    if (!element) return

    const canvas = await html2canvas(element)
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF('p', 'mm', 'a4')
    const width = pdf.internal.pageSize.getWidth()
    const height = pdf.internal.pageSize.getHeight()
    pdf.addImage(imgData, 'PNG', 0, 0, width, height)
    pdf.save('余晖的简历.pdf')
  }

  const exportToWord = async () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [new TextRun({ text: '余晖的简历', bold: true, size: 32 })],
            }),
          ],
        },
      ],
    })

    const blob = await Packer.toBlob(doc)
    saveAs(blob, '余晖的简历.docx')
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-2 max-w-[1440px]">
        <div id="resume" className="bg-white rounded-lg shadow-md p-6 mx-auto flex gap-8">
          {/* 左侧个人信息 */}
          <div className="w-1/4 bg-white">
            <div className="mb-8">
              <img
                src="/yuhui-resume/images/yuhui.jpg"
                alt="余晖"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h1 className="text-3xl font-bold text-center text-purple-600 mb-4">余晖</h1>
            </div>

            <div className="space-y-6">
              <section>
                <h2 className="text-lg font-bold mb-2 text-purple-600">基本信息</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <i className="i-mdi-clock text-purple-600"></i>
                    <span>4年前端开发经验</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="i-mdi-school text-purple-600"></i>
                    <span>汕头大学 · 本科</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="i-mdi-phone text-purple-600"></i>
                    <span>15766495385</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="i-mdi-email text-purple-600"></i>
                    <span>1176951680@qq.com</span>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold mb-2 text-purple-600">求职意向</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <i className="i-mdi-briefcase text-purple-600"></i>
                    <span>高级前端开发工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="i-mdi-map-marker text-purple-600"></i>
                    <span>深圳</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="i-mdi-currency-cny text-purple-600"></i>
                    <span>期望薪资：27K+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="i-mdi-calendar text-purple-600"></i>
                    <span>可立即到岗</span>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold mb-2 text-purple-600">专业技能</h2>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Vue3</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div className="w-full h-full bg-purple-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>React18</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div className="w-full h-full bg-purple-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Vue2</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div className="w-full h-full bg-purple-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Ext</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div className="w-full h-full bg-purple-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>React Native</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div className="w-3/4 h-full bg-purple-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Typescript</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div className="w-3/4 h-full bg-purple-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Unity</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div className="w-1/2 h-full bg-purple-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Node.js</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div className="w-1/2 h-full bg-purple-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold mb-2 text-purple-600">个人博客</h2>
                <div className="space-y-2">
                  <a
                    href="https://blog.csdn.net/xxx"
                    className="text-blue-600 hover:underline block"
                  >
                    CSDN
                  </a>
                  <a href="https://github.com/xxx" className="text-blue-600 hover:underline block">
                    Github
                  </a>
                </div>
              </section>
            </div>
          </div>

          {/* 右侧工作经验 */}
          <div className="flex-1">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-purple-600">工作经验</h2>

              {/* 深圳云九易科技有限公司 */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">深圳云九易科技有限公司</h3>
                  <span className="text-gray-600">2023.04 - 2024.06</span>
                </div>
                <p className="text-gray-600 mb-4">前端负责人</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">
                    项目一：VDD游戏平台 (Vue3, TypeScript, Pixi.js, Antd, Vant, Matter.js,
                    Howler.js)
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold">业务功能</h5>
                      <p className="text-gray-700">
                        作为核心开发者，主导开发了16个小游戏及其周边生态系统。项目采用模块化设计，主要包含游戏展示区域、操作界面、玩家信息中心、游戏介绍及音效系统等核心模块。通过Canvas交互实现沉浸式游戏体验，并集成了完整的数据分析和展示功能。
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold">技术亮点</h5>
                      <p className="font-semibold mb-1">架构设计：</p>
                      <p className="text-gray-700">
                        基于Vite构建的现代化前端架构，集成ESLint、Stylelint和Prettier规范代码质量。采用Pinia进行状态管理，Minio处理静态资源，通过Google
                        Analytics实现用户行为分析。使用Rollup插件优化打包性能，确保了统一的Layout框架下的高效开发。
                      </p>
                      <p className="font-semibold mb-1 mt-2">核心功能实现：</p>
                      <ul className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>
                          游戏引擎：基于Pixi.js构建高性能画布系统，整合Matter.js物理引擎实现复杂场景。针对性能优化包括：设备适配、页面生命周期管理、内存优化等，有效解决了高频动画交互的性能瓶颈。
                        </li>
                        <li>
                          交互系统：设计了分层的交互架构，通过自定义Controller封装画布交互行为，实现了Canvas和非Canvas场景的无缝衔接，并通过Pinia实现模块间的高效通信。
                        </li>
                        <li>
                          数据可视化：基于Antd组件库开发动态数据展示系统，实现了高性能的分页加载和实时数据更新。
                        </li>
                        <li>
                          国际化支持：实现完整的i18n解决方案，支持多语言动态切换和本地化展示。
                        </li>
                        <li>
                          音频系统：基于Howler.js开发的音频控制器，实现了游戏音效的精确控制和动态管理，包括页面状态感知和音效开关等功能。
                        </li>
                      </ul>
                      <p className="font-semibold mb-1 mt-2">技术产出：</p>
                      <ul className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>开发自动化部署脚本，显著提升了测试环境的部署效率。</li>
                        <li>构建本地开发环境模拟系统，支持完整的第三方登录流程测试。</li>
                        <li>编写详实的API对接文档，降低了商户接入门槛。</li>
                        <li>开发URL诊断工具，提供快速问题定位能力。</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold">项目成果</h5>
                      <ul className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>系统稳定运行超过12个月，可用性达99.9%。</li>
                        <li>成功服务5家商户，建立了稳定的商业合作关系。</li>
                        <li>日活跃用户突破4万，环比增长保持15%。</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold">成果链接</h5>
                      <div className="space-x-2">
                        <a href="https://figma作品集" className="text-blue-600 hover:underline">
                          figma作品集
                        </a>
                        <a href="https://vdd.com/" className="text-blue-600 hover:underline">
                          官网游戏入口
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 其他项目可以按照相同的结构继续添加 */}
              </div>

              {/* 深圳小库科技有限公司 */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">深圳小库科技有限公司</h3>
                  <span className="text-gray-600">2021.05 - 2023.03</span>
                </div>
                <p className="text-gray-600 mb-4">高级前端开发工程师</p>

                {/* CAD审图工具项目 */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">
                    项目一：CAD智能审图平台 (React18, TypeScript, Pixi.js, Antd)
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold">项目概述</h5>
                      <p className="text-gray-700">
                        开发了一个高性能的CAD图纸协同审查平台。基于Pixi.js实现了10万级图元的高效渲染，支持复杂的图纸编辑与审查流程。创新性地运用RBush空间索引和碰撞检测算法，实现了高性能的图元交互系统。设计了基于事务的操作管理机制，支持完整的增删改查功能。此外，实现了精确的图纸层级管理和智能单位换算系统，显著提升了用户体验。集成Antd组件库，构建了直观的用户界面，包括项目管理、图元信息编辑、审查流程等功能模块。
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold">成果链接</h5>
                      <div className="space-x-2">
                        <a href="#" className="text-blue-600 hover:underline">
                          查看作品集
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 建筑单体设计工具项目 */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">
                    项目二：智能建筑设计系统 (React18, TypeScript, Fanc.js, Antd)
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold">项目概述</h5>
                      <p className="text-gray-700">
                        开发了基于海量户型库的智能建筑设计平台。作为核心开发者，实现了多项创新功能：1)
                        开发了完整的建筑构件编辑系统，支持门窗、电梯、楼梯等构件的智能操作；2)
                        设计了实时面积计算引擎，支持多维度指标的动态可视化；3)
                        开发了智能化的平面和楼栋配置系统，支持模板的标准化管理；4)
                        实现了楼栋的高级配置功能，支持灵活的平面管理；5)
                        创新性地开发了AI辅助的户型生成系统，获得发明专利；6)
                        实现了基于CSS变量的主题定制系统，支持灵活的界面风格切换。
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold">成果链接</h5>
                      <div className="space-x-2">
                        <a href="#" className="text-blue-600 hover:underline">
                          查看作品集
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 管理平台项目 */}
                <div>
                  <h4 className="font-semibold mb-2">
                    项目三：企业级管理平台 (React18, TypeScript, Antd)
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold">项目概述</h5>
                      <p className="text-gray-700">
                        负责企业级管理平台的开发与维护，实现了设计工具接入、项目信息管理、设计师资源管理等核心功能。采用模块化设计思想，确保了系统的可扩展性和维护性。通过数据驱动的开发方式，提供了灵活的配置能力和直观的用户界面。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 深信服科技股份有限公司 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">深信服科技股份有限公司</h3>
                  <span className="text-gray-600">2019.12 - 2021.04</span>
                </div>
                <p className="text-gray-600 mb-4">初级前端开发工程师</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">企业级管理平台开发 (Vue2, TypeScript, Ext)</h4>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-gray-700">
                        1.
                        主导开发新一代AF防火墙和SD-WAN终端管理平台，采用Ext.js框架实现高性能的数据管理和可视化展示。
                      </p>
                      <p className="text-gray-700">
                        2.
                        使用Vue框架开发BBC管理平台，实现了SDWAN设备的全生命周期管理。整合内部Vue组件库、Highchart和Echart，打造了直观的数据可视化界面。同时开发了基于NutUI的移动端适配方案，实现了设备的移动化管理。
                      </p>
                      <p className="text-gray-700">
                        3.
                        主导SDWAN管理平台的Vue+TypeScript重构项目，采用Vue-property-decorator实现了更好的类型安全和开发体验，显著提升了代码可维护性。
                      </p>
                      <p className="text-gray-700">
                        4. 负责UEDC部门官网电商功能的全栈开发，基于Element
                        UI实现了完整的商城系统，并使用Koa、Sequelize、TypeScript构建了高性能的后端服务。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* 导出按钮 */}
        <div className="fixed bottom-8 right-8 flex flex-col gap-4">
          <button
            onClick={exportToPDF}
            className="w-16 h-16 rounded-full bg-white hover:bg-purple-600 text-purple-600 hover:text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 ease-in-out"
            title="导出PDF"
          >
            <i className="i-mdi-file-pdf text-4xl"></i>
          </button>
          <button
            onClick={exportToWord}
            className="w-16 h-16 rounded-full bg-white hover:bg-purple-600 text-purple-600 hover:text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 ease-in-out"
            title="导出Word"
          >
            <i className="i-mdi-microsoft-word text-4xl"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
