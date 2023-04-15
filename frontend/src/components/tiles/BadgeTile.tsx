import React from 'react'

interface BTProps {
  imgURL: string
  title: string
  hash: string
}

export const BadgeTile: React.FC<BTProps> = ({ imgURL, title, hash }) => {
  return (
    <div className="flex h-[200] max-w-[250px] flex-col rounded  shadow">
      <img
        src={imgURL}
        alt="Badge Img"
        min-width={220}
        height={200}
        className="rounded-sm"
      />
      <div className="pt-1 text-center font-raj text-lg font-bold">{title}</div>
      <div className="text-center font-raj text-lg font-bold">
        Transaction Hash: #{hash}
      </div>
    </div>
  )
}
