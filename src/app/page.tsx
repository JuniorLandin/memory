import CollectionMemory from "@/components/ColectionMemory";
import Header from "@/components/Layout/Header";
import ThanksComponent from "@/components/ThanksComponent/inde";
import YearComponent from "@/components/YearComponent";

export default function Home() {
  return (
    <div className="h-full">
      <Header />

      <div className="flex justify-center h-full w-full bg-primary-150">
        <div className="flex flex-col h-full w-full max-w-7xl mt-20">
          <div id="year">
            <YearComponent />
          </div>
          <div className="border-t border-primary-100 mt-20"></div>
          <div id="collection">
            <CollectionMemory />
          </div>
          <div className="border-t border-primary-100 mt-20"></div>
          <div id="thanks">
            <ThanksComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
