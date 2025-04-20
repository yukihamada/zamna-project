'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';
import PDFDownloadButton from '@/app/components/PDFDownloadButton';

export default function ArtistContractContent() {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          {language === 'en' ? 'Artist Performance Agreement (Template)' : 'アーティスト契約書（テンプレート）'}
        </h1>
        <PDFDownloadButton 
          contentId="artist-contract-content" 
          fileName={language === 'en' ? 'Artist_Performance_Agreement_Template' : 'アーティスト契約書_テンプレート'}
        />
      </div>

      <div id="artist-contract-content" className="prose prose-invert max-w-none">
        {language === 'en' ? (
          <>
            <h1>ARTIST PERFORMANCE AGREEMENT (Template)</h1>

            <p><strong>This Performance Agreement (the &ldquo;Agreement&rdquo;)</strong> is made and entered into as of the <strong>___ day of __________ 202__</strong> (&ldquo;Effective Date&rdquo;) by and between:</p>

            <h2>1. PROMOTER / PURCHASER</h2>
            <p>
              Zamna Hawaii LLC (&ldquo;Promoter&rdquo;)<br />
              1001 Bishop St, Honolulu, HI 96813<br />
              Representative: ______________________<br />
              Email: contracts@zamna‑hawaii.com
            </p>

            <h2>2. ARTIST</h2>
            <p>
              Legal Name / Entity: ______________________ (&ldquo;Artist&rdquo;)<br />
              Representative / Agent: ______________________<br />
              Address: ______________________<br />
              Email: ______________________
            </p>

            <p>The parties hereby agree as follows:</p>

            <hr />

            <h2>1. ENGAGEMENT & PERFORMANCE</h2>
            <p>1.1 <em>Engagement.</em> Promoter engages Artist to perform a live music set (&ldquo;Performance&rdquo;) at <strong>Zamna Hawaii 2026</strong> and Artist accepts such engagement under the terms herein.</p>
            <p>1.2 <em>Date & Time.</em> Primary date: <strong>3 October 2026</strong>, 20:00‑22:00 HST.<br />
            Backup date (weather): <strong>4 October 2026</strong> (same time).</p>
            <p>1.3 <em>Venue.</em> Kakaʻako Waterfront Park, Honolulu, Hawaiʻi.</p>
            <p>1.4 <em>Set Length.</em> ___ minutes continuous DJ/Live set.</p>
            <p>1.5 <em>Exclusivity.</em> Artist shall not perform any public show within 150 km of Honolulu from 30 days before to 7 days after the Event without Promoter&apos;s written consent.</p>

            <h2>2. COMPENSATION</h2>
            <p>2.1 <em>Performance Fee.</em> Promoter shall pay Artist <strong>USD __________</strong> (&ldquo;Fee&rdquo;) inclusive of agency commission, payable as follows:</p>
            <ul>
              <li>50 % deposit within 5 business days of contract execution;</li>
              <li>50 % balance via bank wire no later than event day sound‑check.</li>
            </ul>
            <p>2.2 <em>Reimbursement.</em> Promoter to cover agreed travel, lodging, and per‑diem outlined in Exhibit A (Rider). Any additional costs require prior written approval.</p>

            <h2>3. TRAVEL & ACCOMMODATION</h2>
            <p>3.1 Round‑trip business‑class airfare for up to ___ persons (Artist + crew).</p>
            <p>3.2 Hotel: minimum 4‑star, 2 rooms, 3 nights (Oct 2–5 2026).</p>
            <p>3.3 Ground transport: dedicated SUV/van, airport‑hotel‑venue transfers.</p>

            <h2>4. TECHNICAL & HOSPITALITY RIDER</h2>
            <p>The technical specifications and hospitality requirements set forth in <strong>Exhibit A</strong> are incorporated by reference and shall be provided at Promoter&apos;s expense.</p>

            <h2>5. PROMOTER OBLIGATIONS</h2>
            <p>5.1 Provide stage, PA, lighting, qualified FOH monitor engineers.</p>
            <p>5.2 Obtain all permits (HCDA, HPD, DOH) and carry public liability insurance of at least USD 10 million naming Artist as additional insured.</p>
            <p>5.3 Ensure on‑site security, medical services, and compliance with applicable laws.</p>

            <h2>6. ARTIST OBLIGATIONS</h2>
            <p>6.1 Arrive no later than 2 hours before Performance for sound‑check.</p>
            <p>6.2 Deliver professional performance of high artistic standard.</p>
            <p>6.3 Promote appearance on social media (minimum 1 post + 1 story) tagging @zamnahawaii.</p>

            <h2>7. CANCELLATION & FORCE MAJEURE</h2>
            <p>7.1 <em>Cancellation by Promoter.</em> If Promoter cancels for reasons other than Force Majeure, the deposit shall be retained by Artist and the balance payable immediately.</p>
            <p>7.2 <em>Cancellation by Artist.</em> If Artist cancels without Force Majeure, Artist shall refund deposit and be liable for proven direct costs up to the deposit amount.</p>
            <p>7.3 <em>Force Majeure.</em> Neither party liable for failure caused by events beyond reasonable control (e.g., act of God, pandemic, government order). Deposit refundable minus non‑recoverable expenses.</p>

            <h2>8. RECORDING & BROADCAST RIGHTS</h2>
            <p>Promoter may record, stream, and broadcast the Performance live and on‑demand for up to 12 months for promotional purposes only. Any commercial exploitation requires separate agreement and revenue share of ___ % to Artist.</p>

            <h2>9. INTELLECTUAL PROPERTY & MERCHANDISE</h2>
            <p>9.1 Artist grants Promoter the right to use Artist&apos;s name, likeness, logo in event marketing.</p>
            <p>9.2 Artist may sell official merchandise at the venue subject to 15 % commission to Promoter on gross sales (excluding tax).</p>

            <h2>10. INDEMNITY & LIABILITY</h2>
            <p>Each party agrees to indemnify the other against claims arising from its own negligence or breach. Liability cap equals Fee, except in cases of gross negligence or willful misconduct.</p>

            <h2>11. GOVERNING LAW & DISPUTE RESOLUTION</h2>
            <p>This Agreement shall be governed by the laws of the State of Hawaiʻi. Parties agree to resolve disputes by good‑faith negotiation; failing which, exclusive jurisdiction shall be Hawaiʻi state or federal courts located in Honolulu County.</p>

            <h2>12. MISCELLANEOUS</h2>
            <p>12.1 Entire Agreement supersedes all prior representations.</p>
            <p>12.2 Amendments must be in writing signed by both parties.</p>
            <p>12.3 Electronic signatures are binding.</p>

            <hr />

            <h3>SIGNATURES</h3>

            <h4>PROMOTER</h4>
            <pre>
Signature: ___________________________
Name: ___________________________
Title: ___________________________
Date: ____ / ____ / 202__
            </pre>

            <h4>ARTIST / AUTHORIZED AGENT</h4>
            <pre>
Signature: ___________________________
Name: ___________________________
Title: ___________________________
Date: ____ / ____ / 202__
            </pre>

            <hr />

            <h3>EXHIBIT A — Technical & Hospitality Rider (Sample Outline)</h3>

            <ol>
              <li><strong>DJ Gear</strong>: 4× CDJ‑3000, 1× DJM‑A9 mixer, link cables, booth monitors ×2.</li>
              <li><strong>Backline (Live Set)</strong>: See attached channel list, DI boxes, stage riser 8&apos;×8&apos;.</li>
              <li><strong>Hospitality</strong>:
                <ul>
                  <li>24× chilled still water, 12× coconut water, premium coffee setup.</li>
                  <li>Fresh fruit platter, assorted nuts, one hot vegan meal per person.</li>
                </ul>
              </li>
              <li><strong>Dressing Room</strong>: Private, air‑conditioned, wifi access, security.</li>
            </ol>

            <p><em>(Promoter to append full technical plot and input list prior to contract execution.)</em></p>
          </>
        ) : (
          <>
            <h1>アーティスト出演契約書（テンプレート）</h1>

            <p><strong>本出演契約書（以下「本契約」）</strong>は、<strong>202__年__月__日</strong>（以下「発効日」）に以下の当事者間で締結されます：</p>

            <h2>1. プロモーター / 主催者</h2>
            <p>
              Zamna Hawaii LLC（以下「プロモーター」）<br />
              1001 Bishop St, Honolulu, HI 96813<br />
              担当者: ______________________<br />
              Eメール: contracts@zamna‑hawaii.com
            </p>

            <h2>2. アーティスト</h2>
            <p>
              法人名 / 個人名: ______________________ （以下「アーティスト」）<br />
              代表者 / エージェント: ______________________<br />
              住所: ______________________<br />
              Eメール: ______________________
            </p>

            <p>当事者は以下の通り合意する：</p>

            <hr />

            <h2>1. 出演依頼およびパフォーマンス</h2>
            <p>1.1 <em>出演依頼</em>：プロモーターはアーティストに対し、<strong>Zamna Hawaii 2026</strong>でのライブ音楽セット（以下「パフォーマンス」）の実施を依頼し、アーティストは本契約の条件に基づきこれを受諾する。</p>
            <p>1.2 <em>日時</em>：主要日程：<strong>2026年10月3日</strong>、20:00〜22:00 HST<br />
            予備日（天候不良時）：<strong>2026年10月4日</strong>（同時間帯）</p>
            <p>1.3 <em>会場</em>：カカアコ・ウォーターフロント・パーク、ホノルル、ハワイ州</p>
            <p>1.4 <em>セット長</em>：___分間の連続DJ/ライブセット</p>
            <p>1.5 <em>独占条項</em>：アーティストは、プロモーターの書面による同意なしに、イベント前30日から後7日までの期間中、ホノルルから150km圏内でのパブリックショーを行わないものとする。</p>

            <h2>2. 報酬</h2>
            <p>2.1 <em>出演料</em>：プロモーターはアーティストに対し、<strong>USD __________</strong>（以下「出演料」）をエージェンシー手数料込みで以下の通り支払う：</p>
            <ul>
              <li>契約締結後5営業日以内に50%の前金</li>
              <li>イベント当日のサウンドチェック時までに50%の残金（銀行送金にて）</li>
            </ul>
            <p>2.2 <em>経費精算</em>：プロモーターは、別紙A（ライダー）に記載された旅費、宿泊費、日当を負担する。追加費用は事前の書面による承認が必要。</p>

            <h2>3. 旅行および宿泊</h2>
            <p>3.1 最大___名（アーティスト+クルー）のビジネスクラス往復航空券</p>
            <p>3.2 ホテル：最低4つ星、2部屋、3泊（2026年10月2日〜5日）</p>
            <p>3.3 地上交通：専用SUV/バン、空港-ホテル-会場間の送迎</p>

            <h2>4. 技術および接待ライダー</h2>
            <p><strong>別紙A</strong>に記載された技術仕様および接待要件は、参照により本契約に組み込まれ、プロモーターの費用負担で提供されるものとする。</p>

            <h2>5. プロモーターの義務</h2>
            <p>5.1 ステージ、PA、照明、資格を持つFOHモニターエンジニアを提供すること</p>
            <p>5.2 すべての許可（HCDA、HPD、DOH）を取得し、アーティストを追加被保険者として指名する最低1,000万米ドルの公共賠償責任保険に加入すること</p>
            <p>5.3 会場内のセキュリティ、医療サービス、および適用法令の遵守を確保すること</p>

            <h2>6. アーティストの義務</h2>
            <p>6.1 パフォーマンス開始の2時間前までにサウンドチェックのために到着すること</p>
            <p>6.2 高い芸術水準の専門的なパフォーマンスを提供すること</p>
            <p>6.3 ソーシャルメディアで出演を宣伝すること（最低1投稿+1ストーリー、@zamnahawaii をタグ付け）</p>

            <h2>7. キャンセルおよび不可抗力</h2>
            <p>7.1 <em>プロモーターによるキャンセル</em>：プロモーターが不可抗力以外の理由でキャンセルした場合、前金はアーティストが保持し、残金は直ちに支払われるものとする。</p>
            <p>7.2 <em>アーティストによるキャンセル</em>：アーティストが不可抗力なしにキャンセルした場合、前金を返金し、前金額を上限として証明された直接費用の責任を負うものとする。</p>
            <p>7.3 <em>不可抗力</em>：いずれの当事者も、合理的な制御を超えた事象（例：天災、パンデミック、政府命令）によって引き起こされた不履行について責任を負わない。前金は回収不能な費用を差し引いて返金可能。</p>

            <h2>8. 録音および放送権</h2>
            <p>プロモーターは、宣伝目的に限り、パフォーマンスを録音、ストリーミング、放送し、最大12ヶ月間オンデマンドで提供することができる。商業的利用には別途契約が必要であり、アーティストに___％の収益配分を行う。</p>

            <h2>9. 知的財産およびマーチャンダイズ</h2>
            <p>9.1 アーティストは、イベントマーケティングにおいてアーティストの名前、肖像、ロゴを使用する権利をプロモーターに付与する。</p>
            <p>9.2 アーティストは、会場で公式マーチャンダイズを販売することができ、総売上（税抜）の15％をプロモーターに手数料として支払う。</p>

            <h2>10. 補償および責任</h2>
            <p>各当事者は、自身の過失または契約違反から生じる請求に対して相手方を補償することに同意する。責任上限額は出演料と同額とするが、重大な過失または故意の不正行為の場合を除く。</p>

            <h2>11. 準拠法および紛争解決</h2>
            <p>本契約はハワイ州法に準拠する。当事者は誠実な交渉により紛争を解決することに同意し、それが失敗した場合、ホノルル郡に所在するハワイ州または連邦裁判所が専属管轄権を有する。</p>

            <h2>12. 雑則</h2>
            <p>12.1 完全合意：本契約は、すべての先行する表明に優先する。</p>
            <p>12.2 修正：両当事者が署名した書面による場合のみ有効。</p>
            <p>12.3 電子署名は拘束力を持つ。</p>

            <hr />

            <h3>署名</h3>

            <h4>プロモーター</h4>
            <pre>
署名: ___________________________
氏名: ___________________________
役職: ___________________________
日付: ____ / ____ / 202__
            </pre>

            <h4>アーティスト / 正式代理人</h4>
            <pre>
署名: ___________________________
氏名: ___________________________
役職: ___________________________
日付: ____ / ____ / 202__
            </pre>

            <hr />

            <h3>別紙A — 技術および接待ライダー（サンプル概要）</h3>

            <ol>
              <li><strong>DJ機材</strong>：CDJ-3000×4台、DJM-A9ミキサー×1台、リンクケーブル、ブースモニター×2台</li>
              <li><strong>バックライン（ライブセット）</strong>：添付のチャンネルリスト、DIボックス、8&apos;×8&apos;のステージライザーを参照</li>
              <li><strong>接待</strong>：
                <ul>
                  <li>冷やした水24本、ココナッツウォーター12本、プレミアムコーヒーセットアップ</li>
                  <li>フレッシュフルーツプラッター、各種ナッツ、一人あたり温かいビーガン食一食</li>
                </ul>
              </li>
              <li><strong>楽屋</strong>：プライベート、空調完備、WiFiアクセス、セキュリティ</li>
            </ol>

            <p><em>（プロモーターは契約締結前に完全な技術プロットと入力リストを添付すること）</em></p>
          </>
        )}
      </div>
    </div>
  );
}