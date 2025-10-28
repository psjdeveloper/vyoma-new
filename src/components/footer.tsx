"use client";

export default function Footer() {
    return (
        <footer className="w-full bg-[#0a0f24] border-t border-blue-500/20 text-gray-400 py-6 mt-12">
            <div className="max-w-6xl mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Vyoma. All rights reserved.</p>
            </div>
        </footer>
    );
}