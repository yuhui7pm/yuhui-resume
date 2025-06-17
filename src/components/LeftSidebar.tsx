const LeftSidebar = () => {
  const skills = [
    { name: 'Vue3', level: 100 },
    { name: 'React18', level: 100 },
    { name: 'Vue2', level: 100 },
    { name: 'Ext', level: 100 },
    { name: 'React Native', level: 75 },
    { name: 'Typescript', level: 75 },
    { name: 'Unity', level: 50 },
    { name: 'Node.js', level: 50 },
  ]

  return (
    <div className="w-1/3 space-y-8">
      <section className="transform transition-all duration-300 hover:translate-x-2">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-purple-200 pb-2 flex items-center">
          <i className="i-mdi-account-details mr-3 text-2xl text-purple-600"></i>基本信息
        </h2>
        <div className="space-y-2">
          <div className="flex items-center gap-3 group hover:bg-purple-50 p-2 rounded-lg transition-all">
            <i className="i-mdi-clock text-xl text-purple-600 group-hover:scale-110 transition-transform"></i>
            <span className="text-gray-700">
              {Math.ceil(
                (new Date().getTime() - new Date('2020-06-01').getTime()) /
                  (1000 * 60 * 60 * 24 * 365)
              )}
              年前端开发经验
            </span>
          </div>
          <div className="flex items-center gap-3 group hover:bg-purple-50 p-2 rounded-lg transition-all">
            <i className="i-mdi-school text-xl text-purple-600 group-hover:scale-110 transition-transform"></i>
            <span className="text-gray-700">汕头大学 · 本科</span>
          </div>
          <div className="flex items-center gap-3 group hover:bg-purple-50 p-2 rounded-lg transition-all">
            <i className="i-mdi-map-marker text-xl text-purple-600 group-hover:scale-110 transition-transform"></i>
            <span className="text-gray-700">深圳</span>
          </div>
          <div className="flex items-center gap-3 group hover:bg-purple-50 p-2 rounded-lg transition-all">
            <i className="i-mdi-currency-cny text-xl text-purple-600 group-hover:scale-110 transition-transform"></i>
            <span className="text-gray-700">期望薪资：35K+</span>
          </div>
        </div>
      </section>

      <section className="transform transition-all duration-300 hover:translate-x-2">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-purple-200 pb-2 flex items-center">
          <i className="i-mdi-tools mr-3 text-2xl text-purple-600"></i>专业技能
        </h2>
        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2 group">
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium group-hover:text-purple-600 transition-colors">
                  {skill.name}
                </span>
                <span className="text-purple-600">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-500 group-hover:from-purple-600 group-hover:to-indigo-600"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="transform transition-all duration-300 hover:translate-x-2">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-purple-200 pb-2 flex items-center">
          <i className="i-mdi-web mr-3 text-2xl text-purple-600"></i>个人博客
        </h2>
        <div className="space-y-2">
          <a
            href="https://blog.csdn.net/qq_40511157?type=blog"
            className="flex items-center gap-3 group hover:bg-purple-50 p-3 rounded-lg transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="i-mdi-link text-xl text-purple-600 group-hover:scale-110 transition-transform"></i>
            <span className="text-purple-600 group-hover:text-purple-800">CSDN</span>
          </a>
          <a
            href="https://github.com/yuhui7pm?tab=repositories"
            className="flex items-center gap-3 group hover:bg-purple-50 p-3 rounded-lg transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="i-mdi-github text-xl text-purple-600 group-hover:scale-110 transition-transform"></i>
            <span className="text-purple-600 group-hover:text-purple-800">Github</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default LeftSidebar
