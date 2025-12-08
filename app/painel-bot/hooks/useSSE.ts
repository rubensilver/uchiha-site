'use client';
import { useEffect } from 'react';
export default function useSSE(path: string, onMessage: (data:string)=>void){
  useEffect(()=>{
    const es = new EventSource(path);
    es.onmessage = (e)=> onMessage(e.data);
    es.onerror = ()=> es.close();
    return ()=> es.close();
  }, [path]);
}
