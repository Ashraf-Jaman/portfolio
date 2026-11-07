import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
  strokeWidth?: number | string;
};

function Icon({ children, size = 18, strokeWidth = 1.8, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

export const ArrowUpRight = (props: IconProps) => <Icon {...props}><path d="M7 17 17 7" /><path d="M7 7h10v10" /></Icon>;
export const Code2 = (props: IconProps) => <Icon {...props}><path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16" /></Icon>;
export const FileText = (props: IconProps) => <Icon {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 13h8M8 17h6" /></Icon>;
export const FolderKanban = (props: IconProps) => <Icon {...props}><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /><path d="M8 13v3M12 11v5M16 14v2" /></Icon>;
export const Github = (props: IconProps) => <Icon {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.7-1.6 6.7-7A5.5 5.5 0 0 0 19.2 3.7 5.1 5.1 0 0 0 19.1 0S17.9-.4 15 1.5a13.4 13.4 0 0 0-6 0C6.1-.4 4.9 0 4.9 0a5.1 5.1 0 0 0-.1 3.7A5.5 5.5 0 0 0 3.3 7.5c0 5.4 3.4 6.6 6.7 7A4.8 4.8 0 0 0 9 18v4" /><path d="M9 18c-4.5 2-5-2-7-2" /></Icon>;
export const House = (props: IconProps) => <Icon {...props}><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9M9 20v-6h6v6" /></Icon>;
export const Linkedin = (props: IconProps) => <Icon {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></Icon>;
export const Mail = (props: IconProps) => <Icon {...props}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-10 6L2 7" /></Icon>;
export const Sparkles = (props: IconProps) => <Icon {...props}><path d="m12 3-1.5 5.5L5 10l5.5 1.5L12 17l1.5-5.5L19 10l-5.5-1.5Z" /><path d="m19 16-.6 2.4L16 19l2.4.6L19 22l.6-2.4L22 19l-2.4-.6Z" /></Icon>;
export const Whatsapp = (props: IconProps) => <Icon {...props}><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" /><path d="M8.5 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.5.6c.7 1.2 1.6 2 2.8 2.5l.5-.6c.2-.2.4-.3.7-.2l1.4.6c.3.1.4.3.4.6v.5c0 .3-.1.5-.4.7-.5.3-1.1.4-1.7.2-2.7-.7-5-2.9-5.9-5.5-.2-.5-.1-1.1.1-1.5Z" /></Icon>;
export const Wrench = (props: IconProps) => <Icon {...props}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18a2.1 2.1 0 1 0 3 3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5Z" /></Icon>;
