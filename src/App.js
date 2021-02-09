import './App.css';

function App() {
  const toggleMode = () => {
    if(localStorage.theme === undefined){
      localStorage.theme = 'dark';
    }
    localStorage.theme === 'light' ? localStorage.theme = 'dark' : localStorage.theme = 'light';
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  return (
    <div className="App">
      <div className="h-screen w-screen flex flex-col justify-center items-center bg-white dark:bg-black">
        <h1 className="text-black dark:text-white text-lg font-medium">What color am I?</h1>
        <button onClick={toggleMode} className="px-2 py-1 bg-purple-700 text-white text-center rounded mt-4">toggle dark mode</button>
      </div>
    </div>
  );
}

export default App;
