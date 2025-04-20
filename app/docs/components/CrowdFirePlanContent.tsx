'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';

export default function CrowdFirePlanContent() {
  const { language } = useLanguage();

  return (
    <div className="space-y-8 prose prose-invert max-w-none">
      <div className="bg-gradient-to-r from-orange-800/70 to-red-700/70 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {language === 'en' ? 'ZAMNA HAWAII 2026 CROWD & FIRE SAFETY PLAN' : 'ZAMNA HAWAII 2026 群衆・消防安全計画'}
        </h1>
        <p className="text-center text-lg opacity-90">
          {language === 'en' 
            ? 'Prepared for Honolulu Fire Department & HCDA' 
            : 'ホノルル消防署・HCDAへの提出用'}
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Event Overview' : 'イベント概要'}
        </h2>
        <ul className="space-y-2">
          <li><strong>{language === 'en' ? 'Event Name:' : 'イベント名：'}</strong> ZAMNA Hawaii 2026</li>
          <li><strong>{language === 'en' ? 'Date:' : '日付：'}</strong> {language === 'en' ? 'October 3, 2026 (Backup: October 4, 2026)' : '2026年10月3日（予備日：2026年10月4日）'}</li>
          <li><strong>{language === 'en' ? 'Hours:' : '時間：'}</strong> {language === 'en' ? '2:00 PM - 10:00 PM' : '午後2時〜午後10時'}</li>
          <li><strong>{language === 'en' ? 'Location:' : '場所：'}</strong> {language === 'en' ? 'Kakaʻako Waterfront Park, Honolulu, Hawaii' : 'カカアコ・ウォーターフロント・パーク、ホノルル、ハワイ'}</li>
          <li><strong>{language === 'en' ? 'Expected Attendance:' : '予想来場者数：'}</strong> 5,000</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Crowd Management Plan' : '群衆管理計画'}
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Venue Capacity & Flow' : '会場収容力と流れ'}
            </h3>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'Total venue capacity: 7,500 (maintaining 67% occupancy for comfort and safety)' : '総会場収容力：7,500人（快適さと安全のために67％の占有率を維持）'}</li>
              <li>{language === 'en' ? 'Main stage area capacity: 3,500' : 'メインステージエリア収容力：3,500人'}</li>
              <li>{language === 'en' ? 'Secondary stage area capacity: 1,500' : 'セカンダリステージエリア収容力：1,500人'}</li>
              <li>{language === 'en' ? 'VIP area capacity: 500' : 'VIPエリア収容力：500人'}</li>
              <li>{language === 'en' ? 'Food & beverage area capacity: 1,000' : 'フード＆ドリンクエリア収容力：1,000人'}</li>
              <li>{language === 'en' ? 'Rest areas and circulation space: 1,500' : '休憩エリアと循環スペース：1,500人'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Entrance & Exit Management' : '入退場管理'}
            </h3>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'Main entrance: Located on Ilalo Street with 8 entry lanes' : 'メイン入口：イラロ・ストリートに位置し、8つの入場レーンを設置'}</li>
              <li>{language === 'en' ? 'Secondary entrance: Located on Cooke Street with 4 entry lanes' : 'セカンダリ入口：クック・ストリートに位置し、4つの入場レーンを設置'}</li>
              <li>{language === 'en' ? 'VIP entrance: Dedicated entrance on Ilalo Street with 2 entry lanes' : 'VIP入口：イラロ・ストリートに専用入口を設け、2つの入場レーンを設置'}</li>
              <li>{language === 'en' ? 'Emergency exits: 6 additional emergency exit points around the perimeter' : '非常口：周囲に6つの追加非常口を設置'}</li>
              <li>{language === 'en' ? 'All exits will be clearly marked with illuminated signage' : 'すべての出口は照明付き標識で明確に表示'}</li>
              <li>{language === 'en' ? 'Entry rate: Designed to process 1,500 attendees per hour' : '入場率：1時間あたり1,500人の参加者を処理するよう設計'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Crowd Density Management' : '群衆密度管理'}
            </h3>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'Target density: Maximum 2.5 persons per square meter in main stage area' : '目標密度：メインステージエリアでは1平方メートルあたり最大2.5人'}</li>
              <li>{language === 'en' ? 'Crowd monitoring: 4 elevated observation points with dedicated staff' : '群衆モニタリング：専任スタッフを配置した4つの高所観測ポイント'}</li>
              <li>{language === 'en' ? 'Real-time counting: Electronic counters at all entrances and exits' : 'リアルタイムカウント：すべての入口と出口に電子カウンターを設置'}</li>
              <li>{language === 'en' ? 'Density control: Barriers and staff positioned to prevent overcrowding in specific areas' : '密度制御：特定のエリアでの過密を防ぐためのバリアとスタッフの配置'}</li>
              <li>{language === 'en' ? 'One-way systems implemented in high-traffic areas' : '交通量の多いエリアでは一方通行システムを実施'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Crowd Management Staffing' : '群衆管理スタッフ配置'}
            </h3>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'Crowd management supervisor: 1' : '群衆管理スーパーバイザー：1名'}</li>
              <li>{language === 'en' ? 'Area supervisors: 4' : 'エリアスーパーバイザー：4名'}</li>
              <li>{language === 'en' ? 'Entrance staff: 24' : '入口スタッフ：24名'}</li>
              <li>{language === 'en' ? 'Stage front barriers: 16' : 'ステージ前方バリア：16名'}</li>
              <li>{language === 'en' ? 'Roaming crowd management: 12' : '巡回群衆管理：12名'}</li>
              <li>{language === 'en' ? 'Exit monitors: 8' : '出口モニター：8名'}</li>
              <li>{language === 'en' ? 'All crowd management staff will wear high-visibility vests and receive specific training' : 'すべての群衆管理スタッフは高視認性ベストを着用し、特別なトレーニングを受ける'}</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Fire Safety Plan' : '防火安全計画'}
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Fire Prevention Measures' : '火災予防対策'}
            </h3>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'All structures, tents, and stages will meet NFPA 101 and local fire codes' : 'すべての構造物、テント、ステージはNFPA 101および地域の火災コードを満たす'}</li>
              <li>{language === 'en' ? 'Flame-retardant certification for all fabric materials' : 'すべての布材料の難燃性認証'}</li>
              <li>{language === 'en' ? 'Proper spacing between structures to prevent fire spread' : '火災の拡大を防ぐための構造物間の適切な間隔'}</li>
              <li>{language === 'en' ? 'Regular inspection of electrical systems and generators' : '電気システムと発電機の定期的な検査'}</li>
              <li>{language === 'en' ? 'Designated smoking areas with proper disposal containers' : '適切な廃棄容器を備えた指定喫煙エリア'}</li>
              <li>{language === 'en' ? 'Pyrotechnic effects will be managed by licensed professionals with proper permits' : '花火効果は適切な許可を持つ免許を持つプロフェッショナルによって管理される'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Fire Response Equipment' : '火災対応機器'}
            </h3>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'Fire extinguishers (ABC type) placed throughout the venue at maximum 75-foot intervals' : '消火器（ABC型）が会場全体に最大75フィート間隔で配置'}</li>
              <li>{language === 'en' ? 'Fire extinguishers at all electrical distribution points, generators, and stage areas' : 'すべての電気配電ポイント、発電機、ステージエリアに消火器'}</li>
              <li>{language === 'en' ? 'Fire blankets at food vendor locations' : '食品ベンダーの場所に防火毛布'}</li>
              <li>{language === 'en' ? 'Access to fire hydrants kept clear at all times' : '消火栓へのアクセスは常に確保'}</li>
              <li>{language === 'en' ? 'Fire lanes maintained throughout the venue' : '会場全体に消防車線を維持'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Fire Department Coordination' : '消防署連携'}
            </h3>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'Honolulu Fire Department will conduct pre-event inspection' : 'ホノルル消防署がイベント前の検査を実施'}</li>
              <li>{language === 'en' ? 'Two fire department personnel will be on-site during the event' : 'イベント中は2名の消防署員が現場に常駐'}</li>
              <li>{language === 'en' ? 'Fire apparatus access routes clearly marked and maintained' : '消防車両のアクセス経路は明確に表示され維持される'}</li>
              <li>{language === 'en' ? 'Nearest fire station: Kakaʻako Fire Station (0.8 miles from venue)' : '最寄りの消防署：カカアコ消防署（会場から0.8マイル）'}</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Emergency Response Plan' : '緊急対応計画'}
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Emergency Evacuation Procedures' : '緊急避難手順'}
            </h3>
            <ol className="list-decimal pl-6">
              <li>{language === 'en' ? 'If evacuation is ordered, an announcement will be made from all stages and via radio' : '避難が命じられた場合、すべてのステージと無線を通じてアナウンスが行われます'}</li>
              <li>{language === 'en' ? 'All staff will direct attendees to the nearest exit in a calm, orderly manner' : 'すべてのスタッフは、落ち着いた秩序ある方法で参加者を最寄りの出口に誘導します'}</li>
              <li>{language === 'en' ? 'Primary evacuation routes are marked with illuminated green signs' : '主要避難経路は照明付きの緑色の標識で示されています'}</li>
              <li>{language === 'en' ? 'Assembly points are established at:' : '集合場所は以下に設置されています：'}
                <ul className="list-disc pl-6 mt-2">
                  <li>{language === 'en' ? 'North: Parking lot across Ilalo Street' : '北：イラロ・ストリートを渡った駐車場'}</li>
                  <li>{language === 'en' ? 'East: Open area near Cooke Street entrance' : '東：クック・ストリート入口近くのオープンエリア'}</li>
                  <li>{language === 'en' ? 'South: Gateway Park' : '南：ゲートウェイパーク'}</li>
                </ul>
              </li>
              <li>{language === 'en' ? 'Complete venue evacuation time estimated at 12 minutes' : '会場全体の避難時間は約12分と推定'}</li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Emergency Communications' : '緊急通信'}
            </h3>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'PA system with battery backup covering all areas of the venue' : 'バッテリーバックアップ付きPAシステムが会場のすべてのエリアをカバー'}</li>
              <li>{language === 'en' ? 'Emergency announcements can be made from main stage, secondary stage, and command center' : '緊急アナウンスはメインステージ、セカンダリステージ、コマンドセンターから行うことが可能'}</li>
              <li>{language === 'en' ? 'All security and crowd management staff equipped with radios' : 'すべてのセキュリティおよび群衆管理スタッフは無線機を装備'}</li>
              <li>{language === 'en' ? 'Emergency channel (Channel 1) reserved for emergency communications only' : '緊急チャンネル（チャンネル1）は緊急通信専用'}</li>
              <li>{language === 'en' ? 'Backup communication system: Cell phones with pre-programmed emergency contacts' : 'バックアップ通信システム：事前にプログラムされた緊急連絡先を持つ携帯電話'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Emergency Scenarios & Responses' : '緊急シナリオと対応'}
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-800/50 rounded-lg overflow-hidden">
                <thead className="bg-gray-700/50">
                  <tr>
                    <th className="px-4 py-2 text-left">{language === 'en' ? 'Scenario' : 'シナリオ'}</th>
                    <th className="px-4 py-2 text-left">{language === 'en' ? 'Response' : '対応'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr>
                    <td className="px-4 py-3 font-medium">{language === 'en' ? 'Fire' : '火災'}</td>
                    <td className="px-4 py-3">
                      {language === 'en' 
                        ? 'Activate fire alarm, notify fire department, evacuate affected area, deploy fire response team with extinguishers, full evacuation if necessary' 
                        : '火災警報を作動させ、消防署に通知し、影響を受けるエリアを避難させ、消火器を持った火災対応チームを配備し、必要に応じて完全避難'}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">{language === 'en' ? 'Medical Emergency' : '医療緊急事態'}</td>
                    <td className="px-4 py-3">
                      {language === 'en' 
                        ? 'Deploy medical team to location, clear area around patient, establish treatment zone, transport to medical tent or hospital as needed' 
                        : '医療チームを現場に配備し、患者の周囲のエリアを確保し、治療ゾーンを設置し、必要に応じて医療テントまたは病院に搬送'}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">{language === 'en' ? 'Severe Weather' : '悪天候'}</td>
                    <td className="px-4 py-3">
                      {language === 'en' 
                        ? 'Monitor weather conditions, secure loose equipment, direct attendees to covered areas, suspend operations if conditions worsen, evacuate if necessary' 
                        : '気象条件を監視し、緩んだ機器を固定し、参加者を覆われたエリアに誘導し、状況が悪化した場合は運営を中断し、必要に応じて避難'}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">{language === 'en' ? 'Crowd Surge' : '群衆の殺到'}</td>
                    <td className="px-4 py-3">
                      {language === 'en' 
                        ? 'Deploy additional staff to affected area, open additional exit points, reduce crowd density, pause entertainment if necessary, make calming announcements' 
                        : '影響を受けるエリアに追加スタッフを配備し、追加の出口ポイントを開き、群衆密度を減らし、必要に応じてエンターテイメントを一時停止し、落ち着かせるアナウンスを行う'}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">{language === 'en' ? 'Power Failure' : '停電'}</td>
                    <td className="px-4 py-3">
                      {language === 'en' 
                        ? 'Activate backup generators, deploy emergency lighting, maintain calm, continue operations if safe to do so' 
                        : 'バックアップ発電機を作動させ、非常灯を配備し、冷静さを維持し、安全であれば運営を継続'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Contact Information' : '連絡先情報'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              {language === 'en' ? 'Event Management' : 'イベント管理'}
            </h3>
            <ul className="space-y-1">
              <li><strong>{language === 'en' ? 'Event Director:' : 'イベントディレクター：'}</strong> Yuki Hamada (808-555-1234)</li>
              <li><strong>{language === 'en' ? 'Operations Manager:' : '運営マネージャー：'}</strong> Ryozo Murata (808-555-2345)</li>
              <li><strong>{language === 'en' ? 'Safety Director:' : '安全ディレクター：'}</strong> Michael Wong (808-555-4567)</li>
            </ul>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              {language === 'en' ? 'Emergency Services' : '緊急サービス'}
            </h3>
            <ul className="space-y-1">
              <li><strong>{language === 'en' ? 'Fire Safety Officer:' : '防火安全責任者：'}</strong> Robert Kealoha (808-555-6789)</li>
              <li><strong>{language === 'en' ? 'Medical Director:' : '医療ディレクター：'}</strong> Dr. Sarah Johnson (808-555-5678)</li>
              <li><strong>{language === 'en' ? 'Crowd Management Supervisor:' : '群衆管理スーパーバイザー：'}</strong> Lisa Chen (808-555-7890)</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Approval & Certification' : '承認と認証'}
        </h2>
        <div className="space-y-4">
          <p>
            {language === 'en'
              ? 'This Crowd & Fire Safety Plan has been reviewed and approved by the following authorities:'
              : 'この群衆・消防安全計画は、以下の当局によって審査・承認されています：'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="border border-gray-700 rounded-lg p-6">
              <div className="text-center mb-4">
                <div className="text-lg font-semibold">{language === 'en' ? 'Honolulu Fire Department' : 'ホノルル消防署'}</div>
                <div className="text-sm text-gray-400">{language === 'en' ? 'Fire Prevention Bureau' : '火災予防局'}</div>
              </div>
              <div className="h-16 border-b border-dashed border-gray-600 mb-2"></div>
              <div className="text-sm text-center text-gray-400">{language === 'en' ? 'Signature & Date' : '署名と日付'}</div>
            </div>
            
            <div className="border border-gray-700 rounded-lg p-6">
              <div className="text-center mb-4">
                <div className="text-lg font-semibold">{language === 'en' ? 'Event Organizer' : 'イベント主催者'}</div>
                <div className="text-sm text-gray-400">ZAMNA Hawaii</div>
              </div>
              <div className="h-16 border-b border-dashed border-gray-600 mb-2"></div>
              <div className="text-sm text-center text-gray-400">{language === 'en' ? 'Signature & Date' : '署名と日付'}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}