import { DefaultButton, AccountMenu } from 'components'
import { useRouter } from 'next/dist/client/router'
import { useGetFlowUser } from 'hooks'
import { loginToWallet } from 'flow'
import React from 'react'
import useDarkMode from 'use-dark-mode'
import DarkModeToggle from 'react-dark-mode-toggle'

export const Header = () => {
  const { flowUser } = useGetFlowUser()
  const router = useRouter()
  const darkMode = useDarkMode(false)

  const renderAuth = () => {
    if (flowUser?.addr) {
      return <AccountMenu />
    }
    return <DefaultButton text="Connect Wallet" onClick={loginToWallet} />
  }

  const renderHeaderOptions = () => {
    return (
      <div className="flex gap-[40px]">
        {flowUser?.addr == '0x097c84c3dd0ef49b' ? (
          <>
            {' '}
            <div className="pt-14">
              <DarkModeToggle
                onChange={darkMode.toggle}
                checked={darkMode.value}
                size={80}
              />
            </div>
            <div
              className=" flex items-center bg-gradient-to-r from-green-500 to-green-700 bg-clip-text font-raj text-xl font-bold text-transparent hover:scale-110 hover:cursor-pointer"
              onClick={() => router.push('/editor')}
            >
              Create
            </div>
          </>
        ) : (
          <>
            {' '}
            <div
              className=" flex items-center bg-gradient-to-r from-green-500 to-green-700 bg-clip-text font-raj text-xl font-bold text-transparent hover:scale-110 hover:cursor-pointer"
              onClick={() => router.push('/badges')}
            >
              My Badges
            </div>
            <div
              className=" flex items-center bg-gradient-to-r from-green-500 to-green-700 bg-clip-text font-raj text-xl font-bold text-transparent hover:scale-110 hover:cursor-pointer"
              onClick={() => router.push('/mint')}
            >
              Redeem
            </div>
            <div className="pt-2">
              <DarkModeToggle
                onChange={darkMode.toggle}
                checked={darkMode.value}
                size={80}
              />
            </div>
          </>
        )}
      </div>
    )
  }

  return (
    <header className="flex h-20 min-w-[770px] items-center justify-between px-[35px] shadow-[0_4px_2px_-2px_rgba(0,0,0,0.5)] sm:w-full">
      <div
        className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-700 bg-clip-text font-raj text-2xl font-bold text-transparent hover:cursor-pointer"
        onClick={() => router.push('/')}
      >
        <img
          className="h-[55px]"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhENUilxHHUTQharTQgs7IPU6cFMSv_h6KHSD82Wk6NjuzvW8Id97Z0TkZcgghsncWqSADiECjYlOJLpVOhVuDi0DWnrVLpqZOGHKlpS8c_or-RuHJ6fFot0yW8t4-EKvCIX10U7rCF9tvmltMCkayNSnxFrJbP-6lHMtJFIkAN9286YfBCi1nPU2DD/s320/Doc1%20(2).png"
          alt="Flow Logo"
        />
        Agri-Fund
      </div>
      <div className="flex items-center gap-12 ">
        {renderHeaderOptions()}
        {renderAuth()}
      </div>
    </header>
  )
}
