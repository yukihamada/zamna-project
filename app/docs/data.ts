export interface Doc {
  slug: string;
  category: string;
  title: string;
  target: string;
  description: string;
}

export const docs: Doc[] = [
  { slug: 'business-plan', category: '企画・資金', title: '最新ビジネスプラン／P&Lサマリー', target: '社内稟議・スポンサー説明', description: 'イベント全体のビジネスプランと損益計算をサマリー形式で掲載しています。'},
  { slug: 'sponsor-proposal', category: '企画・資金', title: 'スポンサー提案書（Founding／Carbon Tier 等）', target: '企業スポンサー', description: '企業スポンサー向け提案書テンプレート。'},
  { slug: 'hta-grant', category: '企画・資金', title: 'HTA 補助金申請フォーム', target: 'HTA', description: 'ハワイ州観光局への補助金申請に使用するフォームです。'},
  { slug: 'site-plan', category: '会場・構造', title: 'Site Plan CAD／PDF（最終レイアウト）', target: 'HCDA・消防', description: '会場最終レイアウト図面 CAD / PDF。'},
  { slug: 'utilities-plan', category: '会場・構造', title: '電源・配線・トイレ／ゴミ配置図', target: 'HCDA・消防・DOH', description: '電源、配線、トイレ、ゴミステーションの配置図です。'},
  { slug: 'structure-engineering', category: '会場・構造', title: '構造エンジニアリング図（トラス荷重計算付き）', target: 'HCDA', description: 'ステージトラス構造計算書を含む図面セット。'},
  { slug: 'cover-letter', category: '許可申請セット', title: 'Cover Letter（英語）', target: 'HCDA', description: 'HCDA 提出用カバーレター。'},
  { slug: 'hcda-permit', category: '許可申請セット', title: 'HCDA Commercial Event Permit 申請書', target: 'HCDA', description: 'HCDA 商業イベント許可申請書。'},
  { slug: 'crowd-fire-plan', category: '許可申請セット', title: 'Crowd & Fire Safety Plan', target: 'Honolulu Fire Dept.', description: '群集および消防安全計画。'},
  { slug: 'noise-plan', category: '許可申請セット', title: 'Noise Mitigation Plan', target: 'DOH (Noise Variance)', description: '騒音対策プラン。'},
  { slug: 'liquor-plan', category: '許可申請セット', title: 'Liquor Service Plan', target: 'Liquor Commission', description: '酒類提供計画。'},
  { slug: 'food-permit', category: '許可申請セット', title: 'Temporary Food Establishment 申請＋ベンダー一覧', target: 'DOH (Food Safety)', description: '一時食品営業許可申請書とベンダー一覧。'},
  { slug: 'insurance-certificate', category: '保険・契約', title: 'Insurance Certificate（GL 10 M／Liquor 5 M）', target: 'すべての許可添付', description: '保険証書（一般 10M / 酒類 5M）。'},
  { slug: 'vendor-mou', category: '保険・契約', title: 'ベンダー MOUs／見積書（LED・ドローン等）', target: '契約管理', description: '主要ベンダーとの MOU および見積書。'},
  { slug: 'artist-contract', category: '保険・契約', title: 'アーティスト契約書（Peggy Gou 等）', target: 'ギャランティ支払い', description: 'アーティストとの出演契約書。'},
  { slug: 'staff-handbook', category: '運営', title: 'Staff Handbook（スタッフマニュアル）', target: 'スタッフ教育', description: 'イベントスタッフ向けの総合マニュアル。'},
  { slug: 'security-roster', category: '運営', title: 'Security & Medical Roster（スタッフ名簿）', target: '消防・警備当局', description: '警備および医療スタッフ名簿。'},
  { slug: 'traffic-plan', category: '運営', title: 'Traffic / Shuttle Plan（TIA 抜粋）', target: 'HPD／HCDA', description: '交通・シャトル計画。'},
  { slug: 'rehearsal-check', category: '運営', title: 'Rehearsal Checklist & Tech Schedule', target: 'オペレーション管理', description: 'リハーサルチェックリストとテックスケジュール。'},
  { slug: 'safety-plan', category: '運営', title: 'Safety Plan（安全計画）', target: '全スタッフ', description: 'イベント全体の安全計画と緊急時対応マニュアル。'},
  { slug: 'waste-contract', category: '環境・リサイクル', title: 'Waste & Recycling Contract＋90%目標書', target: 'HCDA・DOH', description: '廃棄物契約および 90% リサイクル目標書。'},
  { slug: 'green-cert', category: '環境・リサイクル', title: 'Green Event 認証申請書／Carbon Offset 証明', target: 'HTA・スポンサーPR', description: 'グリーンイベント認証申請とカーボンオフセット証明。'},
  { slug: 'post-report', category: '事後', title: 'Post‑Event Report（実施報告・来場実数）', target: 'HCDA・HTA', description: 'イベント実施報告書と来場者数。'},
  { slug: 'recycle-rate', category: '事後', title: 'リサイクル率レポート', target: 'HCDA／DOH', description: 'リサイクル率レポート。'},
  { slug: 'dp-sheet', category: '事後', title: 'DP（Distributable Profit）計算シート', target: 'Zamna & HD', description: '利益分配計算シート。'},
]; 