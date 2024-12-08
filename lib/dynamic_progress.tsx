// components/DynamicColorPreview.tsx
"use client"  // Ensure this is a client-side component

import dynamic from 'next/dynamic';

// Dynamically import ColorPreview with SSR disabled
const PostProgress = dynamic(() => import('@/lib/postProgress'), { ssr: false });

const DynamicProgressPreview = ({ post = {} }: { post?: any }) => {
    return <PostProgress post={post} />;
  };

export default DynamicProgressPreview;
