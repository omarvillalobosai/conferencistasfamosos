import { createClient } from 'npm:@supabase/supabase-js@2';
Deno.serve(async(req:Request)=>{
 const reply=(body:unknown,status=200)=>new Response(JSON.stringify(body),{status,headers:{'Content-Type':'application/json','Cache-Control':'no-store'}});
 if(req.method!=='GET') return reply({error:'Method not allowed'},405);
 const key=req.headers.get('x-omv-observer-key');
 if(!key || key.length>256) return reply({error:'Unauthorized'},401);
 const db=createClient(Deno.env.get('SUPABASE_URL')!,Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);
 try {
  const auth=await db.rpc('confamosos_observer_authorized',{p_key:key});
  if(auth.error || auth.data!==true) return reply({error:'Unauthorized'},401);
  const observed_at=new Date().toISOString();
  const result=await db.rpc('confamosos_supervision_snapshot');
  if(result.error || !result.data) return reply({error:'Observation unavailable'},503);
  return reply({schema_version:1,source:'conferencistasfamosos.com',observed_at,...result.data,funnel_control:false});
 } catch {return reply({error:'Observation unavailable'},503);}
});
