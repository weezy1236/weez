// import img from '../images/coinbase.png'
import {
  alice,
  alphaWallet,
  Atomic,
  Authereum,
  Block,
  Coolwallet,
  Coinbase,
  Coinomi,
  Crypto,
  Multisig,
  eido,
  equal,
  gridplus,
  huobi,
  imToken,
  infinito,
  infinity,
  key,
  mathwallet,
  meta,
  nash,
  pillar,
  safepal,
  spatium,
  tokenary,
  tokenpocket,
  trust,
  walleth,
  zelcore,
  walletio,
  argent,
  atwallet,
  binance,
  bitkeep,
  bridge,
  coin98,
  dokwallet,
  easypocket,
  meetone,
  midaswallet,
  morix,
  onto,
  ownbit,
  peakdefi,
  rainbow,
  ronin,
  safepalWallet,
  sparkpoint,
  swft,
  unstopable,
  viawallet,
  Vision,
  xdc,
  solana
} from "./imageLoader/loader";

const data = [
  {
    img: Coinbase,
    name: "Coinbase",
  },
  {
    img: trust,
    name: "Trust",
  },
  {
    img: Block,
    name: "Blockchain",
  },
  {
    img: meta,
    name: "Metamask",
  },
  {
    img: alice,
    name: "Alice",
  },
  {
    img: Authereum,
    name: "Authereum",
  },
  {
    img: alphaWallet,
    name: "Alpha Wallet",
  },
  {
    img: Atomic,
    name: "Atomic",
  },

  {
    img: Coolwallet,
    name: "CoolWallet S",
  },
 
  {
    img: Coinomi,
    name: "Coinomi",
  },
  {
    img: Crypto,
    name: "Crypto.com | Defi Wallet",
  },
  {
    img: Multisig,
    name: "Gnosis Safe Multisig",
  },
  {
    img: eido,
    name: "Eidoo",
  },
  {
    img: equal,
    name: "Equal",
  },
  {
    img: gridplus,
    name: "gridPlus",
  },
  {
    img: huobi,
    name: "Huobi Wallet",
  },

  {
    img: imToken,
    name: "imToken",
  },
  {
    img: infinito,
    name: "Infinito",
  },
  {
    img: infinity,
    name: "Infinity Wallet",
  },
  {
    img: key,
    name: "MYKEY",
  },
  {
    img: mathwallet,
    name: "MathWallet",
  },

  {
    img: nash,
    name: "Nash",
  },
  {
    img: pillar,
    name: "Pillar",
  },
  {
    img: safepal,
    name: "safePal",
  },
  {
    img: spatium,
    name: "Spatium",
  },
  {
    img: tokenary,
    name: "Tokenary",
  },
  {
    img: tokenpocket,
    name: "TokenPocket",
  },
 
  {
    img: walleth,
    name: "Walleth",
  },
  {
    img: zelcore,
    name: "Zelcore",
  },
  {
    img: walletio,
    name: "Walleti.o",
  },
  {
    img: argent,
    name: "Argent",
  },
  {
    img: atwallet,
    name: "AT.Wallet",
  },
  {
    img: binance,
    name: "Binance Smart Chain",
  },
  {
    img: bitkeep,
    name: "BitKeep",
  },
  {
    img: bridge,
    name: "Bridge Wallet",
  },
  {
    img: coin98,
    name: "Coin98",
  },
  {
    img: dokwallet,
    name: "Dok Wallet",
  },
  {
    img: easypocket,
    name: "EasyPocket",
  },
  {
    img: meetone,
    name: "MEET.ONE",
  },
  {
    img: midaswallet,
    name: "Midas Wallet",
  },
  {
    img: morix,
    name: "MoriX Wallet",
  },
  {
    img: onto,
    name: "ONTO",
  },
  {
    img: ownbit,
    name: "Ownbit",
  },
  {
    img: peakdefi,
    name: "PeakDefi Wallet",
  },
  {
    img: rainbow,
    name: "Rainbow",
  },
  {
    img: ronin,
    name: "Ronin",
  },
  {
    img: safepalWallet,
    name: "Safepal Wallet",
  },
  {
    img: sparkpoint,
    name: "SparkPoint",
  },
  {
    img: swft,
    name: "SWFT Wallet",
  },
  {
    img: unstopable,
    name: "Unstoppable Wallet",
  },
  {
    img: viawallet,
    name: "ViaWallet",
  },
  {
    img: Vision,
    name: "Vision",
  },
  {
    img: xdc,
    name: "XDC Wallet",
  },
  {
    img: solana,
    name: "Solana",
  },
];

const Wallet = ({ data, setShow, show, setName }) => {
  return (
    <div
      onClick={() => {
        setShow(!show);
        setName(data.name);
      }}
      className="flex flex-col align-center items-center cursor-pointer "
    >
        <div className="rounded-full">
             <figure className="rounded-full">
        <img src={data.img} alt="img" className="w-32 rounded-full" />
      </figure>
        </div>
     

      <figcaption className="flex justify-center items-center py-4 text-[16px] font-bold text-[#587087]">
        {data.name}
      </figcaption>
    </div>
  );
};

const Body = ({ setShow, show, setName }) => {
  return (
    <div className="w-auto md:min-w-auto flex justify-center items-center mt-10    ">
      <div className="flex flex-col align-center items-center ">
        <h1 className="text-bold font-medium mb-8 text-4xl text-[#587087] w-32">
          {" "}
          Wallets
        </h1>
        <div className=" w-full flex text-center items-center justify-center  px-4 md:px-80 sm:px-80 text-[#587087]">
          <p className=" w-full sm:min-w-[500px] md:min-w-[600px] flex text-xl my-0 mx-auto font-thin">
            Multiple iOS and Android wallets support the Link Wallet Access
            protocol. Simply scan a QR code from your desktop computer screen to
            start securely using a dApp with your mobile wallet. Interaction
            between mobile apps and mobile browsers are supported via mobile
            deep linking.
          </p>
        </div>
        <section className="mt-8 w-3/4 flex align-center items-center justify-center m-5">
          <div className="grid gap-8  md:grid-cols-4 grid-rows-4 sm:grid-cols-3 grid-rows-3 grid-cols-2 grid-rows-2 mt-5">
            {data.map((d, index) => (
              <Wallet
                className="fixed"
                type="button"
                setName={setName}
                key={index}
                setShow={setShow}
                show={show}
                data={d}
              />
            ))}
          </div>
        </section>

        <div className="flex justify-center items-center text-[18px] h-[150px]8">
          <p className="text-[#587087]">Open a pull request on</p>
          <a
            className="text-[#4199fc] font-semibold outline-none"
            href="#"
            rel="noreferrer noopener"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Body;
