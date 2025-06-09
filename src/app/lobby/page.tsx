import Link from "next/link";

export default function Lobby() {
  const theme = process.env.NEXT_PUBLIC_SITE_THEME || "A";

  return (
    <div
      className={`min-h-screen p-8 ${
        theme === "A"
          ? "bg-gradient-to-br from-blue-50 to-indigo-100"
          : "bg-gradient-to-br from-purple-50 to-pink-100"
      }`}
    >
      <main className="max-w-4xl mx-auto">
        <div
          className={`p-8 rounded-2xl shadow-lg ${
            theme === "A" ? "bg-white" : "bg-white/90 backdrop-blur-sm"
          }`}
        >
          <div className="mb-8">
            <Link
              href="/"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                theme === "A"
                  ? "border-2 border-blue-500 text-blue-500 hover:bg-blue-50"
                  : "border-2 border-purple-500 text-purple-500 hover:bg-purple-50"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>
          <h1
            className={`text-4xl font-bold mb-8 ${
              theme === "A" ? "text-blue-900" : "text-purple-900"
            }`}
          >
            Welcome to the Lobby
          </h1>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
              theme === "A"
                ? "divide-x divide-blue-200"
                : "divide-x divide-purple-200"
            }`}
          >
            {/* Left Section */}
            <div className="p-6">
              <h2
                className={`text-2xl font-semibold mb-4 ${
                  theme === "A" ? "text-blue-800" : "text-purple-800"
                }`}
              >
                Quick Actions
              </h2>
              <div className="space-y-4">
                <button
                  className={`w-full p-4 rounded-lg transition-all ${
                    theme === "A"
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : "bg-purple-500 hover:bg-purple-600 text-white"
                  }`}
                >
                  Start New Session
                </button>
                <button
                  className={`w-full p-4 rounded-lg transition-all ${
                    theme === "A"
                      ? "border-2 border-blue-500 text-blue-500 hover:bg-blue-50"
                      : "border-2 border-purple-500 text-purple-500 hover:bg-purple-50"
                  }`}
                >
                  View History
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="p-6">
              <h2
                className={`text-2xl font-semibold mb-4 ${
                  theme === "A" ? "text-blue-800" : "text-purple-800"
                }`}
              >
                Recent Activity
              </h2>
              <div
                className={`space-y-4 ${
                  theme === "A" ? "text-blue-900" : "text-purple-900"
                }`}
              >
                <div className="p-4 rounded-lg bg-gray-50">
                  <p className="font-medium">Last Session</p>
                  <p className="text-sm opacity-75">2 hours ago</p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50">
                  <p className="font-medium">Active Users</p>
                  <p className="text-sm opacity-75">12 users online</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`mt-8 p-6 rounded-lg ${
              theme === "A"
                ? "bg-blue-50 border border-blue-200"
                : "bg-purple-50 border border-purple-200"
            }`}
          >
            <h2
              className={`text-xl font-semibold mb-4 ${
                theme === "A" ? "text-blue-800" : "text-purple-800"
              }`}
            >
              Theme {theme} Features
            </h2>
            <p
              className={`${
                theme === "A" ? "text-blue-900" : "text-purple-900"
              }`}
            >
              {theme === "A"
                ? "Theme A features a professional blue color scheme with clean lines and modern design elements."
                : "Theme B features an elegant purple color scheme with subtle gradients and sophisticated styling."}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
