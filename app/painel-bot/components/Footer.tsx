export default function Footer(){ 
  return (
    <footer style={{marginTop:36, paddingTop:12, borderTop:'1px solid rgba(255,255,255,0.03)'}}>
      <div className="small">© {new Date().getFullYear()} Bots Zone • Pro Evolution</div>
    </footer>
  );
}
