import React from "react";
import Image from "next/image";

export default function TopHeader() {
	return (
		<div className="px-2 sm:px-5 border h-20 w-full fixed top-0 grid grid-cols-3 bg-[#e4dac4] z-40">
			<div className="flex justify-center sm:justify-start items-center order-2 sm:order-1">
				<Image src="/logo.png" alt="Logo" width={64} height={64} />
			</div>
			<h1 className="text-lg sm:text-2xl font-semibold text-center order-1 sm:order-2 self-center">
				Dishman Law<span className="hidden sm:inline"> | PC </span>
			</h1>
			<a
				href="tel:6175235252"
				className="underline italic text-end order-3 self-center">
				<span className="hidden sm:inline">Call: </span>
				617-523-5252
			</a>
		</div>
	);
}
