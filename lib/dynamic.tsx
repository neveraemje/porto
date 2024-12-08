// components/DynamicColorPreview.tsx
"use client"  // Ensure this is a client-side component

import dynamic from 'next/dynamic';
import colorsData from "@/lib/oklch.json";
// Dynamically import ColorPreview with SSR disabled
const ColorPreview = dynamic(() => import('@/lib/colorPreview'), { ssr: false });

const DynamicColorPreview = () => {
  return <ColorPreview data={colorsData} />;
};

export default DynamicColorPreview;
