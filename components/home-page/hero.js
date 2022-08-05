import classes from "./hero.module.css";
import Image from 'next/image'

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/avatarImage.png" alt="image showing Saeed Khodajoo" width={300} height={300} />
      </div>
      <h1>Hi, I'm Saeed</h1>
      <p>I'm staring to learn Nextjs and this is my second project.</p>
    </section>
  );
}

export default Hero;
