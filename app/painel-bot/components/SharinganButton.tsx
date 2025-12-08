'use client';
export default function SharinganButton({onClick}:{onClick?:()=>void}){
  return <button onClick={onClick} title="Sharingan" className="sharingan detach" />;
}
