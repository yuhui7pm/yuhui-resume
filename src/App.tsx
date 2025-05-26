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
              children: [
                new TextRun({
                  text: '余晖的简历',
                  bold: true,
                  size: 32,
                }),
              ],
            }),
            // TODO: 添加更多内容
          ],
        },
      ],
    })

    const blob = await Packer.toBlob(doc)
    saveAs(blob, '余晖的简历.docx')
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div id="resume" className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
          {/* 基本信息 */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-4">余晖</h1>
              <div className="space-y-2 text-gray-600">
                <p>4年前端开发经验 | 深圳</p>
                <p>电话：XXX-XXXX-XXXX</p>
                <p>邮箱：example@email.com</p>
                <p>Github：github.com/example</p>
              </div>
            </div>
          </div>

          {/* 专业技能 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-gray-200">专业技能</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>熟练掌握 HTML5、CSS3、JavaScript(ES6+)，具备扎实的前端基础知识</li>
              <li>熟练使用 React、Vue 等主流框架，了解其原理和最佳实践</li>
              <li>熟练使用 TypeScript，具备良好的类型编程能力</li>
              <li>熟悉前端工程化，包括 Webpack、Vite、ESLint、Prettier 等工具的配置和使用</li>
              <li>熟悉前端性能优化，了解浏览器渲染原理和性能优化技巧</li>
              <li>熟悉 Git 版本控制，具备良好的团队协作能力</li>
            </ul>
          </section>

          {/* 工作经历 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-gray-200">工作经历</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">XXXX科技有限公司</h3>
                  <span className="text-gray-600">2020.03 - 至今</span>
                </div>
                <p className="text-gray-600 mb-2">高级前端开发工程师</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>负责公司核心产品的前端开发工作</li>
                  <li>参与技术方案设计和架构优化</li>
                  <li>主导前端团队的代码规范和最佳实践的制定</li>
                </ul>
              </div>
              {/* 可以添加更多工作经历 */}
            </div>
          </section>

          {/* 项目经验 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-gray-200">项目经验</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">企业管理系统</h3>
                  <span className="text-gray-600">2022.01 - 2022.12</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>使用 React + TypeScript 开发的企业级管理系统</li>
                  <li>实现了复杂的数据可视化和表单处理功能</li>
                  <li>优化了系统性能，提升了用户体验</li>
                </ul>
              </div>
              {/* 可以添加更多项目经验 */}
            </div>
          </section>

          {/* 教育背景 */}
          <section>
            <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-gray-200">教育背景</h2>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">XXXX大学</h3>
                <p className="text-gray-600">计算机科学与技术 | 本科</p>
              </div>
              <span className="text-gray-600">2016.09 - 2020.06</span>
            </div>
          </section>
        </div>

        {/* 导出按钮 */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={exportToPDF}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md"
          >
            导出PDF
          </button>
          <button
            onClick={exportToWord}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md"
          >
            导出Word
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
