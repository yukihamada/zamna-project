'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';
import PDFDownloadButton from '@/app/components/PDFDownloadButton';
import Image from 'next/image';

export default function VenueComparisonContent() {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          {language === 'en' ? 'Venue Comparison for Zamna Hawaii 2026' : 'Zamna Hawaii 2026 会場比較'}
        </h1>
        <PDFDownloadButton 
          contentId="venue-comparison-content" 
          fileName={language === 'en' ? 'Venue_Comparison_Zamna_Hawaii_2026' : 'Zamna_Hawaii_2026_会場比較'}
        />
      </div>

      <div id="venue-comparison-content" className="prose prose-invert max-w-none">
        {language === 'en' ? (
          <>
            <h1>Venue Comparison for Zamna Hawaii 2026</h1>
            
            <p>Here are four Oʻahu venues that regularly host ticketed concerts and can scale to different audience sizes for a Zamna-style event:</p>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th>Venue</th>
                    <th>Typical "Comfort" Capacity*</th>
                    <th>Max Tested</th>
                    <th>Vibe & Pros</th>
                    <th>Watch-outs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Kakaʻako Waterfront Park</strong> (Honolulu)</td>
                    <td>3 – 6k (fenced lawn layouts)</td>
                    <td>~7k (multi-stage festivals)</td>
                    <td>Ocean-front cityscape, 35-acre open grass, HCDA managed with streamlined permitting. Many warehouse-style after-party venues within walking distance.</td>
                    <td>Minimal infrastructure, higher temporary setup costs. Noise monitoring required though residential areas are limited.</td>
                  </tr>
                  <tr>
                    <td><strong>Waikīkī Shell</strong> (Kapiʻolani Park)</td>
                    <td>2.4k seats + 6k lawn = <strong>8.4k</strong> total</td>
                    <td>Full capacity for sold-out shows like Jack Johnson</td>
                    <td>Semi-dome with excellent acoustics, fixed stage/seating, chill lawn area. Beautiful silhouettes of Diamond Head and the moon.</td>
                    <td>Lawn has gentle slope with good visibility but gets muddy in rain. City management with stricter alcohol restrictions.</td>
                  </tr>
                  <tr>
                    <td><strong>Bishop Museum Great Lawn</strong> (Kalihi)</td>
                    <td>3 – 4k</td>
                    <td><strong>5k</strong> (Beer Fest/HIFF events)</td>
                    <td>Unique stone backdrop of the historic Hawaiian Hall. High compatibility with cultural programming.</td>
                    <td>Nearby residential areas require sound cutoff by 10pm, limited parking requires shuttle service.</td>
                  </tr>
                  <tr>
                    <td><strong>Hawaiʻi Convention Center – Exhibit Hall + Rooftop Garden</strong></td>
                    <td>7 – 10k (200k sq ft flexible space)</td>
                    <td>12k (e-sports/faith rallies)</td>
                    <td>Indoor venue eliminates noise and weather risks. Air-conditioned, with sunset sessions possible on the rooftop garden.</td>
                    <td>Highest rental fees, requires extensive decoration to create outdoor festival atmosphere.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p><em>*"Comfort" = recommended capacity with adequate circulation, food & toilets, and safety distances. Maximum values based on past events.</em></p>

            <h2>Decision Guidelines</h2>

            <ol>
              <li>
                <strong>Starting with 5k capacity → Kakaʻako Waterfront or Bishop Museum</strong>
                <ul>
                  <li>Already have streamlined permitting through HCDA/HCDA+City</li>
                  <li>Grass areas require higher temporary setup costs for stages and fencing, but allow for authentic outdoor rave atmosphere</li>
                </ul>
              </li>
              <li>
                <strong>Expansion potential to 8k → Waikīkī Shell</strong>
                <ul>
                  <li>Fixed infrastructure reduces setup costs. Brand power and scenery excellent for sponsors.</li>
                  <li>Early date securing essential (competes with city cultural events)</li>
                </ul>
              </li>
              <li>
                <strong>Weather insurance & 10k+ target → Hawaiʻi Convention Center</strong>
                <ul>
                  <li>Hybrid indoor + rooftop garden setup for all-weather operation</li>
                  <li>Highest cost, but potential for late-night operation until 3am if proper zoning secured</li>
                </ul>
              </li>
            </ol>

            <h2>Next Steps</h2>

            <ul>
              <li><strong>Feasibility estimates</strong>: Calculate rental fees + temporary setup costs for each venue</li>
              <li><strong>Tentative date holds</strong>: Especially for Waikīkī Shell which books up to a year in advance</li>
              <li><strong>Preliminary noise measurement/traffic plans</strong>: Anticipate key risks for each site and align with sponsor proposals</li>
            </ul>

            <p>Based on the reference images, we recommend proceeding with Kakaʻako Waterfront Park as the main option for HCDA application, with Waikīkī Shell as an expansion option, focusing on "5k scale + oceanfront location".</p>

            <div className="grid grid-cols-2 gap-4 my-8">
              <div>
                <h3>Kakaʻako Waterfront Park</h3>
                <div className="relative h-64 w-full">
                  <Image 
                    src="/images/kakaako-waterfront.jpg" 
                    alt="Kakaʻako Waterfront Park" 
                    fill 
                    style={{objectFit: "cover"}} 
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div>
                <h3>Waikīkī Shell</h3>
                <div className="relative h-64 w-full">
                  <Image 
                    src="/images/waikiki-shell.jpg" 
                    alt="Waikīkī Shell" 
                    fill 
                    style={{objectFit: "cover"}} 
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div>
                <h3>Bishop Museum Great Lawn</h3>
                <div className="relative h-64 w-full">
                  <Image 
                    src="/images/bishop-museum.jpg" 
                    alt="Bishop Museum Great Lawn" 
                    fill 
                    style={{objectFit: "cover"}} 
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div>
                <h3>Hawaiʻi Convention Center</h3>
                <div className="relative h-64 w-full">
                  <Image 
                    src="/images/hawaii-convention-center.jpg" 
                    alt="Hawaiʻi Convention Center" 
                    fill 
                    style={{objectFit: "cover"}} 
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1>Zamna Hawaii 2026 会場比較</h1>
            
            <p>Zamnaスタイルのイベントに対応可能な、異なる観客規模に対応できるオアフ島の4つの会場を紹介します：</p>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th>会場</th>
                    <th>一般的な「快適」収容人数*</th>
                    <th>最大実績</th>
                    <th>雰囲気とメリット</th>
                    <th>注意点</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>カカアコ・ウォーターフロント・パーク</strong>（ホノルル）</td>
                    <td>3～6千人（フェンスで区切った芝生レイアウト）</td>
                    <td>約7千人（マルチステージフェスティバル）</td>
                    <td>海に面した都市景観、35エーカーの開けた芝生、HCDA管理で許認可が一本化。徒歩圏に倉庫系アフターパーティ会場も多い。</td>
                    <td>インフラ最小・仮設コスト↑。騒音は住宅少ないが測定義務あり。</td>
                  </tr>
                  <tr>
                    <td><strong>ワイキキ・シェル</strong>（カピオラニ・パーク）</td>
                    <td>2.4千座席＋6千芝生＝<strong>8.4千</strong>合計</td>
                    <td>ジャック・ジョンソン等のソールドアウト公演でフル</td>
                    <td>半ドーム型音響◎・固定ステージ/座席完備、芝生でチル。ダイヤモンドヘッドと月のシルエット映え。</td>
                    <td>芝生は傾斜が緩く視界○だが雨天でぬかるむ。市管理なのでアルコール制限厳しめ。</td>
                  </tr>
                  <tr>
                    <td><strong>ビショップ・ミュージアム・グレート・ローン</strong>（カリヒ）</td>
                    <td>3～4千人</td>
                    <td><strong>5千人</strong>（ビールフェスト/HIFF実績）</td>
                    <td>歴史的ハワイアンホールの石造バックドロップが唯一無二。文化プログラムと親和性高。</td>
                    <td>近隣住宅あり22時音止め必須、駐車台数少なくシャトル推奨。</td>
                  </tr>
                  <tr>
                    <td><strong>ハワイ・コンベンション・センター – 展示ホール＋屋上庭園</strong></td>
                    <td>7～10千人（20万平方フィート可動空間）</td>
                    <td>12千人（eスポーツ/信仰集会）</td>
                    <td>屋内なので騒音・天候リスク0。冷房完備、屋上ガーデンでサンセットセッションも可。</td>
                    <td>レンタル料が最高値、屋外フェス感を出すにはデコ必須。</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p><em>*「快適」＝十分な動線・フード＆トイレ・安全距離をとった推奨人数。最大値は過去実績ベース。</em></p>

            <h2>決定指針</h2>

            <ol>
              <li>
                <strong>5千人想定でスタート → カカアコ・ウォーターフロントまたはビショップ・ミュージアム</strong>
                <ul>
                  <li>既にHCDA/HCDA＋市 = ワンストップ許可で比較的スムーズ</li>
                  <li>草地メインなのでステージ・フェンスなど仮設費はかかるが、Zamnaらしい野外レイブ感が出しやすい</li>
                </ul>
              </li>
              <li>
                <strong>8千人まで拡張余地 → ワイキキ・シェル</strong>
                <ul>
                  <li>固定インフラ完備で設営コスト↓。ブランドパワーと景観でスポンサー受け◎</li>
                  <li>日程確保は早め必須（市の文化行事と競合）</li>
                </ul>
              </li>
              <li>
                <strong>雨天保証 & 1万人超ターゲット → ハワイ・コンベンション・センター</strong>
                <ul>
                  <li>インドア＋屋上ガーデンのハイブリッド演出で全天候型</li>
                  <li>コストは最高だが、深夜3時まで音出し可能ゾーニングを確保できればオールナイト路線も</li>
                </ul>
              </li>
            </ol>

            <h2>次のステップ</h2>

            <ul>
              <li><strong>フィジビリティ見積もり</strong>：各会場でのレンタル料＋仮設費を概算</li>
              <li><strong>暫定日程ホールド</strong>：特にワイキキ・シェルは1年先まで埋まることが多い</li>
              <li><strong>騒音測定／交通計画ラフ</strong>：候補地ごとに主要リスクを先取りし、スポンサー提案書と整合</li>
            </ul>

            <p>写真イメージを参考に、まずは「5千人規模＋海沿いロケーション」を軸にカカアコ・ウォーターフロント・パークをHCDA申請書のメイン案、ワイキキ・シェルを拡張オプションとして抑える流れが最短です。</p>

            <div className="grid grid-cols-2 gap-4 my-8">
              <div>
                <h3>カカアコ・ウォーターフロント・パーク</h3>
                <div className="relative h-64 w-full">
                  <Image 
                    src="/images/kakaako-waterfront.jpg" 
                    alt="カカアコ・ウォーターフロント・パーク" 
                    fill 
                    style={{objectFit: "cover"}} 
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div>
                <h3>ワイキキ・シェル</h3>
                <div className="relative h-64 w-full">
                  <Image 
                    src="/images/waikiki-shell.jpg" 
                    alt="ワイキキ・シェル" 
                    fill 
                    style={{objectFit: "cover"}} 
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div>
                <h3>ビショップ・ミュージアム・グレート・ローン</h3>
                <div className="relative h-64 w-full">
                  <Image 
                    src="/images/bishop-museum.jpg" 
                    alt="ビショップ・ミュージアム・グレート・ローン" 
                    fill 
                    style={{objectFit: "cover"}} 
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div>
                <h3>ハワイ・コンベンション・センター</h3>
                <div className="relative h-64 w-full">
                  <Image 
                    src="/images/hawaii-convention-center.jpg" 
                    alt="ハワイ・コンベンション・センター" 
                    fill 
                    style={{objectFit: "cover"}} 
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}