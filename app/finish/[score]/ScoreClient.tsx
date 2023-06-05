"use client";
import Container from "@/components/Container";
import Image from "next/image";
import useWindowSize from "@/app/hook/useWindowSize";
import { Button as button } from "reactstrap";
import Link from "next/link";

interface ScoreClientProps {
  score: string;
}

const ScoreClient: React.FC<ScoreClientProps> = ({
  score
}) => {
  const text = `本次測驗共得${score}分`;
  
  //判斷視窗大小
  const size = useWindowSize();
  console.log(size);
  const source = size.width > 640 ?
    '/web/' + score + '.png' : '/mobile/s' + score + '.png';

  const imageSize = (num: number) => { 
    if (size.width > 640) {
      return {width: size.width*2/3, height: 300}
    } else {
      return {width: 275, height: 150}
    }
  }

  //回傳REACT
  return (
    <div className="bg-white">
      {/* 參加抽書活動 */}
      <div className={`
           ${size.width > 640
            ? "z-10 w-full text-center absolute top-[30vw] left-[35%] translate-x-[-50%] translate-y-[-50%]"
            : "z-10 w-full text-center absolute top-[115vw] left-[50%] translate-x-[-50%] translate-y-[-50%]"}`}>
        <Link href='https://pse.is/4z6x4c'>
          <button type="button">
            <img src='/button.png' width={size.width>640?size.width/6:size.width*1/2} height={100}/>
          </button>
        </Link>
      </div>
      {(parseInt(score)>=3) ? (
      <div>
      {/* 相關新聞 */}
      <div className={`
           ${size.width > 640
            ? "z-10 w-full text-center absolute top-[57%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            : "z-10 w-full text-center absolute top-[470vw] left-[50%] translate-x-[-50%] translate-y-[-50%]"}`}>
        <Container>
          <Link href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/112412">
            <button type="button">
              <img src={size.width > 640 ? '/web/a1.png' : '/mobile/as1.png'} 
              alt="home" width={imageSize(1).width} height={imageSize(1).height} />
            </button>  
          </Link>
        </Container>
      </div>
      <div className={`
           ${size.width > 640
            ? "z-10 w-full text-center absolute top-[65%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            : "z-10 w-full text-center absolute top-[552vw] left-[50%] translate-x-[-50%] translate-y-[-50%]"}`}>
        <Container >
          <Link href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/123100">
            <button type="button">
              <img src={size.width > 640 ? '/web/a2.png' : '/mobile/as2.png'} 
              alt="home" width={imageSize(2).width} height={imageSize(2).height} />
            </button>  
          </Link>
        </Container>
      </div>
      <div className={`
           ${size.width > 640
            ? "z-10 w-full text-center absolute top-[72%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            : "z-10 w-full text-center absolute top-[608vw] left-[50%] translate-x-[-50%] translate-y-[-50%]"}`}>
        <Container >
          <Link href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/112420">
            <button type="button">
              <img src={size.width > 640 ? '/web/a3.png' : '/mobile/as3.png'} 
              alt="home" width={imageSize(3).width} height={imageSize(3).height} />
            </button>  
          </Link>
        </Container>
      </div>

      {/* 社群連結 */}
      <div className={`
           ${size.width > 640
          ? 'z-10 text-center absolute top-[82%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
          : 'z-10 text-center absolute top-[310%]  left-[50%] translate-x-[-50%] translate-y-[-50%]'}
        `}>
        <Link href="https://www.facebook.com/moneyweekly.tw?mibextid=LQQJ4d">
          <button type="button">
            <img src="/icon-FB.png" alt="facebook" width={40} height={40} />
          </button>
        </Link>
      </div>
      <div className={`
           ${size.width > 640
          ? 'z-10 text-center absolute top-[82%] left-[46%] translate-x-[-50%] translate-y-[-50%]'
          : 'z-10 text-center absolute top-[310%]  left-[35%] translate-x-[-50%] translate-y-[-50%]'}
        `}>
        <Link href="https://lin.ee/Q0VwsSQ">
          <button color="line" type="button">
            <img src="/icon-line.png" alt="line" width={40} height={40} />
          </button>
        </Link>
      </div>
      <div className={`
           ${size.width > 640
          ? 'z-10 text-center absolute top-[82%] left-[54%] translate-x-[-50%] translate-y-[-50%]'
          : 'z-10 text-center absolute top-[310%]  left-[65%] translate-x-[-50%] translate-y-[-50%]'}
        `}>
        <Link href="https://instagram.com/moneyweekly.ig?igshid=MzRlODBiNWFlZA==">
          <button color="instagram" type="button">
            <img src="/icon-ig.png" alt="instagram" width={40} height={40} />
          </button>
        </Link>
      </div>
      </div>
    ) : (
      <>
        {/* 相關新聞 */}
      <div className={`
           ${size.width > 640
            ? "z-10 w-full text-center absolute top-[57%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            : "z-10 w-full text-center absolute top-[430vw] left-[50%] translate-x-[-50%] translate-y-[-50%]"}`}>
        <Container >
          <Link href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/112412">
            <button type="button">
              <img src={size.width > 640 ? '/web/a1.png' : '/mobile/as1.png'} 
              alt="home" width={imageSize(1).width} height={imageSize(1).height} />
            </button>  
          </Link>
        </Container>
      </div>
      <div className={`
           ${size.width > 640
            ? "z-10 w-full text-center absolute top-[65%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            : "z-10 w-full text-center absolute top-[510vw] left-[50%] translate-x-[-50%] translate-y-[-50%]"}`}>
        <Container >
          <Link href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/123100">
            <button type="button">
              <img src={size.width > 640 ? '/web/a2.png' : '/mobile/as2.png'} 
              alt="home" width={imageSize(2).width} height={imageSize(2).height} />
            </button>  
          </Link>
        </Container>
      </div>
      <div className={`
           ${size.width > 640
            ? "z-10 w-full text-center absolute top-[72%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            : "z-10 w-full text-center absolute top-[568vw] left-[50%] translate-x-[-50%] translate-y-[-50%]"}`}>
        <Container >
          <Link href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/112420">
            <button type="button">
              <img src={size.width > 640 ? '/web/a3.png' : '/mobile/as3.png'} 
              alt="home" width={imageSize(3).width} height={imageSize(3).height} />
            </button>  
          </Link>
        </Container>
      </div>

      {/* 社群連結 */}
      <div className={`
           ${size.width > 640
          ? 'z-10 text-center absolute top-[82%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
          : 'z-10 text-center absolute top-[300%]  left-[50%] translate-x-[-50%] translate-y-[-50%]'}
        `}>
        <Link href="https://www.facebook.com/moneyweekly.tw?mibextid=LQQJ4d">
          <button type="button">
            <img src="/icon-FB.png" alt="facebook" width={40} height={40} />
          </button>
        </Link>
      </div>
      <div className={`
           ${size.width > 640
          ? 'z-10 text-center absolute top-[82%] left-[46%] translate-x-[-50%] translate-y-[-50%]'
          : 'z-10 text-center absolute top-[300%]  left-[35%] translate-x-[-50%] translate-y-[-50%]'}
        `}>
        <Link href="https://lin.ee/Q0VwsSQ">
          <button color="line" type="button">
            <img src="/icon-line.png" alt="line" width={40} height={40} />
          </button>
        </Link>
      </div>
      <div className={`
           ${size.width > 640
          ? 'z-10 text-center absolute top-[82%] left-[54%] translate-x-[-50%] translate-y-[-50%]'
          : 'z-10 text-center absolute top-[300%]  left-[65%] translate-x-[-50%] translate-y-[-50%]'}
        `}>
        <Link href="https://instagram.com/moneyweekly.ig?igshid=MzRlODBiNWFlZA==">
          <button color="instagram" type="button">
            <img src="/icon-ig.png" alt="instagram" width={40} height={40} />
          </button>
        </Link>
      </div>
      </>
    )}
      <div className={`
          relative ${size.width > 640 ? '-mx-[100px]' : '-mx-[16px]'}
        `}>
        <Image
          src={source}
          alt='image'
          width={600}
          height={1000}
          className="w-[120vw] object-cover"
        />
      </div>
    </div>
  );
};

export default ScoreClient;
