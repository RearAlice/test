import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import {Seo} from "../components/seo"

const AboutPage = () => (
  <Layout>
    <div className="container  my-5">

      <div className="container text-center">
      <StaticImage
            src="../images/title_about.png"
            width={252}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="About"
            className="img-fluid"
          />
        <p>
        「TikChoco Online」は、異世界で自由に生活できるサンドボックスオンラインゲームです。<br>
        </br>
        「TikChoco Online」の特徴は「基本無料でプレイ」、「魔法システム」があります。

        </p>
        <h2 className="fw-light">基本プレイ無料でずっと遊べる</h2>
        <p>
        基本プレイ無料の「TikChoco Online」では月額や定額の基本料金が必要ありません。<br></br>だからずっと無料でプレイすることが可能です。<br></br>
        （一部土地を買うなど有料アイテムを購入することもあります）　<br></br>お金や時間を気にすることなく、自分のスタイルでプレイを続けていけるのです。
        </p>
        <h2 className="fw-light">魔法システム</h2>
        <p>
        TikChoco Onlineの世界には、空気・大地・火炎・水・ネクロマンシーの5種類の魔法が存在する。<br></br>
        これらの魔法は、「効果」「形態」「調整」といった魔法を組み合わせて生成できます。<br></br>
        魔法の組み合わせによって、「敵にダメージを与える」「対象を強化する」「モンスターを召喚する」など、魔法の効果は変化する。試行錯誤を重ねて、理想の魔法を生成しよう。
        </p>
      </div>
      <Link to="/">トップへ</Link>
    </div>
  </Layout>
)

export default AboutPage

export const Head = () => (
    <Seo  />
)