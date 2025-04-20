'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';

export default function StaffHandbookContent() {
  const { language } = useLanguage();

  return (
    <div className="space-y-8 prose prose-invert max-w-none">
      <div className="bg-gradient-to-r from-purple-800/70 to-blue-700/70 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {language === 'en' ? 'ZAMNA HAWAII 2026 STAFF HANDBOOK' : 'ZAMNA HAWAII 2026 スタッフハンドブック'}
        </h1>
        <p className="text-center text-lg opacity-90">
          {language === 'en' 
            ? 'Confidential - For Staff Use Only' 
            : '機密 - スタッフ専用'}
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Welcome Message' : 'ようこそメッセージ'}
        </h2>
        <p>
          {language === 'en'
            ? 'Welcome to the ZAMNA Hawaii 2026 team! This handbook contains essential information to help you perform your role effectively and ensure the success of our event. Please read it thoroughly and keep it with you during the festival.'
            : 'ZAMNA Hawaii 2026チームへようこそ！このハンドブックには、あなたの役割を効果的に遂行し、イベントの成功を確実にするための重要な情報が含まれています。内容をよく読み、フェスティバル中は常に携帯してください。'}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Event Overview' : 'イベント概要'}
        </h2>
        <ul className="space-y-2">
          <li><strong>{language === 'en' ? 'Date:' : '日付：'}</strong> {language === 'en' ? 'October 3, 2026 (Backup: October 4, 2026)' : '2026年10月3日（予備日：2026年10月4日）'}</li>
          <li><strong>{language === 'en' ? 'Location:' : '場所：'}</strong> {language === 'en' ? 'Kakaʻako Waterfront Park, Honolulu, Hawaii' : 'カカアコ・ウォーターフロント・パーク、ホノルル、ハワイ'}</li>
          <li><strong>{language === 'en' ? 'Hours:' : '時間：'}</strong> {language === 'en' ? '2:00 PM - 10:00 PM (Gates open at 1:00 PM for VIP)' : '午後2時〜午後10時（VIP入場は午後1時から）'}</li>
          <li><strong>{language === 'en' ? 'Expected Attendance:' : '予想来場者数：'}</strong> 5,000</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Staff Check-in Procedures' : 'スタッフチェックイン手順'}
        </h2>
        <ol className="space-y-3">
          <li>
            <strong>{language === 'en' ? 'Location:' : '場所：'}</strong> {language === 'en' ? 'Staff Entrance (South Side of Park)' : 'スタッフ入口（公園南側）'}
          </li>
          <li>
            <strong>{language === 'en' ? 'Check-in Times:' : 'チェックイン時間：'}</strong><br />
            {language === 'en' ? 'Setup Crew: 6:00 AM' : 'セットアップクルー：午前6時'}<br />
            {language === 'en' ? 'Security & Medical: 10:00 AM' : 'セキュリティ＆医療：午前10時'}<br />
            {language === 'en' ? 'General Staff: 11:00 AM' : '一般スタッフ：午前11時'}<br />
            {language === 'en' ? 'Vendors: 10:00 AM' : 'ベンダー：午前10時'}
          </li>
          <li>
            <strong>{language === 'en' ? 'Required Items:' : '必要なもの：'}</strong><br />
            - {language === 'en' ? 'Government-issued photo ID' : '政府発行の写真付き身分証明書'}<br />
            - {language === 'en' ? 'Staff credential (will be issued at check-in)' : 'スタッフ認証（チェックイン時に発行）'}<br />
            - {language === 'en' ? 'Department-specific uniform (if applicable)' : '部門別ユニフォーム（該当する場合）'}
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Communication Protocols' : 'コミュニケーションプロトコル'}
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Radio Channels' : '無線チャンネル'}
            </h3>
            <ul className="list-disc pl-6">
              <li><strong>Channel 1:</strong> {language === 'en' ? 'Command / Emergency' : 'コマンド／緊急'}</li>
              <li><strong>Channel 2:</strong> {language === 'en' ? 'Security' : 'セキュリティ'}</li>
              <li><strong>Channel 3:</strong> {language === 'en' ? 'Medical' : '医療'}</li>
              <li><strong>Channel 4:</strong> {language === 'en' ? 'Production' : 'プロダクション'}</li>
              <li><strong>Channel 5:</strong> {language === 'en' ? 'Guest Services' : 'ゲストサービス'}</li>
              <li><strong>Channel 6:</strong> {language === 'en' ? 'F&B / Vendors' : 'フード＆ドリンク／ベンダー'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Radio Etiquette' : '無線エチケット'}
            </h3>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'Begin transmissions with your name and department' : '通信は名前と部署から始める'}</li>
              <li>{language === 'en' ? 'Keep communications brief and clear' : '通信は簡潔かつ明確に'}</li>
              <li>{language === 'en' ? 'Acknowledge all transmissions directed to you' : 'あなた宛ての通信はすべて確認する'}</li>
              <li>{language === 'en' ? 'Reserve Channel 1 for emergencies only' : 'チャンネル1は緊急時のみ使用'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Emergency Codes' : '緊急コード'}
            </h3>
            <ul className="list-disc pl-6">
              <li><strong>Code Red:</strong> {language === 'en' ? 'Fire emergency' : '火災緊急事態'}</li>
              <li><strong>Code Blue:</strong> {language === 'en' ? 'Medical emergency' : '医療緊急事態'}</li>
              <li><strong>Code Green:</strong> {language === 'en' ? 'Missing person' : '行方不明者'}</li>
              <li><strong>Code Yellow:</strong> {language === 'en' ? 'Security threat' : 'セキュリティ脅威'}</li>
              <li><strong>Code Black:</strong> {language === 'en' ? 'Severe weather' : '悪天候'}</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Staff Areas & Resources' : 'スタッフエリア＆リソース'}
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Staff HQ' : 'スタッフ本部'}
            </h3>
            <p>
              {language === 'en'
                ? 'Located at the northwest corner of the park. This is where you can find the event management team, take breaks, and access staff resources.'
                : '公園の北西の角に位置しています。ここではイベント管理チームを見つけたり、休憩を取ったり、スタッフリソースにアクセスしたりできます。'}
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Staff Meals' : 'スタッフ食事'}
            </h3>
            <p>
              {language === 'en'
                ? 'Meals will be provided in the Staff Catering Tent adjacent to Staff HQ. Meal times are staggered by department to ensure coverage.'
                : '食事はスタッフ本部に隣接するスタッフケータリングテントで提供されます。食事時間は部門ごとに段階的に設定され、カバレッジを確保します。'}
            </p>
            <ul className="list-disc pl-6">
              <li><strong>{language === 'en' ? 'Lunch:' : 'ランチ：'}</strong> 11:00 AM - 2:00 PM</li>
              <li><strong>{language === 'en' ? 'Dinner:' : 'ディナー：'}</strong> 5:00 PM - 8:00 PM</li>
              <li><strong>{language === 'en' ? 'Late Night:' : '深夜：'}</strong> 10:00 PM - 12:00 AM</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Break Schedule' : '休憩スケジュール'}
            </h3>
            <p>
              {language === 'en'
                ? 'All staff are entitled to a 30-minute meal break and two 15-minute rest breaks during their shift. Breaks should be coordinated with your supervisor to ensure adequate coverage.'
                : 'すべてのスタッフは、シフト中に30分の食事休憩と15分の休憩を2回取る権利があります。休憩は十分なカバレッジを確保するために上司と調整する必要があります。'}
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Emergency Procedures' : '緊急時の手順'}
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Medical Emergencies' : '医療緊急事態'}
            </h3>
            <ol className="list-decimal pl-6">
              <li>{language === 'en' ? 'Assess the situation and ensure your own safety' : '状況を評価し、自分自身の安全を確保する'}</li>
              <li>{language === 'en' ? 'Radio "Code Blue" to Channel 1 with your location and nature of emergency' : '「コードブルー」をチャンネル1に無線で伝え、場所と緊急事態の性質を伝える'}</li>
              <li>{language === 'en' ? 'Stay with the patient until medical staff arrives' : '医療スタッフが到着するまで患者と一緒にいる'}</li>
              <li>{language === 'en' ? 'Do not move the patient unless they are in immediate danger' : '患者が差し迫った危険にさらされていない限り、患者を動かさない'}</li>
              <li>{language === 'en' ? 'Medical stations are located at the Main Stage, VIP Area, and near the main entrance' : '医療ステーションはメインステージ、VIPエリア、メイン入口付近にあります'}</li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Evacuation Procedures' : '避難手順'}
            </h3>
            <ol className="list-decimal pl-6">
              <li>{language === 'en' ? 'If evacuation is ordered, an announcement will be made from all stages and via radio' : '避難が命じられた場合、すべてのステージと無線を通じてアナウンスが行われます'}</li>
              <li>{language === 'en' ? 'Direct attendees to the nearest exit in a calm, orderly manner' : '落ち着いた秩序ある方法で参加者を最寄りの出口に誘導する'}</li>
              <li>{language === 'en' ? 'Primary evacuation routes are marked with illuminated green signs' : '主要避難経路は照明付きの緑色の標識で示されています'}</li>
              <li>{language === 'en' ? 'Staff assembly point is the parking lot across Ala Moana Blvd' : 'スタッフ集合場所はアラモアナ通りを渡った駐車場です'}</li>
              <li>{language === 'en' ? 'Department heads will conduct roll call at assembly points' : '部門長は集合場所で点呼を行います'}</li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Weather Emergencies' : '気象緊急事態'}
            </h3>
            <p>
              {language === 'en'
                ? 'In case of severe weather (Code Black), follow these procedures:'
                : '悪天候（コードブラック）の場合は、次の手順に従ってください：'}
            </p>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'Lightning: If lightning is detected within 8 miles, stages will temporarily shut down' : '雷：8マイル以内で雷が検出された場合、ステージは一時的に停止します'}</li>
              <li>{language === 'en' ? 'High Winds: If sustained winds exceed 35 mph, tall structures and installations will be secured or lowered' : '強風：持続的な風速が時速35マイルを超える場合、高い構造物や設置物は固定または下げられます'}</li>
              <li>{language === 'en' ? 'Heavy Rain: Covered areas will be opened for attendee shelter' : '大雨：参加者の避難所として覆われたエリアが開放されます'}</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Code of Conduct' : '行動規範'}
        </h2>
        <div className="space-y-4">
          <p>
            {language === 'en'
              ? 'All staff are expected to uphold the highest standards of professionalism and represent ZAMNA Hawaii in a positive manner at all times.'
              : 'すべてのスタッフは、常に最高レベルのプロフェッショナリズムを維持し、ZAMNA Hawaiiを前向きな方法で代表することが期待されています。'}
          </p>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'General Expectations' : '一般的な期待'}
            </h3>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'Arrive on time for all shifts' : 'すべてのシフトに時間通りに到着する'}</li>
              <li>{language === 'en' ? 'Wear appropriate uniform/credentials at all times' : '常に適切なユニフォーム/認証を着用する'}</li>
              <li>{language === 'en' ? 'Maintain a positive, helpful attitude' : '前向きで役立つ態度を維持する'}</li>
              <li>{language === 'en' ? 'No consumption of alcohol or drugs before or during shifts' : 'シフト前または中のアルコールや薬物の摂取は禁止'}</li>
              <li>{language === 'en' ? 'Respect the privacy of artists and VIP guests' : 'アーティストやVIPゲストのプライバシーを尊重する'}</li>
              <li>{language === 'en' ? 'No posting on social media while on duty' : '勤務中のソーシャルメディアへの投稿は禁止'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Interacting with Attendees' : '参加者との交流'}
            </h3>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'Be courteous and helpful at all times' : '常に礼儀正しく役立つ'}</li>
              <li>{language === 'en' ? 'Direct questions you cannot answer to the Information Booths' : '答えられない質問はインフォメーションブースに案内する'}</li>
              <li>{language === 'en' ? 'Never argue with attendees; escalate issues to supervisors' : '参加者と決して議論しない；問題は上司にエスカレーションする'}</li>
              <li>{language === 'en' ? 'Be knowledgeable about event layout, schedules, and amenities' : 'イベントのレイアウト、スケジュール、アメニティについて知識を持つ'}</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Important Contacts' : '重要な連絡先'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              {language === 'en' ? 'Event Management' : 'イベント管理'}
            </h3>
            <ul className="space-y-1">
              <li><strong>{language === 'en' ? 'Event Director:' : 'イベントディレクター：'}</strong> Yuki Hamada (808-555-1234)</li>
              <li><strong>{language === 'en' ? 'Operations Manager:' : '運営マネージャー：'}</strong> Ryozo Murata (808-555-2345)</li>
              <li><strong>{language === 'en' ? 'Production Manager:' : 'プロダクションマネージャー：'}</strong> Jane Smith (808-555-3456)</li>
            </ul>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              {language === 'en' ? 'Emergency Services' : '緊急サービス'}
            </h3>
            <ul className="space-y-1">
              <li><strong>{language === 'en' ? 'Security Director:' : 'セキュリティディレクター：'}</strong> Michael Wong (808-555-4567)</li>
              <li><strong>{language === 'en' ? 'Medical Director:' : '医療ディレクター：'}</strong> Dr. Sarah Johnson (808-555-5678)</li>
              <li><strong>{language === 'en' ? 'Fire Safety Officer:' : '防火安全責任者：'}</strong> Robert Kealoha (808-555-6789)</li>
            </ul>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              {language === 'en' ? 'External Emergency' : '外部緊急'}
            </h3>
            <ul className="space-y-1">
              <li><strong>{language === 'en' ? 'All Emergencies:' : 'すべての緊急事態：'}</strong> 911</li>
              <li><strong>{language === 'en' ? 'Honolulu Police:' : 'ホノルル警察：'}</strong> (808) 529-3111</li>
              <li><strong>{language === 'en' ? 'Poison Control:' : '中毒管理：'}</strong> (800) 222-1222</li>
            </ul>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              {language === 'en' ? 'Staff Support' : 'スタッフサポート'}
            </h3>
            <ul className="space-y-1">
              <li><strong>{language === 'en' ? 'Staff Coordinator:' : 'スタッフコーディネーター：'}</strong> Lisa Nakamura (808-555-7890)</li>
              <li><strong>{language === 'en' ? 'Volunteer Manager:' : 'ボランティアマネージャー：'}</strong> David Chen (808-555-8901)</li>
              <li><strong>{language === 'en' ? 'Staff Wellness:' : 'スタッフウェルネス：'}</strong> Maria Gonzalez (808-555-9012)</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Post-Event Procedures' : 'イベント後の手順'}
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Check-Out Process' : 'チェックアウトプロセス'}
            </h3>
            <ol className="list-decimal pl-6">
              <li>{language === 'en' ? 'Return all equipment (radios, credentials, uniforms) to Staff HQ' : 'すべての機器（無線、認証、ユニフォーム）をスタッフ本部に返却する'}</li>
              <li>{language === 'en' ? 'Complete any required incident reports or documentation' : '必要なインシデントレポートまたは文書を完成させる'}</li>
              <li>{language === 'en' ? 'Sign out with your department supervisor' : '部門の上司とサインアウトする'}</li>
              <li>{language === 'en' ? 'Collect any personal belongings from secure storage' : '安全な保管場所から個人の持ち物を回収する'}</li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Breakdown Schedule' : '撤収スケジュール'}
            </h3>
            <p>
              {language === 'en'
                ? 'If you are assigned to breakdown duties, please report to your supervisor at the following times:'
                : '撤収作業に割り当てられている場合は、次の時間に上司に報告してください：'}
            </p>
            <ul className="list-disc pl-6">
              <li><strong>{language === 'en' ? 'Immediate Breakdown:' : '即時撤収：'}</strong> 10:00 PM - 2:00 AM</li>
              <li><strong>{language === 'en' ? 'Day After Breakdown:' : '翌日撤収：'}</strong> 8:00 AM - 5:00 PM</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Feedback & Debrief' : 'フィードバック＆デブリーフ'}
            </h3>
            <p>
              {language === 'en'
                ? 'All staff are encouraged to participate in post-event feedback sessions. Department debriefs will be scheduled within one week after the event.'
                : 'すべてのスタッフはイベント後のフィードバックセッションに参加することが奨励されています。部門のデブリーフはイベント後1週間以内にスケジュールされます。'}
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Acknowledgment' : '確認'}
        </h2>
        <p>
          {language === 'en'
            ? 'By accepting your role at ZAMNA Hawaii 2026, you acknowledge that you have read, understood, and agree to follow the guidelines in this handbook. We appreciate your commitment to making this event a success!'
            : 'ZAMNA Hawaii 2026でのあなたの役割を受け入れることにより、あなたはこのハンドブックのガイドラインを読み、理解し、従うことに同意したことを認めます。このイベントを成功させるためのあなたの取り組みに感謝します！'}
        </p>
        <div className="mt-6 p-4 border border-gray-600 rounded-lg">
          <p className="text-center italic">
            {language === 'en'
              ? 'For questions or clarifications about any information in this handbook, please contact the Staff Coordinator at staff@zamnahawaii.com or (808) 555-7890.'
              : 'このハンドブックの情報に関する質問や明確化については、スタッフコーディネーターにstaff@zamnahawaii.comまたは(808) 555-7890までお問い合わせください。'}
          </p>
        </div>
      </section>
    </div>
  );
}