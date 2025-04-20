'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';

export default function SecurityRosterContent() {
  const { language } = useLanguage();

  return (
    <div className="space-y-8 prose prose-invert max-w-none">
      <div className="bg-gradient-to-r from-blue-800/70 to-indigo-700/70 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {language === 'en' ? 'ZAMNA HAWAII 2026 SECURITY & MEDICAL ROSTER' : 'ZAMNA HAWAII 2026 警備・医療スタッフ名簿'}
        </h1>
        <p className="text-center text-lg opacity-90">
          {language === 'en' 
            ? 'Confidential - For Official Use Only' 
            : '機密 - 公式使用のみ'}
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Event Overview' : 'イベント概要'}
        </h2>
        <ul className="space-y-2">
          <li><strong>{language === 'en' ? 'Date:' : '日付：'}</strong> {language === 'en' ? 'October 3, 2026 (Backup: October 4, 2026)' : '2026年10月3日（予備日：2026年10月4日）'}</li>
          <li><strong>{language === 'en' ? 'Hours:' : '時間：'}</strong> {language === 'en' ? '2:00 PM - 10:00 PM (Staff hours: 6:00 AM - 12:00 AM)' : '午後2時〜午後10時（スタッフ時間：午前6時〜午前0時）'}</li>
          <li><strong>{language === 'en' ? 'Location:' : '場所：'}</strong> {language === 'en' ? 'Kakaʻako Waterfront Park, Honolulu, Hawaii' : 'カカアコ・ウォーターフロント・パーク、ホノルル、ハワイ'}</li>
          <li><strong>{language === 'en' ? 'Expected Attendance:' : '予想来場者数：'}</strong> 5,000</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Security Management Team' : 'セキュリティ管理チーム'}
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800/50 rounded-lg overflow-hidden">
            <thead className="bg-gray-700/50">
              <tr>
                <th className="px-4 py-2 text-left">{language === 'en' ? 'Position' : '役職'}</th>
                <th className="px-4 py-2 text-left">{language === 'en' ? 'Name' : '名前'}</th>
                <th className="px-4 py-2 text-left">{language === 'en' ? 'Contact' : '連絡先'}</th>
                <th className="px-4 py-2 text-left">{language === 'en' ? 'Certification' : '資格'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr>
                <td className="px-4 py-3 font-medium">{language === 'en' ? 'Security Director' : 'セキュリティディレクター'}</td>
                <td className="px-4 py-3">Michael Wong</td>
                <td className="px-4 py-3">808-555-4567</td>
                <td className="px-4 py-3">{language === 'en' ? 'CPP, Former HPD' : 'CPP、元HPD'}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">{language === 'en' ? 'Assistant Security Director' : '副セキュリティディレクター'}</td>
                <td className="px-4 py-3">David Kealoha</td>
                <td className="px-4 py-3">808-555-4568</td>
                <td className="px-4 py-3">{language === 'en' ? 'Security Management, CPO' : 'セキュリティ管理、CPO'}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">{language === 'en' ? 'Perimeter Security Lead' : '周辺セキュリティリード'}</td>
                <td className="px-4 py-3">James Tanaka</td>
                <td className="px-4 py-3">808-555-4569</td>
                <td className="px-4 py-3">{language === 'en' ? 'Security Supervisor' : 'セキュリティスーパーバイザー'}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">{language === 'en' ? 'Stage Security Lead' : 'ステージセキュリティリード'}</td>
                <td className="px-4 py-3">Sarah Miller</td>
                <td className="px-4 py-3">808-555-4570</td>
                <td className="px-4 py-3">{language === 'en' ? 'Event Security Specialist' : 'イベントセキュリティスペシャリスト'}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">{language === 'en' ? 'VIP Security Lead' : 'VIPセキュリティリード'}</td>
                <td className="px-4 py-3">Thomas Lee</td>
                <td className="px-4 py-3">808-555-4571</td>
                <td className="px-4 py-3">{language === 'en' ? 'Executive Protection' : 'エグゼクティブプロテクション'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Security Personnel Roster' : 'セキュリティ人員名簿'}
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">
              {language === 'en' ? 'Perimeter Security Team (20 Staff)' : '周辺セキュリティチーム（20名）'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800/30 p-4 rounded-lg">
                <h4 className="font-medium mb-2">{language === 'en' ? 'North Perimeter (5)' : '北周辺（5名）'}</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>John Kamaka (Lead)</li>
                  <li>Robert Patel</li>
                  <li>Michelle Kwan</li>
                  <li>Daniel Flores</li>
                  <li>Kevin Yamamoto</li>
                </ul>
              </div>
              <div className="bg-gray-800/30 p-4 rounded-lg">
                <h4 className="font-medium mb-2">{language === 'en' ? 'East Perimeter (5)' : '東周辺（5名）'}</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Lisa Chen (Lead)</li>
                  <li>Mark Johnson</li>
                  <li>Alyssa Nakamura</li>
                  <li>Brandon Kim</li>
                  <li>Tiffany Wong</li>
                </ul>
              </div>
              <div className="bg-gray-800/30 p-4 rounded-lg">
                <h4 className="font-medium mb-2">{language === 'en' ? 'South Perimeter (5)' : '南周辺（5名）'}</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Carlos Rodriguez (Lead)</li>
                  <li>Jennifer Smith</li>
                  <li>David Lee</li>
                  <li>Samantha Patel</li>
                  <li>Michael Chang</li>
                </ul>
              </div>
              <div className="bg-gray-800/30 p-4 rounded-lg">
                <h4 className="font-medium mb-2">{language === 'en' ? 'West Perimeter (5)' : '西周辺（5名）'}</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Ryan Tanaka (Lead)</li>
                  <li>Emily Wilson</li>
                  <li>Jason Nguyen</li>
                  <li>Stephanie Garcia</li>
                  <li>Andrew Kim</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">
              {language === 'en' ? 'Stage Security Team (15 Staff)' : 'ステージセキュリティチーム（15名）'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800/30 p-4 rounded-lg">
                <h4 className="font-medium mb-2">{language === 'en' ? 'Main Stage (10)' : 'メインステージ（10名）'}</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Eric Matsumoto (Lead)</li>
                  <li>Jessica Taylor</li>
                  <li>Brian Wilson</li>
                  <li>Amanda Lee</li>
                  <li>Christopher Jackson</li>
                  <li>Nicole Chen</li>
                  <li>Steven Park</li>
                  <li>Rachel Kim</li>
                  <li>Jonathan Nguyen</li>
                  <li>Melissa Wong</li>
                </ul>
              </div>
              <div className="bg-gray-800/30 p-4 rounded-lg">
                <h4 className="font-medium mb-2">{language === 'en' ? 'Secondary Stage (5)' : 'セカンダリステージ（5名）'}</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Patrick Hernandez (Lead)</li>
                  <li>Kimberly Suzuki</li>
                  <li>Alexander Martinez</li>
                  <li>Olivia Johnson</li>
                  <li>Brandon Lee</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">
              {language === 'en' ? 'Additional Security Teams (40 Staff)' : '追加セキュリティチーム（40名）'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800/30 p-4 rounded-lg">
                <h4 className="font-medium mb-2">{language === 'en' ? 'VIP Area (8)' : 'VIPエリア（8名）'}</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Victoria Chang (Lead)</li>
                  <li>Robert Johnson</li>
                  <li>Elizabeth Kim</li>
                  <li>William Chen</li>
                  <li>Sophia Martinez</li>
                  <li>Daniel Park</li>
                  <li>Natalie Wong</li>
                  <li>Anthony Garcia</li>
                </ul>
              </div>
              <div className="bg-gray-800/30 p-4 rounded-lg">
                <h4 className="font-medium mb-2">{language === 'en' ? 'Entrance/Exit Points (12)' : '入口/出口ポイント（12名）'}</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Gregory Tanaka (Lead)</li>
                  <li>Rebecca Smith</li>
                  <li>Justin Lee</li>
                  <li>Vanessa Patel</li>
                  <li>Timothy Nguyen</li>
                  <li>Lauren Wilson</li>
                  <li>Kenneth Kim</li>
                  <li>Heather Johnson</li>
                  <li>Richard Chen</li>
                  <li>Megan Garcia</li>
                  <li>Jeffrey Park</li>
                  <li>Cynthia Wong</li>
                </ul>
              </div>
              <div className="bg-gray-800/30 p-4 rounded-lg">
                <h4 className="font-medium mb-2">{language === 'en' ? 'Roaming Teams (15)' : '巡回チーム（15名）'}</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Douglas Martinez (Lead)</li>
                  <li>Christine Johnson</li>
                  <li>Peter Kim</li>
                  <li>Angela Chen</li>
                  <li>Scott Wilson</li>
                  <li>Katherine Lee</li>
                  <li>Edward Nguyen</li>
                  <li>Deborah Smith</li>
                  <li>George Tanaka</li>
                  <li>Laura Garcia</li>
                  <li>Vincent Park</li>
                  <li>Pamela Wong</li>
                  <li>Frank Johnson</li>
                  <li>Diana Kim</li>
                  <li>Harold Chen</li>
                </ul>
              </div>
              <div className="bg-gray-800/30 p-4 rounded-lg">
                <h4 className="font-medium mb-2">{language === 'en' ? 'Command Center (5)' : 'コマンドセンター（5名）'}</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Sandra Matsumoto (Lead)</li>
                  <li>Paul Wilson</li>
                  <li>Nancy Lee</li>
                  <li>Keith Johnson</li>
                  <li>Donna Kim</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Medical Team Roster' : '医療チーム名簿'}
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-3">
              {language === 'en' ? 'Medical Management' : '医療管理'}
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-800/50 rounded-lg overflow-hidden">
                <thead className="bg-gray-700/50">
                  <tr>
                    <th className="px-4 py-2 text-left">{language === 'en' ? 'Position' : '役職'}</th>
                    <th className="px-4 py-2 text-left">{language === 'en' ? 'Name' : '名前'}</th>
                    <th className="px-4 py-2 text-left">{language === 'en' ? 'Contact' : '連絡先'}</th>
                    <th className="px-4 py-2 text-left">{language === 'en' ? 'Certification' : '資格'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr>
                    <td className="px-4 py-3 font-medium">{language === 'en' ? 'Medical Director' : '医療ディレクター'}</td>
                    <td className="px-4 py-3">Dr. Sarah Johnson</td>
                    <td className="px-4 py-3">808-555-5678</td>
                    <td className="px-4 py-3">MD, Emergency Medicine</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">{language === 'en' ? 'Assistant Medical Director' : '副医療ディレクター'}</td>
                    <td className="px-4 py-3">Dr. Robert Chen</td>
                    <td className="px-4 py-3">808-555-5679</td>
                    <td className="px-4 py-3">MD, Trauma Specialist</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">{language === 'en' ? 'Medical Operations Manager' : '医療運営マネージャー'}</td>
                    <td className="px-4 py-3">Jennifer Williams, RN</td>
                    <td className="px-4 py-3">808-555-5680</td>
                    <td className="px-4 py-3">RN, Emergency Nursing</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">{language === 'en' ? 'Triage Coordinator' : 'トリアージコーディネーター'}</td>
                    <td className="px-4 py-3">Michael Thompson, PA</td>
                    <td className="px-4 py-3">808-555-5681</td>
                    <td className="px-4 py-3">PA-C, Emergency Medicine</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">
              {language === 'en' ? 'Medical Staff (16 Personnel)' : '医療スタッフ（16名）'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800/30 p-4 rounded-lg">
                <h4 className="font-medium mb-2">{language === 'en' ? 'Main Medical Tent (8)' : 'メインメディカルテント（8名）'}</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Dr. James Wilson (Physician)</li>
                  <li>Dr. Emily Chen (Physician)</li>
                  <li>Karen Martinez, RN (Nurse)</li>
                  <li>David Kim, RN (Nurse)</li>
                  <li>Jason Park, EMT-P (Paramedic)</li>
                  <li>Stephanie Lee, EMT-P (Paramedic)</li>
                  <li>Brian Johnson, EMT (EMT)</li>
                  <li>Michelle Garcia, EMT (EMT)</li>
                </ul>
              </div>
              <div className="bg-gray-800/30 p-4 rounded-lg">
                <h4 className="font-medium mb-2">{language === 'en' ? 'Secondary Medical Station (4)' : 'セカンダリメディカルステーション（4名）'}</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Lisa Wong, PA (Physician Assistant)</li>
                  <li>Thomas Nguyen, RN (Nurse)</li>
                  <li>Rebecca Smith, EMT-P (Paramedic)</li>
                  <li>Kevin Tanaka, EMT (EMT)</li>
                </ul>
              </div>
              <div className="bg-gray-800/30 p-4 rounded-lg">
                <h4 className="font-medium mb-2">{language === 'en' ? 'Roaming Medical Teams (4)' : '巡回医療チーム（4名）'}</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Team 1: Amanda Johnson, EMT-P & Carlos Rodriguez, EMT</li>
                  <li>Team 2: Nicole Chen, EMT-P & Brandon Wilson, EMT</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Shift Schedule' : 'シフトスケジュール'}
        </h2>
        <div className="space-y-4">
          <p>
            {language === 'en'
              ? 'All security and medical personnel will work in staggered shifts to ensure continuous coverage throughout the event.'
              : 'すべてのセキュリティおよび医療スタッフは、イベント全体を通して継続的なカバレッジを確保するために、段階的なシフトで勤務します。'}
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-800/50 rounded-lg overflow-hidden">
              <thead className="bg-gray-700/50">
                <tr>
                  <th className="px-4 py-2 text-left">{language === 'en' ? 'Team' : 'チーム'}</th>
                  <th className="px-4 py-2 text-left">{language === 'en' ? 'Early Shift' : '早番'}</th>
                  <th className="px-4 py-2 text-left">{language === 'en' ? 'Middle Shift' : '中番'}</th>
                  <th className="px-4 py-2 text-left">{language === 'en' ? 'Late Shift' : '遅番'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="px-4 py-3 font-medium">{language === 'en' ? 'Security Management' : 'セキュリティ管理'}</td>
                  <td className="px-4 py-3">6:00 AM - 2:00 PM</td>
                  <td className="px-4 py-3">12:00 PM - 8:00 PM</td>
                  <td className="px-4 py-3">6:00 PM - 2:00 AM</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">{language === 'en' ? 'Perimeter Security' : '周辺セキュリティ'}</td>
                  <td className="px-4 py-3">6:00 AM - 2:00 PM</td>
                  <td className="px-4 py-3">12:00 PM - 8:00 PM</td>
                  <td className="px-4 py-3">6:00 PM - 2:00 AM</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">{language === 'en' ? 'Stage Security' : 'ステージセキュリティ'}</td>
                  <td className="px-4 py-3">10:00 AM - 6:00 PM</td>
                  <td className="px-4 py-3">2:00 PM - 10:00 PM</td>
                  <td className="px-4 py-3">-</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">{language === 'en' ? 'VIP Security' : 'VIPセキュリティ'}</td>
                  <td className="px-4 py-3">10:00 AM - 6:00 PM</td>
                  <td className="px-4 py-3">2:00 PM - 10:00 PM</td>
                  <td className="px-4 py-3">-</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">{language === 'en' ? 'Entrance/Exit Security' : '入口/出口セキュリティ'}</td>
                  <td className="px-4 py-3">10:00 AM - 6:00 PM</td>
                  <td className="px-4 py-3">2:00 PM - 10:00 PM</td>
                  <td className="px-4 py-3">-</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">{language === 'en' ? 'Roaming Security' : '巡回セキュリティ'}</td>
                  <td className="px-4 py-3">10:00 AM - 6:00 PM</td>
                  <td className="px-4 py-3">2:00 PM - 10:00 PM</td>
                  <td className="px-4 py-3">-</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">{language === 'en' ? 'Medical Team' : '医療チーム'}</td>
                  <td className="px-4 py-3">10:00 AM - 6:00 PM</td>
                  <td className="px-4 py-3">2:00 PM - 10:00 PM</td>
                  <td className="px-4 py-3">6:00 PM - 12:00 AM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Certification & Verification' : '認証と検証'}
        </h2>
        <div className="space-y-4">
          <p>
            {language === 'en'
              ? 'All security and medical personnel listed in this document have been verified to have the appropriate licenses, certifications, and background checks as required by state and local regulations.'
              : 'このドキュメントに記載されているすべてのセキュリティおよび医療スタッフは、州および地方の規制で要求されている適切なライセンス、認証、および身元調査を持っていることが確認されています。'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="border border-gray-700 rounded-lg p-6">
              <div className="text-center mb-4">
                <div className="text-lg font-semibold">{language === 'en' ? 'Security Director' : 'セキュリティディレクター'}</div>
                <div className="text-sm text-gray-400">Michael Wong</div>
              </div>
              <div className="h-16 border-b border-dashed border-gray-600 mb-2"></div>
              <div className="text-sm text-center text-gray-400">{language === 'en' ? 'Signature & Date' : '署名と日付'}</div>
            </div>
            
            <div className="border border-gray-700 rounded-lg p-6">
              <div className="text-center mb-4">
                <div className="text-lg font-semibold">{language === 'en' ? 'Medical Director' : '医療ディレクター'}</div>
                <div className="text-sm text-gray-400">Dr. Sarah Johnson</div>
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