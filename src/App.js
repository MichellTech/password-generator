import { useState } from 'react'
import { AiFillCopy } from 'react-icons/ai'
import { TfiLayoutColumn2 } from 'react-icons/tfi'
import copy from 'copy-to-clipboard'

import 'tw-elements'

function App() {
  const [width, setWidth] = useState(0)
  const [upper, setUpper] = useState('')
  const [lower, setLower] = useState('')
  const [number, setNumber] = useState('')
  const [symbol, setSymbol] = useState('')
  const [password, setPassword] = useState('')
  const [checked, setChecked] = useState(false)
  const [checkedone, setCheckedone] = useState(false)
  const [checkedtwo, setCheckedtwo] = useState(false)
  const [checkedthree, setCheckedthree] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [indicators, setIndicators] = useState('')
  const [indicatorsone, setIndicatorsone] = useState(0)
  const [indicatorstwo, setIndicatorstwo] = useState(0)
  const [indicatorsthree, setIndicatorsthree] = useState(0)
  const [indicatorsfour, setIndicatorsfour] = useState(0)

  // function for onclick
  const selecteduppercase = () => {
    setUpper('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    setIndicatorsone(1)
  }

  // function for onclick
  const selectedlowercase = () => {
    setLower('abcdefghijklmnopqrstuvwxyz')
    setIndicatorstwo(1)
  }

  // function for onclick
  const selectednumber = () => {
    setNumber('0123456789')
    setIndicatorsthree(1)
  }

  // function for onclick
  const selectedsymbol = () => {
    setSymbol(`@!~#$%&*`)
    setIndicatorsfour(1)
  }

  // general password

  const generatedpassword = upper + lower + number + symbol
  const generatePasswords = (width) => {
    let result = ' '
    const charactersLength = generatedpassword.length
    for (let i = 0; i < width; i++) {
      result += generatedpassword
        .trim()
        .charAt(Math.floor(Math.random() * charactersLength))
    }
    setPassword(result)
    return result
  }

  // indicator
  const indicator = () => {
    const totalindicator =
      indicatorsone + indicatorstwo + indicatorsthree + indicatorsfour
    if (+totalindicator === 4) {
      setIndicators(4)
    } else if (totalindicator === 3) {
      setIndicators(3)
    } else if (totalindicator === 2) {
      setIndicators(2)
    } else if (totalindicator === 1) {
      setIndicators(1)
    } else setIndicators('')
    console.log(totalindicator)
    console.log(indicatorsone)
    console.log(indicatorstwo)
    console.log(indicatorsthree)
    console.log(indicatorsfour)
  }

  // function for onclick
  const selectedpassword = () => {
    indicator()

    if (width === 0) {
      setError("password length can't be 0")
      setIndicators('')
      setPassword('')
    } else generatePasswords(width)
  }

  // checkbox

  ///reset
  const selectedreset = () => {
    setPassword('')
    setLower('')
    setPassword('')
    setNumber('')
    setUpper('')
    setWidth(0)
    setChecked(false)
    setCheckedone(false)
    setCheckedtwo(false)
    setCheckedthree(false)
    setError('')
    setIndicators('')
    setMessage('')
    setIndicatorsone(0)
    setIndicatorstwo(0)
    setIndicatorsthree(0)
    setIndicatorsfour(0)
  }

  // copying
  const copyToClipboard = () => {
    copy(password)
    setMessage(`password copied successfully`)
    setTimeout(setMessage, 5000)
  }

  return (
    //body
    <div className=' bg-darkCyan min-h-screen flex flex-col justify-center items-center px-6 py-6 '>
      <h6 className='font-sans text-white mb-8 '>Password Generator</h6>
      {/* container */}
      {message ? (
        <h1 className='text-white font-sans font-bold text-center mb-1'>
          {message}
        </h1>
      ) : (
        ''
      )}
      <div className='w-80 md:w-96 space-y-4'>
        {/* shown password */}
        <div
          className='bg-strongCyan flex justify-between items-center px-4 py-2
        '
        >
          <h1 className='font-sans font-semibold text-base text-orange-300'>
            {password ? password : 'No password selected'}
          </h1>
          <AiFillCopy
            className='text-white cursor-pointer'
            onClick={() => copyToClipboard()}
          />
        </div>
        {/* selection field */}
        <div className='bg-strongCyan px-4 pt-2 pb-6 space-y-5 '>
          {/* chararacter-lenght */}
          <div className='flex justify-between items-center'>
            {error ? (
              <h1 className='font-sans font-medium text-sm text-red-700 '>
                {error}
              </h1>
            ) : (
              <h1 className='font-sans font-medium text-sm '>
                Desired password length
              </h1>
            )}
            <h1 className='text-white font-bold text-xl '>{width}</h1>
          </div>
          {/* range */}
          <div class='relative pt-1'>
            <input
              type='range'
              class='
      form-range
      appearance-none
      w-full
      h-6
      p-0
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none
    '
              min='0'
              max='20'
              step='1'
              id='customRange3'
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
          </div>
          {/* input */}
          <div className='space-y-3'>
            {/* check one */}
            <div className='flex flex-row justify-start items-center gap-4  '>
              <input
                type='Checkbox'
                className=''
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                onClick={() => selecteduppercase()}
              />
              <label htmlFor='' className='font-sans font-medium '>
                Include Uppercase Letters
              </label>
            </div>
            {/* check two */}
            <div className='flex flex-row justify-start items-center gap-4  '>
              <input
                type='Checkbox'
                className=''
                checked={checkedone}
                onChange={(e) => setCheckedone(e.target.checked)}
                onClick={() => selectedlowercase()}
              />
              <label htmlFor='' className='font-sans font-medium '>
                Include Lowercase Letters
              </label>
            </div>
            {/* check three */}
            <div className='flex flex-row justify-start items-center gap-4  '>
              <input
                type='Checkbox'
                className=''
                checked={checkedtwo}
                onChange={(e) => setCheckedtwo(e.target.checked)}
                onClick={() => selectednumber()}
              />
              <label htmlFor='' className='font-sans font-medium '>
                Include Numbers
              </label>
            </div>
            {/* check four */}
            <div className='flex flex-row justify-start items-center gap-4  '>
              <input
                type='Checkbox'
                className=''
                checked={checkedthree}
                onChange={(e) => setCheckedthree(e.target.checked)}
                onClick={() => selectedsymbol()}
              />
              <label htmlFor='' className='font-sans font-medium '>
                Include Symbols
              </label>
            </div>
          </div>
          {/* strength cont */}
          <div className='flex justify-between items-center bg-cyan-100 px-2 py-2 '>
            {/* strength */}
            <div>
              <h1 className='font-sans font-medium'>Strength</h1>
            </div>
            {/* bar */}
            <div className='flex items-center gap-2'>
              {indicators === 1 ? (
                <h1 className='font-sans font-semibold'>poor</h1>
              ) : indicators === 2 ? (
                <h1 className='font-sans font-semibold'>Safe</h1>
              ) : indicators === 3 ? (
                <h1 className='font-sans font-semibold'>Secure</h1>
              ) : indicators === 4 ? (
                <h1 className='font-sans font-semibold'>Protected</h1>
              ) : (
                ''
              )}
              {/* icon */}

              {indicators === 1 ? (
                <div className='flex '>
                  <TfiLayoutColumn2 className=' bg-red-500 ' />
                  <TfiLayoutColumn2 className=' ' />
                  <TfiLayoutColumn2 className=' ' />
                  <TfiLayoutColumn2 className=' ' />
                </div>
              ) : (
                ' '
              )}

              {indicators === 2 ? (
                <div className='flex '>
                  <TfiLayoutColumn2 className='bg-yellow-500 ' />
                  <TfiLayoutColumn2 className='bg-yellow-500 ' />
                  <TfiLayoutColumn2 className=' ' />
                  <TfiLayoutColumn2 className=' ' />
                </div>
              ) : (
                ' '
              )}
              {indicators === 3 ? (
                <div className='flex '>
                  <TfiLayoutColumn2 className=' bg-green-700' />
                  <TfiLayoutColumn2 className='bg-green-600 ' />
                  <TfiLayoutColumn2 className='bg-green-500 ' />
                  <TfiLayoutColumn2 className=' ' />
                </div>
              ) : (
                ' '
              )}
              {indicators === 4 ? (
                <div className='flex '>
                  <TfiLayoutColumn2 className='bg-green-500' />
                  <TfiLayoutColumn2 className=' bg-green-500' />
                  <TfiLayoutColumn2 className=' bg-green-500' />
                  <TfiLayoutColumn2 className=' bg-green-500' />
                </div>
              ) : (
                ''
              )}
              {indicators === '' ? (
                <div className='flex '>
                  <TfiLayoutColumn2 className='' />
                  <TfiLayoutColumn2 className=' ' />
                  <TfiLayoutColumn2 className=' ' />
                  <TfiLayoutColumn2 className=' ' />
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
          {/* button */}
          <div className='flex justify-center item gap-4 '>
            <button
              className='bg-darkCyan text-white font-sans font-medium px-4 py-1 rounded-md shadow-md mx-auto flex justify-center'
              onClick={() => selectedpassword()}
            >
              Generate
            </button>
            <button
              className='bg-darkCyan text-white font-sans font-medium px-6 py-1 rounded-md shadow-md mx-auto flex justify-center'
              onClick={() => selectedreset()}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
