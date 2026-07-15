import Navbar from "@/components/layout/Navbar";
import Achievements from "@/components/achievements/Achievements";

export default function AchievementsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <Achievements />
      </main>
    </>
  );
}