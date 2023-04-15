import { useGetBadges, useGetFlowUser } from 'hooks'
import { BadgeTile } from 'components'
import type { NextPage } from 'next'
import { PageLayout } from 'layouts'
import { useEffect } from 'react'
import { constants } from 'utils'

const BadgesPage: NextPage = () => {
  const { runScript: getBadges, data, hasCollection } = useGetBadges()
  const { flowUser } = useGetFlowUser()

  useEffect(() => {
    const address = flowUser?.addr
    if (address != null) {
      getBadges({ address })
    }
  }, [flowUser])

  const renderbadges = () => {
    if (data?.length === 0 || hasCollection === false) {
      return (
        <div className="font-raj text-2xl text-green-700">
          You currently dont own any badges. You can issue some on the Create
          page.
        </div>
      )
    }

    return data?.map((badge, i) => {
      return (
        <BadgeTile
          title={`${badge?.name ?? ''} #${badge?.id}`}
          imgURL="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiliTxoFer2H0qWdJ2mAF3I7fUVAjoeGTrc_yY4tI3VAw4QNPPAs2SvJkpfJvY0ymu6gOXJkgPU93AFdm3tGP6M7mbFRBDFcgsJZ4pULIzPoOEzE6F_7n-3q3nlnpOIiwydp1ggRldCldOOLsl8sWuDblbh5H0XQbVt9PxQOgWN5cT3wzSGAjz9uMH8/s320/AgriFund_Badge-removebg-preview.png"
          key={i}
          hash="8070"
        />
      )
    })
  }

  return (
    <PageLayout title="Badges" authRequired={true}>
      <div className="flex flex-col gap-4 py-12 px-20">
        <div className="flex flex-wrap gap-12 ">{renderbadges()}</div>
      </div>
    </PageLayout>
  )
}

export default BadgesPage
