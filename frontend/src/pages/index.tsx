import { flowConfig, inferFlowscanURL } from 'flow'
import { CaseTile } from 'components'
import { PageLayout } from 'layouts'

export default function Home() {
  const renderMission = () => {
    return (
      <div className="flex h-[450px] w-full flex-col items-center justify-center gap-8 bg-gradient-to-b from-green-500 to-green-700">
        <div className="font-raj text-3xl font-semibold text-white">
          Mission
        </div>
        <div className="w-[500px] text-center font-raj text-xl text-white">
          Our mission is to validate the farmer proof of work as an Soulbound
          NFT and claim their debts/loans from the finance department. This App
          is now built in both Polygon Mumbai and Flow chains in the Blockchain.
        </div>
      </div>
    )
  }

  const renderUseCases = () => {
    return (
      <div className="flex h-fit w-full flex-col items-center justify-center gap-8 p-3">
        <div className="mb-6 border-green-500 bg-gradient-to-r from-green-500 to-green-700 bg-clip-text p-2 font-raj text-3xl font-bold text-transparent">
          Use Cases
        </div>
        <div className="flex flex-wrap gap-16">
          <CaseTile
            description="The platform can be used to validate the work done by farmers, such as crop production, livestock management, or other agricultural activities. This could be used by governments or other organizations to ensure that farmers are meeting certain requirements or standards."
            title="Validating farmer proof of work"
            icon="/icons/awards.png"
          />
          <CaseTile
            description="By creating Soulbound NFTs, the platform can provide a secure and immutable way to track ownership of the validated work done by farmers. This can be useful for farmers to prove their ownership of the work and for lenders or other stakeholders to verify the validity of the work."
            title="Issuing Soulbound NFTs"
            icon="/icons/badge.png"
          />
          <CaseTile
            description="The platform can be used to track debts and loans owed by farmers based on their validated work. This could be used by finance departments or lenders to manage loan repayment schedules or to provide financial assistance to farmers based on their work."
            title="Claiming debts/loans"
            icon="/icons/cert.png"
          />
          <CaseTile
            description="By building the platform on both Polygon Mumbai and Flow chains, the project can provide users with flexibility and choice when it comes to choosing a blockchain platform to use. This could help to increase adoption of the platform and make it more accessible to a wider range of users."
            title="Cross-chain compatibility"
            icon="/icons/badge.png"
          />
        </div>
      </div>
    )
  }

  const renderSmartContract = () => {
    return (
      <div className="flex h-fit w-full flex-col items-center justify-center gap-8 bg-gradient-to-r from-green-500 to-green-700 p-3">
        <div className="mb-6 border-green-500 bg-gradient-to-r from-green-500 to-green-700 bg-clip-text p-2 font-raj text-3xl font-bold text-white text-transparent">
          Smart Contract
        </div>
        <p className="w-[800px] text-center font-raj text-lg text-black">
          A soulbound smart contract is a type of smart contract that is
          designed to be permanently and irrevocably attached to a specific
          digital asset, such as a cryptocurrency or a non-fungible token (NFT).
          Once a soulbound smart contract is attached to an asset, it becomes an
          integral part of that assets identity and cannot be separated from it.
          In other words, transferring or burning a soulbound NFT is not
          possible.
        </p>
        <p className="w-[800px] text-center font-raj text-lg ">
          Our design consists of two smart contracts: an NFT-based soulbound
          smart contract
          <span
            className="mx-1 underline hover:cursor-pointer hover:brightness-75"
            onClick={() => {
              window.open(
                `${inferFlowscanURL()}/account/${
                  flowConfig['0xAnChainSoulboundNFT']
                }`,
                '_blank'
              )
            }}
          >
            here
          </span>
          and a lazy minting contract that allows users to issue soulbound NFTs
          to other users on Flow and claim soulbound NFTs
          <span
            className="ml-1 underline hover:cursor-pointer hover:brightness-75"
            onClick={() => {
              window.open(
                `${inferFlowscanURL()}/account/${
                  flowConfig['0xSoulboundClaimer']
                }`,
                '_blank'
              )
            }}
          >
            here
          </span>
          . To ensure our soulbound contract integrates easily with the Flow
          ecosystem, we based the contract implementation off the existing
          NonFungibleToken standard.
        </p>
        <p className="w-[800px] text-center font-raj text-lg ">
          We also designed the contracts such that soulbound tokens can be
          minted on demand, which helps us avoid storage error issues and allows
          us to more easily handle situations where users may not have a
          collection installed beforehand.
        </p>
      </div>
    )
  }

  return (
    <PageLayout title="Home" authRequired={false}>
      {renderMission()}
      {renderUseCases()}
      {renderSmartContract()}
      <div className=" mt-2 mb-2 flex justify-between px-10">
        <h3 className=" text-center text-lg  text-black ">
          Follow us on Twitter, Insta
        </h3>

        <h3 className="text-center text-lg  text-black ">
          Made with 💚 by Agri-Fund
        </h3>
        <h3 className="text-center text-lg text-black "> Copyrights @ 2023</h3>
      </div>
    </PageLayout>
  )
}
