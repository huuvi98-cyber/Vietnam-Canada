import { VietnamFlag } from './Flags';
import { TrendingUp } from 'lucide-react';
import { AnimatedNumber } from './AnimatedNumber';
import { RunningText } from './RunningText';

export function EconomicSection() {
  return (
    <section className="relative my-10 max-w-4xl mx-auto px-4">
      {/* Section Header */}
      <div className="relative mb-8 text-center">
        <div className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 text-white py-4 px-6 rounded-2xl shadow-lg border border-blue-400/30">
          <div className="flex items-center justify-center mb-2.5">
            <div className="p-2 sm:p-2.5 rounded-full bg-white/20 backdrop-blur-xs border border-white/25 shadow-xs">
              <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-xs" />
            </div>
          </div>
          <h2 className="relative text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight leading-[1.15] sm:leading-[1.2] drop-shadow-xs max-w-2xl mx-auto overflow-hidden">
            <span className="block leading-[1.15] sm:leading-[1.2]">
              <RunningText text="GẶT HÁI NHIỀU THÀNH QUẢ TÍCH CỰC," delay={0.05} />
            </span>
            <span className="block leading-[1.15] sm:leading-[1.2] mt-0">
              <RunningText text="KINH TẾ LÀ ĐIỂM SÁNG NỔI BẬT" delay={0.35} />
            </span>
          </h2>
        </div>
      </div>

      <div className="space-y-6">
        {/* Card 1: Largest partner in ASEAN */}
        <div className="relative bg-white rounded-2xl p-5 sm:p-6 shadow-md border-l-[12px] sm:border-l-[14px] border-l-emerald-500 border-slate-100 hover:shadow-lg transition-shadow">
          <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed">
            Việt Nam là đối tác thương mại lớn nhất của Canada tại ASEAN.
          </p>
        </div>

        {/* Card 2: Top 40 partners in Indo-Pacific */}
        <div className="relative bg-slate-100/80 rounded-2xl p-5 sm:p-6 shadow-md border-l-[12px] sm:border-l-[14px] border-l-teal-500 border-slate-200/90 hover:shadow-lg transition-shadow">
          <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed">
            Việt Nam nằm trong nhóm <AnimatedNumber end={40} decimals={0} className="text-xl sm:text-2xl font-normal text-teal-600 mx-0.5 inline-block" /> đối tác thương mại hàng đầu của Canada ở khu vực Ấn Độ
            Dương - Thái Bình Dương.
          </p>
        </div>

        {/* Card 3: 2nd largest in the Americas */}
        <div className="relative bg-white rounded-2xl p-5 sm:p-6 shadow-md border-l-[12px] sm:border-l-[14px] border-l-cyan-500 border-slate-100 hover:shadow-lg transition-shadow">
          <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed">
            Canada là đối tác thương mại lớn thứ <AnimatedNumber end={2} decimals={0} className="text-xl sm:text-2xl font-normal text-cyan-600 mx-0.5 inline-block" /> của Việt Nam tại châu Mỹ.
          </p>
        </div>

        {/* Card 4: 3rd export in Americas, 7th globally */}
        <div className="relative bg-slate-100/80 rounded-2xl p-5 sm:p-6 shadow-md border-l-[12px] sm:border-l-[14px] border-l-blue-500 border-slate-200/90 hover:shadow-lg transition-shadow">
          <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed">
            Canada là đối tác xuất khẩu lớn thứ <AnimatedNumber end={3} decimals={0} className="text-xl sm:text-2xl font-normal text-blue-600 mx-0.5 inline-block" /> ở châu Mỹ và là thị trường xuất khẩu lớn thứ <AnimatedNumber end={7} decimals={0} className="text-xl sm:text-2xl font-normal text-blue-600 mx-0.5 inline-block" /> của <br /><span className="whitespace-nowrap">Việt Nam</span>.
          </p>
        </div>

        {/* Card 5: Trade volume 2025 */}
        <div className="relative bg-white rounded-2xl p-5 sm:p-6 shadow-md border-l-[12px] sm:border-l-[14px] border-l-emerald-600 border-slate-100 hover:shadow-lg transition-shadow">
          <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed mb-4">
            Năm <span className="text-xl sm:text-2xl font-normal text-emerald-600 mx-0.5 inline-block">2025</span>, xuất khẩu của Việt Nam sang Canada đạt <AnimatedNumber end={13.8} decimals={1} className="text-xl sm:text-2xl font-normal text-emerald-600 mx-0.5 inline-block" /> tỷ USD, tăng <AnimatedNumber end={28.4} decimals={1} className="text-xl sm:text-2xl font-normal text-emerald-600 mx-0.5 inline-block" />%, đưa tổng kim ngạch thương mại hai chiều lên khoảng <AnimatedNumber end={14.75} decimals={2} className="text-xl sm:text-2xl font-normal text-emerald-600 mx-0.5 inline-block" /> tỷ USD.
          </p>

          {/* Clean metric stats */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-100"
            aria-hidden="true"
          >
            {/* Total */}
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tổng kim ngạch 2025</span>
                <span className="text-xs font-medium text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                  USD
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-normal text-slate-800 tracking-tight mt-1">
                <AnimatedNumber end={14.75} decimals={2} className="text-2xl sm:text-3xl font-normal text-emerald-600" /> <span className="text-base sm:text-lg font-medium text-slate-700">tỷ USD</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full mt-2.5 overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full w-full" />
              </div>
            </div>

            {/* Export */}
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <VietnamFlag className="w-4 h-3" />
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Xuất khẩu</span>
                </div>
                <span className="text-xs font-medium text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                  +<AnimatedNumber end={28.4} decimals={1} className="font-normal text-emerald-700" />%
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-normal text-slate-800 tracking-tight mt-1">
                <AnimatedNumber end={13.8} decimals={1} className="text-2xl sm:text-3xl font-normal text-emerald-600" /> <span className="text-base sm:text-lg font-medium text-slate-700">tỷ USD</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full mt-2.5 overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full w-[94%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 6: First time surpassing 8.5B and 1B, doubled in 4 years */}
        <div className="relative bg-slate-100/80 rounded-2xl p-5 sm:p-6 shadow-md border-l-[12px] sm:border-l-[14px] border-l-amber-500 border-slate-200/90 hover:shadow-lg transition-shadow">
          <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed">
            Thương mại song phương năm <span className="text-xl sm:text-2xl font-normal text-amber-600 mx-0.5 inline-block">2025</span> đạt <AnimatedNumber end={8.6} decimals={1} className="text-xl sm:text-2xl font-normal text-amber-600 mx-0.5 inline-block" /> tỷ USD, tăng <AnimatedNumber end={18.8} decimals={1} className="text-xl sm:text-2xl font-normal text-amber-600 mx-0.5 inline-block" />%, với xuất khẩu lần đầu chạm ngưỡng <AnimatedNumber end={7.5} decimals={1} className="text-xl sm:text-2xl font-normal text-amber-600 mx-0.5 inline-block" /> tỷ USD và nhập khẩu từ Canada vượt <AnimatedNumber end={1} decimals={0} className="text-xl sm:text-2xl font-normal text-amber-600 mx-0.5 inline-block" /> tỷ USD.
          </p>
        </div>

        {/* Card 7: 2026 momentum */}
        <div className="relative bg-white rounded-2xl p-5 sm:p-6 shadow-md border-l-[12px] sm:border-l-[14px] border-l-sky-600 border-slate-100 hover:shadow-lg transition-shadow">
          <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed">
            Đà tăng trưởng tiếp tục được duy trì trong năm <span className="text-xl sm:text-2xl font-normal text-sky-600 mx-0.5 inline-block">2026</span>, khi xuất khẩu <AnimatedNumber end={4} decimals={0} className="text-xl sm:text-2xl font-normal text-sky-600 mx-0.5 inline-block" /> tháng đầu năm của <br /><span className="whitespace-nowrap">Việt Nam</span> sang Canada tăng <AnimatedNumber end={25} decimals={0} className="text-xl sm:text-2xl font-normal text-sky-600 mx-0.5 inline-block" />%.
          </p>
        </div>

        {/* Card 8: Investment: 14th largest investor, > 4.9B USD */}
        <div className="relative bg-slate-100/80 rounded-2xl p-5 sm:p-6 shadow-md border-l-[12px] sm:border-l-[14px] border-l-indigo-600 border-slate-200/90 hover:shadow-lg transition-shadow">
          <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed">
            Về đầu tư, Canada hiện là nhà đầu tư lớn thứ <AnimatedNumber end={14} decimals={0} className="text-xl sm:text-2xl font-normal text-indigo-600 mx-0.5 inline-block" /> tại Việt Nam với hơn <AnimatedNumber end={4.9} decimals={1} className="text-xl sm:text-2xl font-normal text-indigo-600 mx-0.5 inline-block" /> tỷ USD.
          </p>
        </div>
      </div>
    </section>
  );
}
