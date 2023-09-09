import HeroPageBlock from "@/components/hero-page-block";
import Image from "next/image";
const Home = () => {
  const BlockData = [
    {
      value: "10%",
      heading: "Lifetime Commission",
      description:
        "Earn 10% Lifetime Commission on paid entry fees by your referred users, every time they play a league on Kandle.",
      svg: "commision",
    },
    {
      value: "1USDT ",
      heading: " Signup bonus",
      description: "All your referred users gets up to 1 USDT signup bonus",
      svg: "signup-bonus",
    },
  ];

  const reward = [
    { user: "pateek", amount: "100" },
    { user: "manish Sir", amount: "50" },
    { user: "Rajat Gulati", amount: "6" },
    { user: "Abhay sharma", amount: "0.5" },
  ];

  return (
    <main>
      <div className="hero">
        <h1 className="hero-heading">
          Become a
          <p>
            <span className="hero-heading-gradient">KANDLE </span> AFFILIATE
          </p>
        </h1>
        <Image
          className="main-hero-img"
          src="/assets/main/hero.svg"
          alt="hero"
          width={618}
          height={200}
          priority
        />
        <div className="hero-text">
          <span>40x</span> more rewarding than being a crypto exchange’s
          affiliate
        </div>

        <button>
          {" "}
          <Image
            src="/assets/main/g.svg"
            alt="g"
            width={16}
            height={16}
            priority
          />
          Sign up with Google
        </button>
        <div className="hero-block">
          {BlockData.map((item, i) => {
            return <HeroPageBlock key={i} data={item} />;
          })}
        </div>
      </div>
      <div className="hero-live-reward">
        <Image
          src={`/assets/main/dot.svg`}
          alt="dot"
          width={15}
          height={15}
          priority
        />
        <p>Live Rewards</p>
      </div>
      <div className="hero-live-block">
        <Image
          src={`/assets/main/reward.svg`}
          alt="reward"
          width={85}
          height={75}
          priority
        />
        <p>Total Rewards Set To-Date</p>
        <button>198763.86 USDT</button>
        <div className="hero-live-block-users">
          {reward.map((item, key) => {
            return (
              <div key={key} className="hero-live-block-users-data">
                <Image
                  src={`/assets/main/avatar.svg`}
                  alt="avatar"
                  width={24}
                  height={25}
                  priority
                />
                <p>
                  {item.user} got <span> {item.amount}</span> rewards
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="register">
        Register now to get your Affiliate Code
        <button>
          {" "}
          <Image
            src="/assets/main/g.svg"
            alt="g"
            width={16}
            height={16}
            priority
          />
          Sign up with Google
        </button>
      </div>{" "}
      <div className="footer">
        <p>TERMS & CONDITIONS</p>
        <p>view</p>
      </div>
    </main>
  );
};

export default Home;
