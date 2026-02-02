# 📝 Todo App

A modern, responsive Todo application built with React and Vite. Manage your tasks with ease — add, edit, complete, and delete todos with a clean and intuitive interface.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwind-css&logoColor=white)

## ✨ Features

- ✅ **Add Todos** — Quickly add new tasks
- ✏️ **Edit Todos** — Modify existing tasks inline
- ☑️ **Mark Complete** — Toggle completion status with visual feedback
- 🗑️ **Delete Todos** — Remove tasks you no longer need
- 💾 **Persistent Storage** — Todos are saved to localStorage and persist across browser sessions
- 🎨 **Modern UI** — Clean, responsive design with Tailwind CSS

## 🛠️ Tech Stack

- **React 19** — UI library with hooks
- **Vite** — Fast build tool and dev server
- **Tailwind CSS** — Utility-first CSS framework
- **Context API** — State management across components
- **localStorage** — Data persistence

## 📁 Project Structure

```
todocontent/
├── src/
│   ├── components/
│   │   └── Todo.jsx        # Individual todo item component
│   ├── contexts/
│   │   └── TodoContext.jsx # Global state management
│   ├── App.jsx             # Main application component
│   ├── App.css             # App styles
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd todocontentjsx
   ```

2. **Install dependencies**
   ```bash
   cd todocontent
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎯 Usage

1. **Add a Todo** — Type your task in the input field and click "Add" or press Enter
2. **Complete a Todo** — Click the checkbox to mark as complete (turns green with strikethrough)
3. **Edit a Todo** — Click the ✏️ button to enable editing, make changes, then click 📁 to save
4. **Delete a Todo** — Click the ❌ button to remove the todo

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
