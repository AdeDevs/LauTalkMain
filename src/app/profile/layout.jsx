// app/profile/layout.jsx
// import ProfileSidebar from "@/components/ProfileSidebar";

export default function ProfileLayout({ children }) {
  return (
    <div className="flex h-full">
      {/* Left: Profile menu */}
      <h1>constant profile</h1>

      {/* Right: changing content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
