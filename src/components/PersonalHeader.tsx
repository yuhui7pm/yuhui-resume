const PersonalHeader = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 p-10 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/yuhui-resume/pattern.svg')] opacity-10"></div>
      <div className="flex items-center gap-10 relative z-10">
        <img
          src="/yuhui-resume/images/yuhui.jpg"
          alt="余晖"
          className="w-44 h-44 rounded-2xl object-cover shadow-2xl border-4 border-white/30 transition-transform duration-300 hover:scale-105"
        />
        <div>
          <h1
            className="text-5xl font-bold mb-4 font-title"
            style={{
              color: 'white',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              letterSpacing: '0.05em',
            }}
          >
            余晖
          </h1>
          <p className="text-2xl text-purple-100 mb-3 font-title">前端架构师 | 技术团队Leader</p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/20">
            <p className="text-purple-100 text-lg leading-relaxed">
              ✨ <span className="font-medium text-white">5年+</span> 前端架构经验 | 主导过{' '}
              <span className="font-medium text-white">10+</span> 大型项目
            </p>
            <p className="text-purple-100 text-lg leading-relaxed mt-1">
              🚀 擅长性能优化，曾将应用启动速度提升{' '}
              <span className="font-medium text-white">5倍</span>，日活突破{' '}
              <span className="font-medium text-white">4万+</span>
            </p>
            <p className="text-purple-100 text-lg leading-relaxed mt-1">
              🎯 精通前端技术栈，从0到1构建 <span className="font-medium text-white">16款</span>{' '}
              游戏产品，具备 <span className="font-medium text-white">创新设计</span> 能力
            </p>
          </div>
          <div className="flex gap-8">
            <div className="flex items-center gap-3 group">
              <i className="i-mdi-phone text-2xl text-purple-200 group-hover:text-white transition-colors"></i>
              <span className="group-hover:text-white transition-colors">15766495385</span>
            </div>
            <div className="flex items-center gap-3 group">
              <i className="i-mdi-email text-2xl text-purple-200 group-hover:text-white transition-colors"></i>
              <a
                href="mailto:1176951680@qq.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                1176951680@qq.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalHeader
