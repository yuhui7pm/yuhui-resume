import React from 'react'

const BasicInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start gap-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">余晖</h1>
          <div className="space-y-2">
            <p className="text-gray-600">
              <span className="font-semibold">求职意向：</span>
              前端开发工程师
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">工作年限：</span>
              4年
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">期望城市：</span>
              深圳
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">到岗时间：</span>
              随时到岗
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="space-y-2">
            <p className="text-gray-600">
              <span className="font-semibold">联系电话：</span>
              XXX-XXXX-XXXX
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">电子邮箱：</span>
              example@email.com
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">个人简介</h2>
        <p className="text-gray-700 leading-relaxed">
          4年前端开发经验，熟练掌握 React、Vue、TypeScript 等前端技术栈，
          对前端工程化、性能优化有深入理解。具有良好的代码风格和团队协作能力，
          能够独立负责项目的技术方案设计和实现。
        </p>
      </div>
    </div>
  )
}

export default BasicInfo
