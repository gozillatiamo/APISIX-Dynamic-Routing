export default function Home() {
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
          <div className="text-center mb-12">
            <h1
              className={`text-5xl font-bold mb-4 ${
                theme === "A" ? "text-blue-900" : "text-purple-900"
              }`}
            >
              Welcome to Theme {theme}
            </h1>
            <p
              className={`text-lg ${
                theme === "A" ? "text-blue-700" : "text-purple-700"
              }`}
            >
              A modern Next.js application with dynamic theming
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
              theme === "A"
                ? "divide-x divide-blue-200"
                : "divide-x divide-purple-200"
            }`}
          >
            {/* Left Section - Getting Started */}
            <div className="p-6">
              <h2
                className={`text-2xl font-semibold mb-6 ${
                  theme === "A" ? "text-blue-800" : "text-purple-800"
                }`}
              >
                Getting Started
              </h2>
              <div
                className={`space-y-4 ${
                  theme === "A" ? "text-blue-900" : "text-purple-900"
                }`}
              >
                <div className="p-4 rounded-lg bg-gray-50">
                  <p className="font-medium mb-2">Quick Start Guide</p>
                  <p className="text-sm opacity-75">
                    Edit{" "}
                    <code
                      className={`px-2 py-1 rounded ${
                        theme === "A" ? "bg-blue-100" : "bg-purple-100"
                      }`}
                    >
                      src/app/page.tsx
                    </code>{" "}
                    to customize this page
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50">
                  <p className="font-medium mb-2">Theme Switching</p>
                  <p className="text-sm opacity-75">
                    Change{" "}
                    <code
                      className={`px-2 py-1 rounded ${
                        theme === "A" ? "bg-blue-100" : "bg-purple-100"
                      }`}
                    >
                      NEXT_PUBLIC_SITE_THEME
                    </code>{" "}
                    to switch themes
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section - Quick Links */}
            <div className="p-6">
              <h2
                className={`text-2xl font-semibold mb-6 ${
                  theme === "A" ? "text-blue-800" : "text-purple-800"
                }`}
              >
                Quick Links
              </h2>
              <div className="space-y-4">
                <a
                  href="/lobby"
                  className={`block w-full p-4 rounded-lg transition-all ${
                    theme === "A"
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : "bg-purple-500 hover:bg-purple-600 text-white"
                  }`}
                >
                  Visit Lobby
                </a>
                <a
                  href="https://nextjs.org/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full p-4 rounded-lg transition-all ${
                    theme === "A"
                      ? "border-2 border-blue-500 text-blue-500 hover:bg-blue-50"
                      : "border-2 border-purple-500 text-purple-500 hover:bg-purple-50"
                  }`}
                >
                  View Documentation
                </a>
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
              About This Template
            </h2>
            <p
              className={`${
                theme === "A" ? "text-blue-900" : "text-purple-900"
              }`}
            >
              This is a modern Next.js template featuring dynamic theming
              capabilities.
              {theme === "A"
                ? " Theme A offers a professional blue color scheme perfect for corporate applications."
                : " Theme B provides an elegant purple theme ideal for creative and modern interfaces."}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
