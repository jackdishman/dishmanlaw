import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopHeader from "./components/TopHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Dishman Law",
	description: "Boston, MA",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<TopHeader />
				<main className="">{children}</main>
			</body>
		</html>
	);
}
