'use client';
import { useState } from 'react';
export default function useFetch(){ 
  const [loading,setLoading] = useState(false);
  async function call(url:string, opts?:any){
    setLoading(true);
    try { const res = await fetch(url, opts); const data = await res.json().catch(()=>null); setLoading(false); return { ok: res.ok, data, status: res.status }; }
    catch(e){ setLoading(false); return { ok:false, data:null, status:0 }; }
  }
  return { loading, call };
}
