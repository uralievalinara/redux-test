// App.jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByThree, addValue } from "./store/slices/counterSlices"

function App() {
  const [inputValue, setInputValue] = useState(0);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByThree = () => {
    dispatch(addValue(3));
  };

  const handleAddValue = () => {
    dispatch(addValue(inputValue));
  };

  const handleInputChange = (e) => {
    setInputValue(Number(e.target.value));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="flex justify-center space-x-8 mb-6">
        <a href="https://vite.dev" target="_blank" className="hover:scale-110 transition-transform">
          <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="hover:scale-110 transition-transform">
          <img src={reactLogo} className="h-16 w-16 animate-spin-slow" alt="React logo" />
        </a>
      </div>
      
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Счётчик Redux Toolkit</h1>
      
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-blue-600">
          Текущее значение: <span className="text-3xl">{count}</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <button 
            onClick={handleIncrement}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Увеличить на 1
          </button>
          <button 
            onClick={handleDecrement}
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Уменьшить на 1
          </button>
          <button 
            onClick={handleIncrementByThree}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Увеличить на 3
          </button>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <input 
            type="number" 
            value={inputValue} 
            onChange={handleInputChange} 
            placeholder="Введите число"
            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={handleAddValue}
            className="w-full sm:w-1/3 bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Добавить
          </button>
        </div>
      </div>
      
      <p className="text-sm text-gray-500 mt-8 text-center">
        Nosov Nikita
      </p>
    </div>
  )
}

export default App