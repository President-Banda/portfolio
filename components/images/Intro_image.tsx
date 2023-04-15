import Image from 'next/image';

export function AlbertBandaIntro() {
  return (
    <div>
      <Image
        src="/images/albert_banda.jpg"
        alt="My Intro Image"
        width={500}
        height={500}
      />
    </div>
  );
}
