"use client";
import Container from "@/components/Container";
import Image from "next/image";
import useWindowSize from "@/app/hook/useWindowSize";
import { Button } from "reactstrap";
import Link from "next/link";

interface ScoreClientProps {
  score: string;
}
//加一些固定的按鈕之類的
const ScoreClient: React.FC<ScoreClientProps> = ({
  score
}) => {
  const text = `本次測驗共得${score}分`;

  const size = useWindowSize();
  console.log(size);
  const source = size.width > 768 ?
    '/web/' + score + '.png' : '/mobile/s' + score + '.png';

  const imageSize = (num: number) => { 
    if (size.width > 768) {
      return {width: 1200, height: 300}
    } else {
      return {width: 275, height: 150}
    }
  }

  console.log(parseInt(score)>=3);
  //加上各種得分場景的圖案


  return (
    <div className="bg-white">
      <div className={`
           ${size.width > 768
            ? "z-10 w-full text-center absolute top-[37%] left-[65%] translate-x-[-50%] translate-y-[-50%]"
            : "z-10 w-full text-center absolute top-[53%] left-[50%] translate-x-[-50%] translate-y-[-50%]"}`}>
        <Link href='https://pse.is/4z6x4c'>
          <Button className="btn-icon mt-2" color="facebook" type="button">
            <img src='/button.png' width={250} height={100}/>
          </Button>
        </Link>
      </div>
      <div className={`
          relative ${size.width > 768 ? '-mt-[320px] -mx-[100px]' : '-mx-[16px]'}
        `}>
        <Image
          src={source}
          alt='image'
          width={600}
          height={1000}
          className="w-[120vw] object-cover"
        />
      </div>
    {(parseInt(score)>=3) ? (
      <>
        {/* 相關新聞 */}
      <div className={`
           ${size.width > 768
            ? "w-full text-center absolute top-[57%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            : "w-full text-center absolute top-[215%] left-[50%] translate-x-[-50%] translate-y-[-50%]"}`}>
        <Container >
          <Link href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/112412">
            <Button className="btn-icon mt-2" color="facebook" type="button">
              <img src={size.width > 768 ? '/web/a1.png' : '/mobile/as1.png'} 
              alt="home" width={imageSize(1).width} height={imageSize(1).height} />
            </Button>  
          </Link>
        </Container>
      </div>
      <div className={`
           ${size.width > 768
            ? "w-full text-center absolute top-[65%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            : "w-full text-center absolute top-[255%] left-[50%] translate-x-[-50%] translate-y-[-50%]"}`}>
        <Container >
          <Link href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/123100">
            <Button className="btn-icon mt-2" color="facebook" type="button">
              <img src={size.width > 768 ? '/web/a2.png' : '/mobile/as2.png'} 
              alt="home" width={imageSize(2).width} height={imageSize(2).height} />
            </Button>  
          </Link>
        </Container>
      </div>
      <div className={`
           ${size.width > 768
            ? "w-full text-center absolute top-[72%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            : "w-full text-center absolute top-[285%] left-[50%] translate-x-[-50%] translate-y-[-50%]"}`}>
        <Container >
          <Link href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/112420">
            <Button className="btn-icon mt-2" color="facebook" type="button">
              <img src={size.width > 768 ? '/web/a3.png' : '/mobile/as3.png'} 
              alt="home" width={imageSize(3).width} height={imageSize(3).height} />
            </Button>  
          </Link>
        </Container>
      </div>

      {/* 社群連結 */}
      <div className={`
           ${size.width > 768
          ? 'text-center absolute top-[82%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
          : 'text-center absolute top-[310%]  left-[50%] translate-x-[-50%] translate-y-[-50%]'}
        `}>
        <Link href="https://www.facebook.com/moneyweekly.tw?mibextid=LQQJ4d">
          <Button className="btn-icon mt-2" color="facebook" type="button">
            <img src="/icon-FB.png" alt="facebook" width={40} height={40} />
          </Button>
        </Link>
      </div>
      <div className={`
           ${size.width > 768
          ? 'text-center absolute top-[82%] left-[46%] translate-x-[-50%] translate-y-[-50%]'
          : 'text-center absolute top-[310%]  left-[35%] translate-x-[-50%] translate-y-[-50%]'}
        `}>
        <Link href="https://lin.ee/Q0VwsSQ">
          <Button className="btn-icon mt-2" color="line" type="button">
            <img src="/icon-line.png" alt="line" width={40} height={40} />
          </Button>
        </Link>
      </div>
      <div className={`
           ${size.width > 768
          ? 'text-center absolute top-[82%] left-[54%] translate-x-[-50%] translate-y-[-50%]'
          : 'text-center absolute top-[310%]  left-[65%] translate-x-[-50%] translate-y-[-50%]'}
        `}>
        <Link href="https://instagram.com/moneyweekly.ig?igshid=MzRlODBiNWFlZA==">
          <Button className="btn-icon mt-2" color="instagram" type="button">
            <img src="/icon-ig.png" alt="instagram" width={40} height={40} />
          </Button>
        </Link>
      </div>
      </>
    ) : (
      <>
        {/* 相關新聞 */}
      <div className={`
           ${size.width > 768
            ? "w-full text-center absolute top-[57%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            : "w-full text-center absolute top-[200%] left-[50%] translate-x-[-50%] translate-y-[-50%]"}`}>
        <Container >
          <Link href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/112412">
            <Button className="btn-icon mt-2" color="facebook" type="button">
              <img src={size.width > 768 ? '/web/a1.png' : '/mobile/as1.png'} 
              alt="home" width={imageSize(1).width} height={imageSize(1).height} />
            </Button>  
          </Link>
        </Container>
      </div>
      <div className={`
           ${size.width > 768
            ? "w-full text-center absolute top-[65%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            : "w-full text-center absolute top-[238%] left-[50%] translate-x-[-50%] translate-y-[-50%]"}`}>
        <Container >
          <Link href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/123100">
            <Button className="btn-icon mt-2" color="facebook" type="button">
              <img src={size.width > 768 ? '/web/a2.png' : '/mobile/as2.png'} 
              alt="home" width={imageSize(2).width} height={imageSize(2).height} />
            </Button>  
          </Link>
        </Container>
      </div>
      <div className={`
           ${size.width > 768
            ? "w-full text-center absolute top-[72%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            : "w-full text-center absolute top-[267%] left-[50%] translate-x-[-50%] translate-y-[-50%]"}`}>
        <Container >
          <Link href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/112420">
            <Button className="btn-icon mt-2" color="facebook" type="button">
              <img src={size.width > 768 ? '/web/a3.png' : '/mobile/as3.png'} 
              alt="home" width={imageSize(3).width} height={imageSize(3).height} />
            </Button>  
          </Link>
        </Container>
      </div>

      {/* 社群連結 */}
      <div className={`
           ${size.width > 768
          ? 'text-center absolute top-[82%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
          : 'text-center absolute top-[300%]  left-[50%] translate-x-[-50%] translate-y-[-50%]'}
        `}>
        <Link href="https://www.facebook.com/moneyweekly.tw?mibextid=LQQJ4d">
          <Button className="btn-icon mt-2" color="facebook" type="button">
            <img src="/icon-FB.png" alt="facebook" width={40} height={40} />
          </Button>
        </Link>
      </div>
      <div className={`
           ${size.width > 768
          ? 'text-center absolute top-[82%] left-[46%] translate-x-[-50%] translate-y-[-50%]'
          : 'text-center absolute top-[300%]  left-[35%] translate-x-[-50%] translate-y-[-50%]'}
        `}>
        <Link href="https://lin.ee/Q0VwsSQ">
          <Button className="btn-icon mt-2" color="line" type="button">
            <img src="/icon-line.png" alt="line" width={40} height={40} />
          </Button>
        </Link>
      </div>
      <div className={`
           ${size.width > 768
          ? 'text-center absolute top-[82%] left-[54%] translate-x-[-50%] translate-y-[-50%]'
          : 'text-center absolute top-[300%]  left-[65%] translate-x-[-50%] translate-y-[-50%]'}
        `}>
        <Link href="https://instagram.com/moneyweekly.ig?igshid=MzRlODBiNWFlZA==">
          <Button className="btn-icon mt-2" color="instagram" type="button">
            <img src="/icon-ig.png" alt="instagram" width={40} height={40} />
          </Button>
        </Link>
      </div>
      </>
    )}
    </div>
  );
};

export default ScoreClient;
