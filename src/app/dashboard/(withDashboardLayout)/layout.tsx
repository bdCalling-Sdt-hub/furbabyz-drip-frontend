import DashboardSidebar from '@/components/layout/DashboardSidebar';
import Navbar from '@/components/layout/Navbar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
      return (
            <div className="">
                  <Navbar />
                  <div className="container grid grid-cols-12 gap-4 h-[calc(100vh-130px)]">
                        <div className="col-span-2 md:col-span-3 rounded-xl  bg-[#FDF7F8] md:p-8 p-3">
                              <DashboardSidebar />
                        </div>
                        <div className="col-span-10 md:col-span-9  border rounded-xl md:p-8 p-3">{children}</div>
                  </div>
            </div>
      );
}
