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
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 font-title">
            余晖
          </h1>
          <p className="text-2xl text-purple-100 mb-6 font-title">
            高级前端开发工程师 | 前端架构师
          </p>
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
