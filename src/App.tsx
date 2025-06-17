import { useState } from 'react'
import LoadingModal from './components/LoadingModal'
import PersonalHeader from './components/PersonalHeader'
import LeftSidebar from './components/LeftSidebar'
import WorkExperience from './components/WorkExperience'
import ExportButton from './components/ExportButton'

const App = () => {
  const [isExporting, setIsExporting] = useState(false)

  const handleExportStart = () => setIsExporting(true)
  const handleExportEnd = () => setIsExporting(false)

  return (
    <>
      {/* 自定义样式 */}
      <style>{`
        .animation-delay-75 {
          animation-delay: 75ms;
        }
        .animation-delay-150 {
          animation-delay: 150ms;
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in-scale {
          animation: fadeInScale 0.3s ease-out;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 font-sans">
        {/* 全局Loading */}
        <LoadingModal isVisible={isExporting} />

        <div className="container mx-auto" style={{ maxWidth: '1000px' }}>
          <div
            id="resume"
            className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl"
          >
            {/* 顶部个人信息区域 */}
            <PersonalHeader />

            <div className="flex gap-10 p-10">
              {/* 左侧信息 */}
              <LeftSidebar />

              {/* 右侧工作经验 */}
              <WorkExperience />
            </div>
          </div>

          {/* 导出按钮 */}
          <ExportButton onExportStart={handleExportStart} onExportEnd={handleExportEnd} />
        </div>
      </div>
    </>
  )
}

export default App
