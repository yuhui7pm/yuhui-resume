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
                src="/images/avatar.svg"
                alt="余晖"
                className="w-32 h-32 rounded-full mx-auto mb-4 bg-purple-100"
              />
              <h1 className="text-3xl font-bold text-center text-purple-600 mb-4">余晖</h1>
            </div>

            <div className="space-y-6">
              <section>
                <h2 className="text-lg font-bold mb-2 text-purple-600">基本信息</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <i className="i-mdi-clock text-purple-600"></i>
                    <span>4年经验</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="i-mdi-school text-purple-600"></i>
                    <span>汕头大学2020级</span>
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
                    <span>前端开发工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="i-mdi-map-marker text-purple-600"></i>
                    <span>深圳</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="i-mdi-currency-cny text-purple-600"></i>
                    <span>27K / 月</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="i-mdi-calendar text-purple-600"></i>
                    <span>随时到岗</span>
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
                    项目一：VDD游戏 (Vue3, Ts, Pixi.js, Antd, Vant, Matter.js, Howler.js)
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold">业务功能</h5>
                      <p className="text-gray-700">
                        实现了16个小游戏，其他项目皆围绕游戏项目开展，业务游戏功能主要分为"游戏展示区域"、"游戏操作区域"、"玩家信息展示区域"、"游戏介绍"，"游戏音效"。玩家可通过与canvas的画布的交互实现基本的游戏游玩，玩的期间有对应的音效，并可对各项游戏数据进行查看。
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold">技术说明</h5>
                      <p className="font-semibold mb-1">整体架构：</p>
                      <p className="text-gray-700">
                        项目使用vite构建，配置了eslint，stylelint和prettier，使用了pinia进行数据存储与通信，minio存储前端图片和音乐资源，并通过Google
                        Analytics埋点分析用户行为，rollup-plugin-visualizer优化打包。最后，每个游戏都在统一Layout框架下编写单页面业务。
                      </p>
                      <p className="font-semibold mb-1 mt-2">具体业务细节：</p>
                      <ul className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>
                          "游戏展示区域"通过pixi.js进行画布绘制以及交互，复杂物理学场景使用matter.js物理模型库，期间适配了PC和移动端多端设备，考虑了页面visibilityChange和页面resize的场景，并且为了应对高频的动画交互，做了诸多性能优化，避免了内存溢出，减少了卡顿问题；
                        </li>
                        <li>
                          "游戏操作区域"分为非canvas场景和canvas场景，非canvas场景实现基本的form表单，比如按钮和输入框，并通过媒体查询多端适配；复杂的canvas场景进行交互，则是通过编写对应用的Controller来内聚画布的交互行为，通过pinia的store与游戏展示页模块进行通信。
                        </li>
                        <li>
                          "玩家信息展示区域"一般通过antd的modal或者table来展示玩家的数据，并通过动态计算滚动高度来加载分页数据。
                        </li>
                        <li>
                          "游戏介绍"是通过瀑布内的图片和文字的形式对游戏进行介绍，并对文字进行了i18n国际化。
                        </li>
                        <li>
                          "游戏音效"，通过howler.js编写对应的controller对不同游戏背景音乐和游戏音效的控制，考虑页面visibilityChange和切换音效开关关系实现对音效的控制。
                        </li>
                      </ul>
                      <p className="font-semibold mb-1 mt-2">额外产出：</p>
                      <ul className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>编写shell脚本，快速部署前端项目至测试服。</li>
                        <li>
                          本地开发环境下，提供第三方平台的用户登录数据，使得本地项目也能正常运行全流程。
                        </li>
                        <li>google docs上书写api接入文档，使得商家可以快速接入我司的游戏。</li>
                        <li>编写url检查页面，让商家快速定位游戏url接入失败可能出现的前端问题。</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold">产品成效</h5>
                      <ul className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>线上稳定运行1年之余。</li>
                        <li>线上正在运营商户：5家。</li>
                        <li>日活40000人，人数稳定上升。</li>
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
                    项目一：CAD审图工具 (React18, Ts, Pixi.js, Antd)
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold">项目描述</h5>
                      <p className="text-gray-700">
                        实现多张CAD图纸的上传解析、编辑与审查等文等功能。首先，使用高性能的canvas库pixi.js，将10w+数量级的图元，根据几何类型的不同，调用相应的绘制方法，给制图元于画布上；并且，使用"RBush"和"碰撞检测"使得图元具有hover，selected，单选多选等交互，对于复杂交互，比如图元的增删回改操作，则是基于"事务"实现；另外，还实现图纸图元的层级感知，以及毫米到像素的单位换算功能；最后，对于一些无关画布的操作，比如注册登录，项目列展示，图元信息的显示与编辑，审查功能以及整体流程的串联，则是使用antd组件实现。
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
                    项目二：建筑单体设计工具 (React18, Ts, Fanc.js, Antd)
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold">项目描述</h5>
                      <p className="text-gray-700">
                        该产品依托海量户型库和智能编辑能力，可快速便捷输出建筑单体设计图纸。本人主要负责产品的重要功能开发，比如：1.
                        实现户型门门、窗、电梯、楼梯等构建"移、增、删、改、拖、摆拖、回退"等复杂操作；2.
                        根据户型以及构建的几何信息，实时计算十余种不同的面积指标，并将对应的面积在上具象化；3.
                        添加平面和楼栋输入信息面板，让用户在存储平面或者楼栋模板到标准材料库前，可以对平面或楼栋的诸多配置进行联动编辑；4.
                        添加楼栋设置置面板，对楼栋中的平面进行"移、增、删、...."等交互；5.
                        给制草图一键生成户型，设计师只需要按照放缩编辑不同尺寸，即可根据算法生成成熟的户型，该功能申请了专利，并且被许多同行抄袭模仿。6.
                        项目主题色切换，根据根节点的自定义属性以及css变量，来切换不同主题。
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
                  <h4 className="font-semibold mb-2">项目三：管理平台 (React18, Ts, Antd)</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold">项目描述</h5>
                      <p className="text-gray-700">
                        项目管理平台的维护开发。比如添加设计工具的入口，展示设计项目信息，展示设计师的信息等。
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
                  <h4 className="font-semibold mb-2">项目：管理平台 × n (Vue2, Ts, Ext)</h4>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-gray-700">
                        1.
                        使用Ext.js开发新版的"AF防火墙终端管理平台"以及"SD-WAN终端管理平台"，开发内容以表格表单为主。
                      </p>
                      <p className="text-gray-700">
                        2.
                        使用Vue框架开发BBC管理平台。该平台实现了对SDWAN设备进行监控、配置、管理等功能。页面内容多以表格、弹框、趋势图为主。使用的工具为我司内部研发的Vue组件库以及Highchart和Echart；并且使用NutUI实现移动端页面，使得用户的手机连接设备后台，可以配置硬件设备。
                      </p>
                      <p className="text-gray-700">
                        3.
                        Vue+ts重写的SDWAN的EXT项目，目的是为了解决新人难以入手Ext.js的问题。期间使用Vue-property-decorator来让Vue支持ts的写法，完成的内容和原SDWAN的功能保持一致。
                      </p>
                      <p className="text-gray-700">
                        4.
                        完成公司UEDC部门官网的市场城功能。使用Element组件库实现商品展示页，商品详情页面和购买功能；以及后台管理系统的用户信息评价页面和商品详情和购买完成页面；最后使用koa，sequelize，ts，mysql编写了对应的后端功能。
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
