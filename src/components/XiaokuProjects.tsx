const XiaokuProjects = () => {
  return (
    <div className="space-y-8">
      <div className="project-card bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="font-bold text-xl mb-4 text-gray-800">
          CAD智能审图平台
          <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
            React18, TypeScript, Pixi.js, Antd
          </span>
        </h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">项目描述</h5>
            <p className="text-gray-700 leading-relaxed">
              作为CAD智能审图平台的核心开发者，成功实现了处理10万级图元的高性能渲染系统。基于Pixi.js实现了复杂的CAD图纸解析与渲染，设计了高效的图元选择与编辑系统。创新性地实现了图层管理、智能测量、协同标注等功能，显著提升了设计审核效率。
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

      <div className="project-card bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="font-bold text-xl mb-4 text-gray-800">
          智能建筑设计系统
          <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
            React18, TypeScript, Fabric.js, Antd
          </span>
        </h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-purple-600 mb-2">项目描述</h5>
            <p className="text-gray-700 leading-relaxed">
              作为智能建筑设计系统的核心开发者，设计并实现了创新的建筑设计工具。核心功能包括：智能构件编辑系统、实时面积计算引擎、模板管理系统等。特别设计了"草图一键生成"功能并获得专利，该功能通过AI算法将手绘草图转换为标准化建筑户型，显著提升了设计效率。
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

      <div className="project-card bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="font-bold text-xl mb-4 text-gray-800">
          管理平台
          <span className="text-sm font-normal text-gray-500 ml-3 bg-white px-3 py-1 rounded-full">
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
  )
}

export default XiaokuProjects
