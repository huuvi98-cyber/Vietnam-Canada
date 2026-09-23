import { Handshake } from 'lucide-react';
import { RunningText } from './RunningText';

export function PoliticalSection() {
  return (
    <section className="relative my-10 max-w-4xl mx-auto px-4">
      {/* Section Header */}
      <div className="relative mb-8 text-center">
        <div className="relative bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 text-white py-4 px-6 rounded-2xl shadow-lg border-2 border-white/50">
          <div className="flex items-center justify-center mb-2.5">
            <div className="p-2 sm:p-2.5 rounded-full bg-white/25 backdrop-blur-xs border border-white/60 shadow-xs">
              <Handshake className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-100 drop-shadow-xs" />
            </div>
          </div>
          <h2 className="relative text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight leading-snug text-white drop-shadow-sm max-w-2xl mx-auto">
            <RunningText text="HỘI TỤ ĐIỀU KIỆN THUẬN LỢI ĐỂ BƯỚC SANG GIAI ĐOẠN HỢP TÁC SÂU SẮC VÀ THỰC CHẤT HƠN" delay={0.15} />
          </h2>
        </div>
      </div>

      {/* Cards with Content */}
      <div className="space-y-6">
        {/* Card 1: 1973 milestone */}
        <div className="relative bg-white rounded-2xl p-5 sm:p-6 shadow-md border-l-[12px] sm:border-l-[14px] border-l-sky-500 border-slate-100 hover:shadow-lg transition-shadow">
          <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed">
            Việt Nam và Canada thiết lập quan hệ ngoại giao vào năm <span className="text-xl sm:text-2xl font-normal text-sky-600 mx-0.5 inline-block">1973</span>.
          </p>
        </div>

        {/* Card 2: 11-2017 & 7 cooperation pillars */}
        <div className="relative bg-slate-100/80 rounded-2xl p-5 sm:p-6 shadow-md border-l-[12px] sm:border-l-[14px] border-l-blue-600 border-slate-200/90 hover:shadow-lg transition-shadow">
          <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed">
            Tháng <span className="text-xl sm:text-2xl font-normal text-blue-600 mx-0.5 inline-block">11-2017</span>, hai nước xác lập khuôn khổ quan hệ Đối tác toàn diện, đề ra các nguyên
            tắc cơ bản định hướng cho quan hệ song phương, tập trung vào các lĩnh vực hợp tác:
            chính trị - ngoại giao, thương mại - đầu tư, quốc phòng - an
            ninh, văn hóa - giáo dục, khoa học - công nghệ, giao lưu nhân dân.
          </p>
        </div>

        {/* Card 3: Vietnam's perspective */}
        <div className="relative bg-white rounded-2xl p-5 sm:p-6 shadow-md border-l-[12px] sm:border-l-[14px] border-l-red-500 border-slate-100 hover:shadow-lg transition-shadow">
          <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed">
            Việt Nam luôn coi trọng quan hệ Đối tác toàn diện với Canada và sẵn sàng cùng Canada
            mở rộng, tăng cường hợp tác thực chất, hướng tới sớm nâng cấp khuôn khổ quan hệ.
          </p>
        </div>

        {/* Card 4: Canada's perspective */}
        <div className="relative bg-slate-100/80 rounded-2xl p-5 sm:p-6 shadow-md border-l-[12px] sm:border-l-[14px] border-l-rose-600 border-slate-200/90 hover:shadow-lg transition-shadow">
          <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed">
            Canada coi Việt Nam là một đối tác quan trọng ở ASEAN và Ấn Độ Dương - Thái Bình
            Dương, có vai trò, vị thế ngày càng tăng trên trường quốc tế.
          </p>
        </div>
      </div>
    </section>
  );
}
