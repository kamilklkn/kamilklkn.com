import NextImage from "next/image";
import Social from "@/components/social";
import Container from "@/components/container";
import NextLink from "next/link";

export default function Index() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="grid font-display text-xl sm:text-2xl">
            <b>Kamil Kalkan</b>
            <span className="opacity-60">Sr. Product Designer, Product Manager, Stock Photographer</span>
            <span className="opacity-60">Istanbul, Türkiye</span>
          </h1>

          <p className="text-xl">
            Merhaba, ben Kamil Kalkan.
            <br /> İnternet dünyasında daha çok <a href="https://www.google.com/search?q=kamilklkn&rlz=1C5CHFA_enTR1117TR1117&oq=kamilklkn&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPDIGCAQQRRg8MgYIBRBFGEEyBggGEEUYQTIGCAcQRRhB0gEHMjcxajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8" target="_blank"> <b>kamilklkn</b></a> olarak tanınıyorum.
            Dijital ürünler için basit ve zarif çözümler geliştirerek, karmaşık problemleri çözüyor ve ürün stratejisi, geliştirme ve yönetiminde startup şirketlerinin fikirlerini ürünlere dönüştürmelerine destek oluyorum.
          </p>

          <p className="text-xl">
            Profesyonel yaşamım dışında, en büyük hobim olan fotoğraf çekmekle ilgileniyor ve yapay zeka (AI) ile görseller üretiyorum. Öğrendiklerimi blogumda paylaşarak bilgi birikimimi geniş bir kitleye aktarıyorum.
          </p>

          <p className="text-xl">
            Şu ana kadar bir dizi harika girişim ve şirketle çalıştım. Şu an <a href="https://www.moneytolia.com/" target="_blank"> Moneytolia</a> şirketinde Product Manager olarak fintech ürünlerinden sorumluyum.
          </p>

          <p className="text-xl">
            Bu konularda soruların varsa veya ürünün hakkında konuşmak istersen{" "}
            <NextLink href={`/meet`} className="underline">
              müsait günlerime bakabilirsin.
            </NextLink>
          </p>
        </div>

        <div className="mt-10">
          <Social />
        </div>
      </Container>


    </>
  );
}
