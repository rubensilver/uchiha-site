'use client';

import { useState } from 'react';

export default function Deploy() {
  const [msg, setMsg] = useState('');

  async function upload(e: any) {
    const f = e.target.files[0];
    const fd = new FormData();
    fd.append('file', f);

    const res = await fetch('/api/painel-bot/deploy', {
      method: 'POST',
      body: fd,
    });

    const data = await res.json();
    setMsg(data.message || data.error);
  }

  return (
    <div>
      <h1>Deploy / Upload</h1>
      <div className="card">
        <input type="file" onChange={upload} />
        {msg && <p className="small">{msg}</p>}
      </div>
    </div>
  );
}
