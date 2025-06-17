interface LoadingModalProps {
  isVisible: boolean
  message?: string
}

const LoadingModal = ({ isVisible, message = '请稍候，正在处理中...' }: LoadingModalProps) => {
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900/95 via-indigo-900/95 to-blue-900/95 backdrop-blur-sm animate-fade-in-scale">
      <div className="flex flex-col items-center">
        {/* 主要加载动画 */}
        <div className="relative">
          {/* 外圈 */}
          <div className="w-20 h-20 border-4 border-transparent border-t-white/70 border-r-white/50 rounded-full animate-spin"></div>
          {/* 内圈 */}
          <div
            className="absolute top-2 left-2 w-16 h-16 border-4 border-transparent border-t-purple-300 border-l-purple-300 rounded-full animate-spin animation-delay-150"
            style={{ animationDirection: 'reverse' }}
          ></div>
          {/* 中心点 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full animate-pulse"></div>
        </div>

        {/* 加载文字 */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2 animate-pulse">正在导出简历...</h3>
          <p className="text-purple-200 text-lg">{message}</p>
        </div>

        {/* 底部装饰点 */}
        <div className="flex gap-2 mt-6">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce animation-delay-75"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce animation-delay-150"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingModal
