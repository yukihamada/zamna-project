'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';

export default function SponsorProposalContent() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      {/* Title Card */}
      <div className="bg-gradient-to-r from-purple-800/60 to-indigo-800/60 p-10 rounded-2xl shadow-lg relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-lg">
          Zamna Hawaii 2026 <span className="text-[#ea384c]">Sponsor Proposal</span>
        </h1>
        <p className="text-center mt-4 text-gray-200 max-w-3xl mx-auto">
          5,000-capacity luxury & sustainable EDM festival sponsorship opportunity
        </p>
        <div className="absolute -top-10 -right-10 w-56 h-56 bg-pink-500 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Executive Summary */}
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          1. エグゼクティブサマリー
        </h2>
        <p className="text-gray-200 leading-relaxed">
          南国ハワイの都市型ロケーションで開催する EDM フェスティバル <strong>"Zamna Hawaii 2026"</strong>。5,000 人規模のプレミアム体験を通じ、ラグジュアリーかつサステナブルなブランド価値を企業パートナーと共創します。Founding / Carbon など 6 段階のスポンサーティアを用意し、会場・デジタル・メディアを横断した 360° アクティベーションを提供します。
        </p>
      </section>

      {/* Zamna Stats */}
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          2. Zamna 概要
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-white/10 text-gray-200">
                <th className="px-4 py-2 font-semibold">指標</th>
                <th className="px-4 py-2 font-semibold">実績</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-gray-300">
              <tr><td className="px-4 py-2">累計動員</td><td className="px-4 py-2 font-bold">850,000+</td></tr>
              <tr className="bg-white/5">
                <td className="px-4 py-2">開催大陸</td><td className="px-4 py-2">5 大陸</td>
              </tr>
              <tr><td className="px-4 py-2">SNS リーチ</td><td className="px-4 py-2 font-bold">150M+</td></tr>
              <tr className="bg-white/5"><td className="px-4 py-2">平均客単価</td><td className="px-4 py-2">USD 180</td></tr>
              <tr><td className="px-4 py-2">コアバリュー</td><td className="px-4 py-2">High‑end / Immersive / Sustainable</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <h2>表紙</h2>
      <ul>
        <li><strong>タイトル例</strong>: "Zamna Hawaii 2026 — Founding / Carbon Tier Sponsorship Proposal"</li>
        <li><strong>提出日</strong>: 2026年 4月 20日</li>
        <li><strong>提出先</strong>: &lt;スポンサー企業名&gt;</li>
        <li><strong>提出者</strong>: Zamna Hawaii 運営事務局</li>
        <li><strong>機密性表示</strong>: CONFIDENTIAL — Do not distribute</li>
      </ul>
      <hr />

      <h2>1. エグゼクティブサマリー</h2>
      <p>
        南国ハワイの都市型ロケーションで開催する EDM フェスティバル "<strong>Zamna Hawaii 2026</strong>"。
        5,000 人規模のプレミアム体験を通じ、ラグジュアリーかつサステナブルなブランド価値を企業パートナーと共創します。
        Founding / Carbon など 6 段階のスポンサーティアを用意し、会場・デジタル・メディアを横断した 360° アクティベーションを提供します。
      </p>
      <hr />

      <h2>2. Zamna 概要</h2>
      <table>
        <thead>
          <tr><th>指標</th><th>実績</th></tr>
        </thead>
        <tbody>
          <tr><td>累計動員</td><td><strong>850,000+</strong> 名</td></tr>
          <tr><td>開催大陸</td><td>5 大陸</td></tr>
          <tr><td>SNS リーチ</td><td><strong>150 M+</strong>（年間）</td></tr>
          <tr><td>平均客単価</td><td>USD 180</td></tr>
          <tr><td>コアバリュー</td><td>High‑end / Immersive / Sustainable</td></tr>
        </tbody>
      </table>
      <hr />

      <h2>3. Zamna Hawaii 2026 概要</h2>
      <table>
        <thead>
          <tr><th>項目</th><th>内容</th></tr>
        </thead>
        <tbody>
          <tr><td>開催日</td><td><strong>2026 年 10 月 3 日（土）– 10 月 4 日（日）</strong></td></tr>
          <tr><td>会場</td><td><strong>Kakaʻako Waterfront Park</strong>（オーシャンフロント 11 acre）</td></tr>
          <tr><td>目標動員</td><td><strong>5,000 名</strong>（1 日あたり 2,500 名）</td></tr>
          <tr><td>コンセプト</td><td>"Island‑tech Eden" — 南国と最新テクノロジーの融合</td></tr>
          <tr><td>特徴</td><td>カーボンニュートラル運営／RFID キャッシュレス／NFT 記念パス</td></tr>
        </tbody>
      </table>
      <hr />

      <h2>4. 参加者プロファイル（推定）</h2>
      <table>
        <thead>
          <tr><th>指標</th><th>値</th></tr>
        </thead>
        <tbody>
          <tr><td>年齢分布</td><td>21–45 歳（中央値 29）</td></tr>
          <tr><td>国籍比率</td><td>日本 35 % / 米国 25 % / 豪州 15 % / 他 25 %</td></tr>
          <tr><td>世帯年収中央値</td><td>USD 80 k</td></tr>
          <tr><td>興味関心</td><td>EDM / 旅行 / テクノロジー / ライフスタイルラグジュアリー</td></tr>
        </tbody>
      </table>
      <hr />

      <h2>5. スポンサーシップパッケージ</h2>
      <h3>5.1 ティア一覧（料金・枠数）</h3>
      <table>
        <thead>
          <tr><th>ティア</th><th>費用（税込）</th><th>枠数</th><th>主な権利例</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Founding Partner</strong></td><td><strong>USD 300 k / ¥45 M</strong></td><td>1</td><td>共同冠・ステージ命名・カテゴリ独占</td></tr>
          <tr><td><strong>Carbon Partner</strong></td><td><strong>USD 160 k / ¥24 M</strong></td><td>2</td><td>サステナビリティ冠・カーボンオフセット共同施策</td></tr>
          <tr><td>Platinum</td><td>USD 80 k / ¥12 M</td><td>3</td><td>メインステージ LED 露出大・VIP ホスピタリティ</td></tr>
          <tr><td>Gold</td><td>USD 40 k / ¥6 M</td><td>5</td><td>会場サイン・メディア露出</td></tr>
          <tr><td>Silver</td><td>USD 20 k / ¥3 M</td><td>8</td><td>デジタル＆印刷物ロゴ掲出</td></tr>
          <tr><td>Bronze / Community</td><td>USD 10 k / ¥1.5 M</td><td>10</td><td>ウェブサイトロゴ・SNS Shout‑out</td></tr>
        </tbody>
      </table>
      <blockquote>
        <p><strong>ROI の目安</strong>: 来場者 1 人あたり平均接触回数 11 回、オンラインインプレッション 2 M / ティア（Foundingの場合）</p>
      </blockquote>

      <h3>5.2 ティア別詳細抜粋</h3>
      <h4>Founding Partner</h4>
      <ul>
        <li>"Zamna Hawaii 2026 presented by &lt;Sponsor&gt;" 表記権</li>
        <li>メインステージ命名権 & キービジュアル最上位ロゴ</li>
        <li>VIP ラウンジ 200 m² フルブランディング</li>
        <li>バックステージ & アーティストエリアアクセス <strong>20 名</strong></li>
        <li>GA <strong>200 枚</strong> + VIP <strong>50 枚</strong> 提供</li>
        <li>リベニューシェア 2 %（チケット純売上）オプション</li>
      </ul>

      <h4>Carbon Partner（各社 1 枠）</h4>
      <ul>
        <li>"Carbon Neutral Lounge powered by &lt;Sponsor&gt;" ラウンジ命名</li>
        <li>グリーンテック展示スペース <strong>30 m²</strong></li>
        <li>CO₂ オフセット証明書共同発行（目標削減 <strong>20 t</strong>）</li>
        <li>VIP <strong>30 枚</strong>、GA <strong>100 枚</strong></li>
      </ul>
      <p>*Platinum / Gold / Silver / Bronze 詳細は別紙参照*</p>

      <h3>5.3 チケット & ホスピタリティバンドル</h3>
      <table>
        <thead>
          <tr><th>ティア</th><th>VIP Pass</th><th>GA Pass</th><th>Backstage</th><th>ホテルパッケージ</th></tr>
        </thead>
        <tbody>
          <tr><td>Founding</td><td><strong>50</strong></td><td><strong>200</strong></td><td><strong>20</strong></td><td>20 rooms</td></tr>
          <tr><td>Carbon</td><td>30</td><td>100</td><td>10</td><td>10 rooms</td></tr>
          <tr><td>Platinum</td><td>12</td><td>60</td><td>6</td><td>5 rooms</td></tr>
          <tr><td>Gold</td><td>6</td><td>30</td><td>—</td><td>2 rooms</td></tr>
          <tr><td>Silver</td><td>—</td><td>10</td><td>—</td><td>—</td></tr>
          <tr><td>Bronze</td><td>—</td><td>6</td><td>—</td><td>—</td></tr>
        </tbody>
      </table>
      <hr />

      <h2>6. メディア & マーケティング計画（抜粋）</h2>
      <table>
        <thead>
          <tr><th>項目</th><th>指標</th></tr>
        </thead>
        <tbody>
          <tr><td>広告投下予算</td><td>USD 150 k</td></tr>
          <tr><td>SNS Imp</td><td><strong>30 M</strong> 目標（CPM USD 5 前提）</td></tr>
          <tr><td>PR リーチ</td><td>25 媒体／累計リーチ 12 M</td></tr>
          <tr><td>オンラインストリーミング視聴者</td><td>100 k+</td></tr>
          <tr><td>ハッシュタグ</td><td>#ZamnaHawaii2026</td></tr>
        </tbody>
      </table>
      <hr />

      <h2>7. 成果測定 & 報告</h2>
      <ul>
        <li><strong>主要 KPI</strong>: 来場 5,000 名達成 / SNS エンゲージメント 250 k / CO₂ 削減 20 t</li>
        <li>イベント後 <strong>30 日以内</strong> に PDF 報告書 & KPI ダッシュボードを共有</li>
      </ul>
      <hr />

      <h2>8. 投資額サマリー（抜粋）</h2>
      <table>
        <thead>
          <tr><th>ティア</th><th>枠数</th><th>料金（USD）</th><th>料金（JPY）</th><th>空き状況</th></tr>
        </thead>
        <tbody>
          <tr><td>Founding</td><td>1</td><td>300 k</td><td>45 M</td><td><strong>OPEN</strong></td></tr>
          <tr><td>Carbon</td><td>2</td><td>160 k</td><td>24 M</td><td>OPEN (2)</td></tr>
          <tr><td>Platinum</td><td>3</td><td>80 k</td><td>12 M</td><td>OPEN (3)</td></tr>
          <tr><td>Gold</td><td>5</td><td>40 k</td><td>6 M</td><td>OPEN (5)</td></tr>
          <tr><td>Silver</td><td>8</td><td>20 k</td><td>3 M</td><td>OPEN (8)</td></tr>
          <tr><td>Bronze</td><td>10</td><td>10 k</td><td>1.5 M</td><td>OPEN (10)</td></tr>
        </tbody>
      </table>
      <hr />

      <h2>9. タイムライン & 次のステップ</h2>
      <ol>
        <li><strong>意向表明</strong>: 2026 年 4 月 10 日 まで</li>
        <li><strong>LOI 締結</strong>: 2026 年 5 月 10 日 まで</li>
        <li><strong>クリエイティブ最終入稿</strong>: 2026 年 8 月 20 日</li>
        <li><strong>イベント実施</strong>: 2026 年 10 月 3 –4 日</li>
        <li><strong>成果報告書提出</strong>: 2026 年 11 月 3 日</li>
      </ol>
      <hr />

      <h2>10. お問い合わせ</h2>
      <address className="not-italic leading-relaxed">
        Zamna Hawaii Sponsorship Office
        <br />担当: Yuki Hamada
        <br />Email: <a href="mailto:sponsors@zamna‑hawaii.com" className="text-blue-600">sponsors@zamna‑hawaii.com</a>
        <br />Tel: <a href="tel:+1‑808‑555‑0123" className="text-blue-600">+1‑808‑555‑0123</a>
        <br />住所: 1001 Bishop St, Honolulu, HI
      </address>
    </div>
  );
} 